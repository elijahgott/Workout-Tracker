document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    try{
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            // credentials: 'include', //send cookies
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        });
    
        const data = await response.json();

        if(response.ok){
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));

            alert('Login Successful!');
            window.location.href = '../index/index.html';
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

const forgotPassword = document.getElementById('forgotPassword');
forgotPassword.addEventListener('click', () =>{
    alert('I haven\'t implemented this yet. My bad.');
})