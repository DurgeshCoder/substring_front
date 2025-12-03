"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import { motion } from "framer-motion";
import { RetroGrid } from "@/components/ui/retro-grid";

export default function NotFound() {
    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background">
            <RetroGrid />

            <div className="z-10 flex flex-col items-center text-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.5,
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                    }}
                    className="relative"
                >
                    <h1 className="text-9xl font-black text-primary/20 select-none">404</h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                            Oops!
                        </span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="mt-8 space-y-4 max-w-md"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                        Page Not Found
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mt-10 flex flex-col sm:flex-row gap-4"
                >
                    <Link href="/">
                        <Button size="lg" className="gap-2 group">
                            <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            Go to Home
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="outline" size="lg" className="gap-2">
                            Contact Support
                        </Button>
                    </Link>
                </motion.div>
            </div>

            {/* Decorative elements */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="absolute bottom-10 text-sm text-muted-foreground/50"
            >
                Error Code: 404
            </motion.div>
        </div>
    );
}
