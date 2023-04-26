window.addEventListener("scroll", function () {
  let element01 = document.querySelector(".logo");
  let Size01 = 175 - window.scrollY / 3;
  let element02 = document.querySelector(".brand");
  let Size02 = window.scrollY / 2.75;
  let element03 = document.querySelector(".header_div");
  let opac = 0.5 + window.scrollY / 60;
  element03.style.backgroundColor = `rgba(205, 205, 240, ${opac})`;
  let h = 250 - window.scrollY / 2.25;
  if (window.scrollY <= 225) {
    element01.style.height = Size01 + "px";
    element01.style.width = Size01 + "px";
    element02.style.fontSize = Size02 + "px";
    element03.style.height = h + "px";
  } else {
    element01.style.height = "100px";
    element01.style.width = "100px";
    element02.style.fontSize = "81.8181px";
    element03.style.height = "150px";
  }
});
