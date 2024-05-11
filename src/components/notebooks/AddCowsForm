import React, { useState } from "react";


function AddCowsForm({ onAddcows }) {
  // State to hold form input data
  const [formData, setFormData] = useState({
    date: "",
    name: "",
    age: "",
    weight: "",
    milk: "",
    feed: "",
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
      // Make POST request to add a new cow
      const response = await fetch("https://farmfolio-backend.onrender.com/cows", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to add cow");
      }

      // Clear form data after successful submission
      setFormData({
        date: "",
        name: "",
        age: "",
        weight: "",
        milk: "",
        feed: "",
      });

      // Notify parent component to update the list
      onAddcows();
    } catch (error) {
      console.error("Error adding cow:", error);
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
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="age"
            placeholder="Age (months)"
            value={formData.age}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="weight"
            placeholder="Weight (kg)"
            value={formData.weight}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="milk"
            placeholder="Milk (L)"
            value={formData.milk}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="feed"
            placeholder="Feed"
            value={formData.feed}
            onChange={handleInputChange}
          />
        </div>
        {/* Add cows button */}
        <button
  className="ui button"
  type="submit"
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
  Add Cow
</button>
      </form>
    </div>
  );
}

export default AddCowsForm;