import React from "react";


function Cows({ id, date, name, age, weight, milk, feed, onDelete }) {
  // Function to handle delete button click
  const handleDelete = () => {
    onDelete(id); // Calls the onDelete function with the cow's ID
  };

  return (
    <tr>
      <td>{date}</td> {/* Display cow's record date */}
      <td>{name}</td> {/* Display cow's name */}
      <td>{age}</td> {/* Display cow's age in months */}
      <td>{weight}</td> {/* Display cow's weight in kg */}
      <td>{milk}</td> {/* Display cow's milk production in liters */}
      <td>{feed}</td> {/* Display cow's feed type */}
      <td>
        {/* Delete button to remove the cow record */}
        <button
  className="ui button"
  type="button"
  onClick={handleDelete}
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
  Delete
</button>
      </td>
    </tr>
  );
}

export default Cows;