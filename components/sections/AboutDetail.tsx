"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Lightbulb, Users, Rocket, Globe, Heart, Target } from "lucide-react";

const history = {
    title: "How It Started",
    paragraphs: [
        "In January 2021, Substring Technologies was born out of a vision to bridge the gap between aspiring coders and industry-level programming resources.",
        "Founded by Durgesh Kumar Tiwari, a passionate coder who graduated with a B.Tech in 2017, the company represents the culmination of his relentless pursuit of a dream. Despite landing a lucrative placement at a prominent MNC in Bangalore, Durgesh chose to chart his own course, driven by his desire to empower students with the tools to master modern technologies.",
        "His journey was not without challenges—his initial venture faltered due to partnership conflicts. However, his love for teaching led him to start a YouTube channel, which quickly gained a devoted following.",
        "The overwhelming demand from students for comprehensive, technology-driven content inspired Durgesh to create online courses. This passion project soon grew into Substring Technologies, which now offers a range of services, from summer training programs in colleges to corporate employee upskilling, internships, and live classes on trending technologies."
    ]
};

const manifesto = [
    "To contribute to the growth of a digitally empowered workforce that leads the future of technology.",
    "To bridge the gap between theoretical knowledge and real-world application through hands-on training.",
    "To create a community of skilled developers who are equipped to solve complex challenges and drive innovation.",
    "To make high-quality education in programming accessible to aspiring engineers across the nation."
];

const values = [
    { title: "Quality Education", description: "Top-notch training that is practical and industry-relevant, ensuring our learners gain real-world skills.", icon: Lightbulb },
    { title: "Accessibility", description: "Quality tech education should be available to everyone, regardless of their background or location.", icon: Globe },
    { title: "Growth & Empowerment", description: "Empowering individuals to grow their careers and achieve their full potential through continuous learning.", icon: Rocket },
    { title: "Creativity", description: "Staying updated with the latest technologies and trends is at the core of what we do.", icon: Lightbulb },
    { title: "Community Building", description: "We foster a community of learners and educators who support and uplift one another.", icon: Users },
    { title: "Learner-Centric", description: "Personalized guidance and hands-on experience to make learning effective and engaging.", icon: Heart },
];

export function AboutDetail() {
    return (
        <section className="bg-background relative pb-24 overflow-hidden">

            {/* 1. Hero / Intro Section */}
            <div className="pt-24 pb-20 md:pt-32 md:pb-32 border-b border-border/40 bg-secondary/10">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                                Empowering the next generation of <span className="text-primary">builders.</span>
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                                We are on a mission to prepare students and professionals alike to thrive in a rapidly evolving tech landscape.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* 2. The Story (Two Column Layout) */}
            <div className="py-24 container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="lg:col-span-4"
                    >
                        <h2 className="text-3xl font-bold tracking-tight sticky top-24">
                            {history.title}
                        </h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="lg:col-span-8 space-y-6 text-lg text-muted-foreground leading-relaxed"
                    >
                        {history.paragraphs.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* 3. Manifesto & Values Bento Box */}
            <div className="py-24 bg-secondary/20 border-y border-border/40">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Manifesto */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold tracking-tight mb-8">Our Mission</h2>
                            <div className="space-y-6">
                                {manifesto.map((item, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <Target className="w-3.5 h-3.5 text-primary" />
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Values Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold tracking-tight mb-8">Core Values</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {values.map((value, index) => (
                                    <div
                                        key={index}
                                        className="p-5 rounded-2xl bg-card border border-border/60 hover:border-border transition-colors shadow-sm"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                            <value.icon className="w-5 h-5" />
                                        </div>
                                        <h3 className="font-semibold mb-2">{value.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>

        </section>
    );
}
