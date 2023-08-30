const firstDiv = document.querySelector("#first-div");
const userName = document.querySelector("#name");

userName.addEventListener("input", function() {
    firstDiv.textContent = userName.value;
})
