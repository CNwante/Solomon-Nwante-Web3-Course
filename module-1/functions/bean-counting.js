// Bean Counting Exercise

function countBs(string) {
  return countChar(string);
}

function countChar(string, character = 'B') {
  let charCount = 0;
  for (let currentChar of string) {
    if (currentChar === character) {
      charCount++;
    }
  }
  return charCount;
}
