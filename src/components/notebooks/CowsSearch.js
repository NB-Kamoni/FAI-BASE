import React from "react";


function CowsSearch({ searchTerm, onSearchChange }) {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search cows..."
        value={searchTerm} // Current search term
        onChange={onSearchChange} // Function to handle input change
      />
      <i className="circular search link icon"></i> {/* Icon for the search input */}
    </div>
  );
}

export default CowsSearch;