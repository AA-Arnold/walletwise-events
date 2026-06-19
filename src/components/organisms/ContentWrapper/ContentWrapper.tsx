"use client";

import { useState } from "react";

import Container from "@/components/atom/Container/Container";
import EventToggle from "@/components/atom/EventToggle/EventToggle";
import EventWrapper from "@/components/molecules/EventWrapper/EventWrapper";
import FilterWrapper from "@/components/molecules/FilterWrapper/FilterWrapper";

const ContentWrapper = () => {
  const [tab, setTab] = useState("Upcoming");

  const tabs = ["Upcoming", "Past"];

  return (
    <div className="pt-8 pb-28">
      <Container>
        <div className="space-y-8">
          <FilterWrapper />
          <EventToggle tabs={tabs} tab={tab} onClick={setTab} />
          <EventWrapper />
        </div>
      </Container>
    </div>
  );
};

export default ContentWrapper;
