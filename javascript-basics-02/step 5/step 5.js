const image = document.querySelector(`#image${i}`);
for (let i = 1; i <= 5; i++) {
    image.addEventListener("mouseover", function (event) {
      event.target.src = `images/image${i}_hover.jpg`;
    });

  }
  