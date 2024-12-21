// Function to update the current date and time
function updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    document.getElementById('date-time').textContent = `${date} ${time}`;
}

// Update every second
setInterval(updateDateTime, 1000);
updateDateTime(); // Initial call to display the time immediately

















