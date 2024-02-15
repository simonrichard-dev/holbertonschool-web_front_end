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


let startTime = performance.now();
let a = 0;

while (a < 100) {
    countPrimeNumbers();
    a++;
}

let finalTime = performance.now();


console.log(`Execution time of printing countPrimeNumbers was ${finalTime - startTime} milliseconds.`);