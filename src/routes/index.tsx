import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Star, MapPin, Send, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/common/SectionTitle";
import { destinations } from "@/data/destinations";
import { packages } from "@/data/packages";
import { testimonials } from "@/data/testimonials";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blog";
import { whatsappLink } from "@/data/site";
import heroImg from "@/assets/hero-coast.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const categoryColors: Record<string, string> = {
  "Heritage": "bg-primary text-primary-foreground",
  Popular: "bg-accent text-accent-foreground",
  Nature: "bg-orange-500 text-white",
  Wildlife: "bg-purple-600 text-white",
  Luxury: "bg-pink-500 text-white",
  Adventure: "bg-emerald-600 text-white",
};

const SriLankaFlag = () => (
  <span className="inline-flex h-8 w-12 items-center justify-center overflow-hidden rounded shadow-soft" aria-label="Sri Lanka flag">
    <span className="flex h-full w-full">
      <span className="flex w-1/4 flex-col">
        <span className="flex-1 bg-emerald-600" />
        <span className="flex-1 bg-orange-500" />
      </span>
      <span className="flex w-3/4 items-center justify-center bg-yellow-400">
        <span className="flex h-full w-full items-center justify-center bg-amber-800 text-yellow-300" style={{ fontSize: "10px" }}>
          ★
        </span>
      </span>
    </span>
  </span>
);

function HomePage() {
  const topDestinations = destinations.slice(0, 5);
  const featuredPackages = packages.slice(0, 5);
  const galleryImages = [gallery1, gallery4, gallery3, gallery2, gallery5, gallery6];
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] overflow-visible">
        <img
          src={heroImg}
          alt="Sri Lanka coastline at golden hour"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 container mx-auto flex min-h-[92vh] flex-col justify-center px-4 pb-28 pt-32 sm:px-6 lg:pt-40">
          <div className="max-w-3xl text-primary-foreground">
            <p className="font-script text-3xl text-accent sm:text-4xl">Welcome to Paradise</p>
            <h1 className="mt-3 font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              EXPLORE
              <br />
              <span className="font-script text-6xl font-bold text-accent sm:text-8xl lg:text-[7.5rem]">
                Sri Lanka
              </span>
              <span className="ml-3 inline-block align-middle"><img src="src\assets\slflag.png" alt="slflag" /></span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              Discover breathtaking landscapes, ancient heritage, golden beaches and unforgettable adventures — handcrafted journeys by local experts.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full bg-gradient-accent px-7 font-semibold text-accent-foreground shadow-glow hover:opacity-90">
                <Link to="/packages">
                  <Send className="mr-2 h-4 w-4" />
                  Explore Packages
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-primary-foreground/60 bg-transparent px-7 font-semibold text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <a href={whatsappLink("Hi Champ Lanka, tell me more about your tours.")} target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Floating services strip */}
        <div className="absolute inset-x-0 -bottom-16 z-20 px-4 sm:px-6 lg:-bottom-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 gap-3 rounded-2xl bg-card p-4 shadow-elegant sm:grid-cols-3 sm:gap-4 sm:p-5 lg:grid-cols-5">
              {services.slice(0, 5).map((s) => (
                <div key={s.id} className="flex items-center gap-3 rounded-xl px-3 py-2 transition-smooth hover:bg-muted">
                  <span
                    className="flex h-11 w-11 flex-none items-center justify-center rounded-full text-white shadow-soft"
                    style={{ backgroundColor: `oklch(from ${s.accent} l c h)` }}
                  >
                    <s.icon className="h-5 w-5" />
                  </span>
                  <div className="leading-tight">
                    <div className="text-sm font-bold text-foreground">{s.title}</div>
                    <div className="text-xs text-muted-foreground">{s.short}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="bg-background pb-20 pt-20 sm:pt-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionTitle eyebrow="Popular Destinations" title="Top Places To Visit" />
            <Button asChild className="rounded-full bg-primary font-semibold text-primary-foreground hover:bg-primary-glow">
              <Link to="/destinations">
                View All Destinations
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {topDestinations.map((d) => (
              <Link
                key={d.id}
                to="/destinations"
                className="group relative block aspect-[4/5] overflow-hidden rounded-2xl shadow-card transition-bounce hover:-translate-y-1 hover:shadow-elegant"
              >
                <img
                  src={d.image}
                  alt={d.name}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="absolute inset-0 h-full w-full object-cover transition-bounce group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-card" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-primary-foreground">
                  <div className="mb-1 flex items-center gap-1.5 text-xs font-medium text-primary-foreground/80">
                    <MapPin className="h-3.5 w-3.5 text-accent" />
                    {d.region}
                  </div>
                  <div className="font-display text-lg font-bold leading-tight">{d.name}</div>
                  <div className="text-sm text-primary-foreground/80">{d.tagline}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="bg-muted/40 py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionTitle eyebrow="Top Tour Packages" title="Unforgettable Journeys" />
            <Button asChild className="rounded-full bg-primary font-semibold text-primary-foreground hover:bg-primary-glow">
              <Link to="/packages">
                View All Packages
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {featuredPackages.map((p) => (
              <article key={p.id} className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-card transition-bounce hover:-translate-y-1 hover:shadow-elegant">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-bounce group-hover:scale-110"
                  />
                  <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${categoryColors[p.category] ?? "bg-primary text-primary-foreground"}`}>
                    {p.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {p.days} Days / {p.nights} Nights
                  </div>
                  <h3 className="mt-2 font-display text-base font-bold leading-tight text-foreground">{p.name}</h3>
                  <div className="mt-3 flex items-end justify-between gap-2">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">From</div>
                      <div className="font-display text-xl font-extrabold text-primary">${p.priceFrom}</div>
                    </div>
                    <Link
                      to="/packages"
                      className="rounded-full bg-gradient-accent px-4 py-2 text-xs font-bold uppercase tracking-wider text-accent-foreground shadow-soft transition-smooth hover:opacity-90"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-background py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-y-8 rounded-2xl bg-primary px-6 py-8 text-primary-foreground shadow-elegant sm:grid-cols-4 sm:divide-x sm:divide-white/10">
            {[
              { v: "5000+", l: "Happy Travelers" },
              { v: "150+", l: "Destinations" },
              { v: "250+", l: "Tour Packages" },
              { v: "1+", l: "Years Experience" },
            ].map((s) => (
              <div key={s.l} className="flex flex-col items-center text-center sm:px-4">
                <div className="font-display text-3xl font-extrabold text-accent sm:text-4xl">{s.v}</div>
                <div className="mt-1 text-sm font-medium text-primary-foreground/80">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY teaser */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionTitle eyebrow="Moments" title="A Glimpse of the Journey" subtitle="Snapshots from real Champ Lanka travellers — from misty highlands to wild coastlines." />
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {galleryImages.map((img, i) => (
              <Link
                to="/gallery"
                key={i}
                className="group relative aspect-square overflow-hidden rounded-xl shadow-card"
              >
                <img src={img} alt="Sri Lanka travel moment" loading="lazy" className="h-full w-full object-cover transition-bounce group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/0 transition-smooth group-hover:bg-primary/30" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-muted/40 py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionTitle eyebrow="What Our Travelers Say" title="Happy Travelers" />
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <article key={t.id} className="relative flex flex-col rounded-2xl bg-card p-6 shadow-card">
                <Quote className="absolute right-5 top-5 h-7 w-7 text-accent/40" />
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} loading="lazy" className="h-14 w-14 flex-none rounded-full object-cover ring-2 ring-accent/30" />
                  <div>
                    <div className="font-display font-bold text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.country}</div>
                    <div className="mt-1 flex">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.quote}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary py-16">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImg} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="relative container mx-auto flex flex-col items-center gap-6 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-2xl">
            <SectionTitle light eyebrow="Ready When You Are" title="Let's plan your Sri Lanka adventure" subtitle="Tell us your dates and dreams — we'll craft a private itinerary in 24 hours." />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="rounded-full bg-gradient-accent font-semibold text-accent-foreground hover:opacity-90">
              <Link to="/contact">Plan My Trip</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-2 border-primary-foreground/60 bg-transparent font-semibold text-primary-foreground hover:bg-white/10 hover:text-primary-foreground">
              <a href={whatsappLink("Hi! I'd like a free trip plan.")} target="_blank" rel="noopener noreferrer">WhatsApp Now</a>
            </Button>
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionTitle eyebrow="From the Blog" title="Travel Stories & Tips" />
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/blog">Visit Blog<ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {recentPosts.map((p) => (
              <Link key={p.slug} to="/blog" className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-card transition-bounce hover:-translate-y-1 hover:shadow-elegant">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={p.cover} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-bounce group-hover:scale-110" />
                  <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">{p.category}</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="text-xs text-muted-foreground">{new Date(p.date).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })} · {p.readMinutes} min read</div>
                  <h3 className="mt-2 font-display text-lg font-bold leading-snug text-foreground transition-smooth group-hover:text-primary">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
