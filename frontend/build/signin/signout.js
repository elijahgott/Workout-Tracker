document.getElementById('logout').addEventListener('click', async () => {
    await fetch('http://localhost:5000/api/logout', {
        method: 'POST',
        credentials: 'include'});
    window.location.href = './signin.html'; //probably wont work on all pages (only work on index?)
})