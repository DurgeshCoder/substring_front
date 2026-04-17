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
import { Process } from "@/components/sections/Process";
import { FAQ } from "@/components/sections/FAQ";
import { CallToAction } from "@/components/sections/CallToAction";
import { Projects } from "@/components/sections/Projects";

import { Metadata } from "next";
import { Course } from "@/components/sections/courses-data";
import { fetchJSON } from "@/helper/fetchHelper";

export const metadata: Metadata = {
  title: "Best Software Training Institute & Development Company in Lucknow | Substring Technologies",
  description: "Substring Technologies is widely recognized as the best software development company in Lucknow and the best software training institute in Lucknow. We design powerful digital products and deliver expert IT training.",
  keywords: [
    "best software training institute in lucknow",
    "best software development company lucknow",
    "software training lucknow",
    "top IT company in lucknow",
    "Java training lucknow",
    "Web development agency lucknow",
    "Learn Code with Durgesh"
  ],
  openGraph: {
    title: "Best Software Training & Development Company in Lucknow",
    description: "Looking for the best software training institute in Lucknow or a cutting-edge software development company? Substring Technologies is your destination.",
    url: "https://substringtechnologies.com",
    type: "website",
  }
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
      {/* 1. The Hook */}
      <Hero />

      {/* 2. Instant Trust */}
      <PlacementPartners />

      {/* 3. Visual Proof */}
      <PromoVideo />

      {/* 4. Tech Capabilities */}
      <Technologies />

      {/* 5. The Solution */}
      <Training  limit={3} />

      {/* 6. How We Work */}
      <Process />

      {/* 7. Why Us */}
      <WhyChooseUs />

      {/* 8. Services We Offer */}
      <Services />

      {/* 8.5. Featured Development Projects */}
      <Projects limit={3} showExploreMore={true} />

      {/* 9. Social Proof (Numbers) */}
      <Achievements />

      {/* 10. Human Testimonials */}
      <Testimonials />

      {/* 11. About / Story */}
      <About />

      {/* 12. FAQ (SEO + Trust) */}
      <FAQ />

      {/* 13. Community */}
      <Community />

      {/* 14. Contact */}
      <Contact />

      {/* 15. Final CTA Push */}
      <CallToAction />
    </main>
  );
}
