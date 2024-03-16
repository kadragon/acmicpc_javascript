const mergedIntervals = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const [currentStart, currentEnd] = intervals[i];
    const [lastStart, lastEnd] = merged[merged.length - 1];

    if (currentStart <= lastEnd) {
      merged[merged.length - 1] = [lastStart, Math.max(currentEnd, lastEnd)];
    } else {
      merged.push(intervals[i]);
    }
  }

  return merged;
};

const isInClosedInterval = (number, intervals) => {
  for (let [start, end] of intervals) {
    if (number >= start && number <= end) {
      return true;
    }
  }
  return false;
};

const solution = (input) => {
  const inputs = input.split("\n");
  let [n, , a, b] = inputs[0].split(" ").map(Number);
  const closed = mergedIntervals(
    inputs.slice(1).map((v) => v.split(" ").map(Number))
  );

  const dp = Array(n + 1 + (a > b ? a : b)).fill(Infinity);

  dp[a] = dp[b] = 1;

  for (let i = 1; i <= n; i++) {
    if (isInClosedInterval(i, closed)) continue;
    dp[i + a] = Math.min(dp[i + a], dp[i] + 1);
    dp[i + b] = Math.min(dp[i + b], dp[i] + 1);
  }

  return dp[n] === Infinity ? -1 : dp[n];
};

if (process.platform === "linux") {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
