// global screen value
let screenValueTotal = 0;

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
    let display = document.querySelector('.numbers-container');

    if (display.textContent === '0'){
       display.textContent = ''
    }
   
    let calcNumber = input;
    display.append(calcNumber);

    
}




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


