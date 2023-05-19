const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const [d, ...tmp] = input.split("\n");
const [n, , r] = d.split(" ").map((v) => +v);
const trunks = tmp.map((v) => v.split(" ").map((v) => +v));

let orderd = 1;
const enqueue = [];
const visited = Array.from(Array(n + 1), () => 0);
const linked = Array.from(Array(n + 1), () => []);

for (const [u, v] of trunks) {
  linked[u].push(v);
  linked[v].push(u);
}

enqueue.push(r);
visited[r] = 1;

const dfs = (t) => {
  for (const v of linked[t].sort((a, b) => b - a)) {
    if (!visited[v]) {
      visited[v] = ++orderd;
      dfs(v);
    }
  }
};

dfs(r);

console.log(visited.slice(1).join("\n"));
