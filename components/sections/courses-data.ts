import coursesData from "@/data/courses.json";

export interface Course {
    id: number;
    title: string;
    category: string;
    duration: string;
    type: "Online" | "Offline";
    topics: string[];
    description: string;
    link: string;
    image: string;
}

export const courses = coursesData as Course[];



