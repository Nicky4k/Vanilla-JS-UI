const displayEl = document.querySelector(".calculator__display");
const plusEl = document.querySelector(".plus");
const minusEl = document.querySelector(".minus");
const multiEl = document.querySelector(".multi");
const divideEl = document.querySelector(".divide");
const oneEl = document.querySelector(".one");
const twoWl = document.querySelector(".two");
const threeEL = document.querySelector(".three");
const fourEl = document.querySelector(".four");
const fiveEl = document.querySelector(".five");
const sixEl = document.querySelector(".six");
const sevenEl = document.querySelector(".seven");
const eightEl = document.querySelector(".eight");
const nineEl = document.querySelector(".nine");
const zeroEl = document.querySelector(".zero");
const decimalEl = document.querySelector(".plus");
const clearEl = document.querySelector(".clear");
const equalEl = document.querySelector(".equal");
const keysEl = document.querySelector(".calculator__keys");

let expressionString = [];
let numberStore = [];
const pattern = /[0-9|.]/g;
let operatorFn = [];

const calc = {
  total: 0,
  add(num) {
    this.total += num;
    return this;
  },
  sub(num) {
    this.total -= num;
    return this;
  },
  multi(num) {
    this.total *= num;
    return this;
  },
  div(num) {
    this.total /= num;
    return this;
  },
};

clearEl.addEventListener("click", () => {
  expressionString = numberStore = operatorFn = [];
  calc.total = 0;
  displayEl.textContent = 0;
});

keysEl.addEventListener("click", (e) => {
  let val = e.target.innerText;
  if (numberStore.length > 8) return;
  if (numberStore.includes(".") && val === ".") return;
  if (numberStore[0] === "0" && val === "0" && !numberStore.includes("."))
    return;
  if (val.match(pattern)) {
    numberStore.push(val);
    displayEl.textContent = numberStore.join("");
  }

  if (["+", "-", "÷", "×"].includes(expressionString.at(-1))) return;

  if (["+", "-", "÷", "×"].includes(val)) {
    expressionString.push(numberStore.join(""));
    if (val === "+") operatorFn.push("add");
    else if (val === "-") operatorFn.push("sub");
    else if (val === "×") operatorFn.push("multi");
    else if (val === "÷") operatorFn.push("div");
    displayEl.textContent = val;
    numberStore = [];
  }

  if (val === "=" && expressionString.length >= 1) {
    expressionString.push(numberStore.join(""));
    if (!calc.total) calc.total = +expressionString[0];
    calc[operatorFn.at(-1)](+expressionString.at(-1));
    displayEl.textContent = parseFloat(calc.total.toFixed(2));
  }
});
