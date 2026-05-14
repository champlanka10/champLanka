import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/common/SectionTitle";
import { packages } from "@/data/packages";
import { whatsappLink } from "@/data/site";

export const Route = createFileRoute("/packages")({
  component: PackagesPage,
});

const categoryColors: Record<string, string> = {
  "Best Seller": "bg-primary text-primary-foreground",
  Popular: "bg-accent text-accent-foreground",
  Cultural: "bg-orange-500 text-white",
  Wildlife: "bg-purple-600 text-white",
  Luxury: "bg-pink-500 text-white",
  Adventure: "bg-emerald-600 text-white",
};

function PackagesPage() {
  return (
    <div className="bg-background pb-24 pt-32">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionTitle align="center" eyebrow="Tour Packages" title="Pick Your Perfect Journey" subtitle="Hand-built itineraries by local experts. All include private transport, hotels and 24/7 support." />
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {packages.map((p) => (
            <article key={p.id} className="grid overflow-hidden rounded-2xl bg-card shadow-card transition-smooth hover:shadow-elegant sm:grid-cols-[40%_60%]">
              <div className="relative">
                <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover" />
                <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${categoryColors[p.category] ?? "bg-primary text-primary-foreground"}`}>
                  {p.category}
                </span>
              </div>
              <div className="flex flex-col p-5">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" /> {p.days} Days / {p.nights} Nights
                </div>
                <h3 className="mt-2 font-display text-xl font-bold leading-tight text-foreground">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
                <ul className="mt-3 grid grid-cols-2 gap-1 text-xs text-foreground">
                  {p.includes.slice(0, 4).map((i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <Check className="mt-0.5 h-3 w-3 flex-none text-accent" /> {i}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-end justify-between pt-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">From</div>
                    <div className="font-display text-2xl font-extrabold text-primary">${p.priceFrom}<span className="text-sm font-normal text-muted-foreground"> / pp</span></div>
                  </div>
                  <Button asChild className="rounded-full bg-gradient-accent font-semibold text-accent-foreground hover:opacity-90">
                    <a href={whatsappLink(`Hi! I'm interested in the "${p.name}" package.`)} target="_blank" rel="noopener noreferrer">Book Now</a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">Want something custom? <Link to="/contact" className="font-semibold text-primary hover:text-accent">Tell us your dream trip.</Link></p>
        </div>
      </div>
    </div>
  );
}
