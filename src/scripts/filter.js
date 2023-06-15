import { renderCardAlbuns } from "./index.js";

export const filterByTypeSong = (categoryArray, productArray) => {
  const genreButtons = document.querySelectorAll(".genre__button");
  genreButtons.forEach((genreButton) => {
    genreButton.addEventListener("click", () => {
      const categoryIndex = categoryArray.findIndex(
        (category) => category === genreButton.innerText
      );
      if (categoryIndex !== 0) {
        const filteredArray = productArray.filter(
          (product) => categoryIndex === product.category
        );
        filterByRangePriceAlbum(filteredArray, categoryIndex);
      } else {
        filterByRangePriceAlbum(productArray, categoryIndex);
      }
    });
  });
};

export const filterByRangePriceAlbum = (productArray, category) => {
  const inputRangePrice = document.querySelector("#range__input");
  const spanPriceToSearch = document.querySelector("#priceToSearch");
  let filteredArray = [];
  inputRangePrice.addEventListener("input", () => {
    spanPriceToSearch.innerText = Number(inputRangePrice.value).toFixed(2);

    if (category !== 0) {
      filteredArray = productArray.filter(
        (product) => product.price <= inputRangePrice.value
      );
    } else {
      filteredArray = productArray.filter(
        (product) => product.price <= inputRangePrice.value
      );
    }
    renderCardAlbuns(filteredArray);
  });
  filteredArray = productArray.filter(
    (product) => product.price <= inputRangePrice.value
  );
  renderCardAlbuns(filteredArray);
};
