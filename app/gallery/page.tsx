import { Gallery } from "@/components/sections/Gallery";
import { Metadata } from "next";
import { fetchJSON } from "@/helper/fetchHelper";

export const metadata: Metadata = {
    title: "Gallery | Substring Technologies",
    description: "Explore our moments, events, and culture at Substring Technologies.",
};

export default async function GalleryPage() {

    let galleryData = undefined

    try {
        galleryData = await fetchJSON("https://raw.githubusercontent.com/DurgeshCoder/substring_front/refs/heads/data/data/gallery.json",
            false);
    } catch (error) {
        console.log(error);
    }

    return (
        <main className="pt-20">
            {galleryData ? <Gallery galleryData={galleryData} /> : <div>

                <div className="flex flex-col items-center justify-center py-24 text-center">
                    <div className="rounded-full bg-gray-100 dark:bg-zinc-900 p-6 mb-6">
                        <svg
                            className="w-12 h-12 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6.75a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v12.75a1.5 1.5 0 001.5 1.5z"
                            />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">No photos found</h2>
                    <p className="text-gray-500 dark:text-zinc-400 mt-2 max-w-sm mx-auto">
                        We're currently updating our gallery. Please check back later to see our latest moments and events.
                    </p>
                </div>


            </div>}
        </main>
    );
}
