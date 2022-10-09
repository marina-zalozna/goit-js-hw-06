const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imgRef = document.querySelector(".gallery");

const createElement = (image) => {
  return `<li><img src = "${image.url}" alt = "${image.alt}"  width = "250" height = "200" /></li>`;
};
const markUp = images.map(createElement).join("");

imgRef.insertAdjacentHTML("beforeend", markUp);

imgRef.style.display = "flex";
imgRef.style.listStyle = "none";
imgRef.style.gap = "20px";
imgRef.style.justifyContent = "center";
