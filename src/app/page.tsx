import Container from "@/components/atoms/Container/Container";
import Footer from "@/components/organisms/Footer/Footer";
import Header from "@/components/organisms/Header/Header";
import HeroSection from "@/components/organisms/HeroSection/HeroSection";
import TicketForm from "@/components/organisms/TicketForm/TicketForm";
import TicketReservationWrap from "@/components/organisms/TicketReservationWrap/TicketReservationWrap";
import MainLayout from "@/components/templates/MainLayout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Header />
      <main>
        <Container>
          <HeroSection />
        </Container>
        <TicketReservationWrap />
        <TicketForm />
      </main>
      <Footer />
    </MainLayout>
  );
}
