import { Layers, BarChart3, Cog, Shield, Zap, RefreshCw } from "lucide-react";

const features = [
  { icon: Layers, label: "Ingest" },
  { icon: Cog, label: "Model" },
  { icon: RefreshCw, label: "Store" },
  { icon: BarChart3, label: "Analyze" },
  { icon: Zap, label: "Integrate" },
  { icon: Shield, label: "Govern" },
];

const differentiators = [
  "End-to-end visibility across the entire product lifecycle",
  "Stay competitive with enterprise-grade, scalable solutions",
  "Quickly deploy solutions that integrate with your existing stack",
  "Enterprise-grade data governance and security built in",
];

const Platform = () => (
  <section className="py-16 md:py-24 bg-muted/50">
    <div className="container px-6">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10 text-primary">
          Our Approach
        </span>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
          A Unified Approach to PLM &amp; Data Management
        </h2>
        <p className="text-muted-foreground text-sm">
          One methodology. Full lifecycle coverage. Built for enterprise scale.
        </p>
      </div>

      {/* Process icons */}
      <div className="flex flex-wrap justify-center gap-4 mb-14 max-w-3xl mx-auto">
        {features.map((f, i) => (
          <div key={f.label} className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <f.icon className="h-5 w-5" />
            </div>
            <span className="text-sm font-medium text-foreground">{f.label}</span>
            {i < features.length - 1 && (
              <span className="text-border ml-1 hidden sm:inline">→</span>
            )}
          </div>
        ))}
      </div>

      {/* Differentiators */}
      <div className="max-w-3xl mx-auto bg-primary rounded-2xl p-8 md:p-10 text-primary-foreground">
        <h3 className="font-display text-lg md:text-xl font-bold mb-6 text-center">
          What Makes Our Approach Different
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {differentiators.map((d) => (
            <div key={d} className="flex items-start gap-3">
              <Zap className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-sm text-primary-foreground/85 leading-relaxed">{d}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Platform;
