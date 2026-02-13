import { Settings, Database, TrendingUp, Shield, Users, Cog } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "PLM Implementation",
    description: "End-to-end implementation of leading PLM platforms tailored to your business processes and workflows."
  },
  {
    icon: Database,
    title: "Data Migration",
    description: "Seamless migration of your product data with complete integrity, validation, and minimal downtime."
  },
  {
    icon: TrendingUp,
    title: "Process Optimization",
    description: "Analyze and optimize your product development processes to reduce time-to-market and costs."
  },
  {
    icon: Shield,
    title: "System Integration",
    description: "Connect your PLM system with ERP, CAD, and other enterprise applications for unified data flow."
  },
  {
    icon: Users,
    title: "Training & Support",
    description: "Comprehensive training programs and ongoing support to maximize your team's productivity."
  },
  {
    icon: Cog,
    title: "Custom Development",
    description: "Build custom extensions and integrations to meet your unique business requirements."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent">
            What We Do
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive PLM Services
          </h2>
          <p className="text-muted-foreground text-lg">
            From strategy to implementation, we provide full-spectrum PLM consulting services 
            that drive measurable business outcomes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group p-8 rounded-2xl bg-card card-elevated border border-border/50 hover:border-accent/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-semibold text-card-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
