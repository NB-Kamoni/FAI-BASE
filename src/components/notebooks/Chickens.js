import React from "react";


function Chickens({ id, date, group, number, eggs, food, onDelete }) {
  // Function to handle delete button click
  const handleDelete = () => {
    onDelete(id); // Calls the delete function with the chicken's ID
  };

  return (
    <tr>
      <td>{date}</td> 
      <td>{group}</td> 
      <td>{number}</td> 
      <td>{eggs}</td> 
      <td>{food}</td>
      <td>
        {/* Delete button to remove the chicken record */}
        <button
  className="ui button"
  type="button"
  onClick={handleDelete}
  style={{ 
    backgroundColor: 'green', 
    color: 'white',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    cursor: 'pointer',
    borderRadius: '4px', 
    border: 'none' 
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

export default Chickens;