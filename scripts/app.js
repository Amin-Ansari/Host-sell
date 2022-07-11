let cnavasButton = document.querySelector(".off-canvas-button");
let canvas = document.querySelector(".off-canvas");
let innerCanvas = document.querySelector(".off-canvas-menu");

cnavasButton.addEventListener("click", showAndHideCanvas);
canvas.addEventListener("click", (eventObj) => {
  if (eventObj.target == canvas) {
    canvas.classList.remove("show");
    innerCanvas.classList.remove("move-in");
    undoRotation();
  }
});

function showAndHideCanvas() {
  rotateTheBar();
  showCanvas();
}
function rotateTheBar() {
  let allBars = document.querySelectorAll(".h-bar");
  for (let element of allBars) {
    element.classList.toggle("rotated-bars");
  }
}
function showCanvas() {
  canvas.classList.toggle("show");
  innerCanvas.classList.toggle("move-in");
}
function undoRotation() {
  let allBars = document.querySelectorAll(".h-bar");
  for (let element of allBars) {
    element.classList.remove("rotated-bars");
  }
}
