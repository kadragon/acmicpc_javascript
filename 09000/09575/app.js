const makeUniqueValueArray = (arr) => [
  ...new Set(arr.match(/\d+/g).map(Number)),
];
const checkLuckyNumber = (num) =>
  num
    .toString()
    .split("")
    .every((n) => n === "5" || n === "8");

const solution = (input) => {
  const [T, ...arr] = input.split("\n");
  const result = [];

  for (let i = 0; i < T; i++) {
    const aArr = makeUniqueValueArray(arr[i * 6 + 1]);
    const bArr = makeUniqueValueArray(arr[i * 6 + 3]);
    const cArr = makeUniqueValueArray(arr[i * 6 + 5]);

    const luckyNumber = new Set();

    for (const a of aArr)
      for (const b of bArr)
        for (const c of cArr) {
          const sumValue = a + b + c;
          if (checkLuckyNumber(sumValue)) luckyNumber.add(sumValue);
        }

    result.push(luckyNumber.size);
  }

  return result.join("\n");
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
