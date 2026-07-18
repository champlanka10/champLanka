import Image from "next/image";
import { Play, Leaf } from "lucide-react";
import heroSweets from "@/asserts/hero-sweets.jpg";
import grid1 from "@/asserts/grid1.png";
import grid2 from "@/asserts/grid2.png";
import grid3 from "@/asserts/grid3.png";
import grid4 from "@/asserts/grid4.png";

export default function FactoryImages() {
  return (
    <section className="py-24 bg-cream">
      <div className="w-full px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center">
              <h4 className="text-gold font-bold tracking-widest text-sm md:text-base uppercase mb-4">
                Our Process
              </h4>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-maroon mb-8 leading-[1.1] text-center">
                Made with Love <br className="hidden md:block" />
                &amp; Purity
              </h2>
              <div className="flex items-center gap-3 mt-6 mb-10">
                <div className="h-1.5 w-20 bg-gold rounded-full"></div>
                <Leaf className="w-7 h-7 text-gold" />
              </div>
            </div>
            <p
              className="text-lg text-gray-600 mb-6 leading-relaxed"
              style={{ marginTop: "2.5rem" }}
            >
              Take a glimpse into our traditional kitchen where the magic
              happens. We follow authentic recipes passed down through
              generations, ensuring every bite takes you on a nostalgic journey.
            </p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Our commitment to hygiene and quality means we only use the finest
              ingredients, pure ghee, and natural sweeteners.
            </p>
          </div>

          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6">
            <div className="relative h-64 rounded-[2rem] overflow-hidden shadow-lg border border-gold/20 shadow-[0_15px_30px_rgba(90,31,43,0.1)]">
              <Image
                src={grid4}
                alt="Making Sweets 1"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="relative h-48 rounded-[2rem] overflow-hidden shadow-lg border border-gold/20 shadow-[0_15px_30px_rgba(90,31,43,0.1)]">
              <Image
                src={grid1}
                alt="Making Sweets 2"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="relative h-48 rounded-[2rem] overflow-hidden shadow-lg border border-gold/20 shadow-[0_15px_30px_rgba(90,31,43,0.1)]">
              <Image
                src={grid2}
                alt="Making Sweets 3"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="relative h-64 -translate-y-16 rounded-[2rem] overflow-hidden shadow-lg border border-gold/20 shadow-[0_15px_30px_rgba(90,31,43,0.1)]">
              <Image
                src={grid3}
                alt="Making Sweets 4"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
