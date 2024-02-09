/**
 * Nested functions: running the script display three popups Welcome message
 * @param {void} 
 * @returns {void}
 */

function welcomMessage(fullName){
    return function() {
        alert("Welcome " + fullName);
    }
}

var guillaume = welcomMessage("Guillaume");
var alex = welcomMessage("Alex");
var fred = welcomMessage("Fred");