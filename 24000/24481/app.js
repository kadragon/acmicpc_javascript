const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const [d, ...tmp] = input.split("\n");
const [n, m, r] = d.split(" ").map((v) => +v);
const trunks = tmp.map((v) => v.split(" ").map((v) => +v));

const depth = Array.from(Array(n + 1), () => -1);
const linked = Array.from(Array(n + 1), () => []);

for (const [u, v] of trunks) {
  linked[u].push(v);
  linked[v].push(u);
}

depth[r] = 0;

const dfs = (t) => {
  for (const v of linked[t].sort((a, b) => a - b)) {
    if (depth[v] == -1) {
      depth[v] = depth[t] + 1;
      dfs(v);
    }
  }
};

dfs(r);

console.log(depth.slice(1).join("\n"));
