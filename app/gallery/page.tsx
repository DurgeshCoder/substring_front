import { Gallery } from "@/components/sections/Gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gallery | Substring Technologies",
    description: "Explore our moments, events, and culture at Substring Technologies.",
};

export default function GalleryPage() {
    return (
        <main className="pt-20">
            <Gallery />
        </main>
    );
}
