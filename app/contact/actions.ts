"use server";

import { google } from "googleapis";

interface FormFields {
    name: string;
    email: string;
    organization: string;
    region: string;
    message: string;
    consent: boolean;
}

interface ActionResult {
    success: boolean;
    message: string;
    error?: string;
}

const SHEET_NAME = "Sheet1";
const TIMESTAMP_HEADER = "Timestamp";

/**
 * Verify reCAPTCHA token with Google's API
 */
async function verifyRecaptchaToken(token: string): Promise<boolean> {
    const secretKey = process.env.GOOGLE_CAPTCHA_SECRET_KEY;

    if (!secretKey) {
        console.error("GOOGLE_CAPTCHA_SECRET_KEY is not set");
        return false;
    }

    try {
        const response = await fetch(
            "https://www.google.com/recaptcha/api/siteverify",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(token)}`,
            }
        );

        const data = await response.json();

        // Check if verification was successful and score is acceptable
        // reCAPTCHA v3 returns a score from 0.0 to 1.0 (1.0 is very likely a human)
        // Typically, scores above 0.5 are considered acceptable
        return (
            data.success === true &&
            data.score !== undefined &&
            data.score >= 0.5
        );
    } catch (error) {
        console.error("reCAPTCHA verification error:", error);
        return false;
    }
}

/**
 * Extract sheet ID from Google Sheets URL
 */
function extractSheetId(url: string): string | null {
    const match = url.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
    return match ? match[1] : null;
}

/**
 * Get or create headers for the sheet
 */
async function getOrCreateHeaders(
    sheets: ReturnType<typeof google.sheets>,
    sheetId: string,
    existingHeaders: string[],
    allFieldNames: string[]
): Promise<string[]> {
    // Handle empty sheet
    if (existingHeaders.length === 0) {
        const headers = [TIMESTAMP_HEADER, ...allFieldNames];
        await sheets.spreadsheets.values.update({
            spreadsheetId: sheetId,
            range: `${SHEET_NAME}!1:1`,
            valueInputOption: "RAW",
            requestBody: { values: [headers] },
        });
        return headers;
    }

    // Preserve existing headers and add missing ones
    const hadTimestamp = existingHeaders.includes(TIMESTAMP_HEADER);
    const headersWithoutTimestamp = existingHeaders.filter(
        (h) => h !== TIMESTAMP_HEADER
    );
    const headersToAdd = allFieldNames.filter(
        (name) => !headersWithoutTimestamp.includes(name)
    );

    if (!hadTimestamp || headersToAdd.length > 0) {
        const finalHeaders = [
            TIMESTAMP_HEADER,
            ...headersWithoutTimestamp,
            ...headersToAdd,
        ];

        await sheets.spreadsheets.values.update({
            spreadsheetId: sheetId,
            range: `${SHEET_NAME}!1:1`,
            valueInputOption: "RAW",
            requestBody: { values: [finalHeaders] },
        });
        return finalHeaders;
    }

    return [TIMESTAMP_HEADER, ...headersWithoutTimestamp];
}

/**
 * Build values array matching headers exactly
 */
function buildValuesArray(
    headers: string[],
    timestamp: string,
    fields: FormFields
): (string | number)[] {
    return headers.map((header) => {
        if (header === TIMESTAMP_HEADER) {
            return timestamp;
        }

        const fieldValue = fields[header as keyof FormFields];
        if (fieldValue !== undefined && fieldValue !== null) {
            return typeof fieldValue === "boolean"
                ? fieldValue
                    ? "Yes"
                    : "No"
                : String(fieldValue);
        }

        return "";
    });
}

/**
 * Server action to submit contact form data to Google Sheets
 */
export async function submitContactForm(
    fields: FormFields,
    recaptchaToken: string
): Promise<ActionResult> {
    try {
        // Verify reCAPTCHA token first
        if (!recaptchaToken) {
            return {
                success: false,
                message: "reCAPTCHA verification failed",
                error: "Missing reCAPTCHA token",
            };
        }

        const isRecaptchaValid = await verifyRecaptchaToken(recaptchaToken);
        if (!isRecaptchaValid) {
            return {
                success: false,
                message: "reCAPTCHA verification failed",
                error: "Please try again. If the problem persists, refresh the page.",
            };
        }

        // Validate required fields
        if (!fields.name || !fields.email || !fields.organization) {
            return {
                success: false,
                message: "Missing required fields",
                error: "Name, email, and organization are required",
            };
        }

        // Check environment variables
        const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
        const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
        const googleSheetUrl = process.env.GOOGLE_SHEET_URL;

        if (!serviceAccountEmail || !privateKey) {
            return {
                success: false,
                message: "Server configuration error",
                error: "Missing Google credentials",
            };
        }

        if (!googleSheetUrl) {
            return {
                success: false,
                message: "Server configuration error",
                error: "Missing GOOGLE_SHEET_URL environment variable",
            };
        }

        // Authenticate with Google
        const auth = new google.auth.JWT({
            email: serviceAccountEmail,
            key: privateKey,
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        // Extract sheet ID
        const sheetId = extractSheetId(googleSheetUrl);
        if (!sheetId) {
            return {
                success: false,
                message: "Invalid Google Sheet URL",
                error: "Could not extract sheet ID from URL",
            };
        }

        // Initialize Google Sheets API
        const sheets = google.sheets({ version: "v4", auth });

        // Get existing headers
        let existingHeaders: string[] = [];
        try {
            const headerResponse = await sheets.spreadsheets.values.get({
                spreadsheetId: sheetId,
                range: `${SHEET_NAME}!1:1`,
            });
            if (headerResponse.data.values?.[0]) {
                existingHeaders = headerResponse.data.values[0] as string[];
            }
        } catch {
            // Sheet might be empty, continue with empty headers
        }

        // Get all field names
        const allFieldNames = Object.keys(fields);

        // Get or create headers
        const headers = await getOrCreateHeaders(
            sheets,
            sheetId,
            existingHeaders,
            allFieldNames
        );

        // Build values array
        const timestamp = new Date().toISOString();
        const values = buildValuesArray(headers, timestamp, fields);

        // Append data row
        await sheets.spreadsheets.values.append({
            spreadsheetId: sheetId,
            range: `${SHEET_NAME}!A:Z`,
            valueInputOption: "RAW",
            requestBody: { values: [values] },
        });

        return {
            success: true,
            message: "Form submitted successfully",
        };
    } catch (error: unknown) {
        const errorMessage =
            error instanceof Error ? error.message : "Failed to submit form";
        return {
            success: false,
            message: "Failed to submit form",
            error: errorMessage,
        };
    }
}

