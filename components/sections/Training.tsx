"use client";

import { useState } from "react";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EnquireModal } from "@/components/ui/enquire-modal";
import { Search, BookOpen } from "lucide-react";

import { OnlineBatches } from "./OnlineBatches";
import { OfflineBatches } from "./OfflineBatches";
import { Course } from "./courses-data";

const categories = ["All", "Full Stack", "Backend", "Frontend", "Cloud & DevOps", "Data Science"];

interface TrainingProps {
    limit?: number;
    courses: Course[];
}

export function Training({ limit, courses }: TrainingProps) {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState("");

    const handleEnquire = (courseTitle: string) => {
        setSelectedCourse(courseTitle);
        setIsModalOpen(true);
    };

    const filteredCourses = courses?.filter((course) => {
        const matchesCategory = activeCategory === "All" || course.category === activeCategory;
        const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const onlineCourses = limit ? filteredCourses?.filter(c => c.type === "Online").slice(0, limit) : filteredCourses?.filter(c => c.type === "Online");
    const offlineCourses = limit ? filteredCourses?.filter(c => c.type === "Offline").slice(0, limit) : filteredCourses?.filter(c => c.type === "Offline");

    return (
        <section id="training" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <div
                        className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm"
                    >
                        Future-Ready Learning
                    </div>
                    <h2
                        className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50"
                    >
                        Master the <span className="text-primary">Technologies</span><br />of Tomorrow
                    </h2>
                    <p
                        className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                    >
                        Curriculum designed by industry experts to help you master the latest technologies and land your dream job.
                    </p>

                    {limit && (
                        <div className="mt-10">
                            <Link href="/training">
                                <Button size="lg" className="h-14 px-10 text-lg rounded-full shadow-[0_0_30px_rgba(var(--primary),0.3)] hover:shadow-[0_0_50px_rgba(var(--primary),0.5)] transition-all duration-500">
                                    Go to Training
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>

                {!limit && (
                    <>
                        <div
                            className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16 p-4 rounded-2xl bg-secondary/30 backdrop-blur-md border border-white/10"
                        >
                            <div className="flex flex-wrap justify-center gap-2">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                            ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(var(--primary),0.3)] scale-105"
                                            : "bg-background/50 text-muted-foreground hover:bg-background hover:text-foreground"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                            <div className="relative w-full md:w-80 group">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4 group-focus-within:text-primary transition-colors" />
                                <Input
                                    placeholder="Search courses..."
                                    className="pl-10 h-11 bg-background/50 border-white/10 focus:border-primary/50 focus:bg-background transition-all rounded-xl"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>

                        <OnlineBatches courses={onlineCourses} />
                        <OfflineBatches courses={offlineCourses} onEnquire={handleEnquire} />

                        {filteredCourses.length === 0 && (
                            <div className="text-center py-20 text-muted-foreground bg-secondary/20 rounded-3xl border border-dashed border-white/10">
                                <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-20" />
                                <p className="text-xl font-medium">No courses found matching your criteria.</p>
                                <p className="text-sm mt-2">Try adjusting your filters or search query.</p>
                            </div>
                        )}

                        <EnquireModal
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                            courseName={selectedCourse}
                            courses={courses.filter(c => c.type === "Offline").map(c => c.title)}
                        />
                    </>
                )}
            </div>
        </section>
    );
}
