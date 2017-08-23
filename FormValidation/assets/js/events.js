// Check if document is ready
document.addEventListener('DOMContentLoaded', init, false);

// Run this function when document is ready
function init() {
    // Add event listener on submit button
    document.querySelector('form').addEventListener('submit', validateForm);
}

// This function validates the input fields on the forms
function validateForm(event) {
    var valid = true,
        regEx,
        correct,
        inputAll = document.querySelectorAll('input:not(#submit)'),
        formError = document.querySelector('.form__error');

    // Prevent default behaviour (posting the form), because we want to do this via AJAX.
    event.preventDefault();

    // Empty the error message
    formError.innerHTML = '';

    // Loop through all input fields
    for (i = 0; i < inputAll.length; i++) {
        var el = inputAll[i];
        var elValid = true;

        // Check if input field is empty
        if (!el.value) {
            valid = false;
            elValid = false;
            formError.innerHTML += '<li>' + el.className + ' is empty!' + '</li>';
        }


        // Check if input field is not empty and if input field type is email, then check if value is a valid email address
        if (el.type === 'email' && valid) {
            regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            correct = regEx.test(el.value);
            if (!correct) {
                valid = false;
                elValid = false;
                formError.innerHTML += '<li>' + el.className + ' is not a valid email address!' + '</li>';
            }
        }

        // Check if input field is not empty and if input field type is email, then check if value is a valid Dutch phonenumber
        if (el.type === 'tel' && valid) {
            regEx = /^((((0031)|(\+31))(\-)?6(\-)?[0-9]{8})|(06(\-)?[0-9]{8})|(((0031)|(\+31))(\-)?[1-9]{1}(([0-9](\-)?[0-9]{7})|([0-9]{2}(\-)?[0-9]{6})))|([0]{1}[1-9]{1}(([0-9](\-)?[0-9]{7})|([0-9]{2}(\-)?[0-9]{6}))))$/;
            correct = regEx.test(el.value);
            if (!correct) {
                valid = false;
                elValid = false;
                formError.innerHTML += '<li>' + el.className + ' is not a valid phone number!' + '</li>';
            }
        }

        // Check if input field is not empty and if input field type is email, then check if value meets all the password requirements
        if (el.type === 'password' && valid) {
            regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
            correct = regEx.test(el.value);
            if (!correct) {
                valid = false;
                elValid = false;
                formError.innerHTML += '<li>' + 'Password should be at least 8 characters long and should at least contain  1 uppercase letter, 1 lowercase letter, 1 number and 1 special character' + '</li>';
            }
        }

        // if input field is not validated, make border red, otherwise make it neutral
        if (elValid) {
            el.classList.remove('error');
        } else {
            el.classList.add('error');
        }
    }
    
    // when whole form is validated, run this function
    if (valid) {
        registerUser();
    }
}

function registerUser() {
    formError.innerHTML += '<li style="color: green;">Your registration is a success!</li>';

    // Post the form via AJAX here
}