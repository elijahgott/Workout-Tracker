async function fetchUserData() {
    const token = localStorage.getItem('token');

    if(!token){
        console.error('No Token Found.')
        window.location.href = '../signin/signin.html';
        return;
    }

    try{
        const response = await fetch('http://localhost:5000/api/profile', {
            method: 'GET',
            headers: {'Authorization': `Bearer ${token}`}
        });

        const data = await response.json();
        console.log(data);

        if(response.ok){
            document.querySelectorAll('#username').forEach((element) => {
                element.innerText = data.user.name;
            })
        }
        else{
            alert('Session Expired, Please Log In.');
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.location.href = '../signin/signin.html';
        }
    }
    catch (error){
        console.error('Error fetching user: ', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchUserData);