function validateUserName() {
  let firstNameInput = document.getElementById("username");
  let firstNameError = document.getElementById("usernameError");
  if (/[\d!@#$%^&*(),.?":{}|<>]/.test(firstNameInput.value)) {
      firstNameError.textContent = "Numbers or special characters are not allowed";
  } else {
      firstNameError.textContent = "";
  }
  return !firstNameError.textContent;
}

function validateEmail() {
  let emailInput = document.getElementById("email");
  let emailError = document.getElementById("emailError");
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
      emailError.textContent = "Enter a valid email address";
  } else {
      emailError.textContent = "";
  }
  return !emailError.textContent;
}

function validatePassword() {
  let passwordInput = document.getElementById("password");
  let passwordError = document.getElementById("passwordError");
  if (passwordInput.value.length < 6) {
      passwordError.textContent = "Password should be at least 6 characters long";
  } else {
      passwordError.textContent = "";
  }
  return !passwordError.textContent;
}

function validateConfirmPassword() {
  let passwordInput = document.getElementById("password");
  let confirmPasswordInput = document.getElementById("confirmpassword");
  let confirmPasswordError = document.getElementById("confirmpasswordError");

  if (passwordInput.value !== confirmPasswordInput.value) {
      confirmPasswordError.textContent = "Passwords do not match";
  } else {
      confirmPasswordError.textContent = "";
  }
  return !confirmPasswordError.textContent;
}

function validateForm() {
  let isValid = validateUserName() && validateEmail() && validatePassword() && validateConfirmPassword();
  let fields = ["username", "email", "password", "confirmpassword"];

  fields.forEach(field => {
      let inputElement = document.getElementById(field);
      let errorElement = document.getElementById(field + "Error");

      if (inputElement.value.trim() === "") {
          errorElement.textContent = `${getFieldLabel(field)} cannot be blank`;
          isValid = false;
      } else {
          errorElement.textContent = "";
      }
  });

  if (isValid) {
      window.location.assign("login.html");
  }
  return isValid;
}

function getFieldLabel(fieldName) {
  return fieldName.replace(/([A-Z])/g, " $1").charAt(0).toUpperCase() + fieldName.slice(1);
}

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".sign").addEventListener("click", function() {
      window.location.href = "/signup";
  });
});

function order() {
  window.location.href = "order.html";
}

