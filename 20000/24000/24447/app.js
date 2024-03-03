const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const [d, ...tmpNodes] = input.split("\n");
const [n, , r] = d.split(" ").map((v) => +v);
const trunks = tmpNodes.map((v) => v.split(" ").map((v) => +v));

let ans = 0;
let orderd = 1;
const enqueue = [];
const visited = Array.from(Array(n + 1), () => 0);
const depth = Array.from(Array(n + 1), () => -1);
const linked = Array.from(Array(n + 1), () => []);

for (const [u, v] of trunks) {
  linked[u].push(v);
  linked[v].push(u);
}

enqueue.push(r);
visited[r] = 1;
depth[r] = 0;

for (const t of enqueue) {
  for (const v of linked[t]) {
    if (depth[v] === -1) {
      visited[v] = ++orderd;
      depth[v] = depth[t] + 1;
      enqueue.push(v);

      ans += depth[v] * visited[v];
    }
  }
}

console.log(ans);
