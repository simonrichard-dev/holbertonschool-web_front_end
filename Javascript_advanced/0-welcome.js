/**
 * Welcome function that displays a welcome message.
 * @param {string} firstName - The first name.
 * @param {string} lastName - The last name.
 * @returns {void}
 */

function welcome(firstName, lastName) {
    function displayFullName(fullName) {
    var message = "Welcome " + fullName + " !";
    alert(message);
  }

  if (firstName == undefined || lastName == undefined) {
    alert("fullName is not defined");
  } else {
    var fullName = firstName + " " + lastName;
    displayFullName(fullName);
  }
}