import { useInfiniteQuery } from "@tanstack/react-query";
import { useTableState } from "./useTableState";
import { getEvents } from "../api";

export const useGetEvents = () => {
  const {
    search,
    handleSearchChange,
    handleClear,
    submittedQuery,
    handleSearch,
    filter,
    setFilter,
    tab,
    setTab,
  } = useTableState();

  const limit = 20;

  const {
    data,
    isPending,
    isLoading,
    isError,
    error,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["events", submittedQuery, filter, tab],
    queryFn: ({ pageParam = 1 }) =>
      getEvents({
        currentPage: pageParam,
        limit,
        search: submittedQuery,
        filter,
        tab,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const { page, totalPages } = lastPage.pagination;
      return page < totalPages ? page + 1 : undefined;
    },
    enabled: true,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  const allEvents = data?.pages.flatMap((page) => page.data) ?? [];

  return {
    search,
    handleSearchChange,
    events: allEvents,
    isPending,
    isLoading,
    isError,
    error,
    handleSearch,
    handleClear,
    limit,
    refetch,
    filter,
    setFilter,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    tab,
    setTab,
  };
};
