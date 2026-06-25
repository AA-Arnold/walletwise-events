import { Search } from "lucide-react";
import { SubmitEvent } from "react";

const SearchBar = ({
  search,
  handleSearch,
  handleSearchChange,
}: {
  search: string;
  handleSearch: () => void;
  handleSearchChange: (search: string) => void;
}) => {
  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (search.trim() === "") return;
    handleSearch();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-10 flex items-center gap-2 px-4 py-2 border border-[#E5E5E5] rounded-[10px] max-w-65.25 w-full min-w-50 focus-within:border-[#5A27CC] duration-300 transition-all"
    >
      <button type="submit">
        <Search className="text-[#A1A1A1] w-5 h-5" />
      </button>
      <input
        type="search"
        name="search"
        id="search"
        value={search}
        onChange={(e) => handleSearchChange(e.target.value)}
        className="outline-none flex-1 w-full placeholder:text-[#A1A1A1] text-sm"
        placeholder="Search events..."
      />
    </form>
  );
};

export default SearchBar;
