const solution = (input) => {
  const inputs = input.split("\n");
  const N = Number(inputs[0]);

  const result = [0, 0, 0, 0, 0];

  const updates = [];

  for (let i = 1; i <= N; i++) {
    const [c, s, e] = inputs[i].split(" ");
    const type = c === "T" ? 1 : 0;
    const start = Number(s);
    const end = Number(e) + 1;

    updates.push([start, type, 1]);
    updates.push([end, type, -1]);

    if (end - start > result[4]) result[4] = end - start;
  }

  updates.sort((a, b) => a[0] - b[0]);

  const dayCounts = [0, 0];
  let uIdx = 0;

  for (let i = 1; i <= 366; i++) {
    while (uIdx < N * 2 && updates[uIdx][0] === i) {
      dayCounts[updates[uIdx][1]] += updates[uIdx][2];
      uIdx++;
    }

    const [T, S] = dayCounts;
    if (T || S) result[0]++;
    result[1] = Math.max(result[1], T + S);
    if (T && S && T === S) {
      result[2]++;
      result[3] = Math.max(result[3], T + S);
    }
  }

  return result.join("\n");
};

if (process.platform === "linux") {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
