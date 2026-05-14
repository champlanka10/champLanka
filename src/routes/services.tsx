import { createFileRoute } from "@tanstack/react-router";
import { SectionTitle } from "@/components/common/SectionTitle";
import { services } from "@/data/services";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="bg-background pb-24 pt-32">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionTitle align="center" eyebrow="What We Do" title="End-to-end travel services" subtitle="Everything you need for a seamless Sri Lanka trip — under one trusted local team." />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.id} className="rounded-2xl bg-card p-6 shadow-card transition-bounce hover:-translate-y-1 hover:shadow-elegant">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-accent text-accent-foreground shadow-soft">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-foreground">{s.title}</h3>
              <p className="text-sm font-medium text-accent">{s.short}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
