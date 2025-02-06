async function checkAuth() {
    const response = await fetch('http://localhost:5000/api/user', {
        method: 'GET',
        credentials: 'include' //send cookies
    });

    const data = await response.json();
    if(response.ok){
        document.getElementById('user-name').textContent = `${data.email}`;
        document.getElementById('logout').style.display = 'block';
    }
    else{
        document.getElementById('user-name').textContent = 'Guest';
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