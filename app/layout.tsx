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
  metadataBase: new URL("https://substringtechnologies.com"),
  title: {
    default: "Substring Technologies | Best Software Development Company in Lucknow",
    template: "%s | Substring Technologies",
  },
  description: "Recognized as the best software development company in Lucknow and the best software training institute in Lucknow, we build premium tech solutions and offer elite training.",
  keywords: [
    "best software training institute in lucknow",
    "best software development company lucknow",
    "software training lucknow",
    "IT agency lucknow",
    "java spring boot course",
    "mern stack training lucknow",
    "learn code with durgesh",
    "durgesh tiwari coding",
    "substring technologies"
  ],
  authors: [{ name: "Durgesh Tiwari" }],
  creator: "Substring Technologies",
  publisher: "Substring Technologies",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://substringtechnologies.com",
    title: "Substring Technologies | Top Software Agency & Training in Lucknow",
    description: "Partner with the best software development company in Lucknow. We build highly scalable SaaS products and lead as the best software training institute.",
    siteName: "Substring Technologies",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Substring Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best IT Company & Training Institute in Lucknow | Substring Technologies",
    description: "Empowering Developers & Businesses with Modern Software Engineering. We are Lucknow's top IT experts.",
    creator: "@durgesh_tiwari",
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
