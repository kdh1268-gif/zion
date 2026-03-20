"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const cards = [
  { id: 1, title: "Curated Spaces", desc: "Every corner is designed to minimize distraction and maximize serenity." },
  { id: 2, title: "Natural Harmony", desc: "Seamlessly integrated with the surrounding old-growth forest." },
  { id: 3, title: "Bespoke Wellness", desc: "Tailored therapeutic programs targeting deep physiological rest." },
];

export default function FeaturesLayer() {
  const containerRef = useRef<HTMLDivElement>(null);

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
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-background pt-24 pb-[40vh]">
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="mb-24 text-center">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">The Essentials</h2>
          <p className="text-xl mt-6 opacity-60 tracking-tight">What makes Zionsberg entirely unique.</p>
        </div>

        {cards.map((card, i) => (
          <div 
            key={card.id} 
            className="feature-card w-full h-[60vh] md:h-[70vh] rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 flex flex-col justify-between relative shadow-2xl mb-8 origin-top"
            style={{
              backgroundColor: i === 0 ? '#dadecd' : i === 1 ? '#a3b18a' : '#2d3748',
              color: i === 2 ? '#ffffff' : '#1a1c19',
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
