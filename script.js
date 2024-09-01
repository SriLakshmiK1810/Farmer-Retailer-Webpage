document.addEventListener('DOMContentLoaded', () => {
    // Get references to the buttons
    const userLoginButton = document.getElementById('user-login');
    const farmerLoginButton = document.getElementById('farmer-login');

    // Add event listeners to the buttons
    userLoginButton.addEventListener('click', () => {
        window.location.href = 'user-login.html';
    });

    farmerLoginButton.addEventListener('click', () => {
        window.location.href = 'farmer-login.html';
    });
});