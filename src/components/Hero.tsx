import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] hero-bg flex items-center overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="animate-fade-in-up opacity-0">
            <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-wider uppercase rounded-full bg-accent/20 text-accent border border-accent/30">
              IT Consulting &amp; PLM Experts
            </span>
          </div>

          <h1 className="animate-fade-in-up opacity-0 animate-delay-100 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] mb-5">
            Transform Your Business with Data, PLM &amp; Analytics
          </h1>

          <p className="animate-fade-in-up opacity-0 animate-delay-200 text-base md:text-lg text-primary-foreground/75 max-w-xl mb-8 leading-relaxed">
            End-to-end PLM solutions, data platforms, and IT consulting to help enterprises streamline operations, reduce costs, and accelerate innovation.
          </p>

          <div className="animate-fade-in-up opacity-0 animate-delay-300 flex flex-col sm:flex-row gap-3">
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">
                Request a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#services">Explore Solutions</a>
            </Button>
          </div>

          <div className="animate-fade-in-up opacity-0 animate-delay-400 mt-10 flex items-center gap-6 text-primary-foreground/60 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Trusted by enterprises
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              15+ years experience
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={() => document.getElementById("value-props")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-primary-foreground/50 hover:text-primary-foreground transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-7 w-7" />
      </button>
    </section>
  );
};

export default Hero;
