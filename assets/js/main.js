const input = document.getElementById("login-pass"),
  eyeIcon = document.getElementById("login-eye");

eyeIcon.addEventListener("click", () => {
  // Change input type from password to text
  if (input.type == "password") {
    // Set input type as text
    input.type = "text";

    // change icon
    eyeIcon.classList.add("fa-eye");
    eyeIcon.classList.remove("fa-eye-slash");
  } else {
    // Change to password
    input.type = "password";

    // Change icon
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  }
});
