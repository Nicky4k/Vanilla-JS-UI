import { playersArray } from "./players.js";
const inputEl = document.querySelector(".section__search-input");
const searchContainer = document.querySelector(".search__results");
inputEl.addEventListener("input", inputFunc);

function inputFunc(e) {
  const input = e.target.value.trim().toLocaleLowerCase();

  if (!e.value) searchContainer.innerHTML = ``;

  if (input)
    playersArray.forEach((player) => {
      if (player.toLocaleLowerCase().includes(input)) {
        let node = document.createElement("div");
        node.innerHTML = player;
        searchContainer.appendChild(node);
      }
    });
}

searchContainer.addEventListener("click", setPlaceholder);

function setPlaceholder(e) {
  inputEl.value = e.target.innerHTML;
  searchContainer.innerHTML = ``;
}
