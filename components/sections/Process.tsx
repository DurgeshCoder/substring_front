"use client";

import { motion } from "framer-motion";

const steps = [
    {
        title: "Enroll & Onboard",
        description: "Pick the right course for your goals. We help you choose whether you're a beginner or looking to level up.",
    },
    {
        title: "Learn from Experts",
        description: "Live classes, recorded sessions, and 1-on-1 doubt support from engineers who work in the industry.",
    },
    {
        title: "Build Real Projects",
        description: "No toy apps. You build production-grade projects that go straight into your portfolio and GitHub.",
    },
    {
        title: "Interview Preparation",
        description: "Resume reviews, mock interviews, DSA practice, and system design prep — everything you need to crack interviews.",
    },
    {
        title: "Get Placed",
        description: "Our placement cell connects you with 50+ hiring partners. We don't stop until you land your offer.",
    },
];

export function Process() {
    return (
        <section className="py-24 bg-secondary/20 relative border-y border-border/40">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
                    >
                        From Learning to <span className="text-primary">Placement</span>
                    </motion.h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                        A clear path from day one to your dream job. Here's how we get you there.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

                    <div className="space-y-16 relative">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                className={`flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                            >
                                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                                    <h3 className="text-xl font-bold mb-2 tracking-tight">{step.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                                </div>
                                <div className="relative z-10 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-md shrink-0 font-bold text-lg">
                                    {index + 1}
                                </div>
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
