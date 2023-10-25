let numSort = function(arr) {
// initializes categories
    let evens = [];
    let div5s = [];
    let primes = [];

// sorting mechanism
    for (let num of arr) {
        let even = isEven(num);
        let div5 = isDiv5(num);
        let prime = isPrime(num);

        if (even && num !== 0) {
            evens.push(num);
        }

        if (div5 && num !== 0) {
            div5s.push(num);
        }

        if (prime) {
            primes.push(num);
        }
    }

// converts arrays to strings
    let evensStr = evens.join(', ');
    let div5sStr = div5s.join(', ');
    let primesStr = primes.join(', ');

    let optionalReturn = `Even numbers: ${evensStr}
    Numbers divisible by 5: ${div5sStr}
    Prime numbers: ${primesStr}`;

    console.log('Even numbers: ' + evensStr);
    console.log('Numbers divisible by 5: ' + div5sStr);
    console.log('Prime numbers: ' + primesStr);

// tempLiteral can used as a return statement if desired as an alternative to the console.logs
};


let isEven = function(num) {
    return num % 2 === 0;
};

let isDiv5 = function(num) {
    return num % 5 === 0;
};

// does not exclude 2 due to original use case requirements
let isPrime = function(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
};


let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
numSort(arr1);

let arr2 = [9, 14, 22, 42, 6, 2, 97, 28, 5, 222, 0];
numSort(arr2);
