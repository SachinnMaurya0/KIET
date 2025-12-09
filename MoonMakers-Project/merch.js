// merch.js
// Simple JS for the Merch page

document.addEventListener("DOMContentLoaded", function () {

    // Select all buy buttons
    const buyButtons = document.querySelectorAll(".buy-btn");

    // Add click behavior
    buyButtons.forEach(function(btn){
        btn.addEventListener("click", function(event){
            event.preventDefault();

            // Simple alert (easy to explain)
            alert("Please sign in to purchase merch.");

            // Redirect to login/auth page
            window.location.href = "auth.html";
        });
    });

});
