import { Contact } from "@/components/sections/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us - Enquire for Courses | Substring Technologies",
    description: "Get in touch with Substring Technologies for course enquiries, corporate training, or software development services. Visit us in Lucknow or call us.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background">
            <div className="pt-20">
                <Contact />
            </div>
        </main>
    );
}
