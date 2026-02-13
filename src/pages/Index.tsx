import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import Platform from "@/components/Platform";
import Industries from "@/components/Industries";
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
    <Platform />
    <Industries />
    <CaseStudies />
    <CtaBanner />
    <Contact />
    <Footer />
  </main>
);

export default Index;
