interface SortProps {
  sortKey: "Title" | "Year";
  sortOrder: "asc" | "desc";
  handleSort: (key: "Title" | "Year", order: "asc" | "desc") => void;
}

export const Sort: React.FC<SortProps> = ({
  sortKey,
  sortOrder,
  handleSort,
}) => {
  return (
    <div className="m-4 flex items-center justify-center md:justify-end space-x-2">
      <label htmlFor="sortKey" className="mr-2">
        Sort By:
      </label>
      <select
        id="sortKey"
        value={sortKey}
        onChange={(e) => handleSort(e.target.value as any, sortOrder)}
        className="border py-1 px-4 rounded bg-white"
      >
        <option value="Title">Title</option>
        <option value="Year">Year</option>
      </select>

      <button
        onClick={() =>
          handleSort(sortKey, sortOrder === "asc" ? "desc" : "asc")
        }
        className="border py-1 px-4 rounded"
      >
        {sortOrder === "asc" ? "Ascending" : "Descending"}
      </button>
    </div>
  );
};
