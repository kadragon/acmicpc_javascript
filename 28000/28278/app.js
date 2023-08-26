class Stack {
  constructor() {
    this.stack = [];
    this.top = 0;
  }

  push(item) {
    this.stack[this.top] = item;
    this.top += 1;
  }

  pop() {
    if (this.top === 0) return -1;
    const result = this.stack[this.top - 1];
    this.top -= 1;
    return result;
  }

  size() {
    return this.top;
  }

  empty() {
    return this.top === 0 ? 1 : 0;
  }

  peek() {
    if (this.top === 0) return -1;
    return this.stack[this.top - 1];
  }
}

const solution = (input) => {
  const [, ...commands] = input.split("\n");
  const stack = new Stack();
  const result = [];

  for (const command of commands) {
    const cmd = command.split(" ").map(Number);
    switch (cmd[0]) {
      case 1:
        stack.push(cmd[1]);
        break;
      case 2:
        result.push(stack.pop());
        break;
      case 3:
        result.push(stack.size());
        break;
      case 4:
        result.push(stack.empty());
        break;
      case 5:
        result.push(stack.peek());
        break;
    }
  }

  return result.join(`\n`);
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
