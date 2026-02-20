import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, MapPin, Phone, Youtube, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-background border-t border-border pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl">
                                S
                            </div>
                            <span className="font-bold text-xl tracking-tight">Substring Technologies</span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Empowering developers and businesses with modern software engineering training and solutions.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link href="https://www.youtube.com/@LearnCodeWithDurgesh" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                <Youtube className="w-5 h-5" />
                            </Link>
                            <Link href="https://www.linkedin.com/in/durgeshkumartiwari/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="https://www.instagram.com/learncodewithdurgesh/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="https://t.me/learncodewithdurgesh" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="#training" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Training
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Training</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Java Full Stack
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Spring Boot Microservices
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Data Science & AI
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Cloud & DevOps
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <MapPin className="w-5 h-5 shrink-0 text-primary" />
                                <span>Lucknow, UP, INDIA 226028</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-muted-foreground">
                                <Mail className="w-5 h-5 shrink-0 text-primary" />
                                <span>support@substringtechnologies.com</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-muted-foreground">
                                <Phone className="w-5 h-5 shrink-0 text-primary" />
                                <span>+91-9839466732</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Substring Technologies. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
