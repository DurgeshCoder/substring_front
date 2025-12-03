"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Lightbulb, Users, Rocket, Globe, Heart, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MagicCard } from "@/components/ui/magic-card";

const history = {
    title: "Our History",
    content: "In January 2021, Substring Technologies Pvt. Ltd. was born out of a vision to bridge the gap between aspiring coders and industry-level programming resources. Founded by Durgesh Kumar Tiwari, a passionate coder who graduated with a B.Tech in 2017, the company represents the culmination of his relentless pursuit of a dream. Despite landing a lucrative placement at a prominent MNC in Bangalore, Durgesh chose to chart his own course, driven by his desire to empower students with the tools to master modern technologies. His journey was not without challenges—his initial venture faltered due to partnership conflicts. However, his love for teaching led him to start a YouTube channel, which quickly gained a devoted following. The overwhelming demand from students for comprehensive, technology-driven content inspired Durgesh to create online courses. This passion project soon grew into Substring Technologies, which now offers a range of services, from summer training programs in colleges to corporate employee upskilling, internships, and live classes on trending technologies. At Substring, the mission is clear: to prepare students and professionals alike to thrive in a rapidly evolving tech landscape."
};

const manifesto = [
    "To contribute to the growth of a digitally empowered workforce that leads the future of technology.",
    "To bridge the gap between theoretical knowledge and real-world application through hands-on training.",
    "To create a community of skilled developers who are equipped to solve complex challenges and drive innovation.",
    "To make high-quality education in programming and development accessible to aspiring engineers across the nation."
];

const values = [
    { title: "Quality Education", description: "We are committed to delivering top-notch training that is both practical and industry-relevant, ensuring our learners gain real-world skills.", icon: Lightbulb },
    { title: "Accessibility", description: "We believe quality tech education should be available to everyone, regardless of their background or location.", icon: Globe },
    { title: "Growth and Empowerment", description: "We focus on empowering individuals to grow their careers and achieve their full potential through continuous learning.", icon: Rocket },
    { title: "Creativity", description: "Staying updated with the latest technologies and trends is at the core of what we do, ensuring our learners are always ahead of the curve.", icon: Lightbulb },
    { title: "Community Building", description: "We foster a community of learners and educators who support and uplift one another, creating a network of growth and collaboration.", icon: Users },
    { title: "Learner-Centric Approach", description: "Our programs are designed with learners in mind, focusing on personalized guidance and hands-on experience to make learning effective and engaging.", icon: Heart },
];

const differentiators = [
    { title: "Hands-on Learning", description: "Our courses are designed with a focus on practical applications, not just theory. We believe in giving students the skills they need to succeed in the workplace." },
    { title: "Personalized Learning Experience", description: "Every learner is unique. We focus on understanding the needs and goals of each student, providing personalized support and guidance." },
    { title: "Up-to-Date with Industry Trends", description: "The tech industry is constantly evolving. Our curriculum is regularly updated to include the latest tools, technologies, and industry practices." },
    { title: "Expert Trainers", description: "Our instructors are industry professionals who bring real-world experience to the classroom, giving students direct access to valuable insights." },
    { title: "Support Beyond the Classroom", description: "Learning doesn’t stop when the class ends. We offer ongoing support, mentorship, and a community of learners to help students continue growing." },
    { title: "Career Guidance", description: "We are dedicated to our students' success, providing internship placements, corporate training programs, and help to secure their dream jobs." },
];

export function AboutDetail() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 space-y-24">

                {/* History Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 inline-block">
                        {history.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                        {history.content}
                    </p>
                </motion.div>

                {/* Manifesto Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-secondary/20 rounded-3xl p-8 md:p-12"
                >
                    <h2 className="text-3xl font-bold mb-8 text-center">We are Manifesting</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {manifesto.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-4"
                            >
                                <div className="mt-1 bg-primary/10 p-2 rounded-full">
                                    <Target className="w-5 h-5 text-primary" />
                                </div>
                                <p className="text-muted-foreground">{item}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Values Section */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold mb-4">Our Values</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Core principles that guide every decision we make and every course we teach.
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <MagicCard className="h-full hover:shadow-lg transition-shadow border-white/10" gradientColor="rgba(124, 58, 237, 0.15)">
                                    <CardHeader>
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                            <value.icon className="w-6 h-6" />
                                        </div>
                                        <CardTitle className="text-xl">{value.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{value.description}</p>
                                    </CardContent>
                                </MagicCard>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Why Different Section */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold mb-4">Why are we different?</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            We don't just teach code; we build careers. Here is what sets us apart.
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {differentiators.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex gap-4"
                            >
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 dark:text-green-400">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
