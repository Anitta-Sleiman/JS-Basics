var num1 = prompt("Enter your first number");
var num2 = prompt("Enter your second number");
var num3 = num1 * num2;

if (!isNaN(num1) && !isNaN(num2)) {
    let num3 = num1 * num2;
    alert(num3);
} else {
    alert("Enter valid numbers only!")
};
