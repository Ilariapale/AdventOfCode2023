const data = require("./data.json");

//https://adventofcode.com/2023/day/2 - PART 2

let sum = 0;
data.forEach((item) => {
  item = item.replace(/.*: /, "");
  let subsets = item.split("; ");
  let r = 0,
    g = 0,
    b = 0;
  for (let i = 0; i < subsets.length; i++) {
    let subset = subsets[i];
    let rowArray = subset.replace(/,/gm, "").split(" ");

    let redCubesIndex = rowArray.indexOf("red") - 1;
    let greenCubesIndex = rowArray.indexOf("green") - 1;
    let blueCubesIndex = rowArray.indexOf("blue") - 1;

    let redCubes = parseInt(rowArray[redCubesIndex]) || 0;
    let greenCubes = parseInt(rowArray[greenCubesIndex]) || 0;
    let blueCubes = parseInt(rowArray[blueCubesIndex]) || 0;

    r = Math.max(r, redCubes);
    g = Math.max(g, greenCubes);
    b = Math.max(b, blueCubes);
  }
  sum += r * g * b;
});

console.log(sum);
