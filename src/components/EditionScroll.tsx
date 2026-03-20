"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function EditionScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const horizontal = horizontalRef.current;

    if (!container || !horizontal) return;

    // Pinning the container and scrolling the horizontal content
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".edition-panel");
      
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          start: "top top",
          end: () => "+=" + (horizontal.scrollWidth - window.innerWidth)
        }
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-screen w-full overflow-hidden bg-background text-foreground">
      <div 
        ref={horizontalRef} 
        className="flex h-full w-[300vw]"
      >
        <div className="edition-panel w-screen h-full flex flex-col justify-center p-8 md:p-24 bg-[#faf9f6] dark:bg-[#1a1c19] border-r border-black/10 dark:border-white/10 shrink-0">
          <div className="max-w-4xl text-left">
            <h2 className="text-[10vw] md:text-8xl font-bold tracking-tighter mb-12 leading-[0.9]">01.<br/>Quiet Mind.</h2>
            <p className="text-2xl md:text-4xl font-light opacity-80 leading-relaxed tracking-tight">
              Escape the relentless pace of the modern world. Zionsberg offers a space designed precisely to reset your cognitive load.
            </p>
          </div>
        </div>
        
        <div className="edition-panel w-screen h-full flex flex-col md:flex-row items-center justify-between p-8 md:p-24 bg-[#f0eee9] dark:bg-[#151614] border-r border-black/10 dark:border-white/10 shrink-0">
          <div className="w-full md:w-1/2 h-[40%] md:h-[80%] bg-black/5 dark:bg-white/5 rounded-[2rem] overflow-hidden relative mb-8 md:mb-0">
            {/* Visual Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center text-sm tracking-widest uppercase opacity-30">Sensory Video Loop</div>
          </div>
          <div className="w-full md:w-5/12 max-w-xl text-left">
            <h2 className="text-[10vw] md:text-8xl font-bold tracking-tighter mb-8 md:mb-12 leading-[0.9]">02.<br/>Deep Rest.</h2>
            <p className="text-xl md:text-3xl font-light opacity-80 leading-relaxed tracking-tight">
              Immersive wellness programs, meticulously curated around the physiological principles of profound rest.
            </p>
          </div>
        </div>

        <div className="edition-panel w-screen h-full flex items-center justify-center p-8 md:p-24 bg-[#e9e8e2] dark:bg-[#0f100e] shrink-0">
          <div className="max-w-3xl text-center">
             <h2 className="text-[12vw] md:text-9xl font-bold tracking-tighter mb-8 leading-[0.9] text-primary">03.<br/>Rebirth.</h2>
             <p className="text-2xl md:text-4xl font-light tracking-tight mt-12 mb-12 text-foreground/80">
               Ready to transform?
             </p>
             <button className="px-12 py-5 rounded-full bg-foreground text-background text-sm tracking-[0.2em] font-bold uppercase hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
               View Programs
             </button>
          </div>
        </div>
      </div>
    </section>
  );
}
