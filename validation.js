const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const btnSubmit = document.getElementById("btn-submit");
const btnCancel = document.getElementById("btn-cancel");
const invalUserName = document.getElementById("invalid-username");
const invalEmail = document.getElementById("invalid-email");
const invalPassword = document.getElementById("invalid-password");

btnSubmit.addEventListener('click', (e) => {

    if(username.value === '' || username.value == null) {
        invalUserName.innerText = "Please enter username";
        username.classList.add("input-danger","border-danger","border-success","input-success") 
    }else {
        invalUserName.innerText = "";
        username.classList.remove("input-danger","border-danger");

        if(email.value === '' || email.value == null){
            invalEmail.innerText = "Please enter valid email id.";
            email.classList.add("input-danger","border-danger","border-success","input-success");
        }else{
            invalEmail.innerText = "";
            email.classList.remove("input-danger","border-danger");

            if(password.value.length < 8 || password.value.length > 15 || password.value === '' || password.value == null){
                invalPassword.innerText = "Password must contain 8-15 characters"
                password.classList.add("input-danger","border-danger","border-success","input-success")
            }else{
                invalPassword.innerHTML = "";
                password.classList.remove("input-danger","border-danger");
            }
        }
    }
})  
