import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaBanner = () => (
  <section className="py-14 hero-bg">
    <div className="container px-6 text-center">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
        Build a reliable, scalable product data foundation.
      </h2>
      <p className="text-primary-foreground/70 mb-6 max-w-xl mx-auto text-sm">
        Get actionable insights and enterprise-ready PLM solutions — tailored to your industry.
      </p>
      <Button variant="hero" size="lg" asChild>
        <a href="#contact">
          Schedule a Consultation
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
  </section>
);

export default CtaBanner;
