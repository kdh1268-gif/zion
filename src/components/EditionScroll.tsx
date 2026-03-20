"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguageStore } from "@/store/useLanguageStore";
import { dict } from "@/locales";

export default function EditionScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { lang } = useLanguageStore();
  const t = dict[lang] || dict.ko;

  const panelsData = [
    { title: t.edition1Title, desc: t.edition1Desc, color: "bg-[#faf9f6] text-[#000000]" },
    { title: t.edition2Title, desc: t.edition2Desc, color: "bg-[#2d3748] text-[#f8f9fa]" },
    { title: t.edition3Title, desc: t.edition3Desc, color: "bg-[#f8f9fa] text-[#000000]" },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const container = containerRef.current;
    const horizontal = scrollRef.current;

    if (!container || !horizontal) return;

    const sections = gsap.utils.toArray(".edition-panel");

    const ctx = gsap.context(() => {
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + horizontal.offsetWidth
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-screen w-full overflow-hidden bg-background text-foreground">
      <div 
        ref={scrollRef} 
        className="flex h-full"
        style={{ width: `${(panelsData.length + 1) * 100}vw` }}
      >
        {/* Intro Panel */}
        <div className="edition-panel w-screen h-screen flex-shrink-0 flex items-center justify-center bg-background text-foreground px-6 sticky top-0">
          <div className="max-w-4xl text-center md:text-left">
            <span className="text-sm font-bold tracking-[0.2em] uppercase mb-4 block opacity-50">
              {t.editionSub}
            </span>
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
              {t.editionTitle}
            </h2>
            <p className="text-xl md:text-3xl font-light opacity-80 max-w-2xl tracking-tight leading-relaxed">
              {t.editionDesc}
            </p>
          </div>
        </div>

        {/* Dynamic Panels */}
        {panelsData.map((panel, index) => (
          <div
            key={index}
            className={`edition-panel flex-shrink-0 w-screen h-screen flex flex-col justify-center px-12 md:px-32 ${panel.color}`}
          >
            <h2 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 max-w-5xl leading-tight">{panel.title}</h2>
            <p className="text-xl md:text-3xl max-w-3xl font-light opacity-90 leading-relaxed">{panel.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
