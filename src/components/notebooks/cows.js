// Defines a function that fetches data from the db.json file
async function fetchData() {
  try {
    const response = await fetch('db.json');
    const data = await response.json();
    return data.cows;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

// The function to delete a cow
async function deleteCow(id) {
  try {
    const response = await fetch('/api/cows/${id}', {method: 'DELETE'});
    if (response.ok) {
        // to reload the cow data after deletion
        const updatedCowsData = await fetchData();
        renderCows(updatedCowsData);
    } else {
        console.error('Failed to delete cow');
    }
  } catch (error) {
    console.error('Error deleting cow:', error);
  }
}

// The function to add a cow
async function addCow(newCowData) {
  try {
    const response = await fetch('/api/cows/${id}', {method: 'POST', headers: {
      'Content-Type':'application/json'
     },
     body: JSON.stringify(newCowData)
    });
    if (response.ok) {
        // to reload the cow data after addition
        const updatedCowsData = await fetchData();
        renderCows(updatedCowsData);
    } else {
        console.error('Failed to add cow');
    }
  } catch (error) {
    console.error('Error addinng cow:', error);
  }
}

// The function to update a cow
async function updateCow(id, updatedCowsData) {
    try {
      const response = await fetch('/api/cows/${id}', {method: 'PUT', headers: {
        'Content-Type': 'application/json'
       },
       body: JSON.stringify(updatedCowsData)
      });
      if (response.ok) {
          // to reload the cow data after update
          const updatedCowsData = await fetchData();
          renderCows(updatedCowsData);
      } else {
          console.error('Failed to update cow');
      }
    } catch (error) {
      console.error('Error updating cow:', error);
    }
}

// defines a function to render cow information
function renderCows(cows) {
  const cowContainer = document.getElementById('cow-container');
   cowContainer.innerHTML =""; // to clear previous content
   cows.forEach(cow => {
    const cowElement = document.createElement('div');
    cowElement.innerHTML = `
     <div>
      <p>Age: ${cow.age_months} months</p>
      <p>Weight: ${cow.weight_kg} kg</p>
      <p>Daily Milk Production: ${cow.daily_milk_production_g} grams</p>
      <p>Feed Type: ${cow.feed_type}</p>
      <button onclick="deleteCow(${cow.id})">Delete</button>
      <button onclick="updateCow(${cow.id})">Update</button>
     </div>
    `;

cowContainer.appendChild(cowElement.firstChild); // to append the first child of cowElement
  });
}

// Call fetchData() and renderCows() when the page loads
document.addEventListener('DOMContentLoaded', async () => {
  const cowsData = await fetchData();
  renderCows(cowsData);
});