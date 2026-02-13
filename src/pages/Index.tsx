import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Platform from "@/components/Platform";
import CaseStudies from "@/components/CaseStudies";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <main className="min-h-screen">
    <Header />
    <Hero />
    <ValueProps />
    <WhyUs />
    <Services />
    <Industries />
    <Platform />
    <CaseStudies />
    <CtaBanner />
    <Contact />
    <Footer />
  </main>
);

export default Index;
