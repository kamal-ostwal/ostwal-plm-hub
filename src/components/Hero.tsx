import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => (
  <section className="relative min-h-[80vh] hero-bg flex items-center overflow-hidden">
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent rounded-full blur-[120px]" />
    </div>

    <div className="container relative z-10 px-6 py-24 md:py-32">
      <div className="max-w-2xl">
        <h1 className="animate-fade-in-up opacity-0 font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-primary-foreground leading-[1.08] mb-5">
          PLM Solutions for Modern Enterprises
        </h1>

        <p className="animate-fade-in-up opacity-0 animate-delay-100 text-primary-foreground/65 max-w-lg mb-8 leading-relaxed">
          Streamline product lifecycles. Unify your data. Accelerate innovation.
        </p>

        <div className="animate-fade-in-up opacity-0 animate-delay-200 flex gap-3">
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">Get Started <ArrowRight className="ml-1.5 h-4 w-4" /></a>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a href="#services">Our Services</a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
