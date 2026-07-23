"use client";

import { useState } from "react";

import Container from "@/components/atom/Container/Container";
import EventToggle from "@/components/atom/EventToggle/EventToggle";
import EventInfoMain from "@/components/molecules/EventInfoMain/EventInfoMain";
import EventHighlights from "@/components/molecules/EventHighlights/EventHighlights";
import BookTicket from "@/components/molecules/BookTicket/BookTicket";
import EventInfoSkeleton from "@/components/atom/skeleton/EventInfoSkeleton";

import { useGetEventInfo } from "@/lib/hooks/useGetEventInfo";
import NewsLetter from "../NewsLetter/NewsLetter";

const EventInfoWrapper = ({ eventId }: { eventId: string }) => {
  const [tab, setTab] = useState("Event highlights");

  const { data, isLoading } = useGetEventInfo(eventId);

  const tabs = ["Event highlights", "Book ticket"];

  return (
    <div className="">
      {isLoading ? (
        <EventInfoSkeleton />
      ) : (
        <>
          <EventInfoMain event={data} />
          <div className="py-10">
            <div className="pb-8 w-full">
              <NewsLetter />
            </div>
            <Container>
              <EventToggle tabs={tabs} tab={tab} onClick={setTab} />
              <div className="flex justify-center py-10">
                {tab === "Event highlights" && <EventHighlights event={data} />}
                {tab === "Book ticket" && (
                  <BookTicket
                    ticketTypes={data?.ticketTypes}
                    eventId={eventId}
                    serviceFee={data?.serviceFee || "0:00"}
                  />
                )}
              </div>
            </Container>
          </div>
        </>
      )}
    </div>
  );
};

export default EventInfoWrapper;
