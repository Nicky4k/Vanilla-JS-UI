function clickEffect(e) {
  var d = document.createElement("div");
  d.className = "clickEffect";
  d.style.top = e.clientY + "px";
  d.style.left = e.clientX + "px";
  document.body.appendChild(d);
  d.addEventListener(
    "animationend",
    function () {
      d.parentElement.removeChild(d);
    }.bind(this)
  );
}
document.addEventListener("click", clickEffect);

const parentEl = document.querySelector(".section__container");

parentEl.addEventListener("click", function (e) {
  e.target.nodeName === "SPAN"
    ? console.log(e.target.innerText, e.target.className.split(" ")[1])
    : "";
});
