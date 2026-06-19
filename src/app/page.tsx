import ContentWrapper from "@/components/organisms/ContentWrapper/ContentWrapper";
import HeroSection from "@/components/organisms/HeroSection/HeroSection";
import NewsLetter from "@/components/organisms/NewsLetter/NewsLetter";
import MainLayout from "@/components/templates/MainLayout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <NewsLetter />
      <ContentWrapper />
    </MainLayout>
  );
}
