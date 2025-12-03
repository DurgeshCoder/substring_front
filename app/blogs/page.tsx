"use client";


import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const blogs = [
    {
        id: 1,
        title: "I Used These 3 ChatGPT Prompts Daily in 2025 – Saved 3 Hours",
        description: "Discover 3 powerful ChatGPT prompts that save you hours daily. Boost your productivity with AI in 2025.",
        author: "durgeshkumar8896",
        date: "2025",
        category: "AI & Productivity",
        link: "https://learncodewithdurgesh.com/blogs/i-used-these-3-chatgpt-prompts-daily-in-2025-saved-3-hours"
    },
    {
        id: 2,
        title: "Top 10 JavaScript Tips for Beginners",
        description: "Learn the top 10 JavaScript tips every beginner should know. This guide includes practical examples, clean coding habits, and more.",
        author: "durgeshkumar8896",
        date: "2025",
        category: "JavaScript",
        link: "https://learncodewithdurgesh.com/blogs/top-10-javascript-tips-for-beginners-with-practical-code-examples"
    },
    {
        id: 3,
        title: "Top 10 CSS Tips That Will Instantly Improve Your Design Skills",
        description: "Before writing CSS, know how it connects with HTML and why using external stylesheets is best.",
        author: "durgeshkumar8896",
        date: "2025",
        category: "CSS",
        link: "https://learncodewithdurgesh.com/blogs/top-10-css-tips-that-will-instantly-improve-your-design-skills"
    },
    {
        id: 4,
        title: "Top 10 HTML Tips for Beginners",
        description: "Starting with web development? HTML is your first real skill. Clean, readable, and SEO-friendly HTML helps your site load faster.",
        author: "durgeshkumar8896",
        date: "2025",
        category: "HTML",
        link: "https://learncodewithdurgesh.com/blogs/top-10-html-tips-for-beginners-with-practical-examples"
    },
    {
        id: 5,
        title: "Resume & Portfolio Tips for IT Jobs",
        description: "In today’s competitive tech industry, your resume and portfolio are more than just documents — they’re your personal brand.",
        author: "Shruti",
        date: "2025",
        category: "Career",
        link: "https://learncodewithdurgesh.com/blogs/resume-portfolio-tips-for-it-jobs-stand-out-get-hired-in-2025"
    },
    {
        id: 6,
        title: "Top 10 High-Paying Skills to Learn in 2025",
        description: "AI, automation, and digital transformation are flipping industries upside down. Here are the skills that will land you a solid gig.",
        author: "Shruti",
        date: "2025",
        category: "Career",
        link: "https://learncodewithdurgesh.com/blogs/top-10-high-paying-skills-to-learn-in-2025"
    },
    {
        id: 7,
        title: "Java 25: The Future of Coding, Now",
        description: "Java 25 is the latest version of Java, packed with new features and upgrades. It makes coding easier, faster, and more secure.",
        author: "durgeshkumar8896",
        date: "2025",
        category: "Java",
        link: "https://learncodewithdurgesh.com/blogs/java-25-the-future-of-coding-now"
    },
    {
        id: 8,
        title: "5 Best Free AI Tools Every Student Should Use in 2025",
        description: "Education is changing fast, and AI is helping students study smarter. From writing essays to making presentations, AI tools save time.",
        author: "Shruti",
        date: "2025",
        category: "AI Tools",
        link: "https://learncodewithdurgesh.com/blogs/5-best-free-ai-tools-every-student-should-use-in-2025"
    }
];



export default function BlogsPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <main className="flex-grow pt-24 pb-16">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Tech <span className="text-primary">Insights</span>
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Stay updated with the latest trends, tutorials, and career advice from our experts.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog, index) => (
                            <motion.div
                                key={blog.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link href={blog.link} target="_blank">
                                    <Card className="h-full hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer group flex flex-col">
                                        <CardHeader>
                                            <div className="flex justify-between items-start mb-4">
                                                <Badge variant="secondary" className="group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                                    {blog.category}
                                                </Badge>
                                            </div>
                                            <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                                                {blog.title}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="flex-grow">
                                            <CardDescription className="line-clamp-3">
                                                {blog.description}
                                            </CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex justify-between items-center text-sm text-muted-foreground border-t pt-4 mt-auto">
                                            <div className="flex items-center gap-2">
                                                <User size={14} />
                                                <span>{blog.author}</span>
                                            </div>
                                            <div className="flex items-center gap-1 group-hover:text-primary transition-colors">
                                                Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
