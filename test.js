const jdenticon = require("jdenticon");
const fs = require("fs");

const value = "Jordan";
const size = 200;

const png = jdenticon.toPng(value, size);
fs.writeFileSync("./testicon.png", png);