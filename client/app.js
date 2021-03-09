// Buttons
const uploadBtn = document.getElementById('upload-btn');
const snipBtn = document.getElementById('snip-btn');

// Button Event Listeners
uploadBtn.addEventListener('click', () => {
  console.log("uploaded");
});

snipBtn.addEventListener('click', () => {
  console.log("snipped");
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

// Translate
const translateInput = document.getElementById('translate-input');
const sourceInput = document.querySelector('#lang-options');
const translatedText = document.getElementById('translated-text');

translateInput.addEventListener('change', handleTranslateRequest);
sourceInput.addEventListener('change', handleTranslateRequest);

async function handleTranslateRequest(e) {
  const input = translateInput.value;
  const source = sourceInput.value;
  const target = "en";
  if (input === ''){
    return;
  }
  translatedText.textContent = '';
  // const dict = document.createElement('h2');
  // const entry = document.createElement('li');

  // Server call of google translate
  const google_response = await fetch(`/api/translate/google/${source}/${target}/${input}`)
  .then(response => {
    const google_json = response.json()
    .then(json_response => {
      displayTranslateResult(json_response, "Google");
    });
  });

  // Server call of myMemory
  const myMemory_response = await fetch(`/api/translate/myMemory/${source}/${target}/${input}`)
  .then(response => {
    const myMemory_json = response.json()
    .then(json_response => {
      displayTranslateResult(json_response, "myMemory");
    });
  });
  
  // Server call of Libre 
  const libre_response = await fetch(`/api/translate/libre/${source}/${target}/${input}`)
  .then(response => {
    const libre_json = response.json()
    .then(json_response => {
      displayTranslateResult(json_response, "Libre");
    });
  });
}

// Translate Helper function
function displayTranslateResult(text, loc) {
  const dict = document.createElement('h2');
  dict.textContent = `${loc}: `;
  translatedText.appendChild(dict);
  if (text != '') {
    const entry = document.createElement('li');
    entry.textContent = text;
    translatedText.appendChild(entry);
  }
}