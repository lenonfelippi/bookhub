class BookCarousel extends HTMLElement {
  constructor() {
    super();
    this.wrapper = null;
  }

  connectedCallback() {
    this.wrapper = $("<div></div>");
    this.appendChild(this.wrapper[0]);

    try {
      this.books = JSON.parse(this.getAttribute("books") || "[]");
      this.carouselId = `carousel-${
        this.getAttribute("id") || Math.random().toString(36).substr(2, 9)
      }`;
      this.validateBooks();
      this.render();
    } catch (error) {
      console.error("Error:", error);
      this.books = [];
      this.renderError();
    }
  }

  validateBooks() {
    this.books = this.books.filter((book) => {
      return (
        book &&
        typeof book.title === "string" &&
        typeof book.image === "string" &&
        typeof book.link === "string"
      );
    });
  }

  renderError() {
    this.wrapper.html(
      `<div class="book-carousel__error">Falha ao carregar os livros.</div>`
    );
  }

  render() {
    if (!this.books.length) {
      this.renderError();
      return;
    }

    this.wrapper.html(`
      <link rel="stylesheet" href="/components/book-carousel/book-carousel.css">
      <div id="${
        this.carouselId
      }" class="carousel slide book-carousel" aria-label="Book Carousel">
        <div class="carousel-inner">
          ${this.books
            .map(
              (book, index) => `
                <div class="carousel-item ${index === 0 ? "active" : ""}">
                  <div class="row">
                    <div class="col-12 col-sm-6 col-md-4">
                      <a href="${book.link}">  
                        <div class="book-carousel__box-image">
                          <img src="${
                            book.image
                          }" class="book-carousel__image" alt="${book.title}">
                        </div>
                      </a>
                    </div>
                    <div class="col-12 col-sm-6 col-md-8">
                      <h5 class="book-carousel__title">${book.title}</h5>
                      <a class="book-carousel__link-button" href="${
                        book.link
                      }">Detalhes do livro</a>
                    </div>
                  </div>
                  
                </div>
              `
            )
            .join("")}
        </div>
        <button class="book-carousel__nav-button--prev" type="button" data-bs-target="#${
          this.carouselId
        }" data-bs-slide="prev" aria-label="Previous slide">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="book-carousel__nav-button--next" type="button" data-bs-target="#${
          this.carouselId
        }" data-bs-slide="next" aria-label="Next slide">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    `);
  }
}

customElements.define("book-carousel", BookCarousel);
