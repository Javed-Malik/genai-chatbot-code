import React from "react";
import "./SearchBar.css";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search jobs..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

export default SearchBar;
