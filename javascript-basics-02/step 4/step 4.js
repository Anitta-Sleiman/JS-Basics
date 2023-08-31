const resetButton = document.querySelector("button");
const jName = document.querySelector("#name");
const jSurname = document.querySelector("#surname");
const jCity = document.querySelector("#city");


resetButton.addEventListener("click", function () {

     const confirmed = window.confirm("Are you sure you want to reset the form?");
     if (confirmed) {
          jName.value = "";
          jSurname.value = "";
          jCity.value = "";
     }
});
