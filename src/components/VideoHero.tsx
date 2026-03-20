"use client";

import { motion } from "framer-motion";

export default function VideoHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#1a1c19] flex flex-col items-center justify-center">
      {/* Placeholder for User's Video */}
      <video 
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src="/placeholder-video.mp4" type="video/mp4" />
      </video>

      {/* Hero Content */}
      <div className="relative z-10 w-full px-6 max-w-7xl mx-auto flex flex-col items-center justify-center text-center mix-blend-difference text-white">
        <motion.h1
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-[12vw] md:text-[8rem] font-bold tracking-tighter leading-none mb-6"
        >
          ZIONSBERG
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
          className="text-xl md:text-3xl font-light tracking-tight max-w-2xl opacity-90"
        >
          The ultimate sanctuary. Elevate your existence with curated rest.
        </motion.p>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-12 left-6 md:left-12 flex items-center gap-6 z-10 text-white"
      >
        <div className="w-16 h-[2px] bg-white opacity-40" />
        <span className="text-sm tracking-[0.2em] uppercase font-bold">Scroll to explore</span>
      </motion.div>
    </section>
  );
}
