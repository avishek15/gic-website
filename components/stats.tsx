export default function StatsSection() {
    return (
        <section className="bg-background pb-16 pt-16 md:pb-20 md:pt-20">
            <div className="mx-auto max-w-5xl px-6">
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm md:text-base">
                    <div className="flex flex-col items-center gap-1">
                        <span className="text-3xl font-bold text-foreground">
                            130+
                        </span>
                        <span className="text-muted-foreground">
                            projects delivered
                        </span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <span className="text-3xl font-bold text-foreground">
                            10+
                        </span>
                        <span className="text-muted-foreground">
                            years of expertise
                        </span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <span className="text-3xl font-bold text-foreground">
                            3+
                        </span>
                        <span className="text-muted-foreground">
                            Languages Live
                        </span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <span className="text-3xl font-bold text-foreground">
                            AI-first
                        </span>
                        <span className="text-muted-foreground">approach</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
