import EventInfoWrapper from "@/components/organisms/EventInfoWrapper/EventInfoWrapper";
import Footer from "@/components/organisms/Footer/Footer";
import MainLayout from "@/components/templates/MainLayout/MainLayout";

import { use } from "react";

const EventInfoPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);

  return (
    <MainLayout>
      <EventInfoWrapper eventId={id} />
      <Footer />
    </MainLayout>
  );
};

export default EventInfoPage;
