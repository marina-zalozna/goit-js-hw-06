const liRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${liRef.length}`);

liRef.forEach((element) => {
  const h2Ref = element.querySelector("h2").textContent;
  const ulRef = element.querySelectorAll("li");
  console.log(`Category: ${h2Ref}`);
  console.log(`Elements: ${ulRef.length}`);
});
