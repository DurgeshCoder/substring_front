import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers at Substring - Join Our Team | Job Openings",
    description: "Explore career opportunities at Substring Technologies. We are hiring for Frontend, Backend, and Video Editor roles. Apply now and grow with us.",
    keywords: ["jobs in lucknow", "software developer jobs", "hiring developers", "career at substring", "tech jobs"],
};

export default function CareersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
