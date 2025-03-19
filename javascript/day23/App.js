let a = document.querySelector("#a");
let b = document.querySelector("#b");
let result = document.querySelector("#result");

let c, d;

a.onclick = function () {
    c = parseFloat(prompt("Enter the first number:"));
    calculate();
};

b.onclick = function () {
    d = parseFloat(prompt("Enter the second number:"));
    calculate();
};

function calculate() {
    if (!isNaN(c) && !isNaN(d)) {
        result.innerText = c + d; // Display the sum
    }
}
