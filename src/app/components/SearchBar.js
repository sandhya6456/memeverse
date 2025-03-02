"use client";
import { useState } from "react";

const SearchBar = ({ setSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
    setSearch(event.target.value); // Update the search state in parent component
  };

  return (
    <div className="flex justify-center my-4">
      <input
        type="text"
        placeholder="Search memes..."
        value={query}
        onChange={handleChange}
        className="p-2 w-80 rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:border-blue-400"
      />
    </div>
  );
};

export default SearchBar;
