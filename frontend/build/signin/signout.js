document.getElementById('signout').addEventListener('click', async () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = './signin/signin.html'; //probably wont work on all pages (only work on index?)
})