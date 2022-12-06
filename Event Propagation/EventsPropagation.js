const divEl = document.querySelector(".div__container");
const formEl = document.querySelector(".form__container");
const btnEl = document.querySelector(".btn__click");

divEl.addEventListener("click", alertFunc, {
  capture: true,
});
formEl.addEventListener("click", alertFunc, {
  capture: true,
});
btnEl.addEventListener("click", alertFunc, {
  capture: true,
});

function alertFunc(e) {
  e.stopPropagation();
  alert(
    "currentTarget: " +
      e.currentTarget.tagName +
      ", target: " +
      e.target.tagName +
      ", this: " +
      this.tagName
  );
}
