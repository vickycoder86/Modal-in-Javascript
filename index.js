let btn = document.querySelector(".show_button");
let modal = document.querySelector(".modal");
let removemodal = document.querySelector(".modal h2 span");

let toggle_button = document.querySelector(".toggle_button");

btn.addEventListener("click", () => {
  modal.classList.add("showmodal");
});
removemodal.addEventListener("click", () => {
  modal.classList.remove("showmodal");
});
toggle_button.addEventListener("click", () => {
  modal.classList.toggle("showmodal");
});
