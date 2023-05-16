let flag = true;

function expandFunction() {
  const height_element = document.querySelector("#allDetails");
  const text_element = document.querySelector("#showDetails > :nth-child(1)");
  const arrow_element = document.querySelector("#arrow");
  if (flag) {
    height_element.style.height = "144px";
    text_element.innerHTML = "Hide Account Details";
    arrow_element.style.transition = "transform 0.5s ease-in-out";
    arrow_element.style.transform = "rotate(-180deg)";
    flag = false;
  } else {
    height_element.style.height = "0px";
    text_element.innerHTML = "Show Account Details";
    arrow_element.style.transition = "transform 0.5s ease-in-out";
    arrow_element.style.transform = "rotate(0deg)";
    flag = true;
  }
}

const transactButton = document.getElementById("transact_button");
const closeButton = document.getElementById("close_button");
const asideElement = document.getElementById("aside_element");
const midElement = document.getElementById("mid_layer");

transactButton.addEventListener("click", () => {
  console.log(asideElement.style.left);
  asideElement.style.left = "0px";
  midElement.style.zIndex = "1";
});

closeButton.addEventListener("click", () => {
  midElement.style.zIndex = "-1";
  asideElement.style.left = "-500px";
});

midElement.addEventListener("click", () => {
  asideElement.style.left = "-500px";
  midElement.style.zIndex = "-1";
});
