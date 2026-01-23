const images = [
  "https://raw.githubusercontent.com/meglibro/meglibro.github.io/main/1.png",
  "https://raw.githubusercontent.com/meglibro/meglibro.github.io/main/2.png",
  "https://raw.githubusercontent.com/meglibro/meglibro.github.io/main/3.png",
  "https://raw.githubusercontent.com/meglibro/meglibro.github.io/main/4.png",
  "https://raw.githubusercontent.com/meglibro/meglibro.github.io/main/5.png",
  "https://raw.githubusercontent.com/meglibro/meglibro.github.io/main/6.png",
  "https://raw.githubusercontent.com/meglibro/meglibro.github.io/main/7.png",
  "https://raw.githubusercontent.com/meglibro/meglibro.github.io/main/8.png"
];

let index = 0;

const img = document.getElementById("image");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

img.src = images[index];

prev.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  img.src = images[index];
});

next.addEventListener("click", () => {
  index = (index + 1) % images.length;
  img.src = images[index];
});
