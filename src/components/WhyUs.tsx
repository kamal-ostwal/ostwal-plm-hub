import { Award, Clock, Users, Handshake } from "lucide-react";

const items = [
  { icon: Award, stat: "15+", label: "Years Experience" },
  { icon: Clock, stat: "50+", label: "Projects Delivered" },
  { icon: Users, stat: "100%", label: "Client Satisfaction" },
  { icon: Handshake, stat: "Fortune 500", label: "Clients Served" },
];

const WhyUs = () => (
  <section id="about" className="py-20 bg-muted/40">
    <div className="container px-6">
      <h2 className="font-display text-center text-2xl md:text-3xl font-bold text-foreground mb-12">
        Why Ostwal LLC
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
        {items.map((r) => (
          <div key={r.label} className="text-center py-6">
            <r.icon className="mx-auto h-6 w-6 text-accent mb-3" />
            <div className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">{r.stat}</div>
            <p className="text-xs text-muted-foreground tracking-wide uppercase">{r.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
