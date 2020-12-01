$(document).ready(() => {
  const ProgressBar = require("progressbar.js");

  // Assuming we have an empty <div id="container"></div> in
  // HTML
  const bar = new ProgressBar.Line("#oppon1", { easing: "easeInOut" });
  bar.animate(1); // Value from 0.0 to 1.0
});
