import {
  Settings, Database, TrendingUp, Shield, Users, Cog,
  CheckCircle2, BarChart3, Layers, FileSearch, RefreshCw, Workflow,
} from "lucide-react";

const categories = [
  {
    title: "PLM Implementation & Management",
    subtitle: "Build your product data backbone with leading platforms.",
    items: [
      { icon: Settings, label: "Teamcenter / Windchill / Enovia" },
      { icon: Database, label: "Data Migration & Validation" },
      { icon: Layers, label: "BOM Management & Configuration" },
      { icon: FileSearch, label: "Document & Change Management" },
    ],
    outcomes: [
      "Centralized product data across the lifecycle",
      "Reduced engineering change cycle time",
      "Improved cross-functional collaboration",
    ],
  },
  {
    title: "Analytics & BI Reporting",
    subtitle: "Turn your product data into actionable insights.",
    items: [
      { icon: BarChart3, label: "Custom Dashboard & Reporting" },
      { icon: TrendingUp, label: "KPI Tracking & Process Analytics" },
      { icon: Workflow, label: "Workflow Automation" },
      { icon: RefreshCw, label: "Real-Time Data Integration" },
    ],
    outcomes: [
      "Faster, more informed decisions",
      "Automated reporting & reduced manual effort",
      "End-to-end visibility into product performance",
    ],
  },
  {
    title: "System Integration & Consulting",
    subtitle: "Connect your enterprise systems for unified data flow.",
    items: [
      { icon: Shield, label: "ERP & CAD Integration" },
      { icon: Cog, label: "Custom Extension Development" },
      { icon: Users, label: "Training & Change Management" },
      { icon: Settings, label: "Architecture & Strategy Consulting" },
    ],
    outcomes: [
      "Seamless data flow across enterprise apps",
      "Maximized ROI on existing systems",
      "Empowered teams through tailored training",
    ],
  },
];

const Services = () => (
  <section id="services" className="py-16 md:py-24 bg-background">
    <div className="container px-6">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-accent/10 text-accent">
          Solutions We Deliver
        </span>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
          Comprehensive PLM &amp; IT Consulting Services
        </h2>
        <p className="text-muted-foreground">
          From strategy to execution, we provide full-spectrum services that drive measurable business outcomes.
        </p>
      </div>

      <div className="space-y-10 max-w-4xl mx-auto">
        {categories.map((cat) => (
          <div key={cat.title} className="bg-card rounded-2xl border border-border/50 p-6 md:p-8 card-elevated">
            <h3 className="font-display text-lg md:text-xl font-bold text-card-foreground mb-1">
              {cat.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-5">{cat.subtitle}</p>

            <div className="grid sm:grid-cols-2 gap-3 mb-5">
              {cat.items.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/5 border border-primary/10"
                >
                  <item.icon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Business Outcomes
              </p>
              <ul className="space-y-1.5">
                {cat.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
