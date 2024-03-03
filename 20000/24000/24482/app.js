const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const [d, ...tmp] = input.split("\n");
const [n, , r] = d.split(" ").map((v) => +v);
const trunks = tmp.map((v) => v.split(" ").map((v) => +v));

const depth = Array.from(Array(n + 1), () => -1);
const linked = Array.from(Array(n + 1), () => []);

for (const [u, v] of trunks) {
  linked[u].push(v);
  linked[v].push(u);
}

depth[r] = 0;

const dfs = (t, d) => {
  for (const v of linked[t].sort((a, b) => b - a)) {
    if (depth[v] == -1) {
      depth[v] = d;
      dfs(v, d + 1);
    }
  }
};

dfs(r, 1);

console.log(depth.slice(1).join("\n"));
