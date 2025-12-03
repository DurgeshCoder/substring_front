"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"; // Need to create Badge or use span

const projects = [
    {
        id: 1,
        title: "E-Commerce Microservices",
        category: "Backend",
        image: "bg-gradient-to-br from-blue-500 to-purple-600",
        tech: ["Java", "Spring Boot", "Kafka", "Docker"],
        description: "A scalable e-commerce backend built with microservices architecture, handling high-concurrency orders and inventory management.",
    },
    {
        id: 2,
        title: "HealthTech Dashboard",
        category: "Full Stack",
        image: "bg-gradient-to-br from-emerald-400 to-cyan-500",
        tech: ["React", "Node.js", "MongoDB", "Recharts"],
        description: "Real-time patient monitoring dashboard for healthcare providers with data visualization and alert systems.",
    },
    {
        id: 3,
        title: "AI Content Generator",
        category: "AI/ML",
        image: "bg-gradient-to-br from-orange-400 to-pink-500",
        tech: ["Python", "OpenAI API", "Next.js", "FastAPI"],
        description: "SaaS application that uses AI to generate marketing copy and social media posts for businesses.",
    },
    {
        id: 4,
        title: "FinTech Payment Gateway",
        category: "FinTech",
        image: "bg-gradient-to-br from-indigo-500 to-blue-500",
        tech: ["Go", "gRPC", "PostgreSQL", "Redis"],
        description: "Secure and fast payment processing gateway supporting multiple currencies and fraud detection.",
    },
];

export function Projects() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <section id="projects" className="py-24 bg-secondary/30 relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Featured <span className="text-primary">Projects</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-lg max-w-2xl mx-auto"
                    >
                        Explore real-world applications built by our students and engineering team.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            layoutId={`project-${project.id}`}
                            onClick={() => setSelectedProject(project)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer relative rounded-xl overflow-hidden aspect-video shadow-lg"
                        >
                            <div className={`absolute inset-0 ${project.image} opacity-80 group-hover:opacity-100 transition-opacity duration-500`} />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="text-xs font-medium text-white/80 bg-black/30 px-2 py-1 rounded backdrop-blur-sm mb-2 inline-block">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                                <p className="text-white/80 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedProject && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                            <motion.div
                                layoutId={`project-${selectedProject.id}`}
                                className="bg-background w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl relative"
                            >
                                <button
                                    onClick={(e) => { e.stopPropagation(); setSelectedProject(null); }}
                                    className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white z-10 transition-colors"
                                >
                                    <X size={20} />
                                </button>

                                <div className={`h-64 ${selectedProject.image} relative`}>
                                    <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/80 to-transparent w-full">
                                        <h3 className="text-3xl font-bold text-white">{selectedProject.title}</h3>
                                        <span className="text-white/80">{selectedProject.category}</span>
                                    </div>
                                </div>

                                <div className="p-8">
                                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                                        {selectedProject.description}
                                    </p>

                                    <div className="mb-8">
                                        <h4 className="font-semibold mb-3">Tech Stack</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tech.map((t) => (
                                                <span key={t} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <Button className="flex-1 gap-2">
                                            <ExternalLink size={16} /> View Live Demo
                                        </Button>
                                        <Button variant="outline" className="flex-1 gap-2">
                                            <Github size={16} /> Source Code
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Backdrop click to close */}
                            <div
                                className="absolute inset-0 -z-10"
                                onClick={() => setSelectedProject(null)}
                            />
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
