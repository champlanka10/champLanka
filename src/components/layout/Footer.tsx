import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Send } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SITE, mailtoLink } from "@/data/site";
import footerBg from "@/assets/footer-bg.jpg";
import { Logo } from "./Logo";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.32a8.16 8.16 0 0 0 4.77 1.52V6.69a4.85 4.85 0 0 1-1.84 0z" />
    </svg>
  );
}

const newsletterSchema = z.object({
  email: z.string().trim().email("Please enter a valid email").max(255),
});

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const result = newsletterSchema.safeParse({ email });
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Invalid email");
      return;
    }
    setSubmitting(true);
    // Open user's mail client pre-filled — no backend yet
    const link = mailtoLink(
      "Newsletter signup",
      `Please add this email to the Champ Lanka newsletter:\n\n${result.data.email}`,
    );
    window.location.href = link;
    setTimeout(() => {
      toast.success("Thanks! Confirm in your email client to subscribe.");
      setEmail("");
      setSubmitting(false);
    }, 400);
  };

  return (
    <footer
      className="relative isolate text-primary-foreground"
      style={{
        backgroundImage: `linear-gradient(180deg, oklch(0.18 0.05 255 / 0.35), oklch(0.14 0.04 255 / 0.5)), url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto grid gap-10 px-4 py-16 sm:px-6 lg:grid-cols-5 lg:gap-8 lg:py-20">
        <div className="lg:col-span-1">
          <Logo variant="light" />
          <p className="mt-5 text-sm leading-relaxed text-primary-foreground/70">
            We make your Sri Lanka journey memorable with our best services and local expertise — built by travellers, for travellers.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href={SITE.socials.facebook} aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-primary-foreground transition-smooth hover:bg-accent hover:text-accent-foreground">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={SITE.socials.instagram} aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-primary-foreground transition-smooth hover:bg-accent hover:text-accent-foreground">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={SITE.socials.tiktok} aria-label="TikTok" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-primary-foreground transition-smooth hover:bg-accent hover:text-accent-foreground">
              <TikTokIcon className="h-4 w-4" />
            </a>
            <a href={SITE.socials.youtube} aria-label="YouTube" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-primary-foreground transition-smooth hover:bg-accent hover:text-accent-foreground">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-primary-foreground">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/70">
            <li><Link to="/" className="transition-smooth hover:text-accent">Home</Link></li>
            <li><Link to="/about" className="transition-smooth hover:text-accent">About Us</Link></li>
            <li><Link to="/destinations" className="transition-smooth hover:text-accent">Destinations</Link></li>
            <li><Link to="/packages" className="transition-smooth hover:text-accent">Tour Packages</Link></li>
            <li><Link to="/blog" className="transition-smooth hover:text-accent">Blog</Link></li>
            <li><Link to="/contact" className="transition-smooth hover:text-accent">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-primary-foreground">Our Services</h3>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/70">
            <li><Link to="/services" className="transition-smooth hover:text-accent">Hotel Booking</Link></li>
            <li><Link to="/services" className="transition-smooth hover:text-accent">Airport Pickup</Link></li>
            <li><Link to="/services" className="transition-smooth hover:text-accent">Private Transport</Link></li>
            <li><Link to="/services" className="transition-smooth hover:text-accent">Tour Guides</Link></li>
            <li><Link to="/services" className="transition-smooth hover:text-accent">Travel Planning</Link></li>
            <li><Link to="/services" className="transition-smooth hover:text-accent">24/7 Support</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-primary-foreground">Contact Us</h3>
          <ul className="mt-5 space-y-4 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 flex-none text-accent" />
              <a href={SITE.phoneLink} className="transition-smooth hover:text-accent">{SITE.phone}</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 flex-none text-accent" />
              <a href={SITE.emailLink} className="break-all transition-smooth hover:text-accent">{SITE.email}</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 flex-none text-accent" />
              <span>{SITE.address}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-primary-foreground">Newsletter</h3>
          <p className="mt-5 text-sm text-primary-foreground/70">
            Subscribe to get updates &amp; exclusive offers!
          </p>
          <form onSubmit={onSubscribe} className="mt-4 space-y-3">
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              maxLength={255}
              className="border-white/20 bg-white/10 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-accent"
            />
            <Button
              type="submit"
              disabled={submitting}
              className="w-full rounded-full bg-gradient-accent font-semibold text-accent-foreground hover:opacity-90"
            >
              <Send className="mr-2 h-4 w-4" />
              {submitting ? "Opening…" : "Subscribe"}
            </Button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto grid gap-3 px-4 py-5 text-xs text-primary-foreground/60 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:px-6">
          <div className="order-2 flex justify-center sm:order-1 sm:justify-start">
            <div className="flex items-center gap-1">
              <Link to="/contact" className="transition-smooth hover:text-accent">Privacy Policy |</Link>
              <Link to="/contact" className="transition-smooth hover:text-accent">Terms & Conditions</Link>
            </div>
          </div>
          <p className="order-1 text-center sm:order-2">© {new Date().getFullYear()} Champ Lanka (Pvt) Ltd. All rights reserved.</p>
          <div className="order-3 hidden sm:block" />
        </div>
      </div>
    </footer>
  );
}
