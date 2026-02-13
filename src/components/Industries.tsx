import { Factory, Plane, Car, Cpu } from "lucide-react";

const industries = [
  {
    icon: Factory,
    name: "Manufacturing",
    desc: "Streamline production processes, manage complex BOMs, and optimize supply chain collaboration.",
  },
  {
    icon: Plane,
    name: "Aerospace & Defense",
    desc: "Ensure compliance, traceability, and lifecycle management for mission-critical programs.",
  },
  {
    icon: Car,
    name: "Automotive",
    desc: "Accelerate vehicle development cycles with integrated PLM and engineering change management.",
  },
  {
    icon: Cpu,
    name: "High Tech & Electronics",
    desc: "Manage rapid product iterations, component lifecycles, and multi-site collaboration.",
  },
];

const Industries = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container px-6">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-accent/10 text-accent">
          Industries
        </span>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
          Industries We Serve
        </h2>
        <p className="text-muted-foreground text-sm">
          Deep domain expertise tailored to your industry's unique PLM challenges.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {industries.map((ind) => (
          <div
            key={ind.name}
            className="group p-6 rounded-2xl bg-card border border-border/50 card-elevated text-center"
          >
            <div className="mx-auto w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
              <ind.icon className="h-7 w-7" />
            </div>
            <h3 className="font-display font-semibold text-card-foreground mb-2">{ind.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Industries;
