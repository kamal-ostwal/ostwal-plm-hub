import { Database, TrendingUp, Shield, Cpu } from "lucide-react";

const props = [
  {
    icon: Database,
    title: "Keep Product Data Organized",
    desc: "Centralized PLM platforms that unify your product data across the entire lifecycle.",
  },
  {
    icon: TrendingUp,
    title: "Streamline Your Workflows",
    desc: "Optimize processes to reduce time-to-market and eliminate operational bottlenecks.",
  },
  {
    icon: Shield,
    title: "Enterprise-Ready & Secure",
    desc: "Robust integrations with ERP, CAD, and enterprise systems with full data governance.",
  },
  {
    icon: Cpu,
    title: "Future-Ready Analytics",
    desc: "Leverage data analytics and reporting to make smarter, faster business decisions.",
  },
];

const ValueProps = () => (
  <section id="value-props" className="py-16 md:py-24 bg-background">
    <div className="container px-6">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
          We Help Businesses Build Stronger, Smarter Foundations
        </h2>
        <p className="text-muted-foreground">
          Ostwal LLC delivers consulting expertise across the full product &amp; data lifecycle.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {props.map((p) => (
          <div
            key={p.title}
            className="group text-center p-6 rounded-2xl bg-card border border-border/50 card-elevated"
          >
            <div className="mx-auto w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <p.icon className="h-7 w-7" />
            </div>
            <h3 className="font-display font-semibold text-card-foreground mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ValueProps;
