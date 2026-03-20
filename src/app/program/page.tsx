"use client";
import React from 'react';
import { useLanguageStore } from "@/store/useLanguageStore";
import { dict } from "@/locales";

export default function ProgramPage() {
  const { lang } = useLanguageStore();
  const t = dict[lang] || dict.ko;

  return (
    <div className="min-h-screen pt-32 px-6 md:px-24 bg-background text-foreground flex flex-col items-center">
      <div className="w-full max-w-5xl mx-auto">
        <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-6 block">Wellness & Healing</span>
        <h1 className="text-6xl md:text-[8rem] font-bold tracking-tighter leading-none mb-12 uppercase">{t.program}</h1>
        <p className="text-2xl md:text-4xl font-light opacity-80 leading-relaxed mb-auto pb-32">
          {t.programTitle}<br/><br/>
          {t.programDesc}
        </p>
      </div>
    </div>
  );
}
