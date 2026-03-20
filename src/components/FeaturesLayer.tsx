"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguageStore } from "@/store/useLanguageStore";
import { dict } from "@/locales";

export default function FeaturesLayer() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { lang } = useLanguageStore();
  const t = dict[lang] || dict.ko;

  const cards = [
    { id: 1, title: t.feature1Title, desc: t.feature1Desc },
    { id: 2, title: t.feature2Title, desc: t.feature2Desc },
    { id: 3, title: t.feature3Title, desc: t.feature3Desc },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const cardElements = gsap.utils.toArray<HTMLElement>(".feature-card");
      
      cardElements.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top top+=100", // Leaves a bit of space at the top
          endTrigger: containerRef.current,
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
        });
        
        // Scale down and fade previous cards
        if (index > 0) {
          gsap.to(cardElements[index - 1], {
            scale: 0.92,
            opacity: 0.4,
            filter: "blur(4px)",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "top top+=100",
              scrub: 1,
            }
          });
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, [lang]);

  return (
    <section ref={containerRef} className="relative w-full bg-background pt-24 pb-[40vh]">
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="mb-24 text-center">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">{t.featuresMain}</h2>
          <p className="text-xl mt-6 opacity-60 tracking-tight">{t.featuresSub}</p>
        </div>

        {cards.map((card, i) => (
          <div 
            key={card.id} 
            className="feature-card w-full h-[60vh] md:h-[70vh] rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 flex flex-col justify-between relative shadow-2xl mb-8 origin-top bg-foreground text-background"
            style={{
              zIndex: i
            }}
          >
            <div className="text-sm font-bold tracking-widest uppercase opacity-50">
              {String(i + 1).padStart(2, '0')}
            </div>
            <div>
              <h3 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">{card.title}</h3>
              <p className="text-2xl md:text-3xl opacity-80 max-w-2xl tracking-tight leading-snug">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
