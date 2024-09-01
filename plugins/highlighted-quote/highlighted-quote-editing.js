import { Plugin } from "ckeditor5";

export default class HighlightedQuoteEditing extends Plugin {
  init() {
    this._defineSchema();
    this._defineConverters();
  }

  _defineSchema() {
    const schema = this.editor.model.schema;

    schema.register("highlightedQuote", {
      allowWhere: "$block",
      allowContentOf: "$block",
      allowAttributes: ["class"],
    });
  }

  _defineConverters() {
    const conversion = this.editor.conversion;

    conversion.for("downcast").elementToElement({
      model: "highlightedQuote",
      view: (modelElement, { writer }) => {
        return writer.createContainerElement("blockquote", {
          class: "highlighted-quote",
        });
      },
    });

    conversion.for("upcast").elementToElement({
      view: {
        name: "blockquote",
        classes: "highlighted-quote",
      },
      model: (viewElement, { writer }) => {
        return writer.createElement("highlightedQuote", {
          class: "highlighted-quote",
        });
      },
    });
  }
}
