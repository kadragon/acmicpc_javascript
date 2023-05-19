const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath).toString().trim();

const [t, ...values] = input.split("\n").map((v) => +v);

const factorial = [1, 1];

for (let i = 2; i <= 1001; i++) {
  factorial.push(factorial[i - 1] * i);
  while (factorial[i] % 10 === 0) {
    factorial[i] /= 10;
  }
  factorial[i] %= 100000;
}

for (const v of values) {
  console.log(factorial[v] % 10);
}
