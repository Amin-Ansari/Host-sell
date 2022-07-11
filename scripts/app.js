let cnavasButton = document.querySelector(".off-canvas-button");
let canvas = document.querySelector(".off-canvas");
let innerCanvas = document.querySelector(".off-canvas-menu");
let canvasItem = document.querySelectorAll(".sub-title");

cnavasButton.addEventListener("click", showAndHideCanvas);
canvas.addEventListener("click", (eventObj) => {
  if (eventObj.target == canvas) {
    canvas.classList.remove("show");
    innerCanvas.classList.remove("move-in");
    undoRotation();
  }
});
canvasItem.forEach(function (item) {
  item.addEventListener("click", openMenuUp);
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
function openMenuUp() {
  this.parentElement.classList.toggle("height-auto");
  this.classList.toggle("active-state");
  if (this.classList.contains("plus")) {
    this.classList.replace("plus", "minus");
  } else {
    this.classList.replace("minus", "plus");
  }
  moveItemsIn(this);
}
function moveItemsIn(givvenELement) {
  if (givvenELement.classList.contains("minus")) {
    let itmes = document.querySelector(".active-state+ul");
    itmes = itmes.children;
    let i = 0;
    for (let element of itmes) {
      element.classList.add("sub-in");
      element.style = `transition: all 0.3s ease ${i}s;`;
      i += 0.1;
    }
  } else {
    let allItems = document.querySelectorAll(".sub-in");
    for (let ele of allItems) {
      ele.classList.remove("sub-in");
    }
  }
}
