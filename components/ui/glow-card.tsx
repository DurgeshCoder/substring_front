"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

export function GlowCard({ children, className, ...props }: GlowCardProps) {
    return (
        <div
            className={cn(
                "relative group rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden",
                className
            )}
            {...props}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
                className="absolute -inset-px bg-gradient-to-r from-primary via-purple-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500"
                layoutId="glow"
            />
            <div className="relative z-10 h-full">{children}</div>
        </div>
    );
}
