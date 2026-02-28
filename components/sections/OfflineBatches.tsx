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
            <div className="flex items-center gap-3 mb-10">
                <div className="h-8 w-1 bg-violet-500 rounded-full" />
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                    Classroom <span className="text-violet-500">(Offline)</span> Batches
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                    <div key={course.id}>
                        <div className="group relative h-full overflow-hidden rounded-2xl bg-card border border-border/60 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-violet-500/25">

                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                                <Badge className="absolute top-3 right-3 z-10 bg-background/80 backdrop-blur-sm border-border/50 text-foreground text-xs" variant="secondary">
                                    {course.duration}
                                </Badge>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-violet-500/10 text-violet-500 w-fit mb-4">
                                    {course.category}
                                </span>

                                <h3 className="mb-2 text-lg font-bold leading-snug line-clamp-2 group-hover:text-violet-500 transition-colors duration-200">
                                    {course.title}
                                </h3>

                                <p className="mb-5 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                                    {course.description}
                                </p>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-1.5 mb-5">
                                        {course.topics.slice(0, 3).map((topic) => (
                                            <Badge key={topic} variant="outline" className="text-xs border-border/60 bg-secondary/30 font-normal">
                                                {topic}
                                            </Badge>
                                        ))}
                                        {course.topics.length > 3 && (
                                            <Badge variant="outline" className="text-xs border-border/60 bg-secondary/30 font-normal">+{course.topics.length - 3}</Badge>
                                        )}
                                    </div>

                                    <Button
                                        variant="outline"
                                        className="w-full h-11 rounded-xl border-border/60 hover:bg-violet-500 hover:text-white hover:border-violet-500 transition-all duration-200"
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
