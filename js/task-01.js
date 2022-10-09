const liRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${liRef.length}`);

liRef.forEach((elem) => {
  const h2Ref = elem.firstElementChild.textContent;
  const ulRef = elem.lastElementChild.children.length;
  console.log(`Category: ${h2Ref}`);
  console.log(`Elements: ${ulRef}`);
});
