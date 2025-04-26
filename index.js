let btn = document.querySelector(".show_button");
let modal = document.querySelector(".modal");
let removemodal = document.querySelector(".modal h2 span");

let toggle_button = document.querySelector(".toggle_button");

let showpasswordBtn = document.querySelector(".password_button");
let password = document.querySelector(".password");

btn.addEventListener("click", () => {
  modal.classList.add("showmodal");
});
removemodal.addEventListener("click", () => {
  modal.classList.remove("showmodal");
});
toggle_button.addEventListener("click", () => {
  modal.classList.toggle("showmodal");
});
showpasswordBtn.addEventListener("click", () => {
  if ((showpasswordBtn.innerHTML == "Show Password")) {
    password.type = "text";
    showpasswordBtn.innerHTML = "Hide Password";
  }else{
    password.type = "password";
    showpasswordBtn.innerHTML = "Show Password";
  }
});

//using function
// function showpasswords() {
//   if ((showpasswordBtn.innerText == "Show Password")) {
//     password.type = "text";
//     showpasswordBtn.innerHTML = "Hide Password";
//   } else {
//     password.type = "password";
//     showpasswordBtn.innerHTML = "Show Password";
//   }
// }
