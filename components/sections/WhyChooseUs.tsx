"use client";


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
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Why Choose <br /> <span className="text-primary">Substring?</span>
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                            We don't just teach coding; we shape careers. Our holistic approach combines technical depth with professional grooming to create complete software engineers.
                        </p>
                        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden bg-secondary/30 border border-border">
                            {/* Abstract Visual Representation */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-indigo-500/20" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/30 rounded-full blur-[60px] animate-pulse" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center p-6 backdrop-blur-sm bg-background/30 rounded-xl border border-white/10">
                                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                                    <div className="text-sm font-medium">Commitment to Excellence</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
        </section >
    );
}
