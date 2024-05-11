import React, { useState } from "react";


function AddChickensForm({ onAddChicken }) {
  // State to hold form data
  const [formData, setFormData] = useState({
    date: "",
    group: "",
    number: "",
    eggs: "",
    food: "",
  });

  // Function to handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form from reloading the page
    try {
      // Make a POST request to add a new chicken record
      const response = await fetch("https://farmfolio-backend.onrender.com/chickens", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to add chicken");
      }

      // Clear form data after successful submission
      setFormData({
        date: "",
        group: "",
        number: "",
        eggs: "",
        food: "",
      });

      // Notify parent component to refresh the list
      onAddChicken();
    } catch (error) {
      console.error("Error adding chicken:", error);
    }
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input
            type="date"
            name="date"
            placeholder="Date"
            value={formData.date}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="group"
            placeholder="Group"
            value={formData.group}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="number"
            placeholder="Number of chickens"
            value={formData.number}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="eggs"
            placeholder="Total eggs"
            value={formData.eggs}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="food"
            placeholder="Food consumption (kg)"
            value={formData.food}
            onChange={handleInputChange}
          />
        </div>
        
        {/* Add chichen button */}
        <button
  className="ui button"
  type="submit"
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
  Add Chicken
</button>
      </form>
    </div>
  );
}

export default AddChickensForm;