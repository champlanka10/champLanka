"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import spicyCat from "@/asserts/slide1.png";
import sweetCat from "@/asserts/slide2.png";
import healthyCat from "@/asserts/slide3.png";
import chipsCat from "@/asserts/slide4.png";
import ladduCat from "@/asserts/slide5.png";

const IMAGES = [
  { src: spicyCat, alt: "Spicy Mix" },
  { src: sweetCat, alt: "Sweet Treat" },
  { src: healthyCat, alt: "Healthy Bites" },
  { src: chipsCat, alt: "Crispy Chips" },
  { src: ladduCat, alt: "Laddu" },
];

export default function FloatingCarousel() {
  const [current, setCurrent] = useState(0);
  const [phase, setPhase] = useState<"idle" | "exit" | "enter">("idle");

  const advance = useCallback(() => {
    setPhase("exit");
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % IMAGES.length);
      setPhase("enter");
      setTimeout(() => setPhase("idle"), 600);
    }, 600);
  }, []);

  useEffect(() => {
    const id = setInterval(advance, 3500);
    return () => clearInterval(id);
  }, [advance]);

  const getClass = () => {
    if (phase === "exit") return "slide-img slide-exit";
    if (phase === "enter") return "slide-img slide-enter";
    return "slide-img slide-idle";
  };

  return (
    <div className="carousel-container relative w-full h-full flex items-center justify-center overflow-visible">
      <div className="relative w-full h-full overflow-visible">
        <div className={getClass()}>
          <div className="relative w-full h-full flex items-end justify-center overflow-hidden">
            <div className="relative w-full h-[110%] max-w-[100%]">
              <Image
                src={IMAGES[current].src}
                alt={IMAGES[current].alt}
                fill
                className="object-contain drop-shadow-[0_15px_35px_rgba(182,138,46,0.35)] scale-[1.15]"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>

        <style>{`
          .carousel-container {
            /* keep full image edges visible without an edge mask */
          }
          .slide-img {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            overflow: hidden;
          }
          .slide-idle {
            transform: translateX(0) scale(1.1);
            opacity: 1;
          }
          .slide-exit {
            animation: slideOut 0.6s ease-in forwards;
          }
          .slide-enter {
            animation: slideIn 0.6s ease-out forwards;
          }
          @keyframes slideOut {
            0% { transform: translateX(0) scale(1.1); opacity: 1; }
            100% { transform: translateX(-130%) scale(0.96); opacity: 0; }
          }
          @keyframes slideIn {
            0% { transform: translateX(130%) scale(0.96); opacity: 0; }
            100% { transform: translateX(0) scale(1.1); opacity: 1; }
          }
        `}</style>
      </div>
    </div>
  );
}
