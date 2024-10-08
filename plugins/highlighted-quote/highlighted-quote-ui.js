import { Plugin, ButtonView } from "ckeditor5";

export default class HighlightedQuoteUI extends Plugin {
  init() {
    const editor = this.editor;

    editor.ui.componentFactory.add("highlightedQuote", () => {
      const button = new ButtonView();

      button.set({
        label: "Highlighted Quote",
        withText: true,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path d="M11.86 16.55a4.31 4.31 0 0 0-2.11.56 14.44 14.44 0 0 1 4.36-6 1.1 1.1 0 0 0-1.4-1.7c-4 3.25-5.78 7.75-5.78 10.54A5.08 5.08 0 0 0 10 24.58a4.4 4.4 0 0 0 1.88.44 4.24 4.24 0 1 0 0-8.47Z" class="clr-i-outline clr-i-outline-path-1"/><path d="M23 16.55a4.29 4.29 0 0 0-2.11.56 14.5 14.5 0 0 1 4.35-6 1.1 1.1 0 1 0-1.39-1.7c-4 3.25-5.78 7.75-5.78 10.54a5.08 5.08 0 0 0 3 4.61A4.37 4.37 0 0 0 23 25a4.24 4.24 0 1 0 0-8.47Z" class="clr-i-outline clr-i-outline-path-2"/><path fill="none" d="M0 0h36v36H0z"/></svg>',
        tooltip: true,
      });

      this.listenTo(button, "execute", () => {
        const selection = editor.model.document.selection;
        const quoteText = "Your highlighted quote here";

        editor.model.change((writer) => {
          editor.model.insertContent(
            writer.createElement(
              "highlightedQuote",
              { class: "highlighted-quote" },
              quoteText
            )
          );
        });
      });

      return button;
    });
  }
}
