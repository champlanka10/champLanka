"use client";
import { Mouse, ArrowDown } from "lucide-react";
import FloatingCarousel from "./Carousel";

export default function HeroSection() {
  return (
    <div className="relative w-full bg-maroon flex items-end justify-center overflow-hidden z-20 h-screen pt-4 md:pt-8 lg:pt-8 pb-0">
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 50%, rgba(182,138,46,0.12) 0%, transparent 70%)",
        }}
      />
      {/* Decorative background sprinkles/elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-[20%] right-[30%] w-2 h-2 bg-gold rounded-full blur-[1px]"></div>
        <div className="absolute top-[40%] right-[40%] w-3 h-3 bg-gold rounded-full blur-[1px]"></div>
        <div className="absolute bottom-[30%] right-[20%] w-2 h-2 bg-cream rounded-full blur-[1px]"></div>
        <div className="absolute top-[50%] right-[10%] w-4 h-4 border border-cream rounded-full"></div>
        <div className="absolute top-[10%] right-[15%] w-1 h-1 bg-cream rounded-full"></div>
      </div>

      <div className="w-full relative z-10 flex flex-col lg:flex-row items-center lg:items-end justify-between h-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
        {/* Left Content */}
        <div className="w-full lg:w-4/12 xl:w-3/12 flex flex-col justify-center lg:justify-end items-center lg:items-start text-center lg:text-left z-20 h-full order-1 pb-0 lg:pb-16">
          <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] 2xl:text-[7.5rem] font-serif font-bold text-cream tracking-wide drop-shadow-md leading-[1.1] mb-2 sm:mb-4">
            Bommi Sweets
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-serif text-cream/90 tracking-wide drop-shadow-sm leading-tight">
            Crafted With Love
          </h2>

          <div className="pt-6 lg:pt-10">
            <a
              href="https://wa.me/94766341818"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-8 sm:px-10 py-3 sm:py-4 bg-transparent border-2 border-gold text-gold text-base sm:text-lg font-bold hover:bg-gold hover:text-maroon transition-all duration-300 tracking-wide rounded-full shadow-[0_4px_14px_0_rgb(182,138,46,0.2)] hover:shadow-[0_6px_20px_rgba(182,138,46,0.4)]"
            >
              Order Now
            </a>
          </div>
        </div>

        {/* Floating Carousel Container */}
        <div className="w-full lg:w-8/12 xl:w-9/12 flex items-end justify-center lg:justify-end z-10 relative order-2 mt-0 sm:mt-0 md:mt-0 lg:-mt-6 xl:-mt-8 h-full -translate-y-8 lg:-translate-y-10">
          <FloatingCarousel />
        </div>
      </div>
    </div>
  );
}
