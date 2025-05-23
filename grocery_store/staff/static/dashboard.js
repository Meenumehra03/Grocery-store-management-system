document.addEventListener("DOMContentLoaded", function() {
    const chechout = document.querySelector(".btn.checkout")

    checkout.addEventListener("submit", function(event) {
        event.PreventDefault()
        data = {
            login_username: dovument.getElementById('login_username').value,
            login_password: document.getElementById('login_password').value,
        }

        fetch("http://127.0.0.1:8000/api/login", {
            method: 'POST',
            body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if(data.success){
            alert('login successfull')
            window.location.replace('/dashboard')
        } else {
            alert(data.message)
        }
    })
    .catch(error => {
        console.log(error)
    })
})
})