import { bookCollection } from "../data/book-collection.js";

$(document).ready(function () {
  function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
      collection: params.get("collection"),
      id: params.get("id"),
    };
  }

  function findBook(collectionId, bookId) {
    const collection = bookCollection.find((col) => col.id === collectionId);
    if (collection) {
      return collection.books.find((book) => book.id === bookId);
    }
    return null;
  }

  const { collection, id } = getUrlParams();
  const book = findBook(collection, id);

  if (book) {
    $("#book-title").text(book.title);
    $("#book-image").attr("src", book.image);
    $("#book-image").attr("alt", `Capa do livro ${book.title}`);
    $("#book-description").text(book.description || "Sem descrição.");
  } else {
    $("#book-details").html("<p>Livro não encontrado.</p>");
  }
});
