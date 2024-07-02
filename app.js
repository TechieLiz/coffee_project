const sideBar = document.querySelector(".sideBar");
const btnEl = document.querySelector(".btnMenu");
const close = document.querySelector(".xbtn");
const menu = document.querySelector(".ham");
const home = document.getElementById("home");
const newNav = document.querySelector(".newNav");
btnEl.addEventListener("click", () => {
  sideBar.style.display = "flex";

  close.style.display = "flex";
  menu.style.display = "none";
});

// Hide sidebar

close.addEventListener("click", () => {
  sideBar.style.display = "none";
  close.style.display = "none";
  menu.style.display = "flex";
});

newNav.addEventListener("click", () => {
  sideBar.style.display = "none";
  close.style.display = "none";
  menu.style.display = "flex";
});
