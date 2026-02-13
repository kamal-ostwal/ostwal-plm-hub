import { Database, TrendingUp, Shield, Cpu } from "lucide-react";

const items = [
  { icon: Database, title: "Data Centralization", desc: "Unified product data across the lifecycle." },
  { icon: TrendingUp, title: "Process Optimization", desc: "Faster time-to-market, lower costs." },
  { icon: Shield, title: "Enterprise Integration", desc: "Seamless ERP, CAD & PLM connectivity." },
  { icon: Cpu, title: "Analytics & Insights", desc: "Data-driven decisions at every stage." },
];

const ValueProps = () => (
  <section id="value-props" className="py-20 bg-background">
    <div className="container px-6">
      <h2 className="font-display text-center text-2xl md:text-3xl font-bold text-foreground mb-12">
        How We Help
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
        {items.map((p) => (
          <div key={p.title} className="group text-center px-5 py-8 rounded-xl bg-card border border-border/40 card-elevated">
            <div className="mx-auto w-12 h-12 rounded-lg bg-primary/8 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
              <p.icon className="h-6 w-6" />
            </div>
            <h3 className="font-display font-semibold text-sm text-card-foreground mb-1.5">{p.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ValueProps;
