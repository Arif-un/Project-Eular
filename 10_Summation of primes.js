/* The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below n. */


function primeSummation(n) {
    const sieve = new Array(n).fill(true)
    let sum = 0
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (sieve[i]) {
            for (let j = Math.pow(i, 2); j < n; j += i) {
                sieve[j] = false
            }
        }
    }
    for (let i = 2; i < sieve.length; i++) {
        if (sieve[i]) {
            sum += i
        }
    }

    return sum;
}


console.log(primeSummation(10));
