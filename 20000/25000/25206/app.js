const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const arr = input.split("\n").map((v) => v.split(" ").slice(1));

const gradeMap = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0,
  P: 0,
};

let creditTotal = 0;
let gradeTotal = 0;

for (let [credit, grade] of arr) {
  if (grade == "P") continue;

  credit = parseFloat(credit);
  grade = gradeMap[grade];

  creditTotal += credit;
  gradeTotal += credit * grade;
}

console.log((gradeTotal / creditTotal).toFixed(6));
