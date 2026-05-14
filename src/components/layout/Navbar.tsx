import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone, Facebook, Instagram, Youtube, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { SITE, whatsappLink } from "@/data/site";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", to: "/" as const },
  { label: "Destinations", to: "/destinations" as const },
  { label: "Packages", to: "/packages" as const },
  { label: "Services", to: "/services" as const },
  { label: "About", to: "/about" as const },
  { label: "Gallery", to: "/gallery" as const },
  { label: "Blog", to: "/blog" as const },
  { label: "Contact", to: "/contact" as const },
];

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.32a8.16 8.16 0 0 0 4.77 1.52V6.69a4.85 4.85 0 0 1-1.84 0z" />
    </svg>
  );
}

export function Navbar() {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-smooth",
        scrolled
          ? "bg-background/95 shadow-card backdrop-blur-md"
          : "bg-gradient-to-b from-primary/40 to-transparent",
      )}
    >
      {/* Top utility bar — desktop only */}
      <div
        className={cn(
          "hidden border-b transition-smooth lg:block",
          scrolled ? "border-border bg-background" : "border-transparent",
        )}
      >
        <div className="container mx-auto flex h-10 items-center justify-end gap-6 px-6 text-xs">
          <div className="flex items-center gap-3">
            <a href={SITE.socials.facebook} aria-label="Facebook" className={cn("transition-smooth hover:text-accent", scrolled ? "text-muted-foreground" : "text-primary-foreground/80")}>
              <Facebook className="h-4 w-4" />
            </a>
            <a href={SITE.socials.instagram} aria-label="Instagram" className={cn("transition-smooth hover:text-accent", scrolled ? "text-muted-foreground" : "text-primary-foreground/80")}>
              <Instagram className="h-4 w-4" />
            </a>
            <a href={SITE.socials.tiktok} aria-label="TikTok" className={cn("transition-smooth hover:text-accent", scrolled ? "text-muted-foreground" : "text-primary-foreground/80")}>
              <TikTokIcon className="h-4 w-4" />
            </a>
            <a href={SITE.socials.youtube} aria-label="YouTube" className={cn("transition-smooth hover:text-accent", scrolled ? "text-muted-foreground" : "text-primary-foreground/80")}>
              <Youtube className="h-4 w-4" />
            </a>
          </div>
          <div className={cn("h-4 w-px", scrolled ? "bg-border" : "bg-primary-foreground/30")} />
          <a
            href={SITE.phoneLink}
            className={cn(
              "flex items-center gap-2 font-semibold transition-smooth hover:text-accent",
              scrolled ? "text-foreground" : "text-primary-foreground",
            )}
          >
            <Phone className="h-3.5 w-3.5" />
            {SITE.phone}
          </a>
        </div>
      </div>

      {/* Main bar */}
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:h-20">
        <Logo variant={scrolled ? "default" : "light"} />

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-wide transition-smooth",
                scrolled
                  ? "text-foreground hover:text-accent"
                  : "text-primary-foreground hover:text-accent",
              )}
              activeProps={{ className: "text-accent" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild size="lg" className="rounded-full bg-gradient-accent font-semibold text-accent-foreground hover:opacity-90">
            <a href={whatsappLink("Hi Champ Lanka, I'd like to plan a trip to Sri Lanka.")} target="_blank" rel="noopener noreferrer">
              <WhatsAppGlyph className="mr-2 h-4 w-4" />
              WhatsApp Us
            </a>
          </Button>
        </div>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              aria-label="Open menu"
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-md transition-smooth lg:hidden",
                scrolled ? "text-foreground hover:bg-muted" : "text-primary-foreground hover:bg-white/10",
              )}
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 bg-primary p-0 text-primary-foreground">
            <SheetTitle className="sr-only">Navigation menu</SheetTitle>
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-white/10 p-5">
                <Logo variant="light" />
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md text-primary-foreground/80 hover:bg-white/10"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-1 flex-col gap-1 p-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-4 py-3 text-base font-semibold uppercase tracking-wide transition-smooth hover:bg-white/10"
                    activeProps={{ className: "text-accent bg-white/10" }}
                    activeOptions={{ exact: link.to === "/" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="space-y-3 border-t border-white/10 p-5">
                <a
                  href={SITE.phoneLink}
                  className="flex items-center gap-3 text-sm font-semibold text-primary-foreground hover:text-accent"
                >
                  <Phone className="h-4 w-4" />
                  {SITE.phone}
                </a>
                <Button asChild className="w-full rounded-full bg-gradient-accent font-semibold text-accent-foreground">
                  <a href={whatsappLink("Hi Champ Lanka!")} target="_blank" rel="noopener noreferrer">
                    <WhatsAppGlyph className="mr-2 h-4 w-4" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* spacer compensates for fixed header on inner pages handled by individual pages */}
    </header>
  );
}

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.554-5.338 11.89-11.893 11.89a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.512 5.26l.347.55-1 3.65 3.745-.989zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.174.198-.298.297-.496.099-.198.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01a1.094 1.094 0 0 0-.793.372c-.272.298-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
    </svg>
  );
}
