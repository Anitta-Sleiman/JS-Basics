const jsPassword = document.querySelector("#password");
const jsConfirmation = document.querySelector("#confirmation");
const jsButton = document.querySelector("button");

jsButton.addEventListener("click", function () {
    const Password = jsPassword.value;
    const Confirmation = jsConfirmation.value;

    if (Password !== Confirmation) {
        jsPassword.style.border = '2px solid red';
        jsConfirmation.style.border = '2px solid red';
    } else {
        jsPassword.style.border = '';
        jsConfirmation.style.border = '';
    }
});