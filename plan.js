

document.addEventListener('DOMContentLoaded', loadSavedPlans);

document.getElementById('trip-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const destination = document.getElementById('destination').value;
    const dates = document.getElementById('dates').value;
    const travelers = document.getElementById('travelers').value;
    const activities = document.getElementById('activities').value;
    const accommodation = document.getElementById('accommodation').value;

    const trip = {
        destination,
        dates,
        travelers,
        activities,
        accommodation
    };

    // Save the trip to local storage
    saveTrip(trip);

    // Add the trip to the table
    addTripToTable(trip);

    document.getElementById('trip-form').reset();
});

function saveTrip(trip) {
    
    let trips = JSON.parse(localStorage.getItem('trips')) || [];
    
    
    trips.push(trip);
    
   
    localStorage.setItem('trips', JSON.stringify(trips));
}

function loadSavedPlans() {
    // Get saved trips from local storage
    const trips = JSON.parse(localStorage.getItem('trips')) || [];

    trips.forEach(addTripToTable);
}

function addTripToTable(trip) {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${trip.destination}</td>
        <td>${trip.dates}</td>
        <td>${trip.travelers}</td>
        <td>${trip.activities}</td>
        <td>${trip.accommodation}</td>
    `;
    document.getElementById('summary-table-body').appendChild(newRow);

    // Show the table if it's hidden
    document.getElementById('summary-table').style.display = 'table';
}

document.getElementById('signupform').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting the traditional way

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Simple validation
  if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
  }

  // Here you can add additional validation or save the user info

  // Redirect to home page
  window.location.href = 'home.html';
});

