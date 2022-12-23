import { playersArray } from "./players.js";
const inputEl = document.querySelector(".section__search-input");
const searchContainer = document.querySelector(".search__results");
const searchHistoryContainer = document.querySelector(".search__history");
const sectionEl = document.querySelector(".section__mainContainer");

let typeTime;
if (JSON.parse(localStorage.getItem("iplSearchHistory"))) {
  console.log("Local Storage Found");
} else {
  localStorage.setItem("iplSearchHistory", JSON.stringify([]));
}

sectionEl.addEventListener("click", (e) => {
  if (e.target.nodeName === "SECTION") {
    searchHistoryContainer.classList.add("hidden");
    searchContainer.classList.add("hidden");
  }
});
inputEl.addEventListener("input", inputFunc);
inputEl.addEventListener("click", () => {
  showHistory();
  searchHistoryContainer.classList.remove("hidden");
});

function inputFunc(e) {
  typeTime = Date.now();

  setTimeout(() => {
    if (Date.now() > typeTime + 1000) {
      const input = e.target.value.trim().toLocaleLowerCase();

      if (!e.value) {
        searchContainer.innerHTML = ``;
        searchContainer.classList.add("hidden");
        searchHistoryContainer.classList.remove("hidden");
      }

      if (input)
        playersArray.forEach((player) => {
          if (player.toLocaleLowerCase().includes(input)) {
            let node = document.createElement("div");
            node.innerHTML = player;
            searchHistoryContainer.classList.add("hidden");
            searchContainer.classList.remove("hidden");
            searchContainer.appendChild(node);
          }
        });
    }
  }, 1000);
}

searchContainer.addEventListener("click", setPlaceholder);

function setPlaceholder(e) {
  if (e.target.classList.value !== "search__results") {
    searchContainer.classList.add("hidden");
    const playerName = e.target.innerHTML;

    // save in local storage
    localStorageSave(playerName);

    inputEl.value = playerName;
    searchContainer.innerHTML = ``;
  }
}

function showHistory() {
  searchHistoryContainer.innerHTML = ``;
  searchHistoryContainer.classList.remove("hidden");
  const searches = JSON.parse(localStorage.getItem("iplSearchHistory"));
  if (!searches) return;
  searches.forEach((history) => {
    const node = document.createElement("div");
    node.innerHTML = `<div class='history__container'>
                        <img class='history__logo'
                          src="https://uxwing.com/wp-content/themes/uxwing/download/computers-mobile-hardware/history-icon.png"
                          alt="history-logo"
                        /><span class='name__span'>${history}</span>
                      </div>`;
    searchHistoryContainer.appendChild(node);
  });
}

searchHistoryContainer.addEventListener("click", setplaceholderFromHistory);

function setplaceholderFromHistory(e) {
  if (e.target.classList.value === "history__logo") {
    const playerName = e.target.nextSibling.innerText;
    searchHistoryContainer.classList.add("hidden");
    inputEl.value = playerName;
  }
  if (e.target.classList.value === "history__container") {
    const playerName = e.target.innerText;
    searchHistoryContainer.classList.add("hidden");
    inputEl.value = playerName;
  }
}

function localStorageSave(playerName) {
  const searches = JSON.parse(localStorage.getItem("iplSearchHistory"));
  if (!searches.includes(playerName)) {
    searches.unshift(playerName);
    localStorage.setItem("iplSearchHistory", JSON.stringify(searches));
  }
}
