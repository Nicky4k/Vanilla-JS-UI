import { stateCapitals } from "./data/JSON-data.js";

let filteredStates = [];

const searchBox = document.getElementById("input__box");
const searchResults = document.querySelector(".figure__searches");

searchBox.addEventListener("input", fetchStates);

function fetchStates(e) {
  filteredStates = stateCapitals.filter((state) =>
    state.name.toLowerCase().startsWith(e.target.value)
  );

  if (!e.value) searchResults.innerHTML = ``;

  if (e.target.value) {
    filteredStates.forEach((state) => {
      const newNode = document.createElement("div");

      const el = `<article id=${state.abbr} class="article__searchResults">
      <figure>
          <h2>${state.abbr}</h2>
      </figure>
      <div>
          <h4>${state.name}</h4>
          <h3>${state.capital}</h3>
      </div>
  </article>`;
      newNode.innerHTML = el;
      searchResults.appendChild(newNode);
    });
  }
}
