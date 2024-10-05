// dashboard.js
// Fetch results from backend API endpoint
const apiEndpoint = '/results'; // Replace with your actual API endpoint

async function fetchResults() {
  try {
    const response = await fetch(apiEndpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    const results = await response.json();
    return results;
  } catch (error) {
    console.error('Error fetching results:', error);
    return []; // Return an empty array to avoid further errors
  }
}

const resultsTableBody = document.getElementById('resultsTableBody');

async function populateResults() {
  const results = await fetchResults();

  if (resultsTableBody) {
    resultsTableBody.innerHTML = ''; // Clear existing rows

    results.forEach((result) => {
      const row = resultsTableBody.insertRow();
      const nameCell = row.insertCell();
      const votesCell = row.insertCell();

      nameCell.textContent = result.name;
      votesCell.textContent = result.votes.toString();
    });
  } else {
    console.error('resultsTableBody element not found.');
  }
}

// Initial population and then updates every 5 seconds
populateResults();
setInterval(populateResults, 5000);