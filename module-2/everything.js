// Custom every method implementation

// Using a loop
function every(array, test) {
  for (let item of array) {
    if (test(item) === false) {
      return false;
    }
  }
  return true;
}


// Using array some method
function every(array, test) {
  return !array.some(element => test(element) === false);
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
