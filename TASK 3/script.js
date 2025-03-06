let currentInput = '';
let resultDisplayed = false;

function clearDisplay() {
    currentInput = '';
    resultDisplayed = false;
    document.getElementById('display').innerText = '0';
}

function appendToDisplay(value) {
    if (resultDisplayed) {
        currentInput = value;
        resultDisplayed = false;
    } else {
        currentInput += value;
    }
    document.getElementById('display').innerText = currentInput || '0';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById('display').innerText = currentInput;
        resultDisplayed = true;
    } catch (e) {
        document.getElementById('display').innerText = 'Error';
    }
}
