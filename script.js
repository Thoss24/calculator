// global screen value
let displayValue = '0';
let firstNumber = null;
let waitingForSecondNumber = false;
let operator = null

// global variable with value of calculator screen where numbers appear
let display = document.querySelector('.numbers-container');

// click event to remove last entered number on calculator screen
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', removeLast);

// keyboard support for calculator
window.addEventListener('keydown', keyboardSupport)

// operator keys events
let addition = document.getElementById('addition');
addition.addEventListener('click', add);


// functions for basic math operators
function add(a, b) {
   return a + b
};
add()

function subtract(a, b) {
    return a - b
};

function multiply(a, b) {
    return a * b
};

function divide(a, b) {
    return a / b
};

// keyboard support function. value of press.key (key pressed by user) is passed into printNumber function. keyboardSupport is then called in keydown event. key = identifier of key pressed.
function keyboardSupport(press) {
    if (press.key >= 0 && press.key < 10) printNumber(press.key)
}
// keyboardSupport()

// remove last number entered
function removeLast() {
    display.textContent = display.textContent.slice(0, -1);
    displayValue = display.textContent
}
removeLast()

// clear all numbers from screen and reset display value function
function clearScreen() {
    display.textContent = '0';
    displayValue = '0';
}

function updateDisplay() {
  console.log(displayValue)
}
updateDisplay()

function myValue(input) {
    console.log(input)
}

function inputDecimal(dot) {
    if (!displayValue.includes(dot)) {
        displayValue += dot
        display.textContent += dot
    };
}

// operator function
function operate(operator, a, b) {
    
    switch(operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
       };
};
operate();

function handleOperator(nextOperator) {
    const inputVal = parseFloat(displayValue);

    if (firstNumber === null && !isNaN(inputVal)) {
        firstNumber = inputVal;
    }
    waitingForSecondNumber = true;
    operator = nextOperator;

   
}
handleOperator()

// function to receive number value and print to calculator screen
function printNumber(input) {

    if (display.textContent === '0'){
       display.textContent = input[-1]
    };

    if (display.textContent.length > 9){
        input = '';
    };

    let calcNumber = input;
    
    displayValue += calcNumber

    display.append(calcNumber); 

    if (waitingForSecondNumber === true) {   // if waiting for second number is set to true
        displayValue = input;                // displayValue is overwritten by the digit that was input by user
        display.textContent = input;         // and the display textContent will also be overwritten
        waitingForSecondNumber = false       // and waiting for second number will be reset back to false.
    }                                        // When the user presses an operator waitingForSecondNumber will be set to true and the display will be reset awaiting new input.
     
    console.log(displayValue)
}

