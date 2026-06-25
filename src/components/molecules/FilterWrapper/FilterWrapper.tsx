import FilterDropdown from "@/components/atom/FilterDropdown/FilterDropdown";
import SearchBar from "@/components/atom/SearchBar/SearchBar";

const FilterWrapper = ({
  search,
  filter,
  setFilter,
  handleSearch,
  handleSearchChange,
}: {
  search: string;
  filter: string;
  setFilter: (value: string) => void;
  handleSearch: () => void;
  handleSearchChange: (search: string) => void;
}) => {
  return (
    <div className="flex gap-2">
      <SearchBar
        search={search}
        handleSearch={handleSearch}
        handleSearchChange={handleSearchChange}
      />
      <FilterDropdown setFilter={setFilter} filter={filter} />
    </div>
  );
};

export default FilterWrapper;
