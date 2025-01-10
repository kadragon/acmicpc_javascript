const solution = (input) => {
  const [, ...cases] = input.split("\n");

  const result = [];

  for (const c of cases) {
    const [i, ...heights] = c.split(" ").map(Number);
    let count = 0;
    let line = [];
    
    const binarySearch = (arr, target) => {
      let left = 0;
      let right = arr.length;
      while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] > target) right = mid;
        else left = mid + 1;
      }
      return left;
    };

    for (const height of heights) {
      const position = binarySearch(line, height);
      count += line.length - position;
      line.splice(position, 0, height);
    }

    result.push(`${i} ${count}`);
  }

  return result.join("\n");
};

if (process.platform === "linux") {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;