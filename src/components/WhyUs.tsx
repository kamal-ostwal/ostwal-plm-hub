import { Award, Clock, Users, Handshake } from "lucide-react";

const reasons = [
  { icon: Award, title: "15+ Years of Expertise", desc: "Deep domain knowledge across PLM, ERP, and enterprise systems." },
  { icon: Clock, title: "Proven Track Record", desc: "50+ successful projects delivered on time and on budget." },
  { icon: Users, title: "Industry-Trained Consultants", desc: "Specialists in manufacturing, aerospace, and automotive PLM." },
  { icon: Handshake, title: "Strong Consulting Partnership", desc: "We work as an extension of your team, not just a vendor." },
];

const WhyUs = () => (
  <section id="about" className="py-16 md:py-24 bg-muted/50">
    <div className="container px-6">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-accent/10 text-accent">
          Why Choose Us
        </span>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
          Why Businesses Trust Ostwal LLC
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {reasons.map((r) => (
          <div key={r.title} className="text-center p-6">
            <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
              <r.icon className="h-7 w-7" />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-2 text-sm">{r.title}</h3>
            <p className="text-sm text-muted-foreground">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
