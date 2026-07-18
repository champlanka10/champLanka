import { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, ArrowRight, Sparkles } from "lucide-react";
import ProductGrid from "@/components/products/ProductGrid";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Our Delicacies | Bommi Sweets Jaffna & Vavuniya",
  description: "Browse and order traditional Sri Lankan sweets and spicy snacks from Bommi Sweets in Jaffna & Vavuniya. Organic dates laddu, authentic dodhal, murukku, mixtures, and more.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-cream">
      <header className="relative pt-32 pb-4 md:pt-40 md:pb-6 bg-gradient-to-br from-maroon-dark via-maroon to-maroon-light overflow-hidden text-center border-b-4 border-gold">
        <div className="w-full px-6 relative z-10 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black text-cream leading-tight mb-6">
            Our Delicious <span className="text-gold font-serif italic">Sweets & Snacks</span>
          </h1>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-[2px] bg-gold rounded-full"></div>
            <Sparkles className="w-5 h-5 text-gold animate-pulse" />
            <div className="w-12 h-[2px] bg-gold rounded-full"></div>
          </div>

          <p className="max-w-2xl mx-auto text-center text-cream text-base md:text-xl leading-relaxed font-sans font-semibold px-4 drop-shadow-sm">
            Welcome to Bommi Sweets! Discover our mouth-watering collection of traditional Sri Lankan sweets and crispy spicy snacks. Everything is made fresh daily using high-quality ingredients and authentic family recipes right here in Jaffna & Vavuniya. Order now and enjoy the taste of tradition!
          </p>
        </div>
      </header>
      <section className="py-2 bg-cream relative z-10">
        <Suspense fallback={
          <div className="flex flex-col items-center justify-center py-20 text-center text-maroon font-sans font-bold">
            <div className="w-12 h-12 rounded-full border-4 border-gold border-t-transparent animate-spin mb-4"></div>
            <span>Preparing our traditional delicacies...</span>
          </div>
        }>
          <ProductGrid />
        </Suspense>
      </section>
    </main>
  );
}
