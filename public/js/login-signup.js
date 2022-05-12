// Validate user input and send login request
const handleLoginSubmit = async (event) => {
  event.preventDefault();
  try {
    const username = document.querySelector("#loginUsername").value.trim();
    const password = document.querySelector("#loginPassword").value.trim();

    if (!username || !password) {
      alert("You must provide a username and password.");
      return;
    }

    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok) {
      alert("Failed to sign up.");
      return;
    }

    // go to home page
    window.location.replace("/");
  } catch (error) {
    console.log(error);
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", handleLoginSubmit);

//sign up
// Validate user input and send login request
const handleSignupSubmit = async (event) => {
  event.preventDefault();
  try {
    const username = document.querySelector("#signupUsername").value.trim();
    const password = document.querySelector("#signupPassword").value.trim();
    const confirmPassword = document
      .querySelector("#confirm-password")
      .value.trim();

    if (!username || !password) {
      alert("You must provide a username and password.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords to not match.");
      return;
    }

    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok) {
      alert("Failed to sign up.");
      return;
    }

    // go to home page
    window.location.replace("/");
  } catch (error) {
    console.log(error);
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", handleSignupSubmit);