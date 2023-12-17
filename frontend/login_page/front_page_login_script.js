function toggleLoginForm() {
  const formContainer = document.getElementById("formLoginContainer");
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const loginButton = document.querySelector(".login-button");
  const signupButton = document.querySelector(".signup-button");

  //display login and hide signup
  loginForm.classList.toggle("active");
  signupForm.classList.remove("active");

  //change display text if other is active
  signupButton.innerText = "Signup";

  // put form in new div container
  formContainer.innerHTML = ""; // Clear previous content
  formContainer.appendChild(loginForm);

  // Change text when clicked
  loginButton.innerText = loginButton.innerText === "Login" ? "Hide" : "Login";
}

function toggleSignupForm() {
  const formContainer = document.getElementById("formSignupContainer");
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const signupButton = document.querySelector(".signup-button");
  const loginButton = document.querySelector(".login-button");

  //display login and hide signup
  signupForm.classList.toggle("active");
  loginForm.classList.remove("active");

  //change display text if other is active
  loginButton.innerText = "Login";

  // put form in new div container
  formContainer.innerHTML = "";
  formContainer.appendChild(signupForm);

  // Change text when clicked
  signupButton.innerText =
    signupButton.innerText === "Signup" ? "Hide" : "Signup";
}

function submitForm(type) {
  const form = document.getElementById(`${type}Form`);
  form.classList.remove("active");
}

