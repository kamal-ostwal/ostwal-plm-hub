import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Deep expertise in leading PLM platforms including Teamcenter, Windchill, and Enovia",
  "Proven track record with Fortune 500 manufacturing companies",
  "Agile methodology ensuring on-time, on-budget delivery",
  "Dedicated support team available when you need them",
  "Industry-specific best practices and templates",
  "ROI-focused approach with measurable outcomes"
];

const WhyUs = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-muted/50">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Trusted PLM Partner
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At Ostwal LLC, we combine deep technical expertise with industry knowledge 
              to deliver PLM solutions that truly transform how you manage product data 
              and processes. Our consultants bring years of hands-on experience across 
              diverse manufacturing sectors.
            </p>
            
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="font-display text-7xl md:text-8xl font-bold text-primary mb-2">15+</div>
                <p className="text-xl text-muted-foreground">Years of Experience</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-6 shadow-lg border border-border">
              <div className="font-display text-3xl font-bold text-accent mb-1">50+</div>
              <p className="text-sm text-muted-foreground">Projects Delivered</p>
            </div>
            <div className="absolute -top-6 -right-6 bg-card rounded-xl p-6 shadow-lg border border-border">
              <div className="font-display text-3xl font-bold text-accent mb-1">100%</div>
              <p className="text-sm text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
