import { Plugin } from "ckeditor5";
import HighlightedQuoteUI from "./highlighted-quote-ui.js";
import HighlightedQuoteEditing from "./highlighted-quote-editing.js";

export default class HighlightedQuote extends Plugin {
  static get requires() {
    return [HighlightedQuoteEditing, HighlightedQuoteUI];
  }
}
