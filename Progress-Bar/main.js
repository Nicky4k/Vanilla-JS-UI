const progressEl = document.querySelector(".input__box");
const progressBar = document.querySelector(".two");

progressEl.addEventListener("keypress", (e) => {
  if (progressEl.value < 0 || progressEl.value > 100) {
    progressEl.classList.add("error__styles");
    return;
  }
  if (progressEl.value && e.key === "Enter") {
    progressEl.classList.remove("error__styles");
    document.activeElement.blur();
    progressBar.style.width = `${(progressEl.value / 10) * 2}rem`;
    progressBar.innerHTML = progressEl.value + "%";
    console.log(progressEl.value);
  }
  if (progressEl.value >= 0 || progressEl.value <= 100) {
    progressEl.classList.remove("error__styles");
  }
});
