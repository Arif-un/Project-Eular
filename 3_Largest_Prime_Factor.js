/* The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number? */


function largestPrimeFactor(number) {
    let i
    for (i = 2; i < number; i++) {
        if (number % i === 0) {
            number /= i
        }
    }
    return i
}

largestPrimeFactor(13195)
