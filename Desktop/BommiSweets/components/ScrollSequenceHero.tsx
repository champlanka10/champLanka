"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollSequenceHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Track scroll of the container for the sequence
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate current frame (1 to 192)
  const currentFrame = useTransform(scrollYProgress, [0, 1], [1, 192]);
  
  // State for loaded frames
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Handle Canvas Drawing
  useEffect(() => {
    if (typeof window === "undefined") return;

    const frames: HTMLImageElement[] = [];
    let loadedCount = 0;
    const totalFrames = 192;

    const loadImages = () => {
      for (let i = 1; i <= totalFrames; i++) {
        const img = new Image();
        const paddedNumber = i.toString().padStart(3, "0");
        img.src = `/sweets/prime/ezgif-frame-${paddedNumber}.jpg`;
        img.onload = () => {
          loadedCount++;
          if (loadedCount === totalFrames) {
            setImagesLoaded(true);
          }
          if (i === 1) {
            // Render the first frame immediately when it loads
            render(currentFrame.get());
          }
        };
        frames.push(img);
      }
    };

    loadImages();

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render(currentFrame.get());
    };
    
    resizeCanvas();

    function render(frameValue: number) {
      if (!canvas || !ctx) return;
      const frameIndex = Math.min(
        totalFrames - 1,
        Math.max(0, Math.floor(frameValue) - 1)
      );
      if (frames[frameIndex] && frames[frameIndex].complete) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const img = frames[frameIndex];
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;
        
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
      }
    }

    const unsubscribe = currentFrame.on("change", (latest) => {
      render(latest);
    });

    window.addEventListener("resize", resizeCanvas);

    return () => {
      unsubscribe();
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [currentFrame]);

  // Text Opacities
  const text1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 1, 0]);
  const text2Opacity = useTransform(scrollYProgress, [0.35, 0.55, 0.75], [0, 1, 0]);
  const text3Opacity = useTransform(scrollYProgress, [0.7, 0.85, 1], [0, 1, 0]);

  return (
    <div ref={containerRef} className="h-[200vh] relative bg-black selection:bg-gold/30 selection:text-maroon">

      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover" />
        
        {/* Dark Overlay for Text Readability if needed */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Text Overlays */}
        <motion.div style={{ opacity: text1Opacity }} className="absolute text-center px-4 w-full pointer-events-none">
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none text-cream drop-shadow-2xl font-serif">
            Taste the Tradition
          </h1>
        </motion.div>
        
        <motion.div style={{ opacity: text2Opacity }} className="absolute text-center px-4 w-full pointer-events-none">
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none text-cream drop-shadow-2xl font-serif">
            Feel the Love
          </h1>
        </motion.div>
        
        <motion.div style={{ opacity: text3Opacity }} className="absolute text-center px-4 w-full pointer-events-none">
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none text-cream drop-shadow-2xl font-serif">
            Bommi Sweets<br />
            <span className="text-3xl md:text-6xl text-gold mt-4 block">Jaffna & Vavuniya</span>
          </h1>
        </motion.div>
      </div>
    </div>
  );
}
