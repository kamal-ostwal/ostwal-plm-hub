import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen hero-bg flex items-center justify-center overflow-hidden">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10 px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up opacity-0">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary-foreground/10 text-primary-foreground/90 backdrop-blur-sm border border-primary-foreground/20">
              IT Consulting Excellence
            </span>
          </div>
          
          <h1 className="animate-fade-in-up opacity-0 animate-delay-100 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Transform Your Business with{" "}
            <span className="text-accent">PLM Solutions</span>
          </h1>
          
          <p className="animate-fade-in-up opacity-0 animate-delay-200 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Ostwal LLC delivers expert IT consulting specialized in Product Lifecycle Management. 
            We help enterprises streamline operations, reduce costs, and accelerate innovation.
          </p>
          
          <div className="animate-fade-in-up opacity-0 animate-delay-300 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#services">
                Our Services
              </a>
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <button 
          onClick={scrollToServices}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          aria-label="Scroll to services"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
