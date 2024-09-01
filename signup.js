document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const signupSuccess = document.getElementById('signup-success');

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting normally

        // Get form values
        const firstname = document.getElementById('firstname').value;
        const lastname = document.getElementById('lasttname').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Basic validation
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // Display success message
        signupSuccess.style.display = 'block';

        // Hide the success message after a short delay and optionally redirect or clear form
        setTimeout(() => {
            signupSuccess.style.display = 'none';
            // Optionally clear the form
            signupForm.reset();
            // Redirect to login page or another page if needed
            // window.location.href = 'user-login.html';
        }, 2000); // Adjust delay as needed
    });
});
