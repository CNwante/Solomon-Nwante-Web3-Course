/* Dominant writing direction implementation
============================================ */

import SCRIPTS from "./language-scripts";

function dominantDirection(text) {
  let countedDirs = countBy(text, characterDirection)
    .filter(({name}) => name != "none");

  if (countedDirs.length == 0) return "No dominant direction found";
  let dominantDir = countedDirs.reduce((a, b) => a.count > b.count ? a : b);
  return dominantDir.name;
}


console.log(dominantDirection("Hello!")); // → ltr
console.log(dominantDirection("Hey, مساء الخير")); // → rtl


/* Helper functions
=================== */
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.find(c => c.name == name);
    if (!known) {
      counts.push({name, count: 1});
    } else {
      known.count++;
    }
  }
  return counts;
}

function characterDirection(char) {
  let script = characterScript(char.codePointAt(0));
  return script ? script.direction : "none";
}

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}
