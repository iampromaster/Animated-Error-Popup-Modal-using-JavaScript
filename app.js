let showBtn = document.querySelector(".show-btn");
let popup = document.querySelector(".popup");
let closeBtn = document.querySelector(".close-btn")

showBtn.addEventListener("click", () => {
  popup.classList.add("show");
})

closeBtn.addEventListener("click", () => {
  popup.classList.remove("show");
});
