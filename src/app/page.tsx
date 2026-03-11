import Navbar from "../components/layout/Navbar";
import Hero from "../components/Home/Hero";
import Services from "../components/Home/Services";
import Stats from "../components/Home/Stats";
import TechStack from "../components/Home/TechStack";
import Testimonials from "../components/Home/Testimonials";
import CTA from "../components/Home/CTA";
import Footer from "../components/layout/Footer";
import BlogAccordion from "@/components/Home/Newsnew";

export default function Home() {
  return (
    <>

      <Hero />
      <Services />
      <Stats />
      <BlogAccordion />
      <TechStack />
      <Testimonials />
      <CTA />

    </>
  );
}
