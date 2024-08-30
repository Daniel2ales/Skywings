const menuBtn = document.getElementById("menu-btn");
const navLinks= document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click",(e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click",(e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

/*--SCROLL REVEAL SETUP--*/
const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};
/*--SCROLL REVEAL HEADER--*/
ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns img", {
  ...scrollRevealOption,
  delay: 1500,
});
/*--SCROLL REVEA DESTINATIONL--*/
ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});
/*--SCROLL REVEAL SHOWCASE--*/
ScrollReveal().reveal(".showcase__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".showcase__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".showcase__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".showcase__btn", {
  ...scrollRevealOption,
  delay: 1500,
});
/*--SCROLL REVEAL BANNER--*/
ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});
/*--SCROLL REVEAL DISCOVER--*/
ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOption,
  interval: 500,
});

/*--SWIPER--*/
const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
});