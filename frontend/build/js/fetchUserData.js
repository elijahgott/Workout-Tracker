async function fetchUserData() {
    const token = localStorage.getItem('token');

    if(!token){
        console.error('No Token Found.')
        // window.location.href = '../signin/signin.html'; //!commented out for vercel
        return;
    }

    try{
        const response = await fetch('http://localhost:5000/api/profile', {
            method: 'GET',
            headers: {'Authorization': `Bearer ${token}`}
        });

        const data = await response.json();

        if(response.ok){
            document.querySelectorAll('#username').forEach((element) => {
                element.innerText = data.user.name;
            })
        }
        else{ //i don think this code is ever runned ran run
            alert('Session Expired, Please Log In.');
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            // window.location.href = '../signin/signin.html'; //!commented out for vercel
        }
    }
    catch (error){
        document.querySelectorAll('#username').forEach((element) => {
            element.innerText = 'Guest';
        });
        console.error('Error fetching user: ', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchUserData);