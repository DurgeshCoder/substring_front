"use client";


import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Course } from "./courses-data";

interface OfflineBatchesProps {
    courses: Course[];
    onEnquire: (courseTitle: string) => void;
}

export function OfflineBatches({ courses, onEnquire }: OfflineBatchesProps) {
    return (
        <div>
            <div className="flex items-center gap-4 mb-12">
                <div className="h-12 w-2 bg-gradient-to-b from-purple-500 to-purple-500/20 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.5)]" />
                <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                    Classroom <span className="text-purple-500">(Offline)</span> Batches
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course, index) => (
                    <div
                        key={course.id}
                    >
                        <div className="group relative h-full overflow-hidden rounded-3xl bg-secondary/20 border border-white/5 transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] hover:-translate-y-2 hover:border-purple-500/30">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative h-56 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                                />
                                <Badge className="absolute top-4 right-4 z-20 backdrop-blur-md bg-background/50 border-white/10 hover:bg-background/80 transition-colors" variant={course.duration === "Premium" ? "default" : "secondary"}>
                                    {course.duration}
                                </Badge>
                            </div>

                            <div className="p-8 relative z-10 flex h-[calc(100%-14rem)] flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-purple-500/10 text-purple-500 border border-purple-500/20 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                                        {course.category}
                                    </span>
                                </div>

                                <h3 className="mb-3 text-2xl font-bold group-hover:text-purple-500 transition-colors line-clamp-2 leading-tight">
                                    {course.title}
                                </h3>

                                <p className="mb-6 text-sm text-muted-foreground line-clamp-3 leading-relaxed group-hover:text-foreground/80 transition-colors">
                                    {course.description}
                                </p>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {course.topics.slice(0, 3).map((topic) => (
                                            <Badge key={topic} variant="outline" className="text-xs bg-background/30 border-white/10 group-hover:border-purple-500/20 transition-colors">
                                                {topic}
                                            </Badge>
                                        ))}
                                        {course.topics.length > 3 && (
                                            <Badge variant="outline" className="text-xs bg-background/30 border-white/10">+{course.topics.length - 3}</Badge>
                                        )}
                                    </div>

                                    <Button
                                        variant="outline"
                                        className="w-full h-12 rounded-xl bg-transparent border-white/10 hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all duration-300 shadow-none group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                                        onClick={() => onEnquire(course.title)}
                                    >
                                        Enquire Now
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
