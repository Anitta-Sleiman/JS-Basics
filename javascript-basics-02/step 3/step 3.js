

var jsDiv = document.createElement("div");
jsDiv.textContent = "";
document.body.appendChild(jsDiv);
var userName = document.querySelector("#name");

userName.addEventListener("input", function() {
  jsDiv.textContent = userName.value;
});
