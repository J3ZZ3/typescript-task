// script.ts
var BasicCalculator = /** @class */ (function () {
    function BasicCalculator() {
    }
    BasicCalculator.prototype.add = function (a, b) {
        return a + b;
    };
    BasicCalculator.prototype.subtract = function (a, b) {
        return a - b;
    };
    BasicCalculator.prototype.multiply = function (a, b) {
        return a * b;
    };
    BasicCalculator.prototype.divide = function (a, b) {
        if (b === 0) {
            return 'Error: Division by zero is not allowed.';
        }
        return a / b;
    };
    return BasicCalculator;
}());
var calculator = new BasicCalculator();
var currentOperation = null;
var firstOperand = null;
var secondOperand = null;
function appendNumber(number) {
    var display = document.getElementById('display');
    display.value += number.toString();
}
function clearDisplay() {
    var display = document.getElementById('display');
    display.value = '';
    firstOperand = null;
    secondOperand = null;
    currentOperation = null;
}
function performOperation(operation) {
    var display = document.getElementById('display');
    if (display.value === '') {
        return;
    }
    if (firstOperand === null) {
        firstOperand = parseFloat(display.value);
        currentOperation = operation;
        display.value += ' ' + operation + ' ';
    }
    else if (currentOperation !== null) {
        secondOperand = parseFloat(display.value.split(' ')[2]);
        calculateResult();
        firstOperand = parseFloat(display.value);
        currentOperation = operation;
        display.value += ' ' + operation + ' ';
    }
}
function calculateResult() {
    var display = document.getElementById('display');
    if (display.value === '' || firstOperand === null || currentOperation === null) {
        return;
    }
    var parts = display.value.split(' ');
    if (parts.length < 3) {
        return;
    }
    secondOperand = parseFloat(parts[2]);
    var result;
    switch (currentOperation) {
        case '+':
            result = calculator.add(firstOperand, secondOperand);
            break;
        case '-':
            result = calculator.subtract(firstOperand, secondOperand);
            break;
        case '*':
            result = calculator.multiply(firstOperand, secondOperand);
            break;
        case '/':
            result = calculator.divide(firstOperand, secondOperand);
            break;
        default:
            result = 'Unknown operation';
    }
    display.value = result.toString();
    firstOperand = null;
    secondOperand = null;
    currentOperation = null;
}
// After saving the TypeScript file as script.ts, compile it to JavaScript using:
// tsc script.ts
