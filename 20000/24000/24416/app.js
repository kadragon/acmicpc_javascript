const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const N = +require("fs").readFileSync(inputPath).toString().trim();

let prev = 1;
let curr = 1;
let next = undefined;

for (let i = 3; i <= N; i++) {
  next = prev + curr;
  prev = curr;
  curr = next;
}

console.log(curr, N - 2);
