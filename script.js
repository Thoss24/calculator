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
keyboardSupport()

// remove last number entered
function removeLast() {
    display.textContent = display.textContent.slice(0, -1);
    displayValue = display.textContent

    if (operator && waitingForSecondNumber) {
        displayValue = '0';
        display.textContent = '0';
    }
}
removeLast()

// clear all numbers from screen and reset display value function
function clearScreen() {
    display.textContent = '0';
    displayValue = '0';
}

// appends a decimal to screen, only allowing one decimal on the screen at a time
function inputDecimal(dot) {
    if (!displayValue.includes(dot)) {
        displayValue += dot
        display.textContent += dot
    };
}

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
    }                                        // When the user presses an operator waitingForSecondNumber will be set to true and the display will be reset awaiting new input, repeating the process over and over.
     
    console.log(displayValue)
}

// function to save chosen operator and input values
function handleOperator(nextOperator) {
    const inputVal = parseFloat(displayValue);   // parseFloat converts string content of displayValue to a floating point number.

    if (operator && waitingForSecondNumber) {    // check if an operator exists and if waitingForSecondNumber is true
        operator = nextOperator;                 // if true, the value of operator is swapped with value of nextOperator
        console.log(operator)                    // this enables the user to press a different operator after having already pressed one, and the new operator will be used rather than the old one.
        return
    }

    if (firstNumber === null && !isNaN(inputVal)) {              // check that the firstNumber is equal to null and is not a NaN value (basically checking that firstNumber = Number)
        firstNumber = inputVal;                                  // if previous condition is true then update firstNumber to equal inputVal (current display value).
    } else if (operator) {
        const result = operate(firstNumber, inputVal, operator); // check if operator has been assigned an operator. If true operate() function is invoked calculating firstNumber with secondNumber (inputVal) using operator input by user.
                                                                 
        displayValue = String(result);                           // the result of the operate() function calculation is then passed to the display value, screen text content and the firstNumber variable
        display.textContent = String(result);                    // allowing the user to see the result of the calculation, whilst also enabling the result to be used in the next calculation.
        firstNumber = result                                     // for example; 5 + 5 = 10, 10 is assigned to displayValue, screen content & firstNumber. This value can then be used, for example; display value = 10: + 5 = 15.
    }                                                            // this allows the user to chain calculations together without having to clear all after a single operator is used.
    
    waitingForSecondNumber = true;                               // operator is then set to nextOperator which is equal to whatever operator the user pressed
    operator = nextOperator;                                     // while waitingForSecondNumber is set to true. meaning that firstNumber has been entered and whatever numbers the user inputs next will make up the second number.
}
handleOperator()

// operate function with switch statement
function operate(firstNum, secondNum, operator) {               // the switch statement allows for the operators in the statement to be compared with the operator passed in by user 
    switch(operator) {                                          // and for that operator to be used with the values represented by firstNum (firstNUmber) and secondNum (inputVal).
        case "+":
            return add(firstNum, secondNum);
        case "-":
            return subtract(firstNum, secondNum);
        case "*":
            return multiply(firstNum, secondNum);
        case "/":
            return divide(firstNum, secondNum);
       };

       return secondNum
};
operate();




