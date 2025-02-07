async function checkAuth() {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));

    if(token && user){
        document.getElementById('user-name').innerText = user.name;
        document.getElementById('sign-out').style.display = 'block';
    }
    else{
        window.location.href = './signin/signin.html';
    }
}

document.addEventListener('DOMContentLoaded', checkAuth);

async function checkProtectedRoute() {
    const response = await fetch('http://localhost:5000/api/user', {
        method: 'GET',
        credentials: 'include'
    });

    if(response.ok){
        window.location.href = './login.html'; //redirect if not signed in
    }
}

document.addEventListener('DOMContentLoaded', checkAuth);