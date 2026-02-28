"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Youtube, Instagram, Linkedin, Briefcase } from "lucide-react";
import Image from "next/link"; // Not used directly for img to avoid Next config issues, using standard <img>
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
        <section id="about" className="py-24 bg-background relative overflow-hidden border-t border-border/40">
            {/* Very subtle ambient background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* Left: Realistic Image Collage */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-6 relative h-[600px] hidden md:block"
                    >
                        {/* Main large image - Classroom/Training */}
                        <div className="absolute top-0 left-0 w-3/4 h-[400px] rounded-2xl overflow-hidden border border-border/50 shadow-2xl z-10">
                            <img
                                src="https://res.cloudinary.com/dzseu61wi/image/upload/v1764754782/substring/gallery/IMG_1182_ugvwz8.jpg"
                                alt="Students coding in classroom"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Secondary image - Mentorship/Teaching */}
                        <div className="absolute bottom-0 right-0 w-2/3 h-[300px] rounded-2xl overflow-hidden border border-border/50 shadow-2xl z-20">
                            <img
                                src="https://res.cloudinary.com/dzseu61wi/image/upload/v1764754770/substring/gallery/IMG_7064_fyetva.jpg"
                                alt="Teacher mentoring student"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Floating decorative stat card */}
                        <div className="absolute top-1/2 -left-6 z-30 bg-card border border-border/60 p-4 rounded-xl shadow-xl backdrop-blur-sm">
                            <div className="text-3xl font-bold text-primary mb-1">10,000+</div>
                            <div className="text-sm font-medium text-muted-foreground">Careers Transformed</div>
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-6 flex flex-col justify-center"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium w-fit mb-6">
                            <span className="flex h-1.5 w-1.5 rounded-full bg-primary"></span>
                            Behind Substring
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-[1.1]">
                            More than just a training institute. <span className="text-primary italic">A community.</span>
                        </h2>

                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            We bridge the gap between academic learning and industry expectations. Through rigorous hands-on training, live projects, and dedicated mentorship, we turn passionate learners into professional software engineers.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                            {["College & Corporate Training", "Website Development", "Custom App Development", "1-on-1 Mentorship"].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="text-primary w-4 h-4" />
                                    </div>
                                    <span className="text-sm font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* Founder Section - Simplified and elegant */}
                        <div className="p-6 rounded-2xl bg-secondary/30 border border-border/60">
                            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Meet The Founder</h3>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                                {/* Founder Avatar Placeholder */}
                                <div className="w-20 h-20 rounded-full border-2 border-border/50 overflow-hidden shrink-0 bg-muted">
                                    <img
                                        src="https://res.cloudinary.com/dzseu61wi/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1764754800/substring/gallery/IMG_8857_qzvn4v.jpg"
                                        alt="Durgesh Kumar Tiwari"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold">Durgesh Kumar Tiwari</h4>
                                    <p className="text-sm text-muted-foreground mt-1 mb-3">Software Engineer & Educator</p>
                                    <div className="flex items-center gap-4">
                                        {founderStats.map((stat, i) => (
                                            <div key={i} className="flex items-center gap-1.5 group cursor-default">
                                                <stat.icon className={`w-4 h-4 ${stat.color} opacity-70 group-hover:opacity-100 transition-opacity`} />
                                                <span className="text-sm font-bold">{stat.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
