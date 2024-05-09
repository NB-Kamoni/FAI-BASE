import React from 'react';

function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      onChange={e => onSearch(e.target.value)}
      style={{ width: "100%", padding: "10px", margin: "10px 0" }}
    />
  );
}

export default SearchBar;
