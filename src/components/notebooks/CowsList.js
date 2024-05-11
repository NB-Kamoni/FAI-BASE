import React, { useState, useEffect } from "react";
import Cow from "./Cows"; // Component to display individual cow in a table row
import CowSearch from "./CowsSearch"; // Search component for filtering cows
import AddCowsForm from "./AddCowsForm"; // Form to add new cows
import  "./CowsList.css"


function CowsList() {
  // State to hold the list of cows
  const [cows, setCows] = useState([]);
  
  // State to hold the search term
  const [searchTerm, setSearchTerm] = useState("");

  // Function to fetch all cows from the API
  const fetchCows = async () => {
    try {
      const response = await fetch("https://farmfolio-backend.onrender.com/cows"); // API endpoint
      if (!response.ok) {
        throw new Error("Failed to fetch cows");
      }
      const data = await response.json();
      setCows(data); // Update the state with fetched data
    } catch (error) {
      console.error("Error fetching cows:", error);
    }
  };

  // Fetch cows on component mount
  useEffect(() => {
    fetchCows(); // Fetch cows when component loads
  }, []);

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // Update search term as the user types
  };

  // Function to add a new cow (refreshes after adding)
  const handleAddCow = () => {
    fetchCows(); // Refreshes cows list after adding
  };

  // Function to handle deleting a cow
  const handleDeleteCow = async (id) => {
    try {
      const response = await fetch(`https://farmfolio-backend.onrender.com/cows/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete cow");
      }
      fetchCows(); // Refreshes cows list after deletion
    } catch (error) {
      console.error("Error deleting cow:", error);
    }
  };

  // Function to sort cows alphabetically by name
  const handleSortCows = () => {
    const sortedCows = [...cows].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setCows(sortedCows); // Update the state with sorted data
  };

  return (
    <div>
      {/* Search component for filtering cows */}
      <CowSearch searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      
      {/* Form to add new cows */}
      <AddCowsForm onAddcows={handleAddCow} />
      
      {/* Button to sort cows by name */}
      <button
  className="ui button"
  type="submit"
  onClick={handleSortCows}
  style={{ 
    backgroundColor: 'green', 
    color: 'white',
    transition: 'background-color 0.3s ease, color 0.3s ease', // Add transition for smooth effect
    cursor: 'pointer', // Change cursor to pointer on hover
    borderRadius: '4px', // Optional: Add some border radius for a rounded look
    border: 'none' // Optional: Remove border
  }}
  // Add CSS hover effect
  onMouseEnter={(e) => e.target.style.backgroundColor = 'darkgreen'}
  onMouseLeave={(e) => e.target.style.backgroundColor = 'green'}
>
  Sort by Name
</button>

      
      {/* Table to display cows */}
      <table className="ui celled striped padded table green-stripes">

        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Age (Months)</th>
            <th>Weight (Kgs)</th>
            <th>Milk (L)</th>
            <th>Feed</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* Filtered and sorted list of cows */}
          {cows
            .filter((cow) => 
              cow.name.toLowerCase().includes(searchTerm.toLowerCase()) // Filter by search term
            )
            .map((cow) => (
              <Cow
                key={cow.id}
                id={cow.id}
                date={cow.date}
                name={cow.name}
                age={cow.age}
                weight={cow.weight}
                milk={cow.milk}
                feed={cow.feed}
                onDelete={handleDeleteCow} // Delete function for individual cow
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default CowsList;