import { Button } from "@/components/ui/button";
import { Mail, MapPin, ArrowRight } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-20 bg-muted/40">
    <div className="container px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-center text-2xl md:text-3xl font-bold text-foreground mb-10">
          Contact Us
        </h2>

        <div className="bg-card rounded-xl p-8 border border-border/40 card-elevated">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <a href="mailto:kamal@ostwal.net" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="text-sm">kamal@ostwal.net</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-sm">United States</span>
              </div>
            </div>

            <div>
              <Button variant="hero" size="lg" asChild className="w-full">
                <a href="mailto:kamal@ostwal.net">
                  Schedule Consultation <ArrowRight className="ml-1.5 h-4 w-4" />
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
