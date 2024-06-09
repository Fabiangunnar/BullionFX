function register(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    localStorage.setItem('username', username);
    window.location.href = 'dashboard.html';
}

function login(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    localStorage.setItem('username', username);
    window.location.href = 'dashboard.html';
}

function togglePasswordVisibility(id) {
    const passwordField = document.getElementById(id);
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const profileNameElements = document.querySelectorAll('.profilename');
    const username = localStorage.getItem('username');
    if (username && profileNameElements.length > 0) {
        profileNameElements.forEach(element => {
            element.innerHTML = username;
        });
    }
});
