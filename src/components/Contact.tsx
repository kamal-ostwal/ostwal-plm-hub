import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent">
              Get In Touch
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Transform Your PLM?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Let's discuss how we can help optimize your product lifecycle management 
              and drive your business forward.
            </p>
          </div>
          
          <div className="bg-card rounded-2xl p-8 md:p-12 card-elevated border border-border/50">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display text-xl font-semibold text-card-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <a 
                    href="mailto:contact@ostwalllc.com" 
                    className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                    <span>contact@ostwalllc.com</span>
                  </a>
                  <a 
                    href="tel:+1234567890" 
                    className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <Phone className="h-5 w-5" />
                    </div>
                    <span>+1 (234) 567-890</span>
                  </a>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <span>United States</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col justify-center">
                <p className="text-muted-foreground mb-6">
                  Schedule a free consultation to discuss your PLM needs and how 
                  Ostwal LLC can help you achieve your goals.
                </p>
                <Button variant="hero" size="lg" asChild className="w-fit">
                  <a href="mailto:contact@ostwalllc.com">
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
