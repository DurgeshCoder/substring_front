import { AboutDetail } from "@/components/sections/AboutDetail";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us - Our Mission & Expert Team | Substring Technologies",
    description: "Learn about Substring Technologies, our mission to empower developers, and our expert team led by Durgesh Tiwari. We are committed to quality education.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background">
            <div className="pt-20">
                <AboutDetail />
                <WhyChooseUs />
            </div>
        </main>
    );
}
