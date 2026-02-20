"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

import galleryData from "@/data/gallery.json";

const { categories, galleryItems } = galleryData;

export function Gallery() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredItems = activeCategory === "All"
        ? galleryItems
        : galleryItems.filter(item => item.category === activeCategory);

    return (
        <section className="py-24 bg-background min-h-screen">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
                    >
                        Our Moments
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-lg max-w-2xl mx-auto"
                    >
                        A glimpse into our culture, events, and the people who make it happen.
                    </motion.p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, index) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25"
                                    : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                {/* Masonry Layout */}
                <motion.div
                    layout
                    className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4"
                >
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <motion.div
                                layout
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer mb-4"
                            >
                                <Image
                                    src={item.src}
                                    alt={item.title}
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <span className="text-primary font-medium text-sm mb-1">{item.category}</span>
                                    <h3 className="text-white font-bold text-xl">{item.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
