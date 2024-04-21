document.addEventListener("DOMContentLoaded", function() {
    // Get the signup form element
    var signupForm = document.getElementById("signup-form");
  
    // Add event listener for form submission
    signupForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Get the value of the name input field
      var name = document.getElementById("name").value;
  
      // Perform validation if needed
  
      // Here, you can perform further actions like sending the signup data to a server, etc.
      // For now, let's just log the name
      console.log("User signed up with name:", name);
    });
  
    // Get the login form element
    var loginForm = document.getElementById("login-form");
  
    // Add event listener for form submission
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Get the value of the username and password input fields
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
  
      // Perform validation if needed
  
      // Here, you can perform further actions like sending the login data to a server for authentication, etc.
      // For now, let's just log the username and password
      console.log("User logged in with username:", username, "and password:", password);
    });
  });
  