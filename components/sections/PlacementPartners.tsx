"use client";

import Marquee from "@/components/ui/marquee";
import { motion } from "framer-motion";

const companies = [
    "Google", "Microsoft", "Amazon", "Netflix", "Meta",
    "Adobe", "Salesforce", "Uber", "Atlassian", "LinkedIn",
    "TCS", "Infosys", "Wipro", "HCL", "Accenture",
    "Capgemini", "Deloitte", "IBM", "Oracle", "Samsung",
    "Walmart", "Flipkart", "Paytm", "Zomato", "Swiggy"
];

const CompanyCard = ({ name }: { name: string }) => {
    return (
        <div className="mx-4 flex items-center justify-center rounded-xl border border-border bg-secondary/30 px-8 py-4 backdrop-blur-sm transition-all hover:bg-secondary/60 hover:scale-105 cursor-default">
            <span className="text-lg font-semibold text-foreground/80">{name}</span>
        </div>
    );
};

export function PlacementPartners() {
    return (
        <section className="py-20 bg-background overflow-hidden">
            <div className="container mx-auto px-4 mb-12 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-4"
                >
                    Top Companies <span className="text-primary">Our Students Work At</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-muted-foreground max-w-2xl mx-auto"
                >
                    Our graduates are making an impact at leading tech companies worldwide.
                </motion.p>
            </div>

            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                <Marquee pauseOnHover className="[--duration:40s]">
                    {companies.slice(0, Math.ceil(companies.length / 2)).map((company) => (
                        <CompanyCard key={company} name={company} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:40s] mt-4">
                    {companies.slice(Math.ceil(companies.length / 2)).map((company) => (
                        <CompanyCard key={company} name={company} />
                    ))}
                </Marquee>

                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
            </div>
        </section>
    );
}
