const data = require("./data.json");

//https://adventofcode.com/2023/day/2 - PART 1
const R = 12,
  G = 13,
  B = 14;

let sum = 0;
data.forEach((item, gameNumber) => {
  item = item.replace(/.*: /, "");
  let subsets = item.split("; ");
  let possible = true;
  for (let i = 0; i < subsets.length; i++) {
    let subset = subsets[i];
    let rowArray = subset.replace(/,/gm, "").split(" ");

    let redCubesIndex = rowArray.indexOf("red") - 1;
    let greenCubesIndex = rowArray.indexOf("green") - 1;
    let blueCubesIndex = rowArray.indexOf("blue") - 1;

    let redCubes = parseInt(rowArray[redCubesIndex]) || 0;
    let greenCubes = parseInt(rowArray[greenCubesIndex]) || 0;
    let blueCubes = parseInt(rowArray[blueCubesIndex]) || 0;

    if (redCubes > R || greenCubes > G || blueCubes > B) {
      possible = false;
      break;
    }
  }

  if (possible) {
    sum += gameNumber + 1;
  }
});

console.log(sum);
