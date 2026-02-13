import { CheckCircle2 } from "lucide-react";

const cases = [
  {
    title: "Manufacturing: PLM Migration",
    result: "2M+ records migrated, 60% faster change cycles, 400+ hrs saved/year.",
  },
  {
    title: "Aerospace: Compliance Platform",
    result: "100% audit-ready docs, 75% faster compliance reporting.",
  },
];

const CaseStudies = () => (
  <section className="py-20 bg-background">
    <div className="container px-6">
      <h2 className="font-display text-center text-2xl md:text-3xl font-bold text-foreground mb-12">
        Results
      </h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {cases.map((c) => (
          <div key={c.title} className="rounded-xl bg-card border border-border/40 p-6">
            <h3 className="font-display text-sm font-bold text-card-foreground mb-3">{c.title}</h3>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground leading-relaxed">{c.result}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudies;
