import { CheckCircle2 } from "lucide-react";

const cases = [
  {
    title: "Manufacturing: PLM Migration & Process Optimization",
    challenge: [
      "Legacy PLM system causing data silos across 5 global sites",
      "30+ day engineering change cycle",
      "Manual BOM management with high error rates",
    ],
    results: [
      "Migrated 2M+ product records to Teamcenter with zero data loss",
      "Reduced change cycle time by 60%",
      "Automated BOM validation saving 400+ engineering hours/year",
    ],
  },
  {
    title: "Aerospace: Compliance & Traceability Platform",
    challenge: [
      "Regulatory compliance gaps in product documentation",
      "Disconnected CAD and ERP systems",
      "Lack of end-to-end part traceability",
    ],
    results: [
      "100% audit-ready documentation and traceability",
      "Integrated Windchill with SAP for real-time data sync",
      "Reduced compliance reporting time by 75%",
    ],
  },
];

const CaseStudies = () => (
  <section className="py-16 md:py-24 bg-muted/50">
    <div className="container px-6">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10 text-primary">
          Case Studies
        </span>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
          Case Studies &amp; Business Impact
        </h2>
        <p className="text-muted-foreground text-sm">
          Real-world results from enterprise PLM transformations.
        </p>
      </div>

      <div className="space-y-6 max-w-3xl mx-auto">
        {cases.map((c) => (
          <div key={c.title} className="bg-card rounded-2xl border border-border/50 p-6 md:p-8 card-elevated">
            <h3 className="font-display text-lg font-bold text-card-foreground mb-5">{c.title}</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Challenge</p>
                <ul className="space-y-2">
                  {c.challenge.map((ch) => (
                    <li key={ch} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive flex-shrink-0 mt-1.5" />
                      {ch}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Results</p>
                <ul className="space-y-2">
                  {c.results.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudies;
