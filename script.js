// script.js
document.addEventListener('DOMContentLoaded', () => {
    const inputDisplay = document.getElementById('input');
    const resultDisplay = document.getElementById('result');
    const buttons = Array.from(document.querySelectorAll('.btn'));
    let currentInput = '';
    let operator = '';
    let firstOperand = '';

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.dataset.value;

            if (e.target.classList.contains('operator')) {
                if (currentInput !== '') {
                    firstOperand = currentInput;
                    currentInput = '';
                    operator = value;
                    inputDisplay.textContent = firstOperand + ' ' + operator;
                    resultDisplay.textContent = '';
                }
            } else if (e.target.classList.contains('clear')) {
                currentInput = '';
                firstOperand = '';
                operator = '';
                inputDisplay.textContent = '0';
                resultDisplay.textContent = '';
            } else if (e.target.classList.contains('equal')) {
                if (currentInput !== '' && firstOperand !== '') {
                    try {
                        const result = eval(firstOperand + operator + currentInput);
                        resultDisplay.textContent = result;
                        inputDisplay.textContent = firstOperand + ' ' + operator + ' ' + currentInput;
                        currentInput = result;
                        firstOperand = '';
                        operator = '';
                    } catch (error) {
                        resultDisplay.textContent = 'Error';
                    }
                }
            } else {
                if (currentInput === '0' && value !== '.') {
                    currentInput = value;
                } else {
                    currentInput += value;
                }
                inputDisplay.textContent = firstOperand + ' ' + operator + ' ' + currentInput;
            }
        });
    });
});
