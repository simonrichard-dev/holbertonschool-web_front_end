const { performance } = require('perf_hooks');

// Fonction pour compter les nombres premiers de 2 à 100
function countPrimeNumbers() {
    let count = 0;

    for (let i = 2; i <= 100; i++) {
        let isPrime = true;

        for (let j = 2; j * j <= i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            count++;
        }
    }

    return count;
}

// Mesurer le temps en millisecondes pour exécuter la fonction 100 fois
let startTime = performance.now();

// Exécuter countPrimeNumbers 100 fois en utilisant setTimeout pour le placer à la fin de la pile d'exécution
for (let i = 0; i < 100; i++) {
    setTimeout(countPrimeNumbers, 0);
}

// Mesurer le temps total d'exécution à l'aide de la performance API
setTimeout(() => {
    let endTime = performance.now();
    console.log(`Execution time of calculating prime numbers 100 times was ${endTime - startTime} milliseconds.`);
}, 0);