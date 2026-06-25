import React from "react";

import { useQuery } from "@tanstack/react-query";
import { getEventInfo } from "../api";

export const useGetEventInfo = (eventId: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["event info", eventId],
    queryFn: () => getEventInfo({ eventId }),
    enabled: true,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return {
    data,
    isLoading,
  };
};
