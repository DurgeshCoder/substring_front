import { Training } from "@/components/sections/Training";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Explore Our Coding Courses - Java, MERN, Python | Substring",
    description: "Browse our industry-leading coding courses in Java, Spring Boot, React, Angular, Python, and Data Science. Online and Offline batches available.",
    keywords: ["java course", "spring boot training", "mern stack course", "python programming", "data science course", "offline coding classes lucknow"],
};

export default function CoursesPage() {
    return (
        <main className="min-h-screen bg-background">
            <div className="pt-20">
                <Training />
            </div>
        </main>
    );
}
