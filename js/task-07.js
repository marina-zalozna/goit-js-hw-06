const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

inputRef.addEventListener("input", (elem) => {
  textRef.style.fontSize = `${elem.target.value}px`;
});
