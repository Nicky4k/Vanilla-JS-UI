const inputBox = document.querySelector(".inputBox__newtask");

inputBox.addEventListener("keyup", (e) => {
  if (e.target.value && e.key === "Enter") {
    const task = {
      title: e.target.value,
      timeCreated: Date.now(),
    };
    console.log(task);
  }
});
