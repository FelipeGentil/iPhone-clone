const buttons = document.querySelectorAll(".image-picker__item");
const image = document.querySelector(".main-content__product-image");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const button = e.currentTarget; 
    const color = button.getAttribute("data-color");

    buttons.forEach((b) =>
      b.querySelector(".image-picker__color").classList.remove("image-picker__color--selected")
    );

    button.querySelector(".image-picker__color").classList.add("image-picker__color--selected");

    image.classList.add("changing");
    image.setAttribute("src", `img/iphone_${color}.jpg`);
    setTimeout(() => {
      image.classList.remove("changing");
    }, 200);
  });
});
