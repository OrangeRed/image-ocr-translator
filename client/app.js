// Buttons
const uploadBtn = document.getElementById('uploadBtn');
const snipBtn = document.getElementById('snipBtn');
const translateBtn = document.getElementById('translateBtn');

// Button Event Listeners
uploadBtn.addEventListener('click', () => {
  console.log("uploaded");
});

snipBtn.addEventListener('click', () => {
  console.log("snipped");
});

translateBtn.addEventListener('click', () => {
  console.log("translated");
});

// Authentication API call examples 

// Register
const registerForm = document.getElementById("register-form");
const registerResponse = document.getElementById("register-response");
registerForm.addEventListener("submit", handleRegisterFormSubmit);

function handleRegisterFormSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const url = form.action;
  const formData = new FormData(form);
  const plainFormData = Object.fromEntries(formData.entries());
  const formDataJsonString = JSON.stringify(plainFormData);

  fetch(url, {
    method: "POST",
    mode: "cors",
    body: formDataJsonString,
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => {
    if (!res.ok) { throw res }
    return res.json(); 
  })
  .then(data => {
    registerResponse.innerHTML = JSON.stringify(data);
  })
  .catch(error => {
    error.text().then(errorMessage => {
      registerResponse.innerHTML = errorMessage;
    })
  })
}

// Login
const loginForm = document.getElementById("login-form");
const loginResponse = document.getElementById("login-response");
loginForm.addEventListener("submit", handleLoginFormSubmit);

function handleLoginFormSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const url = form.action;
  const formData = new FormData(form);
  const plainFormData = Object.fromEntries(formData.entries());
  const formDataJsonString = JSON.stringify(plainFormData);

  fetch(url, {
    method: "POST",
    mode: "cors",
    body: formDataJsonString,
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => {
    if (!res.ok) { throw res }
    return res.text(); 
  })
  .then(data => {
    loginResponse.innerHTML = data;
  })
  .catch(error => {
    error.text().then(errorMessage => {
      loginResponse.innerHTML = errorMessage;
    })
  })
}

// Posts
const postsForm = document.getElementById("posts-form");
const postsToken = document.getElementById("posts-token");
const postsResponse = document.getElementById("posts-response");
postsForm.addEventListener("submit", handlePostsFormSubmit);

function handlePostsFormSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const url = form.action;
  const token = postsToken.value;

  fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "auth-token": token
    }
  })
  .then(res => {
    if (!res.ok) { throw res }
    return res.json(); 
  })
  .then(data => {
    postsResponse.innerHTML = JSON.stringify(data);
  })
  .catch(error => {
    error.text().then(errorMessage => {
      postsResponse.innerHTML = errorMessage;
    })
  })
}