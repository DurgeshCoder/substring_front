"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        id: 1,
        title: "Gym Management SaaS",
        category: "SaaS Platform",
        image: "/assets/projects/gym.png",
        tech: ["Next.js", "React", "Tailwind CSS", "Node.js"],
        description: "A comprehensive SaaS platform for gym owners to manage memberships, billing, classes, and member progress directly from a centralized dashboard.",
        url: "https://gym.substringtechnologies.com/"
    },
    {
        id: 2,
        title: "Puja Item E-Commerce",
        category: "E-Commerce",
        image: "/assets/projects/pujaitem.png",
        tech: ["React", "Express", "MongoDB", "Payment Gateway"],
        description: "An online store offering a wide range of authentic spiritual products, featuring seamless checkout, product categorization, and user accounts.",
        url: "https://www.pujaitem.in/"
    },
    {
        id: 3,
        title: "Iron Hive Fitness",
        category: "Business Website",
        image: "/assets/projects/ironhive.png",
        tech: ["HTML5", "Tailwind CSS", "JavaScript", "Responsive Design"],
        description: "A dynamic and responsive promotional website for Iron Hive Fitness Gym, highlighting their facilities, trainers, and membership plans.",
        url: "https://www.ironhivefitnessgym.in/"
    },
    {
        id: 4,
        title: "Learn Code With Durgesh",
        category: "LMS Platform",
        image: "/assets/projects/lcwd.png",
        tech: ["React", "Next.js", "Java", "Spring Boot"],
        description: "A flagship Learning Management System serving thousands of students. Provides interactive course consumption, progress tracking, and secure online assessments.",
        url: "https://learncodewithdurgesh.com/"
    },
    {
        id: 5,
        title: "EduStream School ERP",
        category: "Enterprise System",
        image: "/assets/projects/school_erp.png",
        tech: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
        description: "A comprehensive School ERP system designed to manage student analytics, faculty coordination, attendance tracking, and fee processing—all from a beautifully unified dashboard.",
        url: "javascript:void(0)"
    },
    {
        id: 6,
        title: "Financely Billing & Invoices",
        category: "FinTech Platform",
        image: "/assets/projects/billing_system.png",
        tech: ["Vue.js", "Node.js", "Stripe API", "Chart.js"],
        description: "A secure, scalable billing and invoice management platform for B2B transactions. Features monthly revenue charting, intelligent payment tracking, and automated invoicing.",
        url: "javascript:void(0)"
    }
];

export function Projects({ limit, showExploreMore }: { limit?: number, showExploreMore?: boolean }) {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
    const displayedProjects = limit ? projects.slice(0, limit) : projects;

    return (
        <section id="projects" className="py-24 md:py-32 bg-secondary/5 relative overflow-hidden">
            {/* Background Blob Effects */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] bg-primary/10 blur-[120px] pointer-events-none rounded-[100%]" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] pointer-events-none rounded-[100%]" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6 border border-primary/20 backdrop-blur-sm shadow-sm"
                    >
                        <span className="flex w-2 h-2 rounded-full bg-primary mr-2.5 animate-pulse" />
                        Our Portfolio
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-foreground"
                    >
                        Featured <span className="text-primary bg-clip-text">Projects</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                    >
                        Explore recent applications and platforms crafted by our top-tier engineering teams. Beautiful interfaces meet scalable backends.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            layoutId={`project-${project.id}`}
                            onClick={() => setSelectedProject(project)}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
                            className="group cursor-pointer relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 border border-primary/10 bg-background/50 backdrop-blur-sm"
                        >
                            {/* Inner Image Wrapper for Scale Effect */}
                            <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
                                <Image 
                                    src={project.image} 
                                    alt={project.title} 
                                    fill 
                                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                    className="object-cover object-top transition-transform duration-700 ease-in-out group-hover:scale-105" 
                                />
                            </div>

                            {/* Gradient Overlay for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 translate-y-6 group-hover:translate-y-0 transition-transform duration-500 will-change-transform">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-xs font-bold tracking-wider uppercase text-primary bg-primary/20 px-3 py-1 rounded-full backdrop-blur-md border border-primary/20 shadow-sm">
                                        {project.category}
                                    </span>
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                                    {project.title}
                                </h3>

                                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                                    <p className="text-white/80 text-sm md:text-base line-clamp-2 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Call to action text */}
                                <div className="flex items-center text-primary font-medium text-sm mt-0 group-hover:mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                                    View Details <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {showExploreMore && (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-16 flex justify-center"
                    >
                        <Button 
                            asChild 
                            size="lg" 
                            className="group h-14 px-8 text-lg font-bold rounded-full shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1"
                        >
                            <Link href="/development">
                                Explore All Development Projects 
                                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </motion.div>
                )}

                <AnimatePresence>
                    {selectedProject && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/60 backdrop-blur-xl">
                            <motion.div
                                layoutId={`project-${selectedProject.id}`}
                                className="bg-background w-full max-w-5xl max-h-[95vh] md:max-h-[85vh] overflow-y-auto overflow-x-hidden rounded-[2rem] border border-border shadow-2xl relative custom-scrollbar flex flex-col md:flex-row"
                            >
                                <button
                                    onClick={(e) => { e.stopPropagation(); setSelectedProject(null); }}
                                    className="absolute top-4 right-4 p-2.5 bg-black/20 hover:bg-black/60 rounded-full text-white z-20 backdrop-blur-lg transition-all border border-white/10 shadow-lg group"
                                >
                                    <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                                </button>

                                <div className="w-full md:w-[45%] h-[250px] md:h-auto min-h-[300px] relative bg-muted flex-shrink-0">
                                    <Image 
                                        src={selectedProject.image} 
                                        alt={selectedProject.title} 
                                        fill 
                                        className="object-cover object-top" 
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-black/20 to-transparent md:bg-gradient-to-r md:from-black/10 md:to-background pointer-events-none" />
                                </div>

                                <div className="p-8 md:p-12 flex flex-col justify-center flex-grow">
                                    <motion.div 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <span className="text-sm font-bold tracking-wider uppercase text-primary mb-3 block">
                                            {selectedProject.category}
                                        </span>
                                        <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
                                            {selectedProject.title}
                                        </h3>

                                        <p className="text-muted-foreground text-lg md:text-xl mb-10 leading-relaxed font-light">
                                            {selectedProject.description}
                                        </p>

                                        <div className="mb-10">
                                            <h4 className="text-sm font-semibold text-foreground/80 uppercase tracking-widest mb-4">
                                                Technologies Used
                                            </h4>
                                            <div className="flex flex-wrap gap-2.5">
                                                {selectedProject.tech.map((t) => (
                                                    <span 
                                                        key={t} 
                                                        className="px-4 py-2 bg-secondary/50 text-secondary-foreground rounded-full text-sm font-medium border border-border/50 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors shadow-sm"
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mt-auto pt-4">
                                            <Button 
                                                className="w-full sm:w-auto px-8 h-14 text-base shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all font-semibold rounded-full hover:-translate-y-1" 
                                                asChild
                                            >
                                                <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                                                    Explore Live Project <ExternalLink className="w-5 h-5" />
                                                </a>
                                            </Button>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Backdrop click to close */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
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
