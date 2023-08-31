const image = document.querySelectorAll("img");
for (let i = 0; i < image.length; i++) {
    image[i].addEventListener("mouseover", function (event) {
      event.target.src = `images/image${i+1}_2.jpg`;
    });

  }
  