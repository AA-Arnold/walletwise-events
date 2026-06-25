"use client";

import Container from "@/components/atom/Container/Container";
import NoEventsFound from "@/components/atom/emptyStates/NoEventsFound/NoEventsFound";
import EventToggle from "@/components/atom/EventToggle/EventToggle";
import EventWrapper from "@/components/molecules/EventWrapper/EventWrapper";
import FilterWrapper from "@/components/molecules/FilterWrapper/FilterWrapper";
import PastEvents from "@/components/molecules/PastEvents/PastEvents";

import { useGetEvents } from "@/lib/hooks/useGetEvents";

const ContentWrapper = () => {
  const {
    search,
    handleSearchChange,
    events,
    isLoading,
    handleSearch,
    filter,
    setFilter,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    tab,
    setTab,
    handleClear,
  } = useGetEvents();

  const tabs = ["upcoming", "past"];

  return (
    <div className="pt-8 pb-28">
      <Container>
        <div className="space-y-8">
          <FilterWrapper
            search={search}
            handleSearchChange={handleSearchChange}
            setFilter={setFilter}
            filter={filter}
            handleSearch={handleSearch}
          />
          <EventToggle tabs={tabs} tab={tab} onClick={setTab} />

          {tab === "upcoming" && (
            <EventWrapper events={events} isLoading={isLoading} />
          )}
          {tab === "past" && (
            <PastEvents events={events} isLoading={isLoading} />
          )}
          {(search.trim() !== "" || filter) && events.length < 1 && (
            <NoEventsFound handleClear={handleClear} />
          )}
        </div>
      </Container>
    </div>
  );
};

export default ContentWrapper;
