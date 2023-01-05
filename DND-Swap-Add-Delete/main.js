const gridContainer = document.querySelector(".grid__container");

const gridSize = document.querySelector("#gridSize");

function renderGrid() {
  gridContainer.innerHTML = ``;

  const gridSz = gridSize.value;

  const ht_wt = `${21 / gridSz}rem`;

  for (let i = 1; i <= gridSz; i++) {
    for (let j = 1; j <= gridSz; j++) {
      const className = `${i}_${j}`;
      const InputBox = document.createElement("div");
      const FileInput = document.createElement("input");
      const AddSign = document.createElement("div");
      AddSign.classList.add("add__sign");
      AddSign.innerText = "+";
      InputBox.appendChild(AddSign);
      FileInput.type = "file";
      FileInput.classList.add("class", "input__box");
      InputBox.appendChild(FileInput);
      InputBox.classList.add(className);
      InputBox.classList.add("file__container");
      InputBox.style.setProperty("--ht-wt", ht_wt);

      InputBox.addEventListener("dragover", (e) => {
        const draggedEl = document.querySelector(".dragging");
        console.log(e.target.classList);
        InputBox.appendChild(draggedEl);
      });

      FileInput.addEventListener("change", (e) => {
        // console.log(e.target.files[0]);
        fetchImgAndDisplay(FileInput, InputBox);
      });
      gridContainer.appendChild(InputBox);
    }
  }
}
renderGrid();

gridSize.addEventListener("input", renderGrid);

function fetchImgAndDisplay(file, element) {
  const imgFile = file.files[0];

  const IMGBOX = document.createElement("div");
  IMGBOX.classList.add("image__box");
  IMGBOX.style.setProperty("draggable", true);

  const DeleteBtn = document.createElement("div");
  DeleteBtn.classList.add("delete__btn");
  DeleteBtn.classList.add("hidden");
  DeleteBtn.innerText = "X";

  const IMG = document.createElement("img");
  IMG.classList.add("image__styles");

  const reader = new FileReader();
  reader.onloadend = function () {
    IMG.src = reader.result;
  };

  if (imgFile) {
    element.children[0].classList.add("hidden");
    element.children[1].classList.add("hidden");
    reader.readAsDataURL(imgFile);
    IMGBOX.appendChild(DeleteBtn);
    IMGBOX.appendChild(IMG);
    element.appendChild(IMGBOX);

    IMGBOX.addEventListener("mouseenter", (e) => {
      e.target.children[0].classList.remove("hidden");
    });
    IMGBOX.addEventListener("mouseleave", (e) => {
      e.target.children[0].classList.add("hidden");
    });

    IMGBOX.addEventListener("dragstart", (e) => {
      console.log("dragstart");
      IMGBOX.classList.add("dragging");
    });
    IMGBOX.addEventListener("dragend", (e) => {
      console.log("dragend");
      IMGBOX.classList.remove("dragging");
    });

    DeleteBtn.addEventListener("click", (e) => {
      element.children[0].classList.remove("hidden");
      element.children[1].classList.remove("hidden");
      element.children[2].children[1].src = "";
      element.children[2].children[1].remove();
      element.children[2].children[0].remove();
      IMGBOX.remove();
      IMGBOX.removeEventListener("mouseenter", () => {
        DeleteBtn.remove();
      });
      IMGBOX.removeEventListener("mouseleave", () => {
        DeleteBtn.remove();
      });
    });
  }
}
