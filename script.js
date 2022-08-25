// global screen value
let displayValue = 0;

// global variable with value of calculator screen where numbers appear
let display = document.querySelector('.numbers-container');

// click event to remove last entered number on calculator screen
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', removeLast);

// keyboard support for calculator
window.addEventListener('keydown', keyboardSupport)

// functions for basic math operators
function add(addA, addB) {
    return addA + addB
};

function subtract(subA, subB) {
    return subA - subB
};

function multiply(mulA, mulB) {
    return mulA * mulB
};

function divide(divA, divB) {
    return divA / divB
};

// function to receive number value and print to calculator screen
function printNumber(input) {

    if (display.textContent === '0'){
       display.textContent = input[-1]
    };

    if (display.textContent.length > 9){
        input = '';
    };

    let calcNumber = input;
    displayValue += calcNumber;
    display.append(calcNumber);
    
}

// keyboard support function. value of press.key (key pressed by user) is passed into printNumber function. keyboardSupport is then called in keydown event.
function keyboardSupport(press) {
    if (press.key >= 0 && press.key < 10) printNumber(press.key)
   
}
keyboardSupport()

// remove last number entered
function removeLast() {
    display.textContent = display.textContent.slice(0, -1);
    
}
removeLast()

// clear all numbers from screen and reset display value function
function clearScreen() {
    
    display.textContent = '0';
    displayValue = 0;
}

// operator function
function operate(operator, num1, num2) {
    num1 = 4;
    num2 = 4;
    operator = multiply(num1, num2);
    console.log(operator);

    switch(operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
       };
       
};
operate();


