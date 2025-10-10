import { cn } from "@/lib/utils";

export const Logo = ({
    className,
    uniColor,
}: {
    className?: string;
    uniColor?: boolean;
}) => {
    return (
        <div className={cn("flex items-center gap-2", className)}>
            <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
            >
                <rect
                    width="40"
                    height="40"
                    rx="8"
                    fill={uniColor ? "currentColor" : "url(#logo-gradient)"}
                />
                <path
                    d="M8 20C8 13.3726 13.3726 8 20 8V12C15.5817 12 12 15.5817 12 20H8Z"
                    fill="white"
                />
                <path
                    d="M20 8C26.6274 8 32 13.3726 32 20H28C28 15.5817 24.4183 12 20 12V8Z"
                    fill="white"
                    opacity="0.8"
                />
                <path
                    d="M32 20C32 26.6274 26.6274 32 20 32V28C24.4183 28 28 24.4183 28 20H32Z"
                    fill="white"
                    opacity="0.6"
                />
                <path
                    d="M20 32C13.3726 32 8 26.6274 8 20H12C12 24.4183 15.5817 28 20 28V32Z"
                    fill="white"
                    opacity="0.4"
                />
                <defs>
                    <linearGradient
                        id="logo-gradient"
                        x1="0"
                        y1="0"
                        x2="40"
                        y2="40"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#3b82f6" />
                        <stop offset="1" stopColor="#06b6d4" />
                    </linearGradient>
                </defs>
            </svg>
            <span className="text-xl font-bold">Guardian Info Consultants</span>
        </div>
    );
};

export const LogoIcon = ({
    className,
    uniColor,
}: {
    className?: string;
    uniColor?: boolean;
}) => {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("size-5", className)}
        >
            <path
                d="M3 0H5V18H3V0ZM13 0H15V18H13V0ZM18 3V5H0V3H18ZM0 15V13H18V15H0Z"
                fill={uniColor ? "currentColor" : "url(#logo-gradient)"}
            />
            <defs>
                <linearGradient
                    id="logo-gradient"
                    x1="10"
                    y1="0"
                    x2="10"
                    y2="20"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#9B99FE" />
                    <stop offset="1" stopColor="#2BC8B7" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export const LogoStroke = ({ className }: { className?: string }) => {
    return (
        <svg
            className={cn("size-7 w-7", className)}
            viewBox="0 0 71 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M61.25 1.625L70.75 1.5625C70.75 4.77083 70.25 7.79167 69.25 10.625C68.2917 13.4583 66.8958 15.9583 65.0625 18.125C63.2708 20.25 61.125 21.9375 58.625 23.1875C56.1667 24.3958 53.4583 25 50.5 25C46.875 25 43.6667 24.2708 40.875 22.8125C38.125 21.3542 35.125 19.2083 31.875 16.375C29.75 14.4167 27.7917 12.8958 26 11.8125C24.2083 10.7292 22.2708 10.1875 20.1875 10.1875C18.0625 10.1875 16.25 10.7083 14.75 11.75C13.25 12.75 12.0833 14.1875 11.25 16.0625C10.4583 17.9375 10.0625 20.1875 10.0625 22.8125L0 22.9375C0 19.6875 0.479167 16.6667 1.4375 13.875C2.4375 11.0833 3.83333 8.64583 5.625 6.5625C7.41667 4.47917 9.54167 2.875 12 1.75C14.5 0.583333 17.2292 0 20.1875 0C23.8542 0 27.1042 0.770833 29.9375 2.3125C32.8125 3.85417 35.7708 5.97917 38.8125 8.6875C41.1042 10.7708 43.1042 12.3333 44.8125 13.375C46.5625 14.375 48.4583 14.875 50.5 14.875C52.6667 14.875 54.5417 14.3125 56.125 13.1875C57.75 12.0625 59 10.5 59.875 8.5C60.7917 6.5 61.25 4.20833 61.25 1.625Z"
                fill="none"
                strokeWidth={0.5}
                stroke="currentColor"
            />
        </svg>
    );
};
