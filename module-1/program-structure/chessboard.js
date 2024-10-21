// ChessBoard Exercise

let size = 8;

for (let row = 0; row < size; row++) {
  let rowPattern = "";
  for (let column = 0; column < size; column++) {
    if ((row + column) % 2 === 0) {
      rowPattern += " ";
    } else {
      rowPattern += "#";
    }
  }
  console.log(rowPattern);
}
