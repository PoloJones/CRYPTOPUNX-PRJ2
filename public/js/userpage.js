// // Validate user input and send login request
// const handleSignupSubmit = async (event) => {
//   event.preventDefault();
//   try {
//     const username = document.querySelector("#username").value.trim();
//     const password = document.querySelector("#password").value.trim();
//     const confirmPassword = document
//       .querySelector("#confirm-password")
//       .value.trim();

//     if (!username || !password) {
//       alert("You must provide a username and password.");
//       return;
//     }

//     if (password !== confirmPassword) {
//       alert("Passwords to not match.");
//       return;
//     }

//     const response = await fetch("/api/users", {
//       method: "POST",
//       body: JSON.stringify({ username, password }),
//       headers: {
//         "Content-Type": "application/json; charset=UTF-8",
//       },
//     });

//     if (!response.ok) {
//       alert("Failed to sign up.");
//       return;
//     }

//     // go to home page
//     window.location.replace("/");
//   } catch (error) {
//     console.log(error);
//   }
// };

// document
//   .querySelector(".signup-form")
//   .addEventListener("submit", handleSignupSubmit);


const newFormHandler = async (event) => {
  event.preventDefault();

  const newPost = document.querySelector('#new-post').value.trim();
  
  if (newPost) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ newPost }),
      
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/posts/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/userpage');
//     } else {
//       alert('Failed to delete project');
//     }
//   }
// };

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);

// document
//   .querySelector('.post-list')
//   .addEventListener('click', delButtonHandler);