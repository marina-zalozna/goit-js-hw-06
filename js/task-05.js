const inputRef = document.querySelector("#name-input");
const textRef = document.querySelector("#name-output");

inputRef.addEventListener("input", onFormInput);
function onFormInput(event) {
  textRef.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    textRef.textContent = "Anonymous";
  }
}
