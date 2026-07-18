"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

export default function TravelingSweet({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll of the container containing all the content after the hero
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // When scrollYProgress is 0, we are just entering the content section (leaving hero)
  // We want the sweet to start on the right, move left, then move back right as we scroll down.
  // We can use keyframes in useTransform

  // Map vertical scroll progress to vertical position (stay in view)
  // Actually, position: fixed is easier, but if we use fixed, we just track the progress
  // and hide it when progress is < 0 or > 1.

  // Opacity: 0 when in hero sequence, 1 when in content sequence, 0 when at the very bottom
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.95, 1],
    [0, 1, 1, 0],
  );

  // X position: Starts right (50%), moves left (-50%), moves right (50%)
  const x = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["30vw", "-30vw", "30vw"],
  );

  // Y position: Move up and down slightly for a floating effect, or just let it stay centered vertically
  // The user said "Starts right side -> moves left -> back right on next section."

  // Rotation for a natural floating feel
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [10, -10, 10]);

  const smoothX = useSpring(x, { damping: 20, stiffness: 60 });
  const smoothRotate = useSpring(rotate, { damping: 20, stiffness: 60 });

  return (
    <div ref={containerRef} className="relative z-10">
      {/* Fixed overlay for the traveling sweet */}
      <motion.div
        style={{ opacity, x: smoothX, rotate: smoothRotate }}
        className="fixed top-[40vh] left-1/2 -ml-[150px] z-50 pointer-events-none"
      >
        <div className="relative w-[300px] h-[300px] max-h-[300px]">
          <Image
            src="/sweets/prime/ezgif-frame-001.jpg"
            alt="Traveling Sweet"
            fill
            sizes="300px"
            className="object-contain drop-shadow-2xl rounded-[40px] mix-blend-multiply"
          />
        </div>
      </motion.div>

      {/* The rest of the page content */}
      {children}
    </div>
  );
}
