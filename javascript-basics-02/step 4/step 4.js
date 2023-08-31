const resetButton = document.querySelector("button");
const jsForm = document.querySelector("form");

resetButton.addEventListener("click", function () {
     const confirmed = window.confirm("Are you sure you want to reset the form?");
     if (confirmed) {
          jsForm.reset();
     }
});
