"use client";

import { motion } from "framer-motion";
import { MagicCard } from "@/components/ui/magic-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Clock, Briefcase } from "lucide-react";
import Link from "next/link";
import { Spotlight } from "@/components/ui/spotlight";
import careersData from "@/data/careers.json";



export default function CareersPage() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-12 relative overflow-hidden">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        We're Hiring
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Join Our <span className="text-primary">Mission</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg"
                    >
                        Help us empower the next generation of developers. We're looking for passionate individuals to join our remote-first team.
                    </motion.p>
                </div>

                {/* Jobs Grid */}
                <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
                    {careersData.map((job, index) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <MagicCard className="p-8" gradientColor="#262626">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-3 mb-3">
                                            <h3 className="text-2xl font-bold">{job.title}</h3>
                                            <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium border border-border">
                                                {job.type}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                                            <div className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                {job.location}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Briefcase className="w-4 h-4" />
                                                Engineering
                                            </div>
                                        </div>

                                        <p className="text-muted-foreground mb-6 leading-relaxed">
                                            {job.description}
                                        </p>

                                        <div>
                                            <h4 className="font-semibold mb-2 text-sm uppercase tracking-wider text-primary">Requirements</h4>
                                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                                {job.requirements.map((req, i) => (
                                                    <li key={i}>{req}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="flex-shrink-0 pt-2">
                                        <Link href={`https://wa.me/919839466732?text=Hi!!I%20am%20interested%20in%20the%20${encodeURIComponent(job.title)}%20position.`} target="_blank">
                                            <Button className="w-full md:w-auto bg-primary hover:bg-primary/90">
                                                Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </MagicCard>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
}
