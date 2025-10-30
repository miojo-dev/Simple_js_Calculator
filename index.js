let operation;
let numA;
let numB;

function SetOperation(operator) {
    document.getElementById("operator").innerText = operator;
    operation = operator;
}

function Solve() {
    let result;
    numA = parseFloat(document.getElementById("inputNumA").value);
    numB = parseFloat(document.getElementById("inputNumB").value);

    switch (operation) {
        case '+':
            result = numA + numB;
            break;
        case '-':
            result = numA - numB;
            break;
        case '*':
            result = numA * numB;
            break;
        case '/':
            result = numA / numB;
            break;
    }

    document.getElementById("result").innerText = result.toString();
}