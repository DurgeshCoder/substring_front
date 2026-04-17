import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Development & Engineering Services",
  description: "Premium software development, web applications, cloud infrastructure, AI integration, and microservices engineered right here by Substring Technologies.",
  keywords: ["software development", "web development", "cloud solutions", "devops", "AI integration", "tech agency", "SaaS development"],
  openGraph: {
    title: "Software Development | Substring Technologies",
    description: "Premium software development, cloud infrastructure, and AI integration engineered for global scale.",
    url: "https://substringtechnologies.com/development",
  }
};

export default function DevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
