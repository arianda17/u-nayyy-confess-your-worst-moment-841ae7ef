import * as fs from "fs";

const line = "I invented a paper with total confidence, then cited it again when challenged to prove it was real.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
