const display = document.getElementById("display");

function appendToDisplay(input) {
    display.innerText += input;  
}

function clearDisplay() {
    display.innerText = "";  
}

function clearLast() {
    display.innerText = display.innerText.slice(0, -1);  
}

function calculate() {
    const result = simpleCalculate(display.innerText);
    display.innerText = result !== null ? result : "Error";  
}


function simpleCalculate(expr) {
   
    if (/[^0-9+\-*/.]/.test(expr)) {
        return null;  
    }

   
    const numbers = expr.split(/[\+\-\*\/]/).map(Number);
    const operators = expr.replace(/[0-9.]/g, "").split("");
    let tempResult = numbers[0];

    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === '*') {
            tempResult *= numbers[i + 1];
        } else if (operators[i] === '/') {
            if (numbers[i + 1] === 0) {
                return null;  
            }
            tempResult /= numbers[i + 1];
        } else {
           
            tempResult = performAdditionAndSubtraction(tempResult, numbers[i + 1], operators[i]);
        }
    }

    return tempResult;
}


function performAdditionAndSubtraction(current, next, operator) {
    if (operator === '+') {
        return current + next;
    } else if (operator === '-') {
        return current - next;
    }
    return current;  
}
