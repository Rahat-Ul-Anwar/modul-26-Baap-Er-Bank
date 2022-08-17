
document.getElementById('btn-submit').addEventListener('click', function () {
    //get email
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    console.log(email);

    //get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(password);

    //Danger: do not verify email and password on the client side
    //verify email and password 
    const submitButton = document.getElementById('btn-submit');

    if (email === 'rahatulanwar@gmail.com' && password === 'secret') {
        submitButton.addEventListener('click', function () {
            window.location.href =  "bank.html";
            
        })
         
    }

    else {
        alert('invalid user');
    }
})


 //