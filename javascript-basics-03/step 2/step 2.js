const showLink = document.getElementById("show");
const hideLink = document.getElementById("hide");
const jsText = document.getElementById("texte");


showLink.addEventListener("click", function () {
    jsText.style.display = "block";
});
hideLink.addEventListener("click", function () {
    jsText.style.display = "none";
});



