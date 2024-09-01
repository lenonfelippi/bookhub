import {
  ClassicEditor,
  Essentials,
  Bold,
  Italic,
  Font,
  Paragraph,
  Heading,
  List,
} from "ckeditor5";

import HighlightedQuote from "../plugins/highlighted-quote/highlighted-quote.js";

ClassicEditor.create(document.querySelector("#editor"), {
  plugins: [
    Essentials,
    Bold,
    Italic,
    Font,
    Paragraph,
    Heading,
    List,
    HighlightedQuote,
  ],
  toolbar: {
    items: [
      "highlightedQuote",
      "|",
      "heading",
      "numberedList",
      "bulletedList",
      "|",
      "undo",
      "redo",
      "|",
      "bold",
      "italic",
      "|",
      "fontSize",
      "fontFamily",
      "fontColor",
      "fontBackgroundColor",
    ],
  },
})
  .then((editor) => {
    // console.log("Editor inicializado", editor);
  })
  .catch((error) => {
    console.error(error.stack);
  });
