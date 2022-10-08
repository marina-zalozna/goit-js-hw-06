function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector(".change-color");
const spanRef = document.querySelector(".color");
const bodyRef = document.querySelector("body");

btnChangeColor.addEventListener("click", (elem) => {
  let colorChange = getRandomHexColor();
  bodyRef.style.backgroundColor = colorChange;
  spanRef.textContent = colorChange;
});
