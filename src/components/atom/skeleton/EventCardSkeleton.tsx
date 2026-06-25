import { Skeleton } from "@/components/ui/skeleton";

const EventCardSkeleton = () => {
  return (
    <>
      {["", "", ""].map((_, i) => (
        <div key={i} className="max-w-104 w-full min-w-72.5 space-y-3">
          <div className="w-full sm:h-104 h-72.5">
            <Skeleton className="h-full w-full rounded-[16px] bg-gray-200" />
          </div>
          <Skeleton className="h-6 w-full rounded bg-gray-200" />
          <Skeleton className="h-5 max-w-55 rounded bg-gray-200" />
        </div>
      ))}
    </>
  );
};

export default EventCardSkeleton;
