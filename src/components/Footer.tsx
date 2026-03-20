"use client";
import { useLanguageStore } from "@/store/useLanguageStore";
import { dict } from "@/locales";
import Link from "next/link";

export default function Footer() {
  const { lang } = useLanguageStore();
  const t = dict[lang] || dict.ko;

  return (
    <section className="h-screen flex items-center justify-center bg-foreground text-background">
      <div className="text-center">
        <h2 className="text-4xl md:text-6xl font-tighter tracking-tighter mb-6">{t.footerTitle}</h2>
        <Link href="/reservation" className="px-8 py-3 bg-background text-foreground rounded-full text-sm font-bold tracking-[0.2em] uppercase hover:opacity-90">
          {t.footerBtn}
        </Link>
      </div>
    </section>
  );
}
