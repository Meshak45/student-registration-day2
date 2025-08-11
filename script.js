document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let department = document.getElementById("department").value;
    let year = document.getElementById("year").value;
    let projectTitle = document.getElementById("projectTitle").value.trim();

    // Check if all fields are filled
    if (!name || !email || !department || !year || !projectTitle) {
        alert("All fields must be filled");
        return;
    }

    // Email format validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return;
    }

    // If all validations pass
    alert("Registration Successful");
    document.getElementById("registrationForm").reset();
});
