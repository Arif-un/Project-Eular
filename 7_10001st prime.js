/* By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the nth prime number? */

function checkPrime(num) {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
function nthPrime(n) {
  let prime;
  for (let i = 2; i <= n+1; i++) {
    if (checkPrime(i)) {
      prime = i;
    } else {
      n++;
    }
  }
  return prime
}

nthPrime(10);