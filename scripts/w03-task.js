/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){ return number1 + number2; }

function addNumbers(){
    let number1 = Number(document.querySelector('#add1').value);
    let number2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(number1, number2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (num1, num2){ return num1 - num2 };

const subtractNumbers = function () {
    let num1 = Number(document.querySelector('#subtract1').value);
    let num2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(num1, num2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
// let subtractNumbers = () => {}
const multiply = (factor1, factor2) => { return factor1 * factor2; }

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(factor1, factor2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

function divide(dividend, divisor){ return dividend/divisor; }

const divideNumbers = () => {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(dividend, divisor);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
document.querySelector('#getTotal').addEventListener('click', getTotal);

function getTotal() {
    var checkbox = document.getElementById("member").checked;
    let subtotal = Number(document.querySelector('#subtotal').value);

    if(checkbox == true){
        let discount = subtotal * 0.20;
        subtotal -= discount;
        document.getElementById("total").innerHTML = subtotal;
    } else { document.getElementById("total").innerHTML = subtotal; }
}

/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
/* Output Source Array */
document.getElementById('array').innerHTML = numbersArray;
/* Output Odds Only Array */
const oddNumbers = numbersArray.filter(number => number % 2 !== 0);
document.getElementById('odds').innerHTML = oddNumbers;

/* Output Evens Only Array */
const evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.getElementById('evens').innerHTML = evenNumbers;

/* Output Sum of Org. Array */
let totalArray = numbersArray.reduce((sum, number) => sum + number);
document.getElementById('sumOfArray').innerHTML = totalArray;

/* Output Multiplied by 2 Array */
let multiplyArray = numbersArray.map(number => number * 2);
document.getElementById('multiplied').innerHTML = multiplyArray;

/* Output Sum of Multiplied by 2 Array */
let sumMultiplyArray = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);
document.getElementById('sumOfMultiplied').innerHTML = sumMultiplyArray;

