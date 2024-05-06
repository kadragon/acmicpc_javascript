class circleQueue {
  constructor(size) {
    this.queue = new Array(size);
    this.front = -1;
    this.rear = -1;
    this.size = size;
  }

  isEmpty() {
    return this.front === -1;
  }

  isFull() {
    return (this.rear + 1) % this.size === this.front;
  }

  enqueue(element) {
    if (this.isFull()) {
      return;
    }

    if (this.isEmpty()) {
      this.front = 0;
    }

    this.rear = (this.rear + 1) % this.size;
    this.queue[this.rear] = element;
  }

  dequeue() {
    if (this.isEmpty()) {
      return false;
    }

    const element = this.queue[this.front];

    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.size;
    }

    return element;
  }

  printQueue() {
    if (this.isEmpty()) {
      return "empty";
    }

    let current = this.front;
    let str = "";

    while (current !== this.rear) {
      str += this.queue[current] + " ";
      current = (current + 1) % this.size;
    }

    return str + this.queue[current];
  }
}

const solution = (input) => {
  const inputs = input.split("\n");
  const N = Number(inputs.shift());
  inputs.pop();

  const queue = new circleQueue(N);

  for (const element of inputs) {
    if (element === "0") {
      queue.dequeue();
    } else {
      queue.enqueue(element);
    }
  }

  return queue.printQueue();
};

if (process.platform === "linux") {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
