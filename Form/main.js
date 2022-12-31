const formEl = document.getElementById("form__box");
const buttonEl = document.querySelector(".submit__button");

let firstName;
let lastName;
let email;
let password;
let date;

formEl.addEventListener("input", (e) => {
  switch (e.target.id) {
    case "firstName":
      firstName = e.target.value;
      break;
    case "lastName":
      lastName = e.target.value;
      break;
    case "email":
      email = e.target.value;
      break;
    case "password":
      password = e.target.value;
      break;
    case "date":
      date = e.target.value;
      break;
  }
});

buttonEl.addEventListener("click", (e) => {
  e.preventDefault();

  const inputElements = document.getElementsByTagName("input");
  for (let i = 0; i < 5; i++) {
    if (inputElements[i].value) {
      inputElements[i].style.backgroundColor = "lightgreen";
    } else {
      inputElements[i].style.backgroundColor = "rgb(187, 80, 80)";
    }
  }
});
