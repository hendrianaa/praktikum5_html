document.addEventListener('DOMContentLoaded', function() {
  const display = document.getElementById('display');
  const clearButton = document.getElementById('clearButton');
  const calculateButton = document.getElementById('calculateButton');
  const numberButtons = document.querySelectorAll('.numberButton');
  const operationButtons = document.querySelectorAll('.operationButton');

  clearButton.addEventListener('click', clearDisplay);
  calculateButton.addEventListener('click', calculate);
  numberButtons.forEach(button => {
      button.addEventListener('click', () => appendToDisplay(button.textContent));
  });
  operationButtons.forEach(button => {
      button.addEventListener('click', () => appendToDisplay(button.textContent));
  });

  function appendToDisplay(value) {
      display.value += value;
  }

  function clearDisplay() {
      display.value = '';
  }

  function calculate() {
      try {
          display.value = eval(display.value);
      } catch (error) {
          display.value = 'Error';
      }
  }
});
