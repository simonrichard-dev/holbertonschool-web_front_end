function countPrimeNumbers () {
    let a, b, i, j; 
    a = 2; 
    b = 100; 
    if (a <= 2) { 
        a = 2; 
        if (b >= 2) { 
            console.log(a); 
            a++; 
        } 
    }

    if (a % 2 == 0) 
        a++; 

        for (i = a; i <= b; i = i + 2) { 
 
        let flag = 1; 
      
        for (j = 2; j * j <= i; ++j) { 
            if (i % j == 0) { 
                flag = 0; 
                break; 
            } 
        }

        if (flag == 1) { 
            if (i == 1) continue; 
            else
                console.log(i); 
        } 
    }
    let timeUsed = performance.now(); 
    console.log('Execution time of printing countPrimeNumbers was ' + `${timeUsed}` + ' milliseconds');
};

countPrimeNumbers();