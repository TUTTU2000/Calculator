function runCalculator() {
    let greeting = document.getElementById("greeting").value.trim().toLowerCase();

    if (greeting !== "hi") {
        document.getElementById("result").innerHTML =
            "TUTTU IS SHUTTING DOWN";
        return;
    }

    let operation = document.getElementById("operation").value;
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    let result;

    switch (operation) {
        case "+":
            result = "Sum is " + (a + b);
            break;
        case "-":
            result = "Difference is " + (a - b);
            break;
        case "*":
            result = "Multiplication is " + (a * b);
            break;
        case "/":
            result = "Division is " + (a / b);
            break;
        default:
            result = "Invalid operation";
    }

    document.getElementById("result").innerHTML = result;
}
