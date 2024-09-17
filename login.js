//set the validation's rule for email and password
const isValidEmail = email_input => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email_input).toLowerCase());
};

const isValidPassword = password_input => {
    const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(password_input);
};


//show the error messages
function validation() {
    if (document.Formfill.Email.value=="") {
        document.getElementById("result").innerHTML="Enter your email";
        return false;
    } 
    else if (!isValidEmail(document.Formfill.Email.value)) {
        document.getElementById("result").innerHTML="Use a valid email address";
        return false;
    } 
    else if (document.Formfill.Password.value.length=="") {
        document.getElementById("result").innerHTML="Enter your password";
        return false;
    } 
    else if (!isValidPassword(document.Formfill.Password.value)) {
        document.getElementById("result").innerHTML="Use a correct password";
        return false;
    } 
  
}

//show and hide password with solid eye
const showPasswordBtn = document.querySelector('.show-password')
const passwordInp = document.querySelector('.password-input')

showPasswordBtn.addEventListener('click', () => {
    showPasswordBtn.classList.toggle('fa-eye');
    showPasswordBtn.classList.toggle('fa-eye-slash');

    passwordInp.type = passwordInp.type === 'password' ? 'text' : 'password';
})

