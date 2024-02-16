let user = {
    hobby: 'calligraphy',
    favoritesport: 'hockey',
    astrologicalsign: 'aries',
    firstname: 'buillaume',
    lastname: 'johns',
    location: 'netherlands',
    occupation: 'engineer',
    logwelcomeuser: function(welcomestring) {
        console.log(welcomestring + ', ' + this.firstname + '. ' + 'your occupation is: ' + this.occupation);
    }
}

let bindlogwelcomeuser = user.logwelcomeuser.bind(user);

bindlogwelcomeuser('hello');


// 13. Binding + Closure
// mandatory
// Write an object user with the attributes:

// hobby: Calligraphy
// favoriteSport: Hockey
// astrologicalSign: Aries
// firstName: Buillaume
// lastName: Johns
// location: Netherlands
// occupation: Engineer
// Create a function named logWelcomeUser:

// It takes one argument welcomeString (String)
// It logs to the console <welcomeString>, <firstName>. Your occupation is: <occupation>
// Create a variable named bindLogWelcomeUser. It binds the logWelcomeUser function to the user object.

// Call the function with the string Welcome

// Requirements:

// Calling bindLogWelcomeUser('Hello'); should return Hello, Buillaume. Your occupation is: Engineer


