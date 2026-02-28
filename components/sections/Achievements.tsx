"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Eye, Users, Video, Briefcase } from "lucide-react";

const achievements = [
    {
        label: "Total Views",
        value: 6000000,
        suffix: "+",
        icon: Eye,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        description: "Across all platforms"
    },
    {
        label: "Students Trained",
        value: 10000,
        suffix: "+",
        icon: Users,
        color: "text-green-500",
        bg: "bg-green-500/10",
        description: "Empowered developers"
    },
    {
        label: "Free Tutorials",
        value: 1300,
        suffix: "+",
        icon: Video,
        color: "text-red-500",
        bg: "bg-red-500/10",
        description: "High-quality content"
    },
    {
        label: "Hiring Partners",
        value: 50,
        suffix: "+",
        icon: Briefcase,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        description: "Top companies"
    },
];

function Counter({ value, duration = 2 }: { value: number; duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            const totalFrames = Math.round(duration * 60);
            let frame = 0;

            const counter = setInterval(() => {
                frame++;
                const progress = frame / totalFrames;
                const currentCount = Math.round(end * progress);

                if (frame === totalFrames) {
                    setCount(end);
                    clearInterval(counter);
                } else {
                    setCount(currentCount);
                }
            }, 1000 / 60);

            return () => clearInterval(counter);
        }
    }, [isInView, value, duration]);

    return <span ref={ref}>{count.toLocaleString()}</span>;
}

export function Achievements() {
    return (
        <section className="py-24 bg-secondary/20 border-y border-border/40">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                        Our Impact in <span className="text-primary">Numbers</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                        Real results that speak louder than words.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <div className={`w-16 h-16 mx-auto rounded-2xl ${item.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <item.icon className={`w-8 h-8 ${item.color}`} />
                            </div>

                            <div className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">
                                <Counter value={item.value} />{item.suffix}
                            </div>

                            <div className="font-semibold text-lg mb-1">{item.label}</div>
                            <div className="text-sm text-muted-foreground">{item.description}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
