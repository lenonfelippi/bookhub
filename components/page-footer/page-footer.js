class PageFooter extends HTMLElement {
  constructor() {
    super();
    this.wrapper = null;
  }

  connectedCallback() {
    this.wrapper = $("<footer class='page-footer'></footer>");
    this.appendChild(this.wrapper[0]);
    this.render();
  }

  render() {
    this.wrapper.html(`
      <link rel="stylesheet" href="/components/page-footer/page-footer.css">

      <div class="page-footer__content">
        <a class="page-footer__link" href="https://github.com/lenonfelippi" target="_blank">Repositório</a>
      </div>
    `);
  }
}

customElements.define("page-footer", PageFooter);
