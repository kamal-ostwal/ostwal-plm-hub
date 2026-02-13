import { Button } from "@/components/ui/button";
import { Mail, MapPin, ArrowRight } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-16 md:py-24 bg-background">
    <div className="container px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-accent/10 text-accent">
            Contact Us
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            Let's Discuss Your PLM Transformation
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            Whether you need a modern data platform or PLM consulting, our team is ready to help you build a stronger foundation.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-10 card-elevated border border-border/50">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-lg font-semibold text-card-foreground mb-5">
                Contact Information
              </h3>
              <div className="space-y-5">
                <a
                  href="mailto:kamal@ostwal.net"
                  className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors group"
                >
                  <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="text-sm">kamal@ostwal.net</span>
                </a>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span className="text-sm">United States</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-muted-foreground text-sm mb-5">
                Schedule a free consultation to explore how Ostwal LLC can accelerate your PLM strategy and deliver measurable ROI.
              </p>
              <Button variant="hero" size="lg" asChild className="w-fit">
                <a href="mailto:kamal@ostwal.net">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
