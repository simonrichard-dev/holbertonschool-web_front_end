/**
 * createClassRoom : running the script display three popups Welcome message
 * @param {firstNumber} : first number
 * @param {secondNumber} : second number
 * @returns {void}
 */

function divideBy(firstNumber) {
    return function (secondNumber) {
        return (secondNumber / firstNumber);
    }
}

function addBy(firstNumber) {
    return function (secondNumber) {
        return (firstNumber + secondNumber);
    }
}

var addBy100 = addBy(100);
var addBy1000 = addBy(1000);
var divideBy10 = divideBy(10);
var divideBy100 = divideBy(100);