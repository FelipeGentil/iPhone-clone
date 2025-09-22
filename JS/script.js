const buttons = document.querySelectorAll(".image-picker__item");
const image = document.querySelector(".main-content__product-image");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const button = e.currentTarget; // garante que sempre seja a LI clicada
    const color = button.getAttribute("data-color");

    // Remove seleção anterior
    buttons.forEach((b) =>
      b.querySelector(".image-picker__color").classList.remove("image-picker__color--selected")
    );

    // Adiciona seleção na cor clicada
    button.querySelector(".image-picker__color").classList.add("image-picker__color--selected");

    // Anima troca de imagem
    image.classList.add("changing");
    image.setAttribute("src", `img/iphone_${color}.jpg`);
    setTimeout(() => {
      image.classList.remove("changing");
    }, 200);
  });
});
