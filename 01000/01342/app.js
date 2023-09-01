class Solution {
  constructor() {
    this.count = 0;
    this.len = input.length;
    this.inputMap = new Map();

    for (const char of input) {
      this.inputMap.set(
        char,
        this.inputMap.get(char) ? this.inputMap.get(char) + 1 : 1
      );
    }
  }

  dfs = (res) => {
    if (res.length === this.len) {
      this.count++;
      return;
    }

    for (let [key, value] of this.inputMap) {
      if (res[res.length - 1] === key) continue;

      if (value > 0) {
        this.inputMap.set(key, value - 1);
        this.dfs(res + key);
        this.inputMap.set(key, value);
      }
    }
  };

  getAnswer = () => {
    return this.count;
  };
}

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

const solution = new Solution();
solution.dfs("");

console.log(solution.getAnswer());
