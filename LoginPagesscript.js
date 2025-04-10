// Sample login credentials for demonstration purposes
const users = [
  { username: "clientUser", password: "clientPass", role: "client" },
  { username: "recruiterUser", password: "recruiterPass", role: "recruiter" }
];

// Handle form submission
document.querySelector('#login-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the default form submission

  // Get the input values
  const username = document.querySelector('#username').value.trim();
  const password = document.querySelector('#password').value.trim();

  // Check if username or password is empty
  if (!username || !password) {
    alert("Please enter both username and password.");
    return;
  }

  // Check if the user exists and validate the credentials
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    if (user.role === "client") {
      alert("Welcome to the Client Server!");
      // Redirect to Client Server
      window.location.href = "client-server.html"; // Replace with the actual URL of the client server
    } else if (user.role === "recruiter") {
      alert("Welcome to the Recruiter Server!");
      // Redirect to Recruiter Server
      window.location.href = "recruiter-server.html"; // Replace with the actual URL of the recruiter server
    }
  } else {
    alert("Invalid username or password!");
  }
});