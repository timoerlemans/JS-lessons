document.addEventListener('DOMContentLoaded', function () {
    init();
}, false);

function init() {
    var inputAll = document.querySelectorAll('input:not(#submit)'),
        formError = document.querySelector('.form__error');
    document.querySelector("#submit").addEventListener('click', validateForm);
}

function validateForm() {
       var invalid = false,
        regEx,
        correct;

    formError.innerHTML = '';

    for (i = 0; i < inputAll.length; i++) {
        var elInvalid = false;
        if (!inputAll[i].value) {
            invalid = true;
            elInvalid = true;
            formError.innerHTML += '<li>' + inputAll[i].className + ' is empty!' + '</li>';
        }

        if (inputAll[i].type === 'email' && !elInvalid) {
            regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            correct = regEx.test(inputAll[i].value);
            if (!correct) {
                invalid = true;
                elInvalid = true;
                formError.innerHTML += '<li>' + inputAll[i].className + ' is not a valid email address!' + '</li>';
            }
        }

        if (inputAll[i].type === 'tel' && !elInvalid) {
            var landline = /^(((0)[1-9]{2}[0-9][-]?[1-9][0-9]{5})|((\\+31|0|0031)[1-9][0-9][-]?[1-9][0-9]{6}))$/;
            var mobile = /^(((\\+31|0|0031)6){1}[1-9]{1}[0-9]{7})$/i;
            correct = (landline.test(inputAll[i].value) || mobile.test(inputAll[i].value));
            if (!correct) {
                invalid = true;
                elInvalid = true;
                formError.innerHTML += '<li>' + inputAll[i].className + ' is not a valid phone number!' + '</li>';
            }
        }

        if (inputAll[i].type === 'password' && !elInvalid) {
            regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
            correct = regEx.test(inputAll[i].value);
            if (!correct) {
                invalid = true;
                elInvalid = true;
                formError.innerHTML += '<li>' + 'Password should be at least 8 characters long and should at least contain  1 uppercase letter, 1 lowercase letter, 1 number and 1 special character' + '</li>';
            }
        }


        if (!elInvalid) {
            inputAll[i].style.borderColor = '#ccc';
        } else {
            inputAll[i].style.borderColor = 'red';
        }
    }

    if (!invalid) {
        registerUser();
    }

    event.preventDefault();
}

function registerUser() {
    formError.innerHTML += '<li style="color: green;">Your registration is a success!</li>';
}