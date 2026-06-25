import { Skeleton } from "@/components/ui/skeleton";
import Container from "../Container/Container";

const EventInfoSkeleton = () => {
  return (
    <div>
      <div className="w-full h-141">
        <Skeleton className="h-full w-full bg-gray-200" />
      </div>
      <Container>
        <div className="py-10 space-y-8">
          <Skeleton className="h-8 max-w-xl w-full rounded-lg bg-gray-200" />
          <div className="flex flex-wrap gap-6">
            <div className="w-full flex-1 min-w-62.5 h-36 ">
              <Skeleton className="h-full w-full rounded-[16px] bg-gray-200" />
            </div>
            <div className="w-full flex-1 min-w-62.5 h-36 ">
              <Skeleton className="h-full w-full rounded-[16px] bg-gray-200" />
            </div>
            <div className="w-full flex-1 min-w-62.5 h-36 ">
              <Skeleton className="h-full w-full rounded-[16px] bg-gray-200" />
            </div>
          </div>
          <Skeleton className="h-8 max-w-md w-full rounded-lg bg-gray-200" />
          <div className="space-y-1">
            <Skeleton className="h-6 w-full rounded-lg bg-gray-200" />
            <Skeleton className="h-6 w-full rounded-lg bg-gray-200" />
            <Skeleton className="h-6 w-full rounded-lg bg-gray-200" />
            <Skeleton className="h-6 w-full rounded-lg bg-gray-200" />
            <Skeleton className="h-6 w-full rounded-lg bg-gray-200" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EventInfoSkeleton;
