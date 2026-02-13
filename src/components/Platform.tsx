import { Zap } from "lucide-react";

const points = [
  "Full lifecycle visibility from design to retirement",
  "Scalable, enterprise-grade architecture",
  "Integrates with your existing tech stack",
  "Built-in data governance & compliance",
];

const Platform = () => (
  <section className="py-16 hero-bg">
    <div className="container px-6 text-center">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-8">
        What Sets Us Apart
      </h2>
      <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {points.map((p) => (
          <div key={p} className="flex items-start gap-3 text-left">
            <Zap className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
            <span className="text-sm text-primary-foreground/80">{p}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Platform;
