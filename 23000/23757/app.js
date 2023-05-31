class Heap {
  constructor() {
    this.heap = [null];
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(value) {
    this.heap.push(value);
    let curIdx = this.heap.length - 1;
    let parentIdx = (curIdx / 2) >> 0;

    while (curIdx > 1 && this.heap[parentIdx] < this.heap[curIdx]) {
      this.swap(curIdx, parentIdx);

      curIdx = parentIdx;
      parentIdx = (curIdx / 2) >> 0;
    }
  }

  pop() {
    const max = this.heap[1];
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;

    if (!this.heap[rightIdx]) {
      if (this.heap[leftIdx] < this.heap[curIdx]) {
        this.swap(leftIdx, curIdx);
      }
      return max;
    }

    while (
      this.heap[leftIdx] > this.heap[curIdx] ||
      this.heap[rightIdx] > this.heap[curIdx]
    ) {
      const maxIdx =
        this.heap[leftIdx] > this.heap[rightIdx] ? leftIdx : rightIdx;
      this.swap(maxIdx, curIdx);
      curIdx = maxIdx;
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;
    }

    return max;
  }
}

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

const [, gift, want] = input.split("\n").map((v) => v.split(" ").map(Number));

const heap = new Heap();

for (const g of gift) {
  heap.push(g);
}

for (const w of want) {
  const max = heap.pop();
  if (max < w) {
    console.log(0);
    return;
  }

  if (max > w) heap.push(max - w);
}

console.log(1);
