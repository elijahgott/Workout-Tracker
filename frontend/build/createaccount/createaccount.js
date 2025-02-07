document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try{
        const response = await fetch('http://localhost:5000/api/createaccount', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name, email, password})
        });

        const data = await response.json();

        if(response.ok){
            alert('Successfully Created Account!'); //!doesnt sign in user?
            window.location.href = '../index.html';
        }
        else{
            console.log(response)
            alert(data.error);
        }
    }
    catch (error){
        console.error('Error: ', error);
        alert('Unable to Create Account.');
    }
});