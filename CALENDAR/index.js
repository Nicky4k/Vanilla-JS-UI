let nav = 0;
let clicked = null;

const calendar = document.getElementById("calendar");

const currentMonth = document.getElementById("nav__currentMonthYear");

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function init() {
  calendar.innerHTML = ``;
  const date = new Date();

  const dd = date.getDate();
  const mm = date.getMonth();
  const yyyy = date.getFullYear();

  // Calculating total days in a month(yyyy is year, mm is next month, 0 is last date of prevs month as 1 is 1st date of month mm and 0 is for prevs month last date)
  const daysInMonth = new Date(yyyy, mm + 1 + nav, 0).getDate();

  const firstDayOfMonth = new Date(yyyy, mm + nav, 1)
    .toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    })
    .split(",")[0];

  const paddingDays = weekdays.indexOf(firstDayOfMonth);

  // displaying month
  currentMonth.innerText = `${new Date(yyyy, mm + nav, 1).toLocaleString(
    "en-US",
    {
      month: "long",
      year: "numeric",
    }
  )} `;

  for (let i = 1; i <= paddingDays + daysInMonth; i++) {
    const daySquare = document.createElement("div");
    daySquare.classList.add("day");

    // setting id
    const divID =
      i -
      paddingDays +
      new Date(yyyy, mm + nav, 1).toLocaleString("en-US", {
        month: "long",
        year: "numeric",
      });
    daySquare.setAttribute("id", divID);

    if (i > paddingDays) {
      daySquare.innerHTML = `<h3>${i - paddingDays}</h3>`;

      if (i % 7 === 1) {
        daySquare.classList.add("sunday");
      }
      // current date highlight bubble
      if (
        new Date(yyyy, mm + nav, i - paddingDays).toDateString() ===
        new Date().toDateString()
      ) {
        daySquare.classList.add("today__Date");
      }
    } else {
      daySquare.classList.add("padding");
    }
    calendar.appendChild(daySquare);
  }
}

function initButtons() {
  document.getElementById("prevs__btn").addEventListener("click", () => {
    nav--;
    init();
  });
  document.getElementById("next__btn").addEventListener("click", () => {
    nav++;
    init();
  });
  document.getElementById("today__btn").addEventListener("click", () => {
    nav = 0;
    init();
  });
}

initButtons();
init();

// function createTask() {
//   const divs = document.querySelectorAll(".day");
//   divs.forEach((div) =>
//     div.addEventListener("click", () => {
//       const task = document.createElement("div");
//       task.classList.add("calendar__task");
//       const taskText = prompt("Enter your task");
//       taskText &&
//         (task.innerText =
//           taskText.length > 14 ? taskText.slice(0, 14) + "..." : taskText);
//       div.appendChild(task);
//     })
//   );
// }

// delegation
function createTask() {
  calendar.addEventListener("click", (e) => {
    console.log(e);
    if (e.target.nodeName === "DIV") {
      const task = document.createElement("div");
      task.classList.add("calendar__task");
      const taskText = prompt("Enter your task");
      taskText &&
        (task.innerText =
          taskText.length > 14 ? taskText.slice(0, 14) + "..." : taskText) &&
        e.target.appendChild(task);
    }
  });
}
createTask();
