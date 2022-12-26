//create variables
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('.clear');
const deleteLastNum = document.querySelector('.delete');
const decimal = document.querySelector('.decimal');
let operator = '';
let prevValue = '';
let currValue = '';


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


function roundNum() {
    if(currValue.includes('.')) {
        console.log('true');
    } else {
        console.log('false');
    };
};
    


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


//create a function to populate the display when pressing numbers
display.textContent = '0';
numbers.forEach(num => {
    num.addEventListener('click', (e) => {
        if (currValue === '') {
            display.textContent = '';
        };

        if (display.textContent.length >= 7) {
            return;
        };
        
        if (display.textContent === '0') {
            display.textContent = '';
        };
        display.textContent += e.target.textContent;
        currValue = display.textContent;
        console.log(currValue);
    });
});



function handleOperator(op) {
    operator = op;
    prevValue = currValue;
    currValue = '';
};


//create function to choose which operator is being pressed, then calculate accordingly
operators.forEach(op => {
    op.addEventListener('click', (e) => {
        if (operator === '÷' && currValue === '0') {
            alert('Can\'t divide by 0');
            return;
        };
        if (prevValue !== '' && currValue !== '') {
            operate();
            if (prevValue % 1 != 0) {
                prevValue = Math.round(prevValue * 100) / 100;
            };
            operator = '';
            display.textContent = prevValue;
            currValue = display.textContent;
            if (display.textContent.length > 7) {
                console.log('true');
                display.textContent = display.textContent.slice(0, 7) + '...';
            };
            prevValue = '';
            };

        if (operator !== '') {
            return;
        } else {
            handleOperator(e.target.textContent);
            display.textContent += operator;
            console.log(operator);
        };
    });
});

//clear all values and display when pressing the clear button
clear.addEventListener('click', () => {
    prevValue = '';
    currValue = '';
    operator = '';
    display.textContent = '0';
});

//make the calculator calculate
const equal = document.querySelector('.equal');
equal.addEventListener('click', () => {
    if (prevValue === '' || currValue === '') {
        return;
    };
    if (operator === '÷' && currValue === '0') {
        alert('Can\'t divide by 0');
        return;
    };
    operate();
    if (prevValue % 1 != 0) {
        prevValue = Math.round(prevValue * 100) / 100;
    };
    operator = '';
    display.textContent = prevValue;
    currValue = display.textContent;
    if (display.textContent.length > 7) {
        display.textContent = display.textContent.slice(0, 7) + '...';
    };
    prevValue = '';
});


decimal.addEventListener('click', () => {
    if (display.textContent.includes('.')) {
        return;
    } else display.textContent += '.';
});

deleteLastNum.addEventListener('click', () => {
    if (display.textContent.includes('...')) {
        console.log('true');
        display.textContent = display.textContent.slice(0, -2);
        display.textContent = currValue;
    };
    display.textContent = display.textContent.slice(0, -1);
    if (display.textContent === '') {
        display.textContent = 0;
        currValue = 0;
    };
    currValue = display.textContent;
    console.log(currValue);
});


//add keyboard support
window.addEventListener('keydown', (e) => {
    if (!isNaN(e.key)) {
        if (currValue === '') {
            display.textContent = '';
        };

        if (display.textContent.length >= 7) {
            return;
        };
        
        if (display.textContent === '0') {
            display.textContent = '';
        };
        display.textContent += e.key;
        currValue = display.textContent;
        console.log(currValue);
    };

    if (e.key === '/' || e.key === '-' || e.key === '*' || e.key === '+') {
        let pressedOp = '';
        if (e.key === '/') {
            pressedOp = '÷';
        } else if (e.key === '-') {
            pressedOp = '−';
        } else if (e.key === '*') {
            pressedOp = '×';
        } else if (e.key === '+') {
            pressedOp = '+'
        };

        if (operator === '÷' && currValue === '0') {
            alert('Can\'t divide by 0');
            return;
        };
        if (prevValue !== '' && currValue !== '') {
            operate();
            if (prevValue % 1 != 0) {
                prevValue = Math.round(prevValue * 100) / 100;
            };
            operator = '';
            display.textContent = prevValue;
            currValue = display.textContent;
            if (display.textContent.length > 7) {
                console.log('true');
                display.textContent = display.textContent.slice(0, 7) + '...';
            };
            prevValue = '';
            };

        if (operator !== '') {
            return;
        } else {
            handleOperator(pressedOp);
            display.textContent += operator;
            console.log(operator);
        };
    };

    if (e.key === '=') {
        if (prevValue === '' || currValue === '') {
            return;
        };
        if (operator === '÷' && currValue === '0') {
            alert('Can\'t divide by 0');
            return;
        };
        operate();
        if (prevValue % 1 != 0) {
            prevValue = Math.round(prevValue * 100) / 100;
        };
        operator = '';
        display.textContent = prevValue;
        currValue = display.textContent;
        if (display.textContent.length > 7) {
            display.textContent = display.textContent.slice(0, 7) + '...';
        };
        prevValue = '';
    };

    if (e.key === 'Backspace') {
        if (display.textContent.includes(operator)) {
            operator = '';
        };

        if (display.textContent.includes('...')) {
            console.log('true');
            display.textContent = display.textContent.slice(0, -2);
            display.textContent = currValue;
        };
        display.textContent = display.textContent.slice(0, -1);
        if (display.textContent === '') {
            display.textContent = 0;
            currValue = 0;
        };
        currValue = display.textContent;
        console.log(currValue);
    };

    if (e.key === 'c' || e.key === 'C') {
        prevValue = '';
        currValue = '';
        operator = '';
        display.textContent = '0';
    };

    if (e.key === '.') {
        if (display.textContent.includes('.')) {
            return;
        } else display.textContent += '.';
    };
});