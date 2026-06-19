import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <form className="h-10 flex items-center gap-2 px-4 py-2 border border-[#E5E5E5] rounded-[10px] max-w-65.25 w-full min-w-50 focus-within:border-[#5A27CC] duration-300 transition-all">
      <button>
        <Search className="text-[#A1A1A1] w-5 h-5" />
      </button>
      <input
        type="search"
        name=""
        id=""
        className="outline-none flex-1 w-full placeholder:text-[#A1A1A1] text-sm"
        placeholder="Search events..."
      />
    </form>
  );
};

export default SearchBar;
