// Recursion Exercise

function isEven(num) {
  if (num < 0) return "Number must be a positive whole number.";
  if (num === 0) return true;
  if (num === 1) return false;
  return isEven(num - 2);
}

console.log(isEven(50));
// → true
console.log(isEven(75.5));
// → false
console.log(isEven(-1));
// → Number must be a positive whole number.
