import VideoHero from "@/components/VideoHero";
import EditionScroll from "@/components/EditionScroll";
import FeaturesLayer from "@/components/FeaturesLayer";

export default function Home() {
  return (
    <>
      <div className="bg-background min-h-screen">
        <VideoHero />
        <EditionScroll />
        <FeaturesLayer />
        
        {/* Footer/Bottom spacer */}
        <section className="h-screen flex items-center justify-center bg-foreground text-background">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-tighter tracking-tighter mb-6">Your Journey Begins</h2>
            <a href="/reservation" className="px-8 py-3 bg-background text-foreground rounded-full text-sm font-bold tracking-[0.2em] uppercase hover:opacity-90">
              Book Today
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
