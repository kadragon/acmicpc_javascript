const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

let [n, ...words] = input.split("\n");
n = Number(n);

class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndofWord = false;
  }
}

function insert(root, word) {
  let node = root;
  let endOfWordCnt = 0;

  for (const c of word) {
    if (!node.children.has(c)) {
      node.childrㅁen.set(c, new TrieNode());
    }

    node = node.children.get(c);

    if (node.isEndOfWord) {
      endOfWordCnt--;
      node.isEndOfWord = false;
    }
  }

  node.isEndOfWord = true;

  return ++endOfWordCnt;
}

const root = new TrieNode();
let cnt = 0;

for (let i = 0; i < n; i++) {
  cnt += insert(root, words[i]);
}

console.log(cnt);
