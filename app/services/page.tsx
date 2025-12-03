import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Software Development & Corporate Training Services | Substring",
    description: "We provide top-tier software development services and corporate training solutions. Transform your business with our expert technical solutions.",
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-background">
            <div className="pt-20">
                <Services />
                <Projects />
            </div>
        </main>
    );
}
