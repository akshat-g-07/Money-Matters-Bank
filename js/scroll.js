const element1 = document.querySelector(".header_div");
const element2 = document.querySelector(".logo_brand");
const element3 = document.querySelector(".brand");
const element4 = document.querySelector(".nav_bar");
const element5 = document.querySelector(".nav_bar_ul");
const element6 = document.querySelector(".button_class");
const element7 = document.querySelector(".logo");

const bottomel = document.querySelector(".brand_intro");
window.addEventListener("scroll", () => {
  if (window.scrollY > 225) {
    console.log(window.scrollY);
    console.log(element1.offsetHeight);
    element1.classList.add("active");
    element2.classList.add("active");
    element3.classList.add("active");
    element4.classList.add("active");
    element5.classList.add("active");
    element6.classList.add("active");
    element7.classList.add("active");
  } else {
    element1.classList.remove("active");
    element2.classList.remove("active");
    element3.classList.remove("active");
    element4.classList.remove("active");
    element5.classList.remove("active");
    element6.classList.remove("active");
    element7.classList.remove("active");
  }
});
