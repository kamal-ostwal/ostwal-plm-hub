import { Factory, Plane, Car, Cpu } from "lucide-react";

const industries = [
  { icon: Factory, name: "Manufacturing" },
  { icon: Plane, name: "Aerospace & Defense" },
  { icon: Car, name: "Automotive" },
  { icon: Cpu, name: "High Tech" },
];

const Industries = () => (
  <section className="py-20 bg-muted/40">
    <div className="container px-6">
      <h2 className="font-display text-center text-2xl md:text-3xl font-bold text-foreground mb-12">
        Industries We Serve
      </h2>
      <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
        {industries.map((ind) => (
          <div key={ind.name} className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border/40">
            <ind.icon className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium text-foreground">{ind.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Industries;
