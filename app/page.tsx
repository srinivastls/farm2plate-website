import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/hero";
import Stats from "@/components/stats/stats";
import Features from "@/components/features/features";
import Journey from "@/components/journey/journey";
import Impact from "@/components/impact/impact";
import Traceability from "@/components/traceability/traceability";
import AppShowcase from "@/components/app-showcase/app-showcase";
import Vision from "@/components/vision/vision";
import FAQ from "@/components/faq/faq";
import DownloadCTA from "@/components/download-cta/download-cta";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import Comparison from "@/components/comparison/comparison";
import Trusted from "@/components/trusted/trusted";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
<Hero />
<Trusted />
<Stats />
<Features />
<Comparison />
<Journey />
<Traceability />
<Impact />
<AppShowcase />
<Vision />
{/* <Testimonials /> */}
<FAQ />
<DownloadCTA />
<Contact />
<Footer />
      </main>
    </>
  );
}