import Container from "@/components/atoms/Container copy/Container";
import Header from "@/components/atoms/Header/Header";
import Footer from "@/components/organisms/Footer copy/Footer";
import HeroSection from "@/components/organisms/HeroSection copy/HeroSection";
import MainLayout from "@/components/templates/MainLayout copy/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Container>
        <Header />
        <main>
          <HeroSection />
        </main>
      </Container>
      <Footer />
    </MainLayout>
  );
}
