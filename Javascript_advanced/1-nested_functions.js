/**
 * Nested functions: running the script display three popups Welcome message
 * @param {void} 
 * @returns {void}
 */

var globalVariable = "Welcome"

function outer() {
    alert(globalVariable);
    var course= "Holberton"
    function inner() {
        alert(globalVariable + " " + course)
        var exclamation = "!"
        function inception() {
            alert(globalVariable + " " + course + " " + exclamation)
        }
        inception();
    }
    inner();
}
outer();