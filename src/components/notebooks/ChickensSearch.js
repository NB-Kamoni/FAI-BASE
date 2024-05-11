import React from "react";


function ChickensSearch({ searchTerm, onSearchChange }) {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search by group..."
        value={searchTerm} 
        onChange={onSearchChange} 
      />
      <i className="circular search link icon"></i> 
    </div>
  );
}

export default ChickensSearch;