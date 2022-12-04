const nextBtn = document.querySelector(".btn__moveRight");
const prevBtn = document.querySelector(".btn__moveLeft");
const imageHolder = document.getElementsByTagName("img");
const imageLegend = document.getElementsByTagName("p");

let carouselIndex = 1;
const noOfImg = 4;
function nextImg() {
  if (carouselIndex === noOfImg) {
    carouselIndex = 1;
  } else {
    carouselIndex++;
  }
  imagePicker();
}
function prevImg() {
  if (carouselIndex === 1) {
    carouselIndex = noOfImg;
  } else {
    carouselIndex--;
  }
  imagePicker();
}

function initButtons() {
  nextBtn.addEventListener("click", nextImg);
  prevBtn.addEventListener("click", prevImg);
}

initButtons();

function imagePicker() {
  for (let i = 0; i < noOfImg; i++) {
    if (i === carouselIndex - 1) {
      imageHolder[i].classList.remove("hidden");
      imageLegend[i].classList.remove("hidden");
    } else {
      imageHolder[i].classList.add("hidden");
      imageLegend[i].classList.add("hidden");
    }
  }
}
imagePicker();
