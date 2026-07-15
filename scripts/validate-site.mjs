import { readFileSync, statSync } from "node:fs";

const requiredFiles = ["index.html", "src/App.jsx", "src/App.compiled.js", "src/styles.css", "README.md"];
const requiredText = [
  "Ventura & Channel Islands Weekend",
  "confirm before booking",
  "localStorage",
  "BudgetCalculator",
  "PackingChecklist",
  "Book the trip",
  "Zachari Dunes",
  "Island Packers",
  "Pacific Surfliner",
];

for (const file of requiredFiles) {
  statSync(file);
}

const app = readFileSync("src/App.jsx", "utf8");
const html = readFileSync("index.html", "utf8");
const compiled = readFileSync("src/App.compiled.js", "utf8");
for (const text of requiredText) {
  if (!app.includes(text) && !html.includes(text) && !compiled.includes(text)) {
    throw new Error(`Missing required text: ${text}`);
  }
}

if (html.includes("text/babel") || html.includes("@babel/standalone")) {
  throw new Error("Production HTML must load precompiled JavaScript, not runtime Babel.");
}

if (!compiled.includes("ReactDOM.createRoot") || compiled.includes("<App />")) {
  throw new Error("Compiled app bundle does not look browser-ready.");
}

const css = readFileSync("src/styles.css", "utf8");
if (!css.includes("@media (min-width: 720px)") || !css.includes("100svh")) {
  throw new Error("Responsive/mobile-first CSS checks failed.");
}

console.log("Site validation passed.");
