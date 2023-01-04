const resetBtn = document.querySelector(".reset__button");
const colorPickerEl = document.querySelector(".color__picker");
const gridCountEl = document.querySelector(".grid__count");
const gridContainerEl = document.querySelector(".grid__container");

let colorCode = "#000000";
let paint = false;

colorPickerEl.addEventListener("input", (e) => {
  colorCode = e.target.value;
});

gridCountEl.addEventListener("input", (e) => {
  renderGrid(+e.target.value);
});

function renderGrid(gridCount) {
  const ht = 100 / gridCount;
  const nodes = new Array(gridCount)
    .fill(
      `<div style="width:calc(${ht}% - 0.1rem); height: calc(${ht}% - 0.1rem);" class="pixel"></div>`
    )
    .join("");
  const nodeGrid = new Array(gridCount).fill(nodes).join("");
  gridContainerEl.innerHTML = nodeGrid;
}

renderGrid(20);

function paintGrid() {
  gridContainerEl.addEventListener("mouseover", (e) => {
    if (!paint) return;
    if (e.target.classList.value === "pixel") {
      e.target.style.backgroundColor = colorCode;
    }
  });
}

gridContainerEl.addEventListener("mousedown", (e) => {
  if (e.target.classList.value === "pixel") {
    e.target.style.backgroundColor = colorCode;
    paint = true;
    paintGrid();
  }
});

gridContainerEl.addEventListener("mouseup", (e) => {
  paint = false;
});

resetBtn.addEventListener("click", () => {
  renderGrid(20);
  paint = false;
});
