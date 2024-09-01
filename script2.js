document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const successMessage = document.getElementById('success-message');
    const userInfoSection = document.getElementById('user-info');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting normally

        // Show the success message
        successMessage.style.display = 'block';

        // Hide the success message and show the user info section after a short delay
        setTimeout(() => {
            successMessage.style.display = 'none';
            userInfoSection.style.display = 'block';
        }, 2000); // Adjust the delay as needed (2000 ms = 2 seconds)
    });

    // Handle the information form submission
    const infoForm = document.getElementById('info-form');
    infoForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting normally

        // Collect form data (for demonstration purposes)
        const formData = new FormData(infoForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // In a real application, you would send this data to a server
        console.log('User Information Submitted:', data);

        // Optionally clear the form or show a success message
        infoForm.reset();
    });
});
