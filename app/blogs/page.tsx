"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const blogs = [
    {
        id: 1,
        title: "I Used These 3 ChatGPT Prompts Daily in 2025 – Saved 3 Hours",
        description: "Discover 3 powerful ChatGPT prompts that save you hours daily. Boost your productivity with AI in 2025.",
        author: "Durgesh Kumar Tiwari",
        date: "Jan 12, 2025",
        category: "AI & Productivity",
        link: "https://learncodewithdurgesh.com/blogs/i-used-these-3-chatgpt-prompts-daily-in-2025-saved-3-hours"
    },
    {
        id: 2,
        title: "Top 10 JavaScript Tips for Beginners",
        description: "Learn the top 10 JavaScript tips every beginner should know. This guide includes practical examples, clean coding habits, and more.",
        author: "Durgesh Kumar Tiwari",
        date: "Jan 05, 2025",
        category: "JavaScript",
        link: "https://learncodewithdurgesh.com/blogs/top-10-javascript-tips-for-beginners-with-practical-code-examples"
    },
    {
        id: 3,
        title: "Top 10 CSS Tips That Will Instantly Improve Your Design Skills",
        description: "Before writing CSS, know how it connects with HTML and why using external stylesheets is best.",
        author: "Durgesh Kumar Tiwari",
        date: "Dec 28, 2024",
        category: "CSS",
        link: "https://learncodewithdurgesh.com/blogs/top-10-css-tips-that-will-instantly-improve-your-design-skills"
    },
    {
        id: 4,
        title: "Top 10 HTML Tips for Beginners",
        description: "Starting with web development? HTML is your first real skill. Clean, readable, and SEO-friendly HTML helps your site load faster.",
        author: "Durgesh Kumar Tiwari",
        date: "Dec 15, 2024",
        category: "HTML",
        link: "https://learncodewithdurgesh.com/blogs/top-10-html-tips-for-beginners-with-practical-examples"
    },
    {
        id: 5,
        title: "Resume & Portfolio Tips for IT Jobs",
        description: "In today’s competitive tech industry, your resume and portfolio are more than just documents — they’re your personal brand.",
        author: "Shruti",
        date: "Nov 30, 2024",
        category: "Career",
        link: "https://learncodewithdurgesh.com/blogs/resume-portfolio-tips-for-it-jobs-stand-out-get-hired-in-2025"
    },
    {
        id: 6,
        title: "Top 10 High-Paying Skills to Learn in 2025",
        description: "AI, automation, and digital transformation are flipping industries upside down. Here are the skills that will land you a solid gig.",
        author: "Shruti",
        date: "Nov 15, 2024",
        category: "Career",
        link: "https://learncodewithdurgesh.com/blogs/top-10-high-paying-skills-to-learn-in-2025"
    },
    {
        id: 7,
        title: "Java 25: The Future of Coding, Now",
        description: "Java 25 is the latest version of Java, packed with new features and upgrades. It makes coding easier, faster, and more secure.",
        author: "Durgesh Kumar Tiwari",
        date: "Nov 02, 2024",
        category: "Java",
        link: "https://learncodewithdurgesh.com/blogs/java-25-the-future-of-coding-now"
    },
    {
        id: 8,
        title: "5 Best Free AI Tools Every Student Should Use in 2025",
        description: "Education is changing fast, and AI is helping students study smarter. From writing essays to making presentations, AI tools save time.",
        author: "Shruti",
        date: "Oct 20, 2024",
        category: "AI Tools",
        link: "https://learncodewithdurgesh.com/blogs/5-best-free-ai-tools-every-student-should-use-in-2025"
    }
];

export default function BlogsPage() {
    const featuredBlog = blogs[0];
    const regularBlogs = blogs.slice(1);

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <main className="flex-grow pt-24 pb-24">

                {/* Header Section */}
                <div className="container mx-auto px-4 md:px-6 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-2xl"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
                            Writings from our <span className="text-primary italic">team.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            Thoughts on software engineering, career growth, and the future of technology — crafted by professionals who build it every day.
                        </p>
                    </motion.div>
                </div>

                <div className="container mx-auto px-4 md:px-6 max-w-7xl">

                    {/* Featured Post (Hero Post) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-16"
                    >
                        <Link href={featuredBlog.link} target="_blank" className="group block">
                            <div className="relative rounded-3xl bg-secondary/20 border border-border/60 overflow-hidden transition-all duration-300 hover:bg-secondary/30">
                                <div className="grid grid-cols-1 lg:grid-cols-2">
                                    {/* Abstract Image representing Featured Post */}
                                    <div className="h-64 lg:h-[400px] w-full bg-muted border-b lg:border-b-0 lg:border-r border-border/50 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-primary/5 transition-transform duration-700 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent mix-blend-overlay" />
                                        <div className="absolute bottom-6 left-6 right-6">
                                            <div className="w-12 h-1 bg-primary/40 rounded-full mb-3 shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                                        <div className="flex items-center gap-4 mb-6">
                                            <Badge variant="secondary" className="px-3 py-1 bg-background shadow-sm border-border/50 text-xs text-primary font-semibold uppercase tracking-wider">
                                                Featured • {featuredBlog.category}
                                            </Badge>
                                            <span className="text-sm font-medium text-muted-foreground">{featuredBlog.date}</span>
                                        </div>

                                        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight group-hover:text-primary transition-colors">
                                            {featuredBlog.title}
                                        </h2>

                                        <p className="text-lg text-muted-foreground mb-8 line-clamp-3 leading-relaxed">
                                            {featuredBlog.description}
                                        </p>

                                        <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                                    {featuredBlog.author.charAt(0)}
                                                </div>
                                                <span className="font-medium">{featuredBlog.author}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                                                Read Article <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Standard Grid Posts */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {regularBlogs.map((blog, index) => (
                            <motion.div
                                key={blog.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                            >
                                <Link href={blog.link} target="_blank" className="group block h-full">
                                    <div className="flex flex-col h-full rounded-2xl bg-card border border-border/60 transition-colors duration-300 hover:bg-secondary/20 p-6">
                                        <div className="flex items-center justify-between mb-5">
                                            <span className="text-[11px] font-bold text-primary uppercase tracking-widest px-2.5 py-1 bg-primary/10 rounded-full">
                                                {blog.category}
                                            </span>
                                            <span className="text-xs font-medium text-muted-foreground">{blog.date}</span>
                                        </div>

                                        <h3 className="text-xl font-bold mb-4 line-clamp-2 leading-snug group-hover:text-primary transition-colors">
                                            {blog.title}
                                        </h3>

                                        <p className="text-sm text-muted-foreground mb-8 line-clamp-3 leading-relaxed flex-grow">
                                            {blog.description}
                                        </p>

                                        <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-5">
                                            <div className="flex items-center gap-2">
                                                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-[10px] font-bold">
                                                    {blog.author.charAt(0)}
                                                </div>
                                                <span className="text-xs font-medium text-foreground/80">{blog.author}</span>
                                            </div>
                                            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </main>
        </div>
    );
}
