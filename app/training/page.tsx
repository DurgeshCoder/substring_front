import { Course } from "@/components/sections/courses-data";
import { Training } from "@/components/sections/Training";
import { fetchJSON } from "@/helper/fetchHelper";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Explore Our Coding Courses and Live Batches - Java, MERN, Python | Substring Technologies Lucknow",
    description: "Browse our industry-leading coding courses in Java, Spring Boot, React, Angular, Python, and Data Science. Online and Offline batches available.",
    keywords: ["java course", "spring boot training", "mern stack course", "python programming", "data science course", "offline coding classes lucknow"],
};

export default async function CoursesPage() {




    return (
        <main className="min-h-screen bg-background">
            <div className="pt-20">
                <Training  />
            </div>
        </main>
    );
}
