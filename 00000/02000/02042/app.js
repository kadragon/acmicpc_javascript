class SegmentTree {
  constructor(array) {
    this.array = array;
    this.tree = Array(array.length * 4).fill(BigInt(0));

    this.build(1, 0, array.length - 1);
  }

  build(node, start, end) {
    if (start === end) {
      this.tree[node] = this.array[start];
      return this.tree[node];
    }

    const mid = Math.floor((start + end) / 2);
    this.tree[node] =
      this.build(node * 2, start, mid) + this.build(node * 2 + 1, mid + 1, end);

    return this.tree[node];
  }

  query(node, start, end, left, right) {
    if (left > end || right < start) return 0n;
    if (left <= start && end <= right) return this.tree[node];

    const mid = Math.floor((start + end) / 2);

    return (
      this.query(node * 2, start, mid, left, right) +
      this.query(node * 2 + 1, mid + 1, end, left, right)
    );
  }

  update(node, start, end, index, diff) {
    if (index < start || index > end) return;
    this.tree[node] += diff;

    if (start === end) return;

    const mid = Math.floor((start + end) / 2);
    this.update(node * 2, start, mid, index, diff);
    this.update(node * 2 + 1, mid + 1, end, index, diff);
  }
}

const solution = (input) => {
  const inputs = input.split("\n");
  const [N, M, K] = inputs[0].split(" ").map(Number);
  const numbers = inputs.splice(1, N).map(BigInt);

  const tree = new SegmentTree(numbers);

  const result = [];
  for (let i = 0; i < M + K; i++) {
    let [a, b, c] = inputs[i + 1].split(" ");
    b = Number(b);

    if (a === "1") {
      c = BigInt(c);
      const diff = c - numbers[b - 1];
      numbers[b - 1] = c;
      tree.update(1, 0, N - 1, b - 1, diff);
    } else if (a === "2") {
      c = Number(c);
      result.push(tree.query(1, 0, N - 1, b - 1, c - 1).toString());
    }
  }

  return result.join("\n");
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
