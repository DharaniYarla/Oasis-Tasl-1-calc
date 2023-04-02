const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');
let input = '';
let result = '';

function clearDisplay() {
  display.value = '';
}

function clearAll() {
  clearDisplay();
  input = '';
  result = '';
}

function appendValue(value) {
  display.value += value;
  input += value;
}

function calculate() {
  try {
    result = eval(input).toFixed(2);
    clearDisplay();
    display.value = `${input}=${result}`;
    input = result;
  } catch (error) {
    clearAll();
    display.value = 'Error';
  }
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList.contains('operator')) {
      appendValue(button.innerText);
    } else if (button.innerText === 'C') {
      clearAll();
    } else if (button.innerText === '=') {
      calculate();
    } else {
      appendValue(button.innerText);
    }
  });
});
