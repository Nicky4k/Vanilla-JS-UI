const planets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

let dragStartIndex;

const listContainer = document.querySelector(".list__container");

planets.forEach((planet, i) => {
  const node = document.createElement("li");
  node.setAttribute("data-index", i);

  node.innerHTML = `<div draggable='true' key=${
    i + 1
  } class='list__item'><p class='tagName'>${planet}</p>
  </div>`;
  listContainer.appendChild(node);
});

const listItems = document.querySelectorAll(".list__item");
const listBlocks = document.querySelectorAll("li");
console.log(listBlocks);

listItems.forEach((list) => {
  list.addEventListener("dragstart", () => {
    list.classList.add("dragged");
    dragStartIndex = +list.closest("li").getAttribute("data-index");
    console.log(dragStartIndex);
  });
  list.addEventListener("dragend", () => {
    list.classList.remove("dragged");
  });
});

listBlocks.forEach((block) => {
  block.addEventListener("dragenter", (e) => {
    block.classList.add("over");
  });
  block.addEventListener("dragleave", (e) => {
    block.classList.remove("over");
  });
  block.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  block.addEventListener("drop", (e) => {
    e.preventDefault();
    const dragEndIndex = +block.getAttribute("data-index");
    console.log(dragEndIndex, "end");
  });
});
