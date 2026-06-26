"use client";

import Container from "@/components/atom/Container/Container";
import NoEventsFound from "@/components/atom/emptyStates/NoEventsFound/NoEventsFound";
import EventToggle from "@/components/atom/EventToggle/EventToggle";
import EventWrapper from "@/components/molecules/EventWrapper/EventWrapper";
import FilterWrapper from "@/components/molecules/FilterWrapper/FilterWrapper";
import PastEvents from "@/components/molecules/PastEvents/PastEvents";

import { useGetEvents } from "@/lib/hooks/useGetEvents";
import Footer from "../Footer/Footer";

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

  const sortedEvents = [...events].sort((a, b) => {
    if (!a.date && !b.date) return 0;
    if (!a.date) return 1;
    if (!b.date) return -1;

    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  const tabs = ["upcoming", "past"];

  return (
    <div className="pt-8 space-y-28">
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
            <EventWrapper events={sortedEvents} isLoading={isLoading} />
          )}
          {tab === "past" && (
            <PastEvents events={sortedEvents} isLoading={isLoading} />
          )}
          {(search.trim() !== "" || filter) && events.length < 1 ? (
            <NoEventsFound handleClear={handleClear} />
          ) : (search.trim() === "" || !filter) && events.length < 1 ? (
            <NoEventsFound
              handleClear={handleClear}
              desc="There are currently no events available. Check back later for upcoming events and experiences."
            />
          ) : (
            ""
          )}
        </div>
      </Container>
      <Footer
        setFilter={setFilter}
        onClick={setTab}
        filter={filter}
        tab={tab}
      />
    </div>
  );
};

export default ContentWrapper;
