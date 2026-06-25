import { categories } from "@/lib/constants";

const FilterDropdown = ({
  filter,
  setFilter,
}: {
  filter: string;
  setFilter: (value: string) => void;
}) => {
  return (
    <div className="px-4 py-2 h-10 border border-[#E5E5E5] rounded-[10px] text-sm">
      <select
        className="w-full outline-none"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="">All types</option>
        {categories?.map((category) => (
          <option key={category?.value} value={category?.value}>
            {category?.subTitle}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
