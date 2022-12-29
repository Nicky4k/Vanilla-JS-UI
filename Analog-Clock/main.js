const minutesEl = document.querySelector(".minutes__hand");
const hoursEl = document.querySelector(".hour__hand");
const secondsEl = document.querySelector(".seconds__hand");
const currentTimeEl = document.querySelector(".curr__time");

setInterval(() => {
  showTime();
}, 1000);

function padTime(t) {
  return t.toString().length > 1 ? t : "0" + t;
}

function showTime() {
  let hours = new Date().getHours();
  let mins = new Date().getMinutes();
  let seconds = new Date().getSeconds();

  hours = hours > 12 ? hours - 12 : hours;
  currentTimeEl.innerHTML = `${padTime(hours)} : ${padTime(mins)} : ${padTime(
    seconds
  )}`;
  seconds = seconds * 6 - mins * 6;

  hoursEl.style.transform = `rotate(calc(-90deg + ${hours * 30}deg))`;
  minutesEl.style.transform = `rotate(${mins * 6 - hours * 30}deg)`;
  secondsEl.style.transform = `rotate(${seconds}deg)`;
}
showTime();
