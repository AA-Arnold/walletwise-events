import Footer from "@/components/organisms/Footer/Footer";
import PeruzziHero from "@/components/organisms/PeruzziHero/PeruzziHero";
import TicketForm from "@/components/organisms/TicketForm/TicketForm";

import TicketReservationWrap from "@/components/organisms/TicketReservationWrap/TicketReservationWrap";

import MainLayout from "@/components/templates/MainLayout/MainLayout";

const HomePage = () => {
  return (
    <MainLayout>
      <PeruzziHero />
      <TicketReservationWrap />
      <div
        className=""
        style={{
          background: "url('/assets/images/bg.svg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-linear-to-b from-70% from-[#080D0F]/80 to-100% to-[#0B0D10]">
          <TicketForm />
          <Footer />
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
