let num1 = prompt("Enter your first number");
let num2 = prompt("Enter your second number");
let num3 = num1 / num2;

if (num2 !== "0") {
    alert("The result of dividing these numbers is: " + num3);
} else {
    alert("The result is undefined. Can't divide by 0.")
}
