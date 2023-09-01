let num1 = prompt("Enter your first number");
let num2 = prompt("Enter your second number");

if (!isNaN(num1) && !isNaN(num2)) {
    let num3 = num1 % num2;

    if (num2 !== "0") {
        alert("The remainder of " + num1 + " and " + num2 + " is: " + num3);
    } else {
        alert("The result is undefined. Can't divide by 0.")
    }
}
else {
    alert("Enter valid numbers only!")
};