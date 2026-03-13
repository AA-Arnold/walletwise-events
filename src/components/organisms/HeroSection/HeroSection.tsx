import HeroSectionInfo from "@/components/molecules/HeroSectionInfo/HeroSectionInfo";
import TickeetForm from "@/components/molecules/TickeetForm/TickeetForm";

const HeroSection = () => {
  return (
    <section className="flex justify-center flex-wrap w-full gap-16 py-20 z-10">
      <HeroSectionInfo />
      <TickeetForm />
    </section>
  );
};

export default HeroSection;
