// Validate user input and send login request
const handleLoginSubmit = async (event) => {
  event.preventDefault();
  try {
    const username = document.querySelector("#username").value.trim();
    const password = document.querySelector("#password").value.trim();

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
      alert("Failed to sign in.");
      return;
    }

    // go to home page
    window.location.replace("/userpage");
  } catch (error) {
    console.log(error);
  }
};

document.getElementById("signIn").addEventListener("click", handleLoginSubmit);


//sign up
// Validate user input and send login request
const handleSignupSubmit = async (event) => {
  event.preventDefault();
  try {
    const username = document.querySelector("#username").value.trim();
    const password = document.querySelector("#password").value.trim();
   

    if (!username || !password) {
      alert("You must provide a username and password.");
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
    window.location.replace("/userpage");
  } catch (error) {
    console.log(error);
  }
};

 document.getElementById("signUp").addEventListener("click", handleSignupSubmit);

