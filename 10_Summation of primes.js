/* The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below n. */

function isPrime(num) {
    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            return false
        }
    }
    return true
}
function primeSummation(n) {
    let sum = 0
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            sum += i
        }
    }
    return sum;
}

console.log(primeSummation(140759));
