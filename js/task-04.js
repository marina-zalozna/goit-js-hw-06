let counterValue = 0;

const displayCounter = document.querySelector("#value");
const btnSubtraction = document.querySelector(
  'button[data-action="decrement"]'
);
const btnAddition = document.querySelector('button[data-action="increment"]');

btnSubtraction.addEventListener("click", () => {
  counterValue--;
  displayCounter.textContent = counterValue;
});

btnAddition.addEventListener("click", () => {
  counterValue++;
  displayCounter.textContent = counterValue;
});
