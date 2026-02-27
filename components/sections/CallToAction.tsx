"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CallToAction() {
    return (
        <section className="relative py-24 sm:py-32 overflow-hidden bg-background">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative isolate overflow-hidden bg-foreground px-6 py-24 text-center shadow-2xl rounded-3xl sm:px-16"
                >
                    <h2 className="mx-auto max-w-2xl text-4xl font-extrabold tracking-tight text-background sm:text-5xl">
                        Ready to level up your engineering career?
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg font-medium leading-8 text-background/80">
                        Join thousands of developers who have transformed their careers through our industry-leading curriculums and mentorship.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6 flex-col sm:flex-row gap-y-4">
                        <Button size="lg" className="h-14 px-8 text-base bg-background text-foreground hover:bg-background/90 rounded-full transition-transform hover:scale-105 w-full sm:w-auto" asChild>
                            <Link href="/training">
                                Get started today <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="link" className="text-background hover:text-background/80 text-base" asChild>
                            <Link href="/contact">
                                Contact Sales <span aria-hidden="true" className="ml-1">→</span>
                            </Link>
                        </Button>
                    </div>

                    {/* Subtle aesthetic radial gradient for depth */}
                    <div className="absolute -top-24 -left-20 -z-10 transform-gpu blur-3xl" aria-hidden="true">
                        <div className="aspect-1097/845 w-274.25 bg-linear-to-tr from-primary/40 to-muted opacity-40" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
