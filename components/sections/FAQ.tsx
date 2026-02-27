"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Do I need prior coding experience to join?",
        answer: "Not necessarily. We offer courses ranging from complete beginner to advanced frontend and backend engineering. Our foundational courses start from scratch, assuming no prior knowledge.",
    },
    {
        question: "How are the classes conducted?",
        answer: "We offer both online and offline (in-person) batches. Online classes are live and interactive, while offline classes are conducted at our primary training center with hands-on labs.",
    },
    {
        question: "Do you provide placement assistance?",
        answer: "Yes! We have a dedicated placement cell that helps with resume building, mock interviews, and connecting you directly with our 50+ hiring partners in the tech industry.",
    },
    {
        question: "Are the training programs certified?",
        answer: "Absolutely. You will receive an industry-recognized certificate of completion from Substring Technologies, validating the skills and projects you have mastered during the course.",
    },
    {
        question: "Is there mentorship available outside of class hours?",
        answer: "Yes, our community Discord and dedicated TA (Teaching Assistant) support means you can get your doubts resolved quickly even when you're practicing on weekends.",
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-background border-t border-border/40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4"
                    >
                        Frequently Asked <span className="text-primary">Questions</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground font-medium"
                    >
                        Everything you need to know about our courses and mentorship.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-card rounded-2xl border border-border/50 p-6 shadow-sm"
                >
                    <div className="divide-y divide-border/50">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div key={index} className="py-4">
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="flex w-full items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
                                    >
                                        <span className="text-lg font-semibold tracking-tight text-foreground hover:text-primary transition-colors">
                                            {faq.question}
                                        </span>
                                        <ChevronDown
                                            className={`h-5 w-5 text-muted-foreground transition-transform duration-200 \${isOpen ? 'rotate-180 text-primary' : ''}`}
                                        />
                                    </button>
                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial="collapsed"
                                                animate="open"
                                                exit="collapsed"
                                                variants={{
                                                    open: { opacity: 1, height: "auto", marginTop: 12 },
                                                    collapsed: { opacity: 0, height: 0, marginTop: 0 }
                                                }}
                                                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                                                className="overflow-hidden"
                                            >
                                                <p className="text-muted-foreground text-base leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
