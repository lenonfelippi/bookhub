class PageNavigationButtons extends HTMLElement {
  constructor() {
    super();
    this.wrapper = null;
  }

  connectedCallback() {
    this.wrapper = $("<div class='container'></div>");
    this.appendChild(this.wrapper[0]);
    this.prevLink = this.getAttribute("prev-link") || "";
    this.prevText = this.getAttribute("prev-text") || "";
    this.nextLink = this.getAttribute("next-link") || "";
    this.nextText = this.getAttribute("next-text") || "";
    this.render();
  }

  render() {
    this.wrapper.html(`
      <link rel="stylesheet" href="/components/page-navigation-buttons/page-navigation-buttons.css">
      <div class='page-navigation-buttons'>
        <a href="${this.prevLink}" class="page-navigation-buttons__button 
        ${!this.prevLink && "page-navigation-buttons__button--disabled"}"
        >
          <img src="/images/arrow-left-icon.svg">
          ${this.prevText || "Página anterior"}
        </a>
        <a href="${this.nextLink}" class="page-navigation-buttons__button 
        ${!this.nextLink && "page-navigation-buttons__button--disabled"}"
        >
          ${this.nextText || "Próxima página"} 
          <img src="/images/arrow-right-icon.svg">
          </a>
      </div>
    `);
  }
}

customElements.define("page-navigation-buttons", PageNavigationButtons);
