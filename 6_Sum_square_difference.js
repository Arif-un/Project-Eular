/* The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first n natural numbers and the square of the sum. */

function sumSquareDifference(n) {
  let sum=0,sumOfSqr=0
  for(let i = 0; i<=n; i++){
    sum +=i
    sumOfSqr += Math.pow(i,2)
  }
  return Math.pow(sum,2)-sumOfSqr
}

sumSquareDifference(10);
