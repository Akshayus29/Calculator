document.addEventListener('DOMContentLoaded', () => {
    const resultInput = document.getElementById('result');
    let currentInput = '';
    let operator = null;
    let previousInput = '';

    function updateDisplay() {
        resultInput.value = currentInput;
    }

    window.appendNumber = (number) => {
        if (number === '.' && currentInput.includes('.')) return;
        currentInput = currentInput.toString() + number.toString();
        updateDisplay();
    };

    window.appendOperator = (op) => {
        if (currentInput === '') return;
        if (previousInput !== '') {
            calculateResult();
        }
        operator = op;
        previousInput = currentInput;
        currentInput = '';
    };

    window.clearResult = () => {
        currentInput = '';
        operator = null;
        previousInput = '';
        updateDisplay();
    };

    window.deleteLastChar = () => {
        currentInput = currentInput.toString().slice(0, -1);
        updateDisplay();
    };

    window.calculateResult = () => {
        let computation;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);
        if (isNaN(prev) || isNaN(current)) return;

        switch (operator) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                computation = prev / current;
                break;
            case '%':
                computation = prev % current;
                break;
            default:
                return;
        }
        currentInput = computation;
        operator = null;
        previousInput = '';
        updateDisplay();
    };
});