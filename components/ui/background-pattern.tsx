"use client";

import { cn } from "@/lib/utils";

interface BackgroundPatternProps {
    className?: string;
}

export function BackgroundPattern({ className }: BackgroundPatternProps) {
    return (
        <div className={cn("absolute inset-0 -z-10 h-full w-full overflow-hidden", className)}>
            <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
            <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-primary/5 to-transparent blur-3xl" />
        </div>
    );
}
