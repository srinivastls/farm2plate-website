import TechHero from "@/components/technology/tech-hero";
import Architecture from "@/components/technology/architecture";
import TechStack from "@/components/technology/tech-stack";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";


export default function TechnologyPage() {
  return (
    <>
      <Navbar />
      <TechHero />
      <Architecture />
      <TechStack />
      <Footer />
    </>
  );
}