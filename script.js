
// Smooth scrolling effect
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation
    document.getElementById('queryForm').addEventListener('submit', function(event) {
        let name = document.getElementById('name').value.trim();
        let email = document.getElementById('email').value.trim();
        let query = document.getElementById('query').value.trim();

        if (!name || !email || !query) {
            alert("Please fill in all fields.");
            event.preventDefault();
        } else {
            alert("Query submitted successfully!");
        }
    });

    // Dynamic greeting based on time of day
    let currentTime = new Date().getHours();
    let greetingMessage = "Welcome!";
    if (currentTime < 12) {
        greetingMessage = "Good Morning!";
    } else if (currentTime < 18) {
        greetingMessage = "Good Afternoon!";
    } else {
        greetingMessage = "Good Evening!";
    }
    document.getElementById('greeting').innerText = greetingMessage;
});
