// global screen value
let screenValue = 0;

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

// function that receives the value of the buttons
function buttonValue(input) {
    const calcScreen = document.querySelector('.numbers-container');
    let calcNumber = input;
    calcScreen.append(calcNumber)
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


