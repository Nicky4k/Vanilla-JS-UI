const hoursEl = document.querySelector(".clock__hours");
const minutesEl = document.querySelector(".clock__minutes");
const secondsEl = document.querySelector(".clock__seconds");
const periodEl = document.querySelector(".clock__period");

function updateTime() {
  prettierTime = (t) => {
    return t.toString().length === 2 ? t : `0${t}`;
  };
  const fetchDate = new Date();
  let hours = fetchDate.getHours();
  const minutes = fetchDate.getMinutes();
  const seconds = fetchDate.getSeconds();
  let period = "AM";

  if (hours > 12) {
    period = "PM";
    hours -= 12;
  }

  hoursEl.textContent = prettierTime(hours);
  minutesEl.textContent = prettierTime(minutes);
  secondsEl.textContent = prettierTime(seconds);
  periodEl.textContent = period;
}
updateTime();
setInterval(updateTime, 1000);
