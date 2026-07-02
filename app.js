document.addEventListener("DOMContentLoaded", function () {

    const container = document.getElementById("container");
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    // Toggle Login/Register
    window.toggle = function () {
        container.classList.toggle("active");
    };

    // Register
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("regUser").value;
        const email = document.getElementById("regEmail").value;
        const password = document.getElementById("regPass").value;

        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        alert("Registration Successful!");

        registerForm.reset();

        container.classList.remove("active");
    });

    // Login
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("loginUser").value;
        const password = document.getElementById("loginPass").value;

        const savedUser = localStorage.getItem("username");
        const savedPass = localStorage.getItem("password");

        if (username === savedUser && password === savedPass) {
            alert("Login Successful!");
            window.location.href = "dashboard.html";
        } else {
            alert("Invalid Username or Password");
        }
    });

});