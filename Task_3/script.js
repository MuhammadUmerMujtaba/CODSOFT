// Get the input element and store it in a variable
const inputElement = document.querySelector('input');

// Get all the buttons
const buttons = document.querySelectorAll('.btn1');

// Initialize variables to store the first and second operands and the operator
let firstOperand = '';
let operator = '';
let secondOperand = '';

// Add click event listeners to the buttons
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;

    // Handle numeric buttons
    if (!isNaN(buttonText) || buttonText === '.') {
      if (operator === '') {
        firstOperand += buttonText;
      } else {
        secondOperand += buttonText;
      }
      inputElement.value += buttonText;
    }

    // Handle operator buttons
    if (['+', '-', '*', '/'].includes(buttonText)) {
      if (firstOperand !== '' && secondOperand === '') {
        operator = buttonText;
        inputElement.value += buttonText;
      }
    }

    // Handle equals button
    if (buttonText === '=') {
      if (firstOperand !== '' && secondOperand !== '') {
        const num1 = parseFloat(firstOperand);
        const num2 = parseFloat(secondOperand);
        let result = 0;

        switch (operator) {
          case '+':
            result = num1 + num2;
            break;
          case '-':
            result = num1 - num2;
            break;
          case '*':
            result = num1 * num2;
            break;
          case '/':
            if (num2 !== 0) {
              result = num1 / num2;
            } else {
              result = 'Error';
            }
            break;
          default:
            result = 'Error';
        }

        // Update the input field with the result
        inputElement.value = result;

        // Reset the operands and operator
        firstOperand = '';
        operator = '';
        secondOperand = '';
      }
    }

    // Handle clear button
    if (buttonText === 'C') {
      inputElement.value = '';
      firstOperand = '';
      operator = '';
      secondOperand = '';
    }
  });
});
