import {
  Settings, Database, TrendingUp, Shield, Cog,
  BarChart3, Layers, FileSearch, RefreshCw, Workflow, Users,
} from "lucide-react";

const categories = [
  {
    title: "PLM Implementation",
    items: [
      { icon: Settings, label: "Teamcenter · Windchill · Enovia" },
      { icon: Database, label: "Data Migration & Validation" },
      { icon: Layers, label: "BOM & Configuration Management" },
      { icon: FileSearch, label: "Document & Change Control" },
    ],
  },
  {
    title: "Analytics & Reporting",
    items: [
      { icon: BarChart3, label: "Custom Dashboards" },
      { icon: TrendingUp, label: "KPI & Process Analytics" },
      { icon: Workflow, label: "Workflow Automation" },
      { icon: RefreshCw, label: "Real-Time Integration" },
    ],
  },
  {
    title: "Consulting & Integration",
    items: [
      { icon: Shield, label: "ERP & CAD Integration" },
      { icon: Cog, label: "Custom Development" },
      { icon: Users, label: "Training & Adoption" },
      { icon: Settings, label: "Strategy & Architecture" },
    ],
  },
];

const Services = () => (
  <section id="services" className="py-20 bg-background">
    <div className="container px-6">
      <h2 className="font-display text-center text-2xl md:text-3xl font-bold text-foreground mb-12">
        Services
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {categories.map((cat) => (
          <div key={cat.title} className="rounded-xl bg-card border border-border/40 p-6">
            <h3 className="font-display text-sm font-bold text-card-foreground uppercase tracking-wider mb-5">
              {cat.title}
            </h3>
            <div className="space-y-3">
              {cat.items.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <item.icon className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
