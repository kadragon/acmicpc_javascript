const solution = (input) => {
  const [N, k] = input.split(" ").map(Number);

  let length = 0;
  let digits = 1;

  for (let i = 1; i <= N; i *= 10) {
    const end = Math.min(N, i * 10 - 1);
    const start = i;
    const count = end - start + 1;
    const currentLength = count * digits;

    if (length + currentLength >= k) {
      const numberOffset = Math.ceil((k - length) / digits) - 1;
      const number = start + numberOffset;
      const digitIndex = (k - length - 1) % digits;
      return String(number)[digitIndex];
    }

    length += currentLength;
    digits++;
  }

  return -1;
};

if (process.platform === "linux") {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
