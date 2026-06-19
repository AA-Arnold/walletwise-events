"use client";

import { useState } from "react";

import Container from "@/components/atom/Container/Container";
import EventToggle from "@/components/atom/EventToggle/EventToggle";
import EventInfoMain from "@/components/molecules/EventInfoMain/EventInfoMain";
import EventHighlights from "@/components/molecules/EventHighlights/EventHighlights";
import BookTicket from "@/components/molecules/BookTicket/BookTicket";

const EventInfoWrapper = ({ eventId }: { eventId: string }) => {
  const [tab, setTab] = useState("Event highlights");

  const tabs = ["Event highlights", "Book ticket"];

  return (
    <div className="">
      <EventInfoMain />
      <div className="py-10">
        <Container>
          <EventToggle tabs={tabs} tab={tab} onClick={setTab} />
          <div className="flex justify-center py-10">
            {tab === "Event highlights" && <EventHighlights />}
            {tab === "Book ticket" && <BookTicket />}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default EventInfoWrapper;
