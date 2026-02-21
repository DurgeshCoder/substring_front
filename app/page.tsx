import { Hero } from "@/components/sections/Hero";
import { PromoVideo } from "@/components/sections/PromoVideo";
import { About } from "@/components/sections/About";
import { Training } from "@/components/sections/Training";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { Technologies } from "@/components/sections/Technologies";
import { Contact } from "@/components/sections/Contact";
import { Community } from "@/components/sections/Community";
import { Achievements } from "@/components/sections/Achievements";
import { PlacementPartners } from "@/components/sections/PlacementPartners";
import { RetroGrid } from "@/components/ui/retro-grid";

import { Metadata } from "next";
import { Course } from "@/components/sections/courses-data";
import { fetchJSON } from "@/helper/fetchHelper";

export const metadata: Metadata = {
  title: "Best Software Training Institute in Lucknow | Learn Code with Durgesh",
  description: "Join Substring Technologies for top-notch software training in Java, Python, Web Development, and more. Kickstart your career with expert guidance.",
};

export default async function Home() {

  let courses: Course[] = [];
  try {
    courses = await fetchJSON("https://raw.githubusercontent.com/DurgeshCoder/substring_front/refs/heads/data/data/courses.json", false);

  } catch (error) {
    console.error("Error fetching courses:", error);
  }


  return (
    <main className="min-h-screen relative overflow-hidden">
      <RetroGrid />
      <Hero />
      <PromoVideo />
      <Technologies />
      <About />

      <Achievements />
      <PlacementPartners />
      <Training courses={courses} limit={3} />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <Community />
      <Contact />
    </main>
  );
}
