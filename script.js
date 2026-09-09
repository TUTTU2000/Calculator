function runCalculator() {
    const greeting = document.getElementById("greeting").value.toLowerCase();
    const result = document.getElementById("result");

    if (greeting !== "hi") {
        result.innerHTML = "TUTTU IS SHUTTING DOWN";
        return;
    }

    const operation = document.getElementById("operation").value;
    const a = parseFloat(document.getElementById("num1").value);
    const b = parseFloat(document.getElementById("num2").value);

    let answer;

    if (operation === "+") {
        answer = "Sum is " + (a + b);
    } else if (operation === "-") {
        answer = "Difference is " + (a - b);
    } else if (operation === "/") {
        answer = "Division is " + (a / b);
    } else if (operation === "*") {
        answer = "Multiplication is " + (a * b);
    }

    result.innerHTML = answer;
}