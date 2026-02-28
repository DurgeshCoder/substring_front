"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { CodeEditor } from "@/components/ui/code-editor";

export function Hero() {

    return (
        <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-28 pb-20 bg-background border-b border-border/40">
            {/* Extremely subtle grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* Glowing background shapes */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-1/2 left-0 -ml-40 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[80px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left Content */}
                    <div className="lg:col-span-7 text-center lg:text-left">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.1 }
                                }
                            }}
                            className="max-w-3xl mx-auto lg:mx-0"
                        >
                            {/* Announcment Pill */}
                            <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}>
                                <Link
                                    href="/training"
                                    className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-secondary/50 border border-border/80 text-sm font-medium mb-8 hover:bg-secondary/80 transition-colors shadow-sm"
                                >
                                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                    </span>
                                    <span className="text-muted-foreground mr-1">New Batch:</span>
                                    <span>Full Stack Java Developer</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-muted-foreground ml-1" />
                                </Link>
                            </motion.div>

                            {/* Headline */}
                            <motion.h1
                                variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                                className="text-[2.75rem] sm:text-[3.5rem] lg:text-[4.5rem] font-bold mb-6 tracking-[-0.03em] leading-[1.05]"
                            >
                                Learn to code. <br className="hidden lg:block" />
                                Build real projects. <br className="hidden lg:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                                    Get hired immediately.
                                </span>
                            </motion.h1>

                            {/* Description */}
                            <motion.p
                                variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                                className="text-[1.1rem] md:text-[1.2rem] text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-[1.6]"
                            >
                                Industry-led online and offline classes in Java, React, MERN, and Python. Stop watching isolated tutorials and start building production-ready applications.
                            </motion.p>

                            {/* Checkmarks */}
                            <motion.div
                                variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-10 text-sm font-medium text-muted-foreground"
                            >
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                    100% Placement Assistance
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                    Live Doubt Support
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                    Real-world Projects
                                </div>
                            </motion.div>

                            {/* CTAs */}
                            <motion.div
                                variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                            >
                                <Button size="lg" className="h-12 px-8 text-[0.95rem] rounded-xl w-full sm:w-auto shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all active:scale-[0.98]" asChild>
                                    <Link href="/training">
                                        Explore Programs
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" className="h-12 px-8 text-[0.95rem] rounded-xl w-full sm:w-auto border-border/70 hover:bg-secondary/60 bg-background transition-all active:scale-[0.98]" asChild>
                                    <Link href="#contact" className="gap-2">
                                        Talk to an Expert <ArrowRight className="h-4 w-4 text-muted-foreground" />
                                    </Link>
                                </Button>
                            </motion.div>

                            {/* Social Proof Avatars */}
                            <motion.div
                                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                                className="mt-12 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
                            >
                                <div className="flex -space-x-3">
                                    {/* Realistic avatar placeholders */}
                                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="Student" className="w-10 h-10 rounded-full border-2 border-background object-cover" />
                                    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop" alt="Student" className="w-10 h-10 rounded-full border-2 border-background object-cover" />
                                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" alt="Student" className="w-10 h-10 rounded-full border-2 border-background object-cover" />
                                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="Student" className="w-10 h-10 rounded-full border-2 border-background object-cover" />
                                    <div className="w-10 h-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-xs font-bold shrink-0">
                                        +10k
                                    </div>
                                </div>
                                <div className="text-sm">
                                    <div className="flex items-center gap-1 mb-0.5">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <svg key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="text-muted-foreground font-medium">Trusted by learners nationwide</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Visual — 5 columns, the code editor */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="hidden lg:block lg:col-span-5 relative"
                    >
                        {/* Dramatic premium glow behind the editor */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent blur-3xl rounded-full" />

                        <div className="relative z-10 perspective-1000">
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            >
                                <CodeEditor />
                            </motion.div>
                        </div>

                        {/* Decorative floating badges to make it dynamic */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 }}
                            className="absolute -right-6 top-20 z-20 bg-background/80 backdrop-blur-md border border-border p-3 rounded-xl shadow-xl flex items-center gap-3"
                        >
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className="w-6 h-6" alt="Java" />
                            <div className="text-xs font-bold">Java Masterclass</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 }}
                            className="absolute -left-10 bottom-24 z-20 bg-background/80 backdrop-blur-md border border-border p-3 rounded-xl shadow-xl flex items-center gap-3"
                        >
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-6 h-6 animate-spin-slow" style={{ animationDuration: '10s' }} alt="React" />
                            <div className="text-xs font-bold">Frontend Pro</div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
