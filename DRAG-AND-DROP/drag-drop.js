const images = document.querySelectorAll(".image__hold");
const containers = document.querySelectorAll(".drop__container");

// Event Listeners
images.forEach((img) => {
  img.addEventListener("dragstart", dragStartEvent);
  img.addEventListener("dragend", dragEndEvent);
});

containers.forEach((container) => {
  container.addEventListener("dragover", dragOverEvent);
});

// Functions
function dragStartEvent() {
  this.classList.add("isDragged");
}

function dragEndEvent() {
  this.classList.remove("isDragged");
}

function dragOverEvent(e) {
  e.preventDefault();
  e.stopPropagation();
  this.appendChild(document.querySelector(".isDragged"));
}
