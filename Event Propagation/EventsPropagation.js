const divEl = document.querySelector(".div__container");
const formEl = document.querySelector(".form__container");
const btnEl = document.querySelector(".btn__click");

divEl.addEventListener("click", alertFunc);
formEl.addEventListener("click", alertFunc);
btnEl.addEventListener("click", alertFunc);

function alertFunc(e) {
  alert(
    "currentTarget " +
      e.currentTarget.tagName +
      " target " +
      e.target.tagName +
      " this " +
      this.tagName
  );
}
