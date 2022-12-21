const images = document.querySelectorAll(".image__hold");
const containers = document.querySelectorAll(".drop__container");

// Event Listeners
images.forEach((img) => {
  img.addEventListener("dragstart", dragStartEvent);
  img.addEventListener("touchstart", dragStartTouchEvent);
  img.addEventListener("dragend", dragEndEvent);
  img.addEventListener("touchend", dragEndEvent);
});

containers.forEach((container) => {
  container.addEventListener("dragover", dragOverEvent);
  container.addEventListener("touchmove", dragOverMobileEvent);
});

// Functions
function dragStartEvent() {
  this.classList.add("isDragged");
}
function dragStartTouchEvent() {
  this.classList.add("isDragged");
  //   alert("hi");
}

function dragEndEvent() {
  this.classList.remove("isDragged");
}

function dragOverEvent(e) {
  e.preventDefault();
  e.stopPropagation();
  this.appendChild(document.querySelector(".isDragged"));
}

function dragOverMobileEvent(e) {
  //   e.preventDefault();
  alert(e.targetTouches[0]);
  this.appendChild(document.querySelector(".isDragged"));
}
