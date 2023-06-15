import { renderCardAlbuns } from "./index.js";

export const filterByTypeSong = (categoryArray, productArray) => {
  const inputRangePrice = document.querySelector("#range__input");
  const genreButtons = document.querySelectorAll(".genre__button");
  genreButtons.forEach((genreButton) => {
    genreButton.addEventListener("click", () => {
      console.log(inputRangePrice.value);
      const categoryIndex = categoryArray.findIndex(
        (category) => category === genreButton.innerText
      );

      const filteredArray = productArray.filter(
        (product) =>
          categoryIndex === product.category &&
          inputRangePrice.value >= product.price
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

  inputRangePrice.addEventListener("input", () => {
    const spanPriceToSearch = document.querySelector("#priceToSearch");
    spanPriceToSearch.innerText = inputRangePrice.value;

    const filteredProductArray = productArray.filter((product) => {
      return product.price <= inputRangePrice.value && product.category;
    });
    renderCardAlbuns(filteredProductArray);
  });
};
