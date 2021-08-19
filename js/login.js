// Login System 
const loginBtn = document.getElementById('login-submit');
loginBtn.addEventListener('click', function () {
    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('user-password').value;
    if (userEmail == 'baperchele@baap.com' && userPassword == '123') {
        window.location.replace("banking.html");
        // console.log('Matched');
    }
    else {
        console.log('Not matched');
    }
})

