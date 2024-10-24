let arrays = [[1, 2, 3], [4, 5], [6]];
function flat(array) {
  return array.reduce((a, b) => a.concat(b));
}

console.log(flat(arrays));
// → [1, 2, 3, 4, 5, 6]
