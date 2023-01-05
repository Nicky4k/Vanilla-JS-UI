const gridContainer = document.querySelector('.grid__container');

const gridSize = document.querySelector('#gridSize');

function renderGrid() {
  gridContainer.innerHTML = ``;

  const gridSz = gridSize.value;

  const ht_wt = `${21 / gridSz}rem`;

  for (let i = 1; i <= gridSz; i++) {
    for (let j = 1; j <= gridSz; j++) {
      const className = `${i}_${j}`;
      const InputBox = document.createElement('div');
      const FileInput = document.createElement('input');
      const AddSign = document.createElement('div');
      AddSign.classList.add('add__sign');
      AddSign.innerText = '+';
      InputBox.appendChild(AddSign);
      FileInput.type = 'file';
      FileInput.classList.add('class', 'input__box');
      InputBox.appendChild(FileInput);
      InputBox.classList.add(className);
      InputBox.classList.add('file__container');
      InputBox.style.setProperty('--ht-wt', ht_wt);

      FileInput.addEventListener('change', (e) => {
        console.log(e.target.files[0]);
        fetchImgAndDisplay(FileInput, InputBox);
      });
      gridContainer.appendChild(InputBox);
    }
  }
}
renderGrid();

gridSize.addEventListener('input', renderGrid);

function fetchImgAndDisplay(file, element) {
  console.log(file.files[0]);
  const IMGBOX = document.createElement('div');
  const IMG = document.createElement('img');
  element.innerHTML = ``;
  IMGBOX.appendChild(IMG);
  element.appendChild(IMGBOX);
}
