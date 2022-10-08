const inputRef = document.querySelector("#name-input");
const textRaf = document.querySelector("#name-output");

inputRef.addEventListener("input", onFormInput);
function onFormInput(event) {
  textRaf.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    output.textContent = "Anonymous";
  }
}
