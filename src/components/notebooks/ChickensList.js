import React, { useState, useEffect } from 'react';
import Chickens from './Chickens';
import ChickensSearch from './ChickensSearch'; 
import AddChickensForm from './AddChickensForm.js'; 
import "./CowsList"

function ChickensList() {
  // State to hold the list of chickens
  const [chickens, setChickens] = useState([]);
  
  // State for search term
  const [searchTerm, setSearchTerm] = useState('');

  // Function to fetch all chickens
  const fetchChickens = async () => {
    try {
      const response = await fetch('https://farmfolio-backend.onrender.com/chickens'); // Adjust URL for your API
      if (!response.ok) {
        throw new Error('Failed to fetch chickens');
      }
      const data = await response.json();
      setChickens(data); // Update state with fetched data
    } catch (error) {
      console.error('Error fetching chickens:', error);
    }
  };

  // Fetch chickens when component is mounted
  useEffect(() => {
    fetchChickens(); // Fetch the list of chickens on component mount
  }, []);

  // Function to handle search input
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // Update search term based on user input
  };

  // Function to add a new chicken (refreshes after addition)
  const handleAddChicken = () => {
    fetchChickens(); // Refreshes the list after adding a new chicken
  };

  // Function to delete a chicken by ID
  const handleDeleteChicken = async (id) => {
    try {
        const response = await fetch(`https://farmfolio-backend.onrender.com/chickens/${id}`, {
          method: "DELETE",
      });
      if (!response.ok) {
        throw new Error('Failed to delete chicken');
      }
      fetchChickens(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting chicken:', error);
    }
  };

  return (
    <div>
      {/* Search component */}
      <ChickensSearch searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      
      {/* Form to add new chickens */}
      <AddChickensForm onAddChicken={handleAddChicken} />
      
      {/* Table to display chickens */}
      <table className="ui celled striped padded table green-stripes">
        <thead>
        <tr>
            <th>Date</th>
            <th>Group</th>
            <th>Number</th>
            <th>Eggs</th>
            <th>Food (kg)</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* Filtered and sorted list of chickens */}
          {chickens
            .filter((chicken) => 
              chicken.group.toString().toLowerCase().includes(searchTerm.toLowerCase()) // Filter by group
            )
            .map((chicken) => (
              <Chickens
                key={chicken.id}
                id={chicken.id}
                date={chicken.date}
                group={chicken.group}
                number={chicken.number}
                eggs={chicken.eggs}
                food={chicken.food}
                onDelete={handleDeleteChicken} // Pass the delete function to the component
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ChickensList;