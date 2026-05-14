import { Plane, Hotel, Car, Headphones, ShieldCheck, MapPinned, FileText, Compass } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  short: string;
  description: string;
  icon: typeof Plane;
  accent: string;
}

export const services: Service[] = [
  {
    id: "airport-pickup",
    title: "Airport Pickup",
    short: "Safe & Comfortable",
    description: "Meet & greet at Colombo (CMB) airport with name boards, A/C vehicles and bottled water on arrival.",
    icon: Plane,
    accent: "var(--accent)",
  },
  {
    id: "best-hotels",
    title: "Best Hotels",
    short: "Handpicked For You",
    description: "Boutique stays, beach resorts and heritage properties — vetted by our team and matched to your style.",
    icon: Hotel,
    accent: "var(--primary)",
  },
  {
    id: "private-transport",
    title: "Private Transport",
    short: "Travel in Comfort",
    description: "Modern A/C vehicles with experienced English-speaking chauffeur-guides for your entire journey.",
    icon: Car,
    accent: "var(--accent)",
  },
  {
    id: "support-247",
    title: "24/7 Support",
    short: "We're Always Here",
    description: "WhatsApp and phone support around the clock during your trip. We solve problems before you notice them.",
    icon: Headphones,
    accent: "var(--primary)",
  },
  {
    id: "safe-secure",
    title: "Safe & Secure",
    short: "Your Safety is Our Priority",
    description: "Licensed operator, fully insured vehicles, vetted hotels and transparent pricing — no hidden fees.",
    icon: ShieldCheck,
    accent: "var(--accent)",
  },
  {
    id: "tour-guide",
    title: "Expert Tour Guides",
    short: "Local Knowledge",
    description: "Government-licensed national guides for cultural sites, naturalists for wildlife parks.",
    icon: Compass,
    accent: "var(--primary)",
  },
  {
    id: "trip-planning",
    title: "Custom Trip Planning",
    short: "Tailored to You",
    description: "Tell us your interests and budget — we design a private itinerary that fits perfectly.",
    icon: MapPinned,
    accent: "var(--accent)",
  },
  {
    id: "visa-assist",
    title: "Visa & ETA Assistance",
    short: "Paperwork Sorted",
    description: "Guidance through the Sri Lanka ETA application so you arrive ready to explore.",
    icon: FileText,
    accent: "var(--primary)",
  },
];
