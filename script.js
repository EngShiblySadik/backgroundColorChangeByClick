/**
 * Project Requirements:
 * - Change the background color by generating random rbg color by clicking a button
 */

// Steps
// Step 1 - create onload handler
window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const btn = document.getElementById("change-btn");

  btn.addEventListener("click", function () {
    const bgcolor = RGBColorGenerator();
    root.style.backgroundColor = `${bgcolor}`;
  });
}
// step 2 - random color generator function
function RGBColorGenerator() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red},${green},${blue})`;
}
// step 3 - collect all necessary references
// step 4 - handle the click event
