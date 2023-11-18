function toggleLoginForm() {
    const formContainer = document.getElementById('formLoginContainer');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const loginButton = document.querySelector('.login-button');
    const signupButton = document.querySelector('.signup-button');

    //display login and hide signup
    loginForm.classList.toggle('active');
    signupForm.classList.remove('active');

    //change display text if other is active
    signupButton.innerText = 'Signup';

    // put form in new div container
    formContainer.innerHTML = '';  // Clear previous content
    formContainer.appendChild(loginForm);

    // Change text when clicked
    loginButton.innerText = loginButton.innerText === 'Login' ? 'Hide' : 'Login';
}

function toggleSignupForm() {
    const formContainer = document.getElementById('formSignupContainer');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const signupButton = document.querySelector('.signup-button');
    const loginButton = document.querySelector('.login-button');

    //display login and hide signup
    signupForm.classList.toggle('active');
    loginForm.classList.remove('active');

    //change display text if other is active
    loginButton.innerText = 'Login';

    // put form in new div container
    formContainer.innerHTML = '';
    formContainer.appendChild(signupForm);

    // Change text when clicked
    signupButton.innerText = signupButton.innerText === 'Signup' ? 'Hide' : 'Signup';
}

function submitForm(type) {
    const form = document.getElementById(`${type}Form`);
    form.classList.remove('active');
}

//Auth

async function makeRequest(url, method, data) {
    try {
        const response = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Check if the response is JSON
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            const result = await response.json();
            console.log(result);
            // Handle the JSON response accordingly (redirect, show messages, etc.)
        } else {
            // Handle non-JSON response (plain text, etc.)
            const result = await response.text();
            console.log(result);
            // Handle the non-JSON response accordingly
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Frontend login logic
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    await makeRequest('http://localhost:8080/api/auth/login', 'POST', { email, password });
});

// Frontend signup logic
const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    await makeRequest('http://localhost:8080/api/auth/signup', 'POST', { username, email, password });
});



