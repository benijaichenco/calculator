//create variables
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('.clear');
const deleteLastNum = document.querySelector('.delete');
let operator = '';
let prevValue = '';
let currValue = '';
//


//create basic math functions
function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};
//

//create a function that takes an operator and 2 numbers and then calls one of the
//math function on the numbers
function operate() {
    prevValue = Number(prevValue);
    currValue = Number(currValue);
    //if statement
    if (operator === '+') {
        return prevValue = add(prevValue, currValue);
    } else if (operator === '−') {
        return prevValue = subtract(prevValue, currValue);
    } else if (operator === '×') {
        return prevValue = multiply(prevValue, currValue);
    } else if (operator === '÷') {
        return prevValue = divide(prevValue, currValue);
    };
};
//

//create a function to populate the display when pressing numbers
display.textContent = '0';
numbers.forEach(num => {
    num.addEventListener('click', (e) => {
        //if the display is only 0, change the 0 to a number instead
        if (display.textContent === '0') {
            display.textContent = '';
        };
        display.textContent += e.target.textContent;
    });
});