"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Terminal } from "lucide-react";
import Link from "next/link";
import { CodeEditor } from "@/components/ui/code-editor";
import { Spotlight } from "@/components/ui/spotlight";

export function Hero() {
    // ... existing hooks

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="url(#spotlight-gradient)" fillOpacity="0.5" />

            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] pointer-events-none" />
            <div className="absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.2
                                    }
                                }
                            }}
                        >
                            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                                <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20 backdrop-blur-sm">
                                    🚀 Future-Ready Software Training
                                </span>
                            </motion.div>

                            <motion.h1
                                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
                            >
                                Your Partner in <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500 animate-gradient-x">
                                    Technology.
                                </span>
                            </motion.h1>

                            <motion.p
                                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                                className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto lg:mx-0 mb-10 leading-relaxed"
                            >
                                Empowering businesses with cutting-edge software solutions. From web applications to mobile development, we provide the expertise you need to succeed.
                            </motion.p>

                            <motion.div
                                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                            >
                                <Button size="lg" className="text-lg px-8 h-14 w-full sm:w-auto transition-all hover:scale-105 shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_-5px_rgba(59,130,246,0.7)]" asChild>
                                    <Link href="/training">
                                        Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" className="text-lg px-8 h-14 w-full sm:w-auto border-primary/20 hover:bg-primary/5 backdrop-blur-sm" asChild>
                                    <Link href="#services">
                                        Build With Us
                                    </Link>
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                        className="hidden lg:block relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 blur-3xl -z-10 rounded-full opacity-50" />
                        <CodeEditor />
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
            </motion.div>
        </section>
    );
}
