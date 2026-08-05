import AboutHero from "@/components/about/about-hero";
import Story from "@/components/about/story";
import Mission from "@/components/about/mission";
import Values from "@/components/about/values";
import Timeline from "@/components/about/timeline";
import AboutCTA from "@/components/about/about-cta";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

export default function AboutPage() {
  return (
    
    <>
    <Navbar />
      <AboutHero />
      <Story />
      <Mission />
      <Values />
      <Timeline />
      <AboutCTA />
      <Footer />
    </>
  );
}