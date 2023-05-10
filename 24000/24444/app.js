const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const [d, ...tmpNodes] = input.split("\n");
const [n, _, r] = d.split(" ").map((v) => +v);
const trunks = tmpNodes.map((v) => v.split(" ").map((v) => +v));

let orderd = 1;
const enqueue = [];
const visited = Array(n + 1).fill(0);
const linked = Array.from(Array(n + 1), () => []);

for (const [u, v] of trunks) {
  linked[u].push(v);
  linked[v].push(u);
}

enqueue.push(r);
visited[r] = 1;

for (const t of enqueue) {
  for (const v of linked[t].sort((a, b) => a - b)) {
    if (visited[v] === 0) {
      visited[v] = ++orderd;
      enqueue.push(v);
    }
  }
}

console.log(visited.slice(1).join("\n"));
