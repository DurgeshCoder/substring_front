"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    gradientColor?: string;
}

export function MagicCard({
    children,
    className,
    gradientColor = "#262626",
    ...props
}: MagicCardProps) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Handle hydration mismatch by only rendering interactive elements after mount
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const background = useMotionTemplate`
        radial-gradient(
            650px circle at ${mouseX}px ${mouseY}px,
            ${gradientColor},
            transparent 80%
        )
    `;

    return (
        <div
            className={cn(
                "group relative border border-border bg-card text-card-foreground overflow-hidden rounded-xl backdrop-blur-md transition-colors hover:border-primary/50",
                className
            )}
            onMouseMove={handleMouseMove}
            {...props}
        >
            {/* Spotlight Effect - Only visible on hover and if mounted */}
            {mounted && (
                <motion.div
                    className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                    style={{ background }}
                />
            )}

            {/* Content */}
            <div className="relative h-full">{children}</div>
        </div>
    );
}
