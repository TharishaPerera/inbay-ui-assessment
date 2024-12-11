import React from "react";

import { RiResetLeftFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";

interface SearchProps {
  className?: string;
  onSearch?: (query: string) => void;
  onReset?: () => void;
  showReset: boolean;
  showHistory: boolean;
  setShowHistory: (value: boolean) => void;
}

export const Search: React.FC<SearchProps> = ({
  className,
  onSearch,
  onReset,
  showReset,
  showHistory,
  setShowHistory
}) => {
  const [search, setSearch] = React.useState("");
  const [typingTimeout, setTypingTimeout] =
    React.useState<NodeJS.Timeout | null>(null);

  const handleSearch = () => {
    if (search.trim()) {
      onSearch?.(search);
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
      setShowHistory(false);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearch(newValue);

    setShowHistory(true);
    // Clear any previous timeout to avoid immediate hiding
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    // Set a timeout to hide the search history after 2s of inactivity
    const timeout = setTimeout(() => {
      setShowHistory(false);
    }, 2000);

    setTypingTimeout(timeout);
  };
  const handleReset = () => {
    setSearch("");
    onReset?.();
  };
  return (
    <div className="flex items-center justify-center space-x-2 w-full">
      <input
        type="text"
        value={search}
        placeholder="Search your favorite movie title..."
        className={`w-full py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 text-black ${className}`}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button
        className="bg-gray-300 hover:bg-gray-400 text-black font-bold p-2 rounded-lg"
        onClick={handleSearch}
      >
        <CiSearch className="w-6 h-6" />
      </button>
      {((showReset && search.length === 0 && !showHistory) ||
        (!showReset && search.length > 0 && showHistory)) && (
        <button
          className="bg-gray-300 hover:bg-gray-400 text-black font-bold p-2 rounded-lg"
          onClick={handleReset}
        >
          <RiResetLeftFill className="w-6 h-6 font-thin text-gray-500" />
        </button>
      )}
    </div>
  );
};
