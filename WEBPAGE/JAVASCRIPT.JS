function showRegistrationForm() {
  document.getElementById('registration-form').style.display = 'block';
}

function registerUser() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;

  // Perform email verification and registration process
  // (In a real-world scenario, this would be done server-side)

  // For simplicity, just display a confirmation message here
  alert('Registration successful! Please check your email for activation.');

  // You can also implement sending a verification email here (requires server-side functionality)

  // Clear the form
  document.getElementById('signup-form').reset();

  // Hide the registration form
  document.getElementById('registration-form').style.display = 'none';

  return false; // Prevent form submission (for demonstration purposes)
}
