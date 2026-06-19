import Footer from "@/features/peruzzi/components/organisms/Footer/Footer";
import PeruzziHero from "@/features/peruzzi/components/organisms/PeruzziHero/PeruzziHero";
import TicketForm from "@/features/peruzzi/components/organisms/TicketForm/TicketForm";
import TicketReservationWrap from "@/features/peruzzi/components/organisms/TicketReservationWrap/TicketReservationWrap";
import MainLayout from "@/features/peruzzi/components/templates/MainLayout/MainLayout";

const page = () => {
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

export default page;
