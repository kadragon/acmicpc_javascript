const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const creditTable = {
  "A+": 4.3,
  A0: 4.0,
  "A-": 3.7,
  "B+": 3.3,
  B0: 3.0,
  "B-": 2.7,
  "C+": 2.3,
  C0: 2.0,
  "C-": 1.7,
  "D+": 1.3,
  D0: 1.0,
  "D-": 0.7,
  F: 0,
};

const arr = input.split("\n").slice(1);
const data = arr.map((v) => v.split(" ").slice(1));

let gradeSum = 0;
let ans = 0;

for (let [grade, credit] of data) {
  grade = Number(grade);
  credit = creditTable[credit];

  gradeSum += grade;
  ans += grade * credit;
}

console.log((ans / gradeSum + 0.000000001).toFixed(2));
