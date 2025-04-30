import React from "react";
import "../App.css";

const SearchBar = ({ search, setSearch, typeFilter, setTypeFilter, types }) => (
  <div className="search-bar">
    <input
      type="text"
      placeholder="Search Pokémon by name"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
    <select
      value={typeFilter}
      onChange={(e) => setTypeFilter(e.target.value)}
    >
      {types.map((type) => (
        <option key={type} value={type}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </option>
      ))}
    </select>
  </div>
);

export default SearchBar;