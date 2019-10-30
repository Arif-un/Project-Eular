/* 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n? */
function smallestMult(n) {
  let result=1
  for(let i = 1; i<=n; i++){
    if(result%i===0){
      continue;
    }else{
      result++
      i=1
    }
  }
  return result;
}

smallestMult(20);