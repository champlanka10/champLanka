import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Award, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/common/SectionTitle";
import heroImg from "@/assets/hero-coast.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const values = [
  { icon: Heart, title: "Travel with Heart", text: "We design trips we'd take with our own families. Every recommendation is personal." },
  { icon: Award, title: "Licensed & Trusted", text: "Government-licensed operator with insured vehicles and vetted hotels nationwide." },
  { icon: Users, title: "Local Team", text: "Born and raised in Sri Lanka. We share the spots tourists rarely find." },
  { icon: Globe, title: "Responsible Travel", text: "We work with eco-lodges, ethical wildlife operators and community-led experiences." },
];

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="container mx-auto px-4 text-center text-primary-foreground sm:px-6">
          <p className="font-script text-2xl text-accent">Our Story</p>
          <h1 className="mt-2 font-display text-4xl font-extrabold sm:text-6xl">About Champ Lanka</h1>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">A small, passionate team of Sri Lankan travel designers — building unforgettable island journeys since 2026.</p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto grid gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Who We Are" title="Built by travellers, for travellers" />
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>Champ Lanka started with three friends from Kurunegala who kept getting WhatsApped by strangers asking, "What should I do in Sri Lanka?" Today we run private journeys for families, couples and adventurers from over 40 countries.</p>
              <p>We're not a giant booking platform. Every itinerary is hand-built. Every driver-guide knows our team personally. And we're always on WhatsApp during your trip — same time zone, same people who planned it.</p>
              <p>Our mission is simple: send every guest home with stories they'll tell for years.</p>
            </div>
            <div className="mt-6">
              <Button asChild className="rounded-full bg-gradient-accent font-semibold text-accent-foreground hover:opacity-90">
                <Link to="/contact">Plan with us</Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-card p-5 shadow-card">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-accent text-accent-foreground">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-3 font-display font-bold text-foreground">{v.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
