import FilterDropdown from "@/components/atom/FilterDropdown/FilterDropdown";
import SearchBar from "@/components/atom/SearchBar/SearchBar";

const FilterWrapper = () => {
  return (
    <div className="flex gap-2">
      <SearchBar />
      <FilterDropdown />
    </div>
  );
};

export default FilterWrapper;
