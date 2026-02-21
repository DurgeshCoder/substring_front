"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { X, ZoomIn, ChevronLeft, ChevronRight, LayoutGrid } from "lucide-react";

import galleryData from "@/data/gallery.json";

const { categories, galleryItems } = galleryData;

// Group items by category, disregarding "All"
const groupedGallery = categories
    .filter((c) => c !== "All")
    .map((category) => ({
        category,
        items: galleryItems.filter((item) => item.category === category),
    }))
    .filter((group) => group.items.length > 0);

export function Gallery() {
    const [lightboxItems, setLightboxItems] = useState<typeof galleryItems>([]);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleNext = useCallback(() => {
        setSelectedIndex((prev) =>
            prev !== null ? (prev + 1) % lightboxItems.length : null
        );
    }, [lightboxItems]);

    const handlePrev = useCallback(() => {
        setSelectedIndex((prev) =>
            prev !== null ? (prev === 0 ? lightboxItems.length - 1 : prev - 1) : null
        );
    }, [lightboxItems]);

    // Keyboard support for Lightbox
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;
            if (e.key === "Escape") setSelectedIndex(null);
            if (e.key === "ArrowRight") handleNext();
            if (e.key === "ArrowLeft") handlePrev();
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [selectedIndex, handleNext, handlePrev]);

    // Prevent scrolling when Lightbox is open
    useEffect(() => {
        if (selectedIndex !== null) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [selectedIndex]);

    return (
        <section className="py-24 relative min-h-screen overflow-hidden bg-background">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px] -z-10 pointer-events-none" />

            <div className="container mx-auto px-4 z-10 relative">
                <div className="text-center mb-20 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-sm font-medium text-primary tracking-wider uppercase">
                            Gallery
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-extrabold tracking-tight"
                    >
                        Our{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-cyan-400">
                            Moments
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        A glimpse into our culture, events, and the innovative people who
                        make the magic happen.
                    </motion.p>
                </div>

                <div className="space-y-24 max-w-8xl mx-auto">
                    {/* Render Category Blocks */}
                    {groupedGallery.map((group, groupIdx) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="bg-card/30 rounded-3xl p-6 md:p-10 border border-border/50 backdrop-blur-md shadow-lg"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
                                    <LayoutGrid className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold tracking-tight">
                                        {group.category}
                                    </h3>
                                    <p className="text-muted-foreground mt-1">
                                        {group.items.length} Photos
                                    </p>
                                </div>
                            </div>

                            {/* Grid - Masonry Layout */}
                            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                                {group.items.map((item, index) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                        className="break-inside-avoid relative group/card rounded overflow-hidden cursor-pointer border border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/10"
                                        onClick={() => {
                                            setLightboxItems(group.items);
                                            setSelectedIndex(index);
                                        }}
                                    >
                                        <div className="relative overflow-hidden bg-muted">
                                            <Image
                                                src={item.src}
                                                alt={item.title}
                                                width={800}
                                                height={600}
                                                className="w-full h-auto object-cover transition-transform duration-700 group-hover/card:scale-105"
                                                loading="lazy"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        </div>

                                        {/* Overlay On Hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover/card:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                                            <div className="transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
                                                <div className="flex items-center justify-between mb-3">
                                                    <span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-semibold backdrop-blur-md">
                                                        {item.category}
                                                    </span>
                                                    <div className="p-2 rounded-full bg-white/10 backdrop-blur-md opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 delay-100">
                                                        <ZoomIn className="w-4 h-4 text-white" />
                                                    </div>
                                                </div>
                                                <h3 className="text-white font-bold text-xl drop-shadow-lg">
                                                    {item.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedIndex !== null && lightboxItems[selectedIndex] && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/95 backdrop-blur-xl"
                        onClick={() => setSelectedIndex(null)}
                    >
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedIndex(null);
                            }}
                            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-foreground hover:bg-white/20 transition-colors z-[110] backdrop-blur-md border border-white/20"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Navigation Arrows */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handlePrev();
                            }}
                            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-foreground hover:bg-white/20 transition-colors z-[110] backdrop-blur-md border border-white/20 shadow-lg"
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </button>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleNext();
                            }}
                            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-foreground hover:bg-white/20 transition-colors z-[110] backdrop-blur-md border border-white/20 shadow-lg"
                        >
                            <ChevronRight className="w-8 h-8" />
                        </button>

                        <motion.div
                            key={selectedIndex}
                            initial={{ scale: 0.95, opacity: 0, x: 20 }}
                            animate={{ scale: 1, opacity: 1, x: 0 }}
                            exit={{ scale: 0.95, opacity: 0, x: -20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-w-[90vw] max-h-[85vh] w-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative group w-full h-full flex flex-col items-center">
                                <Image
                                    src={lightboxItems[selectedIndex].src}
                                    alt={lightboxItems[selectedIndex].title}
                                    width={1920}
                                    height={1080}
                                    className="max-h-[80vh] w-auto object-contain rounded-2xl shadow-2xl border border-border/50"
                                    priority // High priority for lightbox
                                />
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-8 py-4 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 flex flex-col items-center gap-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 shadow-2xl">
                                    <h3 className="text-white font-bold text-lg">
                                        {lightboxItems[selectedIndex].title}
                                    </h3>
                                    <p className="text-primary text-sm font-medium">
                                        {selectedIndex + 1} of {lightboxItems.length}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
