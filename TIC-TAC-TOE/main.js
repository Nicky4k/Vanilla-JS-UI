let tick = 0;
let clicks = 0;

let boxes = [
  ["one", "two", "three"],
  ["four", "five", "six"],
  ["seven", "eight", "nine"],
];

const oneEl = document.querySelector(".one");
const twoEl = document.querySelector(".two");
const threeEl = document.querySelector(".three");
const fourEl = document.querySelector(".four");
const fiveEl = document.querySelector(".five");
const sixEl = document.querySelector(".six");
const sevenEl = document.querySelector(".seven");
const eightEl = document.querySelector(".eight");
const nineEl = document.querySelector(".nine");
const buttonEl = document.querySelectorAll(".nav__btn");
const [startBtn, restartBtn] = [...buttonEl];

startBtn.addEventListener("click", initGame);
restartBtn.addEventListener("click", initGame);

function initGame() {
  const boxesEl = document.querySelectorAll(".gridBox");
  boxesEl.forEach((box) => {
    box.innerHTML = ``;
    box.classList.remove("winner__styles");
  });
  tick = 0;
  boxes = [
    ["one", "two", "three"],
    ["four", "five", "six"],
    ["seven", "eight", "nine"],
  ];
}

const figureEl = document.querySelector(".figure");
figureEl.addEventListener("click", (e) => {
  const targetNode = e.target.className.split(" ")[1];
  const currNode = document.querySelector(`.${targetNode}`);
  if (currNode.innerHTML) return;
  currNode.innerHTML = tick;
  clicks++;
  findWinner(targetNode);
  tick = tick === 0 ? "X" : 0;
});

function findWinner(targetNode) {
  boxes.forEach((box, i) => {
    box.forEach((b, j) => {
      if (b === targetNode) {
        boxes[i][j] = tick;
      }
    });
  });

  boxes.forEach((box, i) => {
    if (box[0] === tick && box[1] === tick && box[2] === tick) {
      console.log(tick, "win");
      if (i == 0) {
        oneEl.classList.add("winner__styles");
        twoEl.classList.add("winner__styles");
        threeEl.classList.add("winner__styles");
      }
      if (i === 1) {
        fourEl.classList.add("winner__styles");
        fiveEl.classList.add("winner__styles");
        sixEl.classList.add("winner__styles");
      }
      if (i === 2) {
        sevenEl.classList.add("winner__styles");
        eightEl.classList.add("winner__styles");
        nineEl.classList.add("winner__styles");
      }
    }
  });

  for (let i = 0; i < 3; i++) {
    if (boxes[0][i] === tick && boxes[1][i] === tick && boxes[2][i] === tick) {
      console.log(tick, "wins");
      if (i === 0) {
        oneEl.classList.add("winner__styles");
        fourEl.classList.add("winner__styles");
        sevenEl.classList.add("winner__styles");
      }
      if (i === 1) {
        twoEl.classList.add("winner__styles");
        fiveEl.classList.add("winner__styles");
        eightEl.classList.add("winner__styles");
      }
      if (i === 2) {
        threeEl.classList.add("winner__styles");
        sixEl.classList.add("winner__styles");
        nineEl.classList.add("winner__styles");
      }
    }
  }

  if (boxes[0][0] === tick && boxes[1][1] === tick && boxes[2][2] === tick) {
    console.log(tick, "wins");
    oneEl.classList.add("winner__styles");
    fiveEl.classList.add("winner__styles");
    nineEl.classList.add("winner__styles");
  }

  if (boxes[0][2] === tick && boxes[1][1] === tick && boxes[2][0] === tick) {
    console.log(tick, "wins");
    threeEl.classList.add("winner__styles");
    fiveEl.classList.add("winner__styles");
    sevenEl.classList.add("winner__styles");
  }

  if (clicks === 9) {
    const els = document.querySelectorAll(".gridBox");
    els.forEach((el) => el.classList.add("draw__styles"));
  }
}
