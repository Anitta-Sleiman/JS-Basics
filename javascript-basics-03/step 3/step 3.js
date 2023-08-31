const divText = document.getElementById("text");
const colorGreen = document.querySelector(".green");
const colorRed = document.querySelector(".red");
const colorBlue = document.querySelector(".blue");

function changeColor(color) {
    divText.style.color = color;
}

colorGreen.addEventListener("click", function() {
    changeColor("green");
});

colorRed.addEventListener("click", function() {
    changeColor("red");
});

colorBlue.addEventListener("click", function() {
    changeColor("blue");
});