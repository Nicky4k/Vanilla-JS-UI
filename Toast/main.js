const toast = document.querySelector(".toast__container");

const positionEl = document.getElementById("position");
const statusEl = document.getElementById("status");

const buttonEl = document.querySelector(".btn__styles");

buttonEl.addEventListener("click", showToast);

function showToast(e) {
  switch (positionEl.value) {
    case "topLeft":
      {
        toast.style.left = 0;
        toast.style.top = 0;
        toast.style.removeProperty("bottom");
        toast.style.removeProperty("right");
      }
      break;
    case "topRight":
      {
        toast.style.right = 0;
        toast.style.top = 0;
        toast.style.removeProperty("left");
        toast.style.removeProperty("bottom");
      }
      break;
    case "bottomLeft":
      {
        toast.style.left = 0;
        toast.style.bottom = 0;
        toast.style.removeProperty("right");
        toast.style.removeProperty("top");
      }
      break;
    case "bottomRight":
      {
        toast.style.right = 0;
        toast.style.bottom = 0;
        toast.style.removeProperty("left");
        toast.style.removeProperty("top");
      }
      break;
  }

  switch (statusEl.value) {
    case "warning":
      {
        toast.innerText = "Warning";
        toast.style.backgroundColor = "Yellow";
      }
      break;
    case "success":
      {
        toast.innerText = "Success";
        toast.style.backgroundColor = "Green";
      }
      break;
    case "failed":
      {
        toast.innerText = "Failed";
        toast.style.backgroundColor = "Red";
      }
      break;
    case "loading":
      {
        toast.innerText = "Loading";
        toast.style.backgroundColor = "White";
      }
      break;
  }

  clearInterval();

  toast.classList.toggle("hidden");
  setTimeout(() => {
    toast.classList.toggle("hidden");
  }, 2000);
}
