"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import logo from '@/assets/substring_logo.png'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose
} from "@/components/ui/sheet";
import Image from "next/image";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },

    { name: "Training", href: "/training" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blogs", href: "/blogs" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Openings", href: "/careers" },

];

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const { scrollY } = useScroll();
    const pathname = usePathname();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 20);
    });

    return (
        <motion.header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-3 shadow-sm"
                    : "bg-transparent py-5"
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-9 p-1 h-9 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/25 group-hover:scale-105 transition-transform duration-300">
                        <Image src={logo} alt="Logo" />
                    </div>
                    <span className="font-bold text-xl tracking-tight hidden sm:block">Substring Technologies</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1">
                    <div className="flex items-center gap-1 bg-secondary/50 backdrop-blur-sm px-2 py-1.5 rounded-full border border-white/5">
                        {navLinks.map((link) => {
                            const isActive = link.href === "/" ? pathname === "/" : pathname === link.href || pathname?.startsWith(`${link.href}/`);
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 relative",
                                        isActive
                                            ? "text-primary-foreground"
                                            : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                                    )}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="navbar-active"
                                            className="absolute inset-0 bg-primary rounded-full"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">{link.name}</span>
                                </Link>
                            );
                        })}
                    </div>
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-3">
                    <ModeToggle />
                    <Button variant="default" size="sm" className="rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all" asChild>
                        <Link href="/contact">Get Started</Link>
                    </Button>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden flex items-center gap-3">
                    <ModeToggle />
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <Menu className="w-6 h-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l border-border/50 backdrop-blur-xl bg-background/95">
                            <SheetHeader className="mb-8 text-left">
                                <SheetTitle className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-lg">
                                        S
                                    </div>
                                    <span>Substring</span>
                                </SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col gap-2">
                                {navLinks.map((link) => {
                                    const isActive = link.href === "/" ? pathname === "/" : pathname === link.href || pathname?.startsWith(`${link.href}/`);
                                    return (
                                        <SheetClose key={link.name} asChild>
                                            <Link
                                                href={link.href}
                                                className={cn(
                                                    "flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all",
                                                    isActive
                                                        ? "bg-primary/10 text-primary"
                                                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                                                )}
                                            >
                                                {link.name}
                                                {isActive && <ChevronRight className="w-4 h-4" />}
                                            </Link>
                                        </SheetClose>
                                    );
                                })}
                                <div className="mt-6 pt-6 border-t border-border">
                                    <SheetClose asChild>
                                        <Button className="w-full rounded-xl py-6 text-base shadow-lg shadow-primary/20" asChild>
                                            <Link href="/contact">Get Started Now</Link>
                                        </Button>
                                    </SheetClose>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </motion.header>
    );
}
