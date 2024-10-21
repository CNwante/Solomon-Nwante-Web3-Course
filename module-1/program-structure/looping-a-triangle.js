// Looping Triangle Exercise

for (let col = 1; col <= 7; col++) {
  let triangle = "";
  for (let row = 0; row < col; row++) {
    triangle += "#";
  }
  console.log(triangle);
}
