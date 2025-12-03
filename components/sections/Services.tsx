"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Server, Cloud, Cpu, Settings } from "lucide-react";


const services = [
    {
        title: "Web Development",
        description: "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
        icon: Code,
    },
    {
        title: "App Development",
        description: "Native and cross-platform mobile applications for iOS and Android using Flutter and React Native.",
        icon: Smartphone,
    },
    {
        title: "Backend Systems",
        description: "Scalable and secure backend architectures using Microservices, Spring Boot, and Cloud technologies.",
        icon: Server,
    },
    {
        title: "Cloud Solutions",
        description: "Cloud infrastructure setup, migration, and management on AWS, Azure, and Google Cloud Platform.",
        icon: Cloud,
    },
    {
        title: "AI & ML Integration",
        description: "Integrating Artificial Intelligence and Machine Learning models to make your applications smarter.",
        icon: Cpu,
    },
    {
        title: "DevOps Services",
        description: "Streamlining development and operations with CI/CD pipelines, containerization, and automation.",
        icon: Settings,
    },
];

export function Services() {
    return (
        <section id="services" className="py-24 bg-secondary/30 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Our <span className="text-primary">Services</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg max-w-2xl mx-auto"
                    >
                        We offer a comprehensive range of software services to help your business grow and succeed in the digital age.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative h-full overflow-hidden rounded-2xl border bg-background p-8 transition-all hover:shadow-lg hover:-translate-y-1">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                                <div className="relative z-10">
                                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                        <service.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                                    <p className="text-muted-foreground">{service.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
