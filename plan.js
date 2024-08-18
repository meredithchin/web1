document.getElementById("trip-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Capture the form values
    const destination = document.getElementById("destination").value;
    const dates = document.getElementById("dates").value;
    const travelers = document.getElementById("travelers").value;
    const activities = document.getElementById("activities").value;
    const accommodation = document.getElementById("accommodation").value;

    // Create a summary of the trip plan
    const planSummary = `
        <h3>Trip Summary</h3>
        <p><strong>Destination:</strong> ${destination}</p>
        <p><strong>Dates:</strong> ${dates}</p>
        <p><strong>Number of Travelers:</strong> ${travelers}</p>
        <p><strong>Activities:</strong> ${activities}</p>
        <p><strong>Accommodation:</strong> ${accommodation}</p>
    `;

    // Insert the summary into a container on the page
    document.getElementById("plan-summary").innerHTML = planSummary;

});
