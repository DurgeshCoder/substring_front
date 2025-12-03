import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Substring Technologies | Best Software Training & Development Company",
    template: "%s | Substring Technologies",
  },
  description: "Master coding with Substring Technologies. We offer industry-leading training in Java, Spring Boot, MERN Stack, and more. Led by Durgesh Tiwari.",
  keywords: ["coding", "programming", "java course", "spring boot", "mern stack", "learn code with durgesh", "software training lucknow", "best coding institute", "durgesh tiwari", "substring technologies"],
  authors: [{ name: "Durgesh Tiwari" }],
  creator: "Substring Technologies",
  publisher: "Substring Technologies",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://substringtechnologies.com",
    title: "Substring Technologies | Best Software Training & Development Company",
    description: "Empowering Developers & Businesses with Modern Software Engineering. Expert-led training and premium software development services.",
    siteName: "Substring Technologies",
    images: [
      {
        url: "/og-image.jpg", // Assuming an OG image exists or will be added, good practice to have the tag
        width: 1200,
        height: 630,
        alt: "Substring Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Substring Technologies | Best Software Training & Development Company",
    description: "Empowering Developers & Businesses with Modern Software Engineering.",
    creator: "@durgesh_tiwari", // Placeholder or actual handle if known
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/ui/scroll-to-top";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LiveBatchNotice } from "@/components/ui/live-batch-notice";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <LiveBatchNotice />
          {children}
          <ScrollToTop />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
