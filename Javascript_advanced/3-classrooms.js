/**
 * createClassRoom : running the script display three popups Welcome message
 * @param {numberOfStudents} : number of students
 * @returns {void}
 */

function createClassRoom(numberOfStudents) {
    function studentSeat(seat) {
        return function() {
            return seat;
        }
    }

    var students = [];
    var i = 0;

   while (i < numberOfStudents) {
        i = i + 1;
        students.push(studentSeat(i));
    }
    
    return students;

}