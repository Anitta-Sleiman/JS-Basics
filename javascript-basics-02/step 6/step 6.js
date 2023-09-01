const images = document.querySelectorAll("img");

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("mouseover", function (event) {
    event.target.src = `images/image${i + 1}_2.jpg`;
  });

  images[i].addEventListener("mouseout", function (event) {
    event.target.src = `images/image${i + 1}.jpg`;
  });
};