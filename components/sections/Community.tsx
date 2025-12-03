"use client";

import { motion } from "framer-motion";
import { Youtube, Instagram, ArrowRight, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import communityData from "@/data/community.json";

const iconMap: { [key: string]: any } = {
    Youtube: Youtube,
    Instagram: Instagram,
    Linkedin: Linkedin,
    Send: Send
};

export function Community() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Join Our <span className="text-primary">Community</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-lg max-w-2xl mx-auto"
                    >
                        Be part of a growing network of developers. Learn, share, and grow together across all our platforms.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {communityData.map((item, index) => {
                        const Icon = iconMap[item.icon];
                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className={`group relative overflow-hidden rounded-3xl border ${item.borderColor} ${item.bgColor} bg-opacity-50 p-6 hover:shadow-lg transition-all duration-300`}
                            >
                                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Icon className={`w-24 h-24 ${item.color}`} />
                                </div>

                                <div className="relative z-10">
                                    <div className={`w-12 h-12 rounded-xl bg-background/50 flex items-center justify-center mb-4 ${item.color}`}>
                                        <Icon className="w-6 h-6" />
                                    </div>

                                    <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                                    <p className="text-sm text-muted-foreground mb-2">{item.platform}</p>
                                    <p className={`text-2xl font-bold mb-6 ${item.color}`}>{item.count} <span className="text-sm font-normal text-muted-foreground">{item.label}</span></p>

                                    <Link href={item.link} target="_blank">
                                        <Button variant="outline" className={`w-full bg-background/50 hover:bg-background border-${item.color} hover:text-${item.color.split('-')[1]}-600 group-hover:shadow-sm transition-all`}>
                                            Connect <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
