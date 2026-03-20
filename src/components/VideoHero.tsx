"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguageStore } from "@/store/useLanguageStore";
import { dict } from "@/locales";

export default function VideoHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const { lang } = useLanguageStore();
  const t = dict[lang] || dict.ko;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-foreground">
      {/* Background Video */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
        {/* Replace with actual video URL later */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-80"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-foreground/40 mix-blend-multiply" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 w-full px-6 h-full flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        >
          <h1 className="text-6xl md:text-[10rem] font-bold tracking-tighter text-background leading-none mb-6">
            {t.heroTitle}
          </h1>
          <p className="text-xl md:text-3xl text-background/90 max-w-2xl font-light tracking-tight leading-relaxed">
            {t.heroDesc}
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-background/60"
      >
        <span className="text-xs tracking-[0.2em] font-bold uppercase mb-4">Discover</span>
        <div className="w-[1px] h-12 bg-background/30 overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-full bg-background"
          />
        </div>
      </motion.div>
    </div>
  );
}
