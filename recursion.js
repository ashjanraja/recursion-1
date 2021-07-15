// first example **Calculates the factorial of a number
function fac(num) {
  if (num === 1) {
    return 1;
  } else {
    return num * fac(num - 1);
  }
}
console.log(fac(4)); //return 24

/*second example
Write a function that stops counting down when the next number is zero,
*/ 
function countDown(fromNumber) {
  console.log(fromNumber);

  let nextNumber = fromNumber - 1;

  if (nextNumber > 0) {
    return countDown(nextNumber);
  }
}
countDown(3);

/*third example Fibonacci

Lets write a recursive function to compute the Nth number in the Fibonacci sequence.
*/

function fib(n) {
  // Stop condition
  if (n == 0) return 0;
  // Stop condition
  else if (n == 1 || n == 2) return 1;
  // Recursion function
  else return fib(n - 1) + fib(n - 2);
}
