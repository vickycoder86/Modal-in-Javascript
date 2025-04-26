let btn = document.querySelector(".show_button");
let modal = document.querySelector(".modal");
let removemodal = document.querySelector(".modal h2 span");

btn.addEventListener("click", () => {
  modal.classList.add("showmodal");
});
removemodal.addEventListener("click", () => {
  modal.classList.remove("showmodal");
});
