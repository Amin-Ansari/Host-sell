let cnavasButton = document.querySelector(".off-canvas-button");
let canvas = document.querySelector(".off-canvas");
let innerCanvas = document.querySelector(".off-canvas-menu");
let canvasItem = document.querySelectorAll(".sub-title");
let theHeader = document.querySelector("header");
let theNavigation = document.querySelector("nav");
let sliderButtons = document.querySelectorAll("button.slider-button");
let slider = document.querySelector(".slider-section");
let pushValue = 0;
let dots = document.querySelector(".dots-container");

window.addEventListener("scroll", resizeHeader);
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
sliderButtons[0].addEventListener("click", pushBack);
sliderButtons[1].addEventListener("click", pushForward);

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
  if (!this.classList.contains("active-state")) {
    closeAllItems();
    this.parentElement.classList.toggle("height-auto");
    this.classList.toggle("active-state");
    if (this.classList.contains("plus")) {
      this.classList.replace("plus", "minus");
    } else {
      this.classList.replace("minus", "plus");
    }
  } else {
    this.parentElement.classList.remove("height-auto");
    this.classList.remove("active-state");
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
function resizeHeader() {
  let headerHeight = theHeader.offsetHeight;
  if (window.scrollY >= headerHeight) {
    theHeader.firstElementChild.style = "display:none;";
    theNavigation.style.height = "73px";
  } else {
    theHeader.firstElementChild.style = "display:block;";
    theNavigation.style.height = "77px";
  }
}
function pushForward() {
  if (pushValue < 200) {
    pushValue += 100;
    slider.style = `transform: translateX(${pushValue}vw);`;
    resetAllDots(pushValue / 100);
  } else {
    pushValue = 0;
    slider.style = `transform: translateX(${pushValue}vw);`;
    resetAllDots(pushValue);
  }
}
function pushBack() {
  if (pushValue > 0) {
    pushValue -= 100;
    slider.style = `transform: translateX(${pushValue}vw);`;
    resetAllDots(pushValue / 100);
  } else {
    pushValue = 200;
    slider.style = `transform: translateX(${pushValue}vw);`;
    resetAllDots(pushValue / 100);
  }
}
function resetAllDots(theDot) {
  let allDots = dots.children;
  for (let i = 0; i <= 2; i++) {
    allDots[i].classList.remove("active-dot");
  }
  allDots[theDot].classList.add("active-dot");
  setTranslate(theDot);
}
function setTranslate(theDot) {
  let imageContainers = document.querySelectorAll(".image-container");
  for (let element of imageContainers) {
    element.classList.remove("no-translate");
  }
  setTimeout(function () {
    imageContainers[theDot].classList.add("no-translate");
  }, 30);
}
function closeAllItems() {
  let offItem = document.querySelectorAll(".off-canvas-item");
  for (let element of offItem) {
    element.classList.remove("height-auto");
    element.firstElementChild.classList.remove("active-state");
    element.classList.remove("minus");
    element.firstElementChild.classList.replace("minus", "plus");
    subItemsOut();
  }
}
function subItemsOut() {
  let allSubs = document.querySelectorAll(".sub-menu-item");
  for (let element of allSubs) {
    element.classList.remove("sub-in");
  }
}
setInterval(pushForward, 6500);
