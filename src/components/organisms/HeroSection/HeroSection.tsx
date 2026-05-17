import LowerHero from "@/components/molecules/LowerHero/LowerHero";
import UpperHero from "@/components/molecules/UpperHero/UpperHero";

const HeroSection = () => {
  return (
    <section className="w-full pt-16 pb-10 max-sm:pt-16 z-10">
      <UpperHero />
      <LowerHero />
    </section>
  );
};

export default HeroSection;
