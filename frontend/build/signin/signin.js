document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try{
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            credentials: 'include', //send cookies
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        });
    
        const data = await response.json();
        if(response.ok){
            alert('Login Successful!');
            window.location.href = '../index.html';
        }
        else{
            alert(data.error);
        }
    }
    catch (error){
        console.error('Error: ', error);
        alert('Mannnn')
    }
});