const btnHamburger = document.getElementById("btnHamburger");
const navMenu = document.getElementById("navMenu");

btnHamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  btnHamburger.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  if (
    !navMenu.contains(e.target) &&
    !btnHamburger.contains(e.target) &&
    navMenu.classList.contains("active")
  ) {
    navMenu.classList.remove("active");
    btnHamburger.classList.remove("open");
  }
});
