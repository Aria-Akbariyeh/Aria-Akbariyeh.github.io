const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// check email is valid
function isValidEmail(email) {
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    return re.test(String(email).toLowerCase());
}


// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}


// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


//  check required fields
function checkRequired(inputArr) {


}

form.addEventListener('submit', function(e) {

    checkRequired([username, email, password, password2]);
  
});


// form.addEventListener('submit', function(e) {
//     e.preventDefault();

//     if (username.value === ''){
//         showError(username, 'Username is required');
//     } else {
//         showSuccess(username)
//     }

//     consol=e.log(username.value);
// });


// form.addEventListener('submit', function(e) {
//     e.preventDefault();

//     if (email.value === '' ){
//         showError(email, 'Email is required');
//     } else if (!isValidEmail(email.value)){
//         showError(email, 'Email is not valid');
//     } else {
//         showSuccess(email)
//     }

//     consol=e.log(email.value);
// });



// form.addEventListener('submit', function(e) {
//     e.preventDefault();

//     if (password.value === ''){
//         showError(password, 'Password is required');
//     } else {
//         showSuccess(password)
//     }

//     consol=e.log(password.value);
// });



// form.addEventListener('submit', function(e) {
//     e.preventDefault();

//     if (password2.value === ''){
//         showError(password2, 'Password confirmation is required');
//     } else {
//         showSuccess(password2)
//     }

//     consol=e.log(password2.value);
// });




