const solution = (input) => {
  const inputs = input.split("\n");
  const T = Number(inputs.shift());
  const result = [];

  for (let c = 0; c < T; c++) {
    const N = Number(inputs.shift());
    const events = [];

    for (let d = 0; d < N; d++) {
      let [s, e] = inputs
        .shift()
        .split(" ")
        .map(Number)
        .sort((a, b) => a - b);
      if (s % 2 === 0) s--;
      if (e % 2 === 0) e--;

      events.push([s, 1], [e + 2, -1]);
    }

    events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    let max = 0;
    let cnt = 0;

    events.forEach(([, val]) => {
      cnt += val;
      max = Math.max(max, cnt);
    });

    result.push(max * 10);
  }

  return result.join("\n");
};

if (process.platform === "linux") {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
