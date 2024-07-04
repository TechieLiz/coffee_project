const sideBar = document.querySelector(".sideBar");
const btnEl = document.querySelector(".btnMenu");
const close = document.querySelector(".xbtn");
const btnCont = document.querySelector(".navBtns");
const sideBarLinks = document.querySelectorAll(".sideBarNav");

btnEl.addEventListener("click", () => {
  btnCont.classList.add("sideBarOpen");
  sideBar.classList.add("openSideBar");
});

close.addEventListener("click", () => {
  closeSideBar();
});
sideBarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeSideBar();
  });
});
function closeSideBar() {
  btnCont.classList.remove("sideBarOpen");
  sideBar.classList.remove("openSideBar");
}
// Hide sidebar

// close.addEventListener("click", () => {
//   sideBar.style.display = "none";
//   close.style.display = "none";
//   menu.style.display = "flex";
// });
// // Hide Navbar and sidebar
// newNav.addEventListener("click", () => {
//   sideBar.style.display = "none";
//   close.style.display = "none";
//   menu.style.display = "flex";
// });
