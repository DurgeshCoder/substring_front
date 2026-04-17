"use client";

import { motion } from "framer-motion";
import { Projects } from "@/components/sections/Projects";
import { 
    Cloud, Layout, Server, Cpu, Settings, 
    Database, Activity, Globe, Network, ArrowRight 
} from "lucide-react";

const technologies = [
    {
        title: "Frontend Development",
        icon: <Layout className="w-8 h-8 text-blue-500" />,
        skills: ["React", "Next.js", "Tailwind CSS", "Vue", "Framer Motion"],
        description: "Pixel-perfect, highly responsive User Interfaces that feel inherently intuitive and perform natively on the web.",
        bg: "from-blue-500/20 to-blue-500/5",
        border: "border-blue-500/30",
        shadow: "hover:shadow-blue-500/20"
    },
    {
        title: "Backend Engineering",
        icon: <Server className="w-8 h-8 text-emerald-500" />,
        skills: ["Node.js", "Spring Boot", "Python", "Go", "PostgreSQL"],
        description: "Secure, high-throughput APIs built with microservices architecture to process millions of requests effortlessly.",
        bg: "from-emerald-500/20 to-emerald-500/5",
        border: "border-emerald-500/30",
        shadow: "hover:shadow-emerald-500/20"
    },
    {
        title: "Cloud Infrastructure",
        icon: <Cloud className="w-8 h-8 text-cyan-500" />,
        skills: ["AWS", "Google Cloud", "Azure", "Serverless", "S3"],
        description: "Deploying highly resilient systems on top-tier cloud providers with auto-scaling capabilities tailored to demand.",
        bg: "from-cyan-500/20 to-cyan-500/5",
        border: "border-cyan-500/30",
        shadow: "hover:shadow-cyan-500/20"
    },
    {
        title: "DevOps & CI/CD",
        icon: <Settings className="w-8 h-8 text-purple-500" />,
        skills: ["Docker", "Kubernetes", "GitHub Actions", "Terraform", "Jenkins"],
        description: "Automated pipelines ensuring continuous integration and zero-downtime continuous deployment for robust delivery.",
        bg: "from-purple-500/20 to-purple-500/5",
        border: "border-purple-500/30",
        shadow: "hover:shadow-purple-500/20"
    },
    {
        title: "Artificial Intelligence",
        icon: <Cpu className="w-8 h-8 text-rose-500" />,
        skills: ["OpenAI", "TensorFlow", "PyTorch", "LLMs", "NLP"],
        description: "Integrating powerful Machine Learning models to automate workflows, analyze data patterns, and offer smart solutions.",
        bg: "from-rose-500/20 to-rose-500/5",
        border: "border-rose-500/30",
        shadow: "hover:shadow-rose-500/20"
    }
];

const scalingFeatures = [
    {
        title: "Global CDN & Edge Routing",
        description: "We deploy static assets and serverless functions directly at the edge layer, reducing geographical latency and delivering content to users in mere milliseconds.",
        icon: <Globe className="w-8 h-8 text-indigo-400" />,
        span: "md:col-span-4 lg:col-span-5",
        gradient: "from-indigo-500/20 to-transparent"
    },
    {
        title: "Microservices Architecture",
        description: "By decoupling complex monolithic structures into modular, independently scalable services, we ensure that high traffic on one feature never compromises the performance of your entire platform.",
        icon: <Network className="w-8 h-8 text-pink-400" />,
        span: "md:col-span-8 lg:col-span-7",
        gradient: "from-pink-500/20 to-transparent"
    },
    {
        title: "Horizontal Auto-Scaling",
        description: "Our automated containerized orchestration continuously monitors traffic metrics. The moment CPU or memory utilization spikes, it dynamically spawns new pods to absorb the load seamlessly.",
        icon: <Activity className="w-8 h-8 text-amber-400" />,
        span: "md:col-span-8 lg:col-span-7",
        gradient: "from-amber-500/20 to-transparent"
    },
    {
        title: "Distributed Databases",
        description: "We utilize multi-region read replicas and intelligent sharding strategies. This maintains atomic data consistency while handling enormous throughput volumes without bottlenecks.",
        icon: <Database className="w-8 h-8 text-emerald-400" />,
        span: "md:col-span-4 lg:col-span-5",
        gradient: "from-emerald-500/20 to-transparent"
    }
];

export default function DevelopmentPage() {
    return (
        <main className="min-h-screen bg-background">
            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center justify-center min-h-[70vh]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[600px] bg-primary/10 blur-[150px] pointer-events-none rounded-[100%]" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] pointer-events-none rounded-[100%]" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-bold text-sm mb-8 border border-primary/20 backdrop-blur-md shadow-lg">
                            <span className="flex w-2.5 h-2.5 rounded-full bg-primary mr-3 animate-pulse" />
                            Premium Software Engineering
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[1.1]">
                            We Build <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-purple-600">
                                Unstoppable Products
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12 font-light">
                            From beautiful pixel-perfect interfaces to highly scalable microservices, our top-tier developers turn complex problems into elegant, fast, and globally distributed digital experiences.
                        </p>
                        
                        <div className="flex justify-center">
                            <a href="#technologies" className="group flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all">
                                Discover Our Stack <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* TECHNOLOGIES SECTION */}
            <section id="technologies" className="py-24 bg-secondary/10 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
                        >
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/60">Our Technology Arsenal</span>
                        </motion.h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We don't limit ourselves to one stack. We choose the right tools for your specific domain to ensure blazing fast performance, ironclad security, and future-proof maintainability.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={tech.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className={`group relative p-8 rounded-3xl border bg-gradient-to-br transition-all duration-500 overflow-hidden backdrop-blur-sm bg-background/50 cursor-pointer shadow-lg hover:-translate-y-2 ${tech.border} ${tech.shadow}`}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${tech.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="p-4 bg-background/80 drop-shadow-md rounded-2xl inline-flex w-max mb-6">
                                        {tech.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 font-heading">{tech.title}</h3>
                                    <p className="text-muted-foreground mb-8 text-sm leading-relaxed flex-grow">
                                        {tech.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {tech.skills.map(skill => (
                                            <span key={skill} className="px-3 py-1 bg-background/80 border border-border/50 text-xs font-semibold rounded-full text-foreground/80 shadow-sm">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ARCHITECTURE & SCALING SECTION */}
            <section className="py-24 md:py-32 relative overflow-hidden">
                <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-primary/5 blur-[120px] pointer-events-none rounded-[100%] translate-x-1/3" />
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="mb-20 max-w-4xl mx-auto text-center md:text-left">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight"
                        >
                            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">Global Scale</span>
                        </motion.h2>
                        <p className="text-xl text-muted-foreground leading-relaxed font-light">
                            Going viral? No problem. Our architectures are crafted to handle traffic surges automatically. From monolithic migrations to cloud-native microservices, here is how scaling works under the hood.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        {scalingFeatures.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                className={`group relative p-8 md:p-12 rounded-[2rem] border border-border/50 bg-background overflow-hidden cursor-default transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 ${feature.span}`}
                            >
                                {/* Glowing gradient corner */}
                                <div className={`absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br ${feature.gradient} blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700`} />
                                
                                <div className="relative z-10">
                                    <div className="mb-8 p-5 bg-secondary/50 border border-border inline-flex rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-500">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-extrabold mb-4">{feature.title}</h3>
                                    <p className="text-lg text-muted-foreground leading-relaxed font-light">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROJECTS SECTION */}
            <Projects />
            
        </main>
    );
}
