const showLink = document.getElementById("show");
const hideLink = document.getElementById("hide");
const jsText = document.getElementById("texte");


function showhide() {
    if (jsText.style.display === 'none' || jsText.style.display === '') {
        jsText.style.display = 'block'; // Show the text
    } else {
        jsText.style.display = 'none'; // Hide the text
    }
}
showLink.addEventListener("click", showhide);
hideLink.addEventListener("click", showhide);

