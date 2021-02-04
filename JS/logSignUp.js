document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#AcreateAcc").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");

    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");

    });






});



function registration() {

    var LoginpUser = document.getElementById("loginUsername").value;
    var password1 = document.getElementById("pass1").value;

    var pass_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters = /^[A-Za-z]+$/;

    if (LoginpUser == '') {
        alert('Please fill the user field');
    } else if (!letters.test(LoginpUser)) {
        alert('Just letter');
    } else if (!letters.test(LoginpUser)) {
        alert('Just letter');
    } else if (password1 == '') {
        alert('Please fill the password field');
    } else if (password1 == '') {
        alert('Required');
    } else if (document.getElementById("pass1").value.length < 6) {
        alert('Password must be at least 8 Character');
    } else {
        window.open("index.html");
    }
}



function registration1() {

    var signupUser = document.getElementById("signupUsername").value;
    var email = document.getElementById("emaili").value;
    var password = document.getElementById("pass").value;
    var confirmp = document.getElementById("confirm").value;

    var pass_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (signupUser == '') {
        alert('Please fill the user field');
    } else if (!letters.test(signupUser)) {
        alert('Just letter');
    } else if (!letters.test(signupUser)) {
        alert('Just letter');
    } else if (email == '') {
        alert('Please fill the email field');
    } else if (!filter.test(email)) {
        alert('Invalid e-mail');
    } else if (password == '') {
        alert('Please fill the password field');
    } else if (password == '') {
        alert('Required');
    } else if (document.getElementById("pass").value.length < 6) {
        alert('Password must be at least 8 Character');
    } else if (confirmp == '') {
        alert('Confirm password');
    } else if (password !== confirmp) {
        alert('Passwords does no match');
    } else if (password === confirmp) {
        window.open("index.html ");
    }
}