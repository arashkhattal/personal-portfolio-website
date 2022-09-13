const navTogle = document.querySelector(".nav-toggle");
const navlink = document.querySelectorAll(".nav__link");

navTogle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});
navlink.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});
