const time_el = document.querySelector(".stopwatch__digital");
const start_btn = document.querySelector(".btn__start");
const stop_btn = document.querySelector(".btn__stop");
const reset_btn = document.querySelector(".btn__reset");

let startState = false;
let stopState = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

//functions
function updateStopwatchControls() {
  !startState &&
    (stop_btn.style.cursor = "not-allowed") &&
    (reset_btn.style.cursor = "not-allowed") &&
    (start_btn.style.cursor = "pointer");

  startState &&
    (start_btn.style.cursor = "not-allowed") &&
    (stop_btn.style.cursor = "pointer") &&
    (reset_btn.style.cursor = "pointer");

  stopState &&
    (stop_btn.style.cursor = "not-allowed") &&
    (reset_btn.style.cursor = "pointer");
}
updateStopwatchControls();

function timePrettier(time) {
  return time.toString().length === 2 ? time : `0${time}`;
}

//event listeners
start_btn.addEventListener("click", function () {
  startState = !startState;
  stopState = false;
  updateStopwatchControls();
});

stop_btn.addEventListener("click", () => {
  stopState = true;
  startState = !startState;
  updateStopwatchControls();
});

reset_btn.addEventListener("click", () => {
  startState = false;
  stopState = false;
  seconds = minutes = hours = 0;
  time_el.textContent = "00:00:00";
  updateStopwatchControls();
});

// logic
const watchDynamics = setInterval(() => {
  if (!startState) return;
  ++seconds;
  if (seconds === 60) {
    seconds = 0;
    ++minutes;
  }
  if (minutes === 60) {
    minutes = 0;
    ++hours;
  }
  if (hours === 60) {
    hours = 0;
  }
  time_el.textContent = `${timePrettier(hours)}:${timePrettier(
    minutes
  )}:${timePrettier(seconds)}`;
}, 1000);
