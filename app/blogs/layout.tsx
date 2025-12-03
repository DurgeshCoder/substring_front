import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tech Blogs & Coding Tutorials | Learn Code with Durgesh",
    description: "Read the latest tech blogs, coding tutorials, and industry insights from Durgesh Tiwari and the Substring team. Stay updated with the tech world.",
};

export default function BlogsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
