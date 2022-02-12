const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const btnSubmit = document.getElementById("btn-submit");
const btnCancel = document.getElementById("btn-cancel");
const valUserName = document.getElementById("valid-username");
const valEmail = document.getElementById("valid-email");
const valPassword = document.getElementById("valid-password");

form.addEventListener('keyup', (e) => {
    e.preventDefault();

    username.value === '' || username.value == null ? valUserName.innerText = "Please enter username" : valUserName.innerText = "";
    
    email.value === '' || email.value == null ? valEmail.innerText = "Please enter valid email id." : valEmail.innerText = "";

    password.value.length < 8 || password.value.length > 15 || password.value === '' || password.value == null ? valPassword.innerText = "Password must contain 8-15 characters"  : valPassword.innerHTML = "";
    
    username.value === '' || username.value == null ? username.classList.add("input-danger","border-danger","border-success","input-success") : username.classList.remove("input-danger","border-danger");

    email.value === '' || email.value == null ? email.classList.add("input-danger","border-danger","border-success","input-success") : email.classList.remove("input-danger","border-danger");

    password.value === '' || password.value == null ? password.classList.add("input-danger","border-danger","border-success","input-success") : password.classList.remove("input-danger","border-danger");
 
})  
