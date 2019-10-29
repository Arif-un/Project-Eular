/* A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers. */

function isPalindrome(num) {
    let number = num, revNum = 0
    while (num > 0) {
        revNum = revNum * 10
        revNum = revNum + num % 10
        num = parseInt(num / 10)
    }
    return number === revNum
}

function largestPalindromeProduct(n) {
    let largestPalindrome = 0, num, numArr = [], mul = 1, min
    for (let i = 1; i <= n; i++) {
        numArr.push(9)
    }
    num = Number(numArr.join(''))
    min = ((num + 1) / 10)

    for (let i = num; i >= min; i--) {
        if (largestPalindrome >= i * num) {
            break;
        }
        for (let j = num; j >= min; j--) {
            mul = i * j
            if (isPalindrome(mul) && mul > largestPalindrome) {
                largestPalindrome = mul
            }
        }
    }
    return largestPalindrome
}

largestPalindromeProduct(2);
