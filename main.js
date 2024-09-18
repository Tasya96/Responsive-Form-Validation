//set the validation's rule for username, email and password
const isValidUsername = firstname_input => {
    const re = /^[A-Za-z][a-zA-Z0-9]{4,}$/;
    return re.test(firstname_input);
}

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
    if(document.Formfill.Username.value==""){
        document.getElementById("result").innerHTML="Enter username";
        return false;
    } 
    else if (!isValidUsername(document.Formfill.Username.value)) {    
        document.getElementById("result").innerHTML="Username must start with an alphabet, at least 5 characters and only one word";
        return false;
    } 
    else if (document.Formfill.Email.value=="") {
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
        document.getElementById("result").innerHTML="Password must at least have 8 characters, one lowercase letter, one uppercase letter, one number and one symbol";
        return false;
    } 
    else if (document.Formfill.CPassword.value=="") {
        document.getElementById("result").innerHTML="Enter repeat password";
        return false;
    } 
    else if (document.Formfill.CPassword.value !== document.Formfill.Password.value) {
        document.getElementById("result").innerHTML="Password doesn't match";
        return false;
    }
    else if (document.Formfill.Password.value == document.Formfill.CPassword.value) {
        popup.classList.add("open-slide")
        return false;
    }
}

//show popup class
var popup=document.getElementById('popup');
function CloseSlide(){
    popup.classList.remove("open-slide")
}

//show and hide password with solid eye
const showPasswordBtn = document.querySelector('.show-password')
const passwordInp = document.querySelector('.password-input')

showPasswordBtn.addEventListener('click', () => {
    showPasswordBtn.classList.toggle('fa-eye');
    showPasswordBtn.classList.toggle('fa-eye-slash');

    passwordInp.type = passwordInp.type === 'password' ? 'text' : 'password';
})

