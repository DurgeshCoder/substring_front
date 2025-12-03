"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Youtube, Instagram, Linkedin, Briefcase } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { Spotlight } from "@/components/ui/spotlight";

const founderStats = [
    {
        label: "YouTube Family",
        value: "350K+",
        icon: Youtube,
        color: "text-red-500",
        sub: "Learn Code With Durgesh"
    },
    {
        label: "Instagram Fam",
        value: "40K+",
        icon: Instagram,
        color: "text-pink-500",
        sub: "durgesh_k_t"
    },
    {
        label: "LinkedIn Network",
        value: "10K+",
        icon: Linkedin,
        color: "text-blue-600",
        sub: "Professional Connections"
    },
    {
        label: "Experience",
        value: "8+ Years",
        icon: Briefcase,
        color: "text-amber-500",
        sub: "Industry Expertise"
    },
];

export function About() {
    return (
        <section id="about" className="py-24 bg-background relative overflow-hidden">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                    {/* Company Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="h-full"
                    >
                        <MagicCard className="h-full p-8 md:p-10 flex flex-col justify-center" gradientColor="#262626">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium w-fit mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                Your Partner in Technology
                            </div>

                            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50">
                                About <br />
                                <span className="text-primary">Substring Technologies</span>
                            </h2>

                            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                We empower businesses with cutting-edge software solutions and developers with top-notch training. From web applications to mobile development, we provide the expertise you need to succeed in the digital era.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                                {["College & Software Trainings", "Website Development", "App Development", "Corporate Trainings"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border border-border/50">
                                        <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                                        <span className="text-sm font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </MagicCard>
                    </motion.div>

                    {/* Founder Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="h-full"
                    >
                        <MagicCard className="h-full p-8 md:p-10" gradientColor="#262626">
                            <div className="mb-8">
                                <span className="text-primary font-semibold tracking-wider uppercase text-sm">Founder & CEO</span>
                                <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                                    Durgesh Kumar <span className="text-primary">Tiwari</span>
                                </h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    "A teacher at heart, a builder by trade." <br />
                                    Renowned software engineer and corporate trainer empowering the next generation of developers.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {founderStats.map((stat, index) => (
                                    <div key={index} className="p-4 rounded-xl bg-background/40 border border-white/5 hover:bg-background/60 transition-colors">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className={`p-2 rounded-lg bg-background/80 ${stat.color}`}>
                                                <stat.icon className="w-5 h-5" />
                                            </div>
                                            <div className="font-bold text-2xl">{stat.value}</div>
                                        </div>
                                        <div>
                                            <div className="font-medium text-sm">{stat.label}</div>
                                            <div className="text-xs text-muted-foreground">{stat.sub}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </MagicCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
