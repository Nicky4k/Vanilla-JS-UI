const divEl = document.querySelector(".div__container");
const formEl = document.querySelector(".form__container");
const btnEl = document.querySelector(".btn__click");

divEl.addEventListener("click", (e) => {
  prompt("Div clicked");
});
formEl.addEventListener("click", (e) => {
  prompt("Form clicked");
});
btnEl.addEventListener("click", (e) => {
  prompt("Button clicked");
});
