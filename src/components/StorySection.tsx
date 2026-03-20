"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate opacity and y for 3 different text blocks
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

  const opacity2 = useTransform(scrollYProgress, [0.35, 0.5, 0.65], [0, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.35, 0.5, 0.65], [50, 0, -50]);

  const opacity3 = useTransform(scrollYProgress, [0.7, 0.85, 1], [0, 1, 1]);
  const y3 = useTransform(scrollYProgress, [0.7, 0.85, 1], [50, 0, 0]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-foreground text-background" id="story">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[#1a1c19] opacity-80" />
        </div>

        <div className="relative z-10 w-full max-w-5xl px-6 text-center">
          <motion.div
            style={{ opacity: opacity1, y: y1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
          >
            <h2 className="text-3xl md:text-5xl/relaxed font-light tracking-widest text-[#faf9f6]">
              Tucked away from the noise, <br />
              Zionsberg is your private sanctuary.
            </h2>
          </motion.div>

          <motion.div
            style={{ opacity: opacity2, y: y2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
          >
            <h2 className="text-3xl md:text-5xl/relaxed font-light tracking-widest text-[#faf9f6]">
              A place to restore balance, <br />
              heal the mind, and connect with nature.
            </h2>
          </motion.div>

          <motion.div
            style={{ opacity: opacity3, y: y3 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
          >
            <h2 className="text-3xl md:text-5xl/relaxed font-light tracking-widest text-primary">
              Experience True Healing
            </h2>
            <p className="mt-8 text-sm md:text-lg font-light tracking-[0.3em] uppercase opacity-70">
              Begin your journey
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
