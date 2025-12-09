// auth.js
// Handles switching between Sign In / Sign Up and simple submit actions

document.addEventListener("DOMContentLoaded", function () {

    // Tabs
    const tabSignIn = document.getElementById("tab-signin");
    const tabSignUp = document.getElementById("tab-signup");

    // Forms
    const formSignIn = document.getElementById("form-signin");
    const formSignUp = document.getElementById("form-signup");

    // ---------- TAB SWITCHING ----------
    tabSignIn.addEventListener("click", function () {
        tabSignIn.classList.add("active");
        tabSignUp.classList.remove("active");

        formSignIn.style.display = "flex";
        formSignUp.style.display = "none";
    });

    tabSignUp.addEventListener("click", function () {
        tabSignUp.classList.add("active");
        tabSignIn.classList.remove("active");

        formSignUp.style.display = "flex";
        formSignIn.style.display = "none";
    });

    // ---------- SIGN IN SUBMIT ----------
    formSignIn.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Signed in successfully (demo only).");
    });

    // ---------- SIGN UP SUBMIT ----------
    formSignUp.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Account created (demo only).");
    });

});
