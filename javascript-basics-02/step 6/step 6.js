for (let i = 1; i <= 5; i++) {
    const image = document.querySelector(`#image${i}`);

    image.addEventListener("mouseover", function (event) {
        event.target.src = `images/image${i}_hover.jpg`;
    });

    image.addEventListener("mouseout", function (event) {
        event.target.src = `images/image${i}.jpg`;
    });
}