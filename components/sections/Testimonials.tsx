"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { MagicCard } from "@/components/ui/magic-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Need Avatar component

const testimonials = [
    {
        name: "Prince Khan",
        role: "Student",
        content: "You are really doing a very good work for the uplifment of professionals and students like me. I cracked interviews in MNC after learning many things from your video only.",
        rating: 5,
    },
    {
        name: "Kumar Shanu",
        role: "Spring Boot Student",
        content: "Excellent Spring Boot course! Durgesh sir's mentorship is top-notch. Concise, clear, and highly informative. A must for anyone looking to master Spring Boot quickly.",
        rating: 5,
    },
    {
        name: "Shivam Pawar",
        role: "Student",
        content: "Big fan sir. Aap ne mera future bana diya. Aapke course buy kar k Aaj bohot knowledge mili hai. #future save. Love from Gujarat.",
        rating: 5,
    },
    {
        name: "SNxGamingG",
        role: "Docker Student",
        content: "You are the One of the best Teacher Sir. I really think Docker is hard But Now After Completed your Docker Tutorial my concept is Crystal Clear.",
        rating: 5,
    },
    {
        name: "Gulshan Kumar",
        role: "React Student",
        content: "I can't express enough how transformative this React tutorial has been for me. It's engaging, thorough, and practical. Don't miss out on this opportunity to master React!",
        rating: 5,
    },
];

export function Testimonials() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                        Real Stories from <span className="text-primary">Our Students</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                        Join thousands of successful graduates who have transformed their careers with Substring.
                    </p>
                </div>

                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex -ml-4">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4 min-w-0">
                                <MagicCard className="h-full border-white/10" gradientColor="rgba(124, 58, 237, 0.15)">
                                    <CardContent className="p-8 flex flex-col h-full">
                                        <Quote className="w-10 h-10 text-primary/20 mb-6" />
                                        <p className="text-lg mb-6 flex-grow italic text-muted-foreground">
                                            "{testimonial.content}"
                                        </p>
                                        <div className="flex items-center gap-4 mt-auto">
                                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                                                {testimonial.name[0]}
                                            </div>
                                            <div>
                                                <h4 className="font-semibold">{testimonial.name}</h4>
                                                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-1 mt-4">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                            ))}
                                        </div>
                                    </CardContent>
                                </MagicCard>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
