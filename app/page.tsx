import AccordionFaq from "@/components/shared/AccordionFaq";
// import { AuroraHero } from "@/components/shared/HeroSection";
import LogoSlider from "@/components/shared/LogoSlider";
import Review from "@/components/shared/Review";
import VideoTitleSection from "@/components/shared/VideoTitleSection";

export default function Home() {
  return (
    <div className="w-full bg-[#020617] ">
      {/* <AuroraHero /> */}
      <div className="max-w-7xl mx-auto">
        <LogoSlider />
        <VideoTitleSection />
        <Review />
        <AccordionFaq />
      </div>
    </div>
  );
}
