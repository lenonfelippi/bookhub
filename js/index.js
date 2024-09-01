import { bookCollection } from "../data/book-collection.js";

$(document).ready(function () {
  function addBookLinks(collection) {
    return collection.books.map((book) => ({
      ...book,
      link: `book-details.html?collection=${collection.id}&id=${book.id}`,
    }));
  }

  bookCollection.forEach(function (carouselData) {
    const $carousel = $("<book-carousel></book-carousel>");
    const $collectionName = $("<h2 class='page__subtitle'></h2>").text(
      carouselData.name
    );
    $carousel.attr("id", carouselData.id);
    $carousel.attr("books", JSON.stringify(addBookLinks(carouselData)));
    $("#book-collection-session").append($collectionName).append($carousel);
  });
});
