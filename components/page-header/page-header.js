class PageHeader extends HTMLElement {
  constructor() {
    super();
    this.wrapper = null;
  }

  connectedCallback() {
    this.wrapper = $("<header class='page-header'></header>");
    this.appendChild(this.wrapper[0]);
    this.title = this.getAttribute("title") || "";
    this.subtitle = this.getAttribute("subtitle") || "";
    this.render();
  }

  render() {
    this.wrapper.html(`
      <link rel="stylesheet" href="/components/page-header/page-header.css">

      <div class="container">
        <nav class="page-header__navbar navbar navbar-expand-lg">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">BookHub</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link" href="/">Home</a>
                <a class="nav-link" href="/task1.html">Task 1</a>
                <a class="nav-link" href="/task2.html">Task 2</a>
                <a class="nav-link" href="/task3.html">Task 3 - 1</a>
                <a class="nav-link" href="/task3-2.html">Task 3 - 2</a>
                <a class="nav-link" href="/task4.html">Task 4</a>
                <a class="nav-link" href="/improvements.html">Melhorias</a>
              </div>
            </div>
          </div>
        </nav>
        ${this.title && `<h1 class="page-header__title">${this.title}</h1>`}
        ${
          this.subtitle &&
          `<p class="page-header__subtitle">${this.subtitle}</p>`
        }
      </div>
    `);
  }
}

customElements.define("page-header", PageHeader);
