import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaBanner = () => (
  <section className="py-14 bg-accent">
    <div className="container px-6 text-center">
      <h2 className="font-display text-xl md:text-2xl font-bold text-accent-foreground mb-2">
        Ready to modernize your PLM?
      </h2>
      <p className="text-accent-foreground/70 text-sm mb-6">
        Let's build your product data foundation together.
      </p>
      <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
        <a href="#contact">
          Schedule a Consultation <ArrowRight className="ml-1.5 h-4 w-4" />
        </a>
      </Button>
    </div>
  </section>
);

export default CtaBanner;
