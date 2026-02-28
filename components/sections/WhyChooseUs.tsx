"use client";


import { motion } from "framer-motion";
import { CheckCircle, Users, Briefcase, Award, Zap, HeartHandshake } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";

const features = [
    {
        icon: Users,
        title: "Industry-Level Mentorship",
        description: "Learn directly from senior engineers and architects from top tech companies.",
    },
    {
        icon: Briefcase,
        title: "Real-World Projects",
        description: "Work on live projects and build a portfolio that stands out to recruiters.",
    },
    {
        icon: Award,
        title: "Career Support",
        description: "Resume building, mock interviews, and job referrals to help you get hired.",
    },
    {
        icon: Zap,
        title: "Modern Tech Stack",
        description: "Master the latest tools and technologies used by top startups and enterprises.",
    },
    {
        icon: CheckCircle,
        title: "High-Quality Code",
        description: "Learn best practices, clean code architecture, and scalable design patterns.",
    },
    {
        icon: HeartHandshake,
        title: "1:1 Support System",
        description: "Personalized guidance and doubt clearing sessions to ensure your success.",
    },
];

export function WhyChooseUs() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                            Why Choose <br /> <span className="text-primary">Substring?</span>
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                            We don't just teach coding; we shape careers. Our holistic approach combines technical depth with professional grooming to create complete software engineers.
                        </p>
                        <div className="relative w-full rounded-2xl overflow-hidden bg-secondary/30 border border-border/50 p-8">
                            {/* Concrete stats grid instead of abstract blob */}
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { value: "95%", label: "Placement Rate" },
                                    { value: "50+", label: "Hiring Partners" },
                                    { value: "4.9/5", label: "Student Rating" },
                                    { value: "10K+", label: "Developers Trained" },
                                ].map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="text-center p-6 rounded-xl bg-background/60 border border-border/40"
                                    >
                                        <div className="text-3xl font-bold text-primary mb-1 tracking-tight">{stat.value}</div>
                                        <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                            >
                                <MagicCard className="p-6 h-full border-white/10" gradientColor="rgba(124, 58, 237, 0.15)">
                                    <div className="flex flex-col gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <feature.icon className="w-5 h-5" />
                                        </div>
                                        <h3 className="font-semibold text-lg">{feature.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </MagicCard>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
