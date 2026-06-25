import { SearchX } from "lucide-react";

const NoEventsFound = ({
  handleClear,
  title = " No Events Found",
  desc = " We couldn't find any events matching your search. Try adjusting your keywords or filters and search again.",
}: {
  handleClear: () => void;
  title?: string;
  desc?: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
        <SearchX className="h-8 w-8 text-gray-400" />
      </div>

      <h3 className="mt-6 text-xl font-semibold text-gray-900">{title}</h3>

      <p className="mt-2 max-w-md text-sm text-gray-500">{desc}</p>

      <button
        onClick={handleClear}
        type="button"
        className="mt-6 cursor-pointer rounded-lg bg-[#5A27CC] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
      >
        Clear Search
      </button>
    </div>
  );
};

export default NoEventsFound;
