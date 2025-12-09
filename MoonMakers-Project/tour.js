// tour.js
// Simple JavaScript for the Tour page

document.addEventListener("DOMContentLoaded", function () {

    // Select all ticket buttons
    const ticketButtons = document.querySelectorAll(".ticket-btn");

    // Add click event to each button
    ticketButtons.forEach(function(btn){
        btn.addEventListener("click", function(event){
            event.preventDefault(); // prevent the page from jumping

            // Simple alert popup (easy for class explanation)
            alert("Ticket booking coming soon! Login required.");

            // Optional: redirect to login page
            window.location.href = "auth.html";
        });
    });

});
