import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Calendar } from "lucide-react";
import { SectionTitle } from "@/components/common/SectionTitle";
import { destinations } from "@/data/destinations";

export const Route = createFileRoute("/destinations")({
  component: DestinationsPage,
});

function DestinationsPage() {
  return (
    <div className="bg-background pb-24 pt-32">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionTitle align="center" eyebrow="Where to Go" title="Discover Sri Lanka" subtitle="From ancient citadels to tea-country trains and leopard safaris — explore every corner of the island." />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d) => (
            <Link key={d.id} to="/destinations" className="group overflow-hidden rounded-2xl bg-card shadow-card transition-bounce hover:-translate-y-1 hover:shadow-elegant">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={d.image} alt={d.name} loading="lazy" className="h-full w-full object-cover transition-bounce group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-card" />
                <div className="absolute left-4 top-4 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground backdrop-blur">
                  <MapPin className="mr-1 inline h-3 w-3 text-accent" />
                  {d.region}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-bold text-foreground">{d.name}</h3>
                <p className="text-sm font-medium text-accent">{d.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {d.highlights.slice(0, 3).map((h) => (
                    <span key={h} className="rounded-full bg-muted px-3 py-1 text-xs text-foreground">{h}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  Best time: {d.bestTime}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
