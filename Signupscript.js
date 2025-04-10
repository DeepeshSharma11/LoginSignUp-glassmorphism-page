// User storage for demonstration purposes
const users = [];

// Function to validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to validate password strength
function validatePasswordStrength(password) {
  const length = document.getElementById('length');
  const uppercase = document.getElementById('uppercase');
  const lowercase = document.getElementById('lowercase');
  const number = document.getElementById('number');
  const special = document.getElementById('special');
  const signupBtn = document.getElementById('signup-btn');

  // Regular expressions for validation
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*]/.test(password);

  // Update validation statuses
  length.classList.toggle('valid', password.length >= 8);
  length.classList.toggle('invalid', password.length < 8);

  uppercase.classList.toggle('valid', hasUppercase);
  uppercase.classList.toggle('invalid', !hasUppercase);

  lowercase.classList.toggle('valid', hasLowercase);
  lowercase.classList.toggle('invalid', !hasLowercase);

  number.classList.toggle('valid', hasNumber);
  number.classList.toggle('invalid', !hasNumber);

  special.classList.toggle('valid', hasSpecial);
  special.classList.toggle('invalid', !hasSpecial);

  // Enable the sign-up button only if all conditions are met
  signupBtn.disabled = !(password.length >= 8 && hasUppercase && hasLowercase && hasNumber && hasSpecial);
}

// Handle form submission
document.querySelector('#signup-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the default form submission

  // Collect form data
  const recruiterFields = document.getElementById('recruiter-fields');
  const clientFields = document.getElementById('client-fields');
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

  let userType = null;
  let additionalData = {};

  // Determine if recruiter or client fields are active
  if (!recruiterFields.classList.contains('hidden')) {
    userType = "recruiter";
    const companyName = document.querySelector('#recruiter-company').value.trim();
    const position = document.querySelector('#recruiter-position').value.trim();

    // Validate recruiter-specific fields
    if (!companyName || !position) {
      alert("Please fill in all recruiter fields.");
      return;
    }

    additionalData = { companyName, position };
  } else if (!clientFields.classList.contains('hidden')) {
    userType = "client";
    const fullName = document.querySelector('#client-fullname').value.trim();
    const organization = document.querySelector('#client-organization').value.trim();

    // Validate client-specific fields
    if (!fullName || !organization) {
      alert("Please fill in all client fields.");
      return;
    }

    additionalData = { fullName, organization };
  } else {
    alert("Please select a role (Recruiter or Client) before signing up.");
    return;
  }

  // Validate common fields (email and password)
  if (!email || !password) {
    alert("Please fill in all required fields.");
    return;
  }

  if (!isValidEmail(email)) {
    alert("Invalid email format.");
    return;
  }

  // Register the user
  users.push({
    email,
    password,
    role: userType,
    ...additionalData
  });

  alert(`Sign-up successful! Welcome to the ${userType === "recruiter" ? "Recruiter" : "Client"} Server.`);
  console.log("Registered Users:", users);

  // Redirect based on role
  if (userType === "recruiter") {
    window.location.href = "recruiter-server.html"; // Replace with actual recruiter server URL
  } else if (userType === "client") {
    window.location.href = "client-server.html"; // Replace with actual client server URL
  }
});

// Handle role selection (toggle fields dynamically)
document.getElementById('recruiter-btn').addEventListener('click', () => {
  document.getElementById('recruiter-fields').classList.remove('hidden');
  document.getElementById('client-fields').classList.add('hidden');
  document.getElementById('recruiter-btn').style.background = '#ff4c4c';
  document.getElementById('client-btn').style.background = '#ff6961';
});

document.getElementById('client-btn').addEventListener('click', () => {
  document.getElementById('client-fields').classList.remove('hidden');
  document.getElementById('recruiter-fields').classList.add('hidden');
  document.getElementById('client-btn').style.background = '#ff4c4c';
  document.getElementById('recruiter-btn').style.background = '#ff6961';
});

// Show password validation on focus
document.querySelector('#password').addEventListener('focus', () => {
  document.getElementById('password-validation').classList.remove('hidden');
});

// Validate password strength on input
document.querySelector('#password').addEventListener('input', (e) => {
  validatePasswordStrength(e.target.value);
});