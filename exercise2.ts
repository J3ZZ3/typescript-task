// script.ts

interface ICalculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    multiply(a: number, b: number): number;
    divide(a: number, b: number): number | string;
}

class BasicCalculator implements ICalculator {
    add(a: number, b: number): number {
        return a + b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }

    divide(a: number, b: number): number | string {
        if (b === 0) {
            return 'Error: Division by zero is not allowed.';
        }
        return a / b;
    }
}

const calculator = new BasicCalculator();
let currentOperation: string | null = null;
let firstOperand: number | null = null;
let secondOperand: number | null = null;

function appendNumber(number: number) {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += number.toString();
}

function clearDisplay() {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = '';
    firstOperand = null;
    secondOperand = null;
    currentOperation = null;
}

function performOperation(operation: string) {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display.value === '') {
        return;
    }
    if (firstOperand === null) {
        firstOperand = parseFloat(display.value);
        currentOperation = operation;
        display.value += ' ' + operation + ' ';
    } else if (currentOperation !== null) {
        secondOperand = parseFloat(display.value.split(' ')[2]);
        calculateResult();
        firstOperand = parseFloat(display.value);
        currentOperation = operation;
        display.value += ' ' + operation + ' ';
    }
}

function calculateResult() {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display.value === '' || firstOperand === null || currentOperation === null) {
        return;
    }
    const parts = display.value.split(' ');
    if (parts.length < 3) {
        return;
    }
    secondOperand = parseFloat(parts[2]);
    let result: number | string;
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
