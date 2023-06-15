import { products, categories } from "./productsData.js";
import { filterByTypeSong, filterByRangePriceAlbum } from "./filter.js";

/* Desenvolva sua lógica aqui ... */

export const renderCardAlbuns = (array) => {
  const cardList = document.querySelector(".card__list");
  cardList.innerHTML = "";
  array.forEach((cardSong) => {
    const cardElement = createCardAlbuns(cardSong);
    cardList.appendChild(cardElement);
  });
};

function createCardAlbuns(albumSongs) {
  const cardAlbumListItem = document.createElement("li");
  const cardAlbumImage = document.createElement("img");
  const paragraphBandName = document.createElement("p");
  // const spanBandName = document.createElement("span");
  const albumTitle = document.createElement("h2");
  const spanCardPrice = document.createElement("span");
  const paragraphCardPrice = document.createElement("p");
  const buttonCardPrice = document.createElement("button");

  cardAlbumListItem.classList.add("card__item");

  cardAlbumImage.src = albumSongs.img;
  cardAlbumImage.alt = albumSongs.title;

  paragraphBandName.innerText = `${albumSongs.band}  ${albumSongs.year}`;

  albumTitle.classList.add("card__name");
  albumTitle.innerText = albumSongs.title;

  spanCardPrice.classList.add("card__information");
  paragraphCardPrice.classList.add("card__price");
  paragraphCardPrice.innerText = albumSongs.price;

  buttonCardPrice.classList.add("card__button");
  buttonCardPrice.innerText = "Comprar";

  // Aninhando os elementos
  spanCardPrice.append(paragraphCardPrice, buttonCardPrice);
  cardAlbumListItem.append(
    cardAlbumImage,
    paragraphBandName,
    albumTitle,
    spanCardPrice
  );

  return cardAlbumListItem;
}

const renderFilterButtons = (array) => {
  const genreFilter = document.querySelector(".genre__filter");
  genreFilter.innerHTML = "";
  array.forEach((filterButton) => {
    const buttonElement = createFilterButton(filterButton);
    genreFilter.appendChild(buttonElement);
  });
};

function createFilterButton(genreButtons) {
  const listItemGenreButton = document.createElement("li");
  const genreButton = document.createElement("button");

  listItemGenreButton.classList.add("genre__list");

  genreButton.classList.add("genre__button");

  genreButton.innerText = genreButtons;

  listItemGenreButton.appendChild(genreButton);

  return listItemGenreButton;
}

renderCardAlbuns(products);

renderFilterButtons(categories);

filterByTypeSong(categories, products);

filterByRangePriceAlbum(products, 0);
