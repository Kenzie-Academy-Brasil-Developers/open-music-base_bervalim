import { renderCardAlbuns } from "./index.js";

export const filterByTypeSong = (categoryArray, productArray) => {
  const genreButtons = document.querySelectorAll(".genre__button");
  genreButtons.forEach((genreButton) => {
    genreButton.addEventListener("click", () => {
      const categoryIndex = categoryArray.findIndex(
        (category) => category === genreButton.innerText
      );

      const filteredArray = productArray.filter(
        (product) => categoryIndex === product.category
      );
      renderCardAlbuns(filteredArray);

      if (categoryIndex === 0) {
        renderCardAlbuns(productArray);
      }
    });
  });
};

export const filterByRangePriceAlbum = (productArray) => {
  const inputRangePrice = document.querySelector("#range__input");
  inputRangePrice.addEventListener("input", () => {});
};
