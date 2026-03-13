import Container from "@/components/atoms/Container/Container";
import Header from "@/components/atoms/Header/Header";
import Footer from "@/components/organisms/Footer/Footer";
import HeroSection from "@/components/organisms/HeroSection/HeroSection";
import MainLayout from "@/components/templates/MainLayout/MainLayout";

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
