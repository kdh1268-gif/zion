import VideoHero from "@/components/VideoHero";
import EditionScroll from "@/components/EditionScroll";
import FeaturesLayer from "@/components/FeaturesLayer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-background min-h-screen">
        <VideoHero />
        <EditionScroll />
        <FeaturesLayer />
        
        <Footer />
      </div>
    </>
  );
}
