document.addEventListener('DOMContentLoaded', function() {

    const loginForm = document.querySelector('#form-login');

    // Handle login
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission




        data={
            login_username: document.getElementById('login_username').value,

            login_password: document.getElementById('login_password').value,
        }
    

        fetch('http://127.0.0.1:8000/api/login', {
            method: 'POST',
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('login successful');
                window.location.replace('/dashboard');
                // Optionally redirect to another page
            } else {
                alert('Registration failed: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});    
          