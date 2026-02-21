"use client";

import { motion } from "framer-motion";

export function PromoVideo() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-primary blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium w-fit mb-6 mx-auto">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Watch How We Build
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/50">
                            See Substring Technologies <span className="text-primary">in Action</span>
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Discover how we build cutting-edge software solutions and shape the future of technology through our expert training programs.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="max-w-5xl mx-auto"
                >
                    <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_0_50px_-12px_rgba(0,0,0,0.3)] shadow-primary/20 bg-white/5 p-2 md:p-3 ring-1 ring-white/10 backdrop-blur-md"
                    >
                        {/* Video container with 16:9 aspect ratio */}
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/50">
                            <iframe

                                src="https://player.cloudinary.com/embed/?cloud_name=dzseu61wi&public_id=substring%2Fsubstring_technologies_clip_bqmglh&profile=cld-looping"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                                allowFullScreen
                                title="Substring Technologies Promo Video"
                                className="absolute top-0 left-0 w-full h-full object-cover"
                            ></iframe>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
