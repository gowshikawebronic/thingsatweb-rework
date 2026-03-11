import Navbar from "../components/layout/Navbar";
import Hero from "../components/Home/Hero";
import Services from "../components/Home/Services";
import Stats from "../components/Home/Stats";
import TechStack from "../components/Home/TechStack";
import Testimonials from "../components/Home/Testimonials";
import CTA from "../components/Home/CTA";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <TechStack />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
