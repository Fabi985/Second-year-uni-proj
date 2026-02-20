import { getSpecificBook } from "../models/books.js";
import render from "../render.js";
import { singleBookView } from "../views/singleBookView.js";

export function singleBookController({ BookId }) {
    const bookData = getSpecificBook(BookId);
    // console.log(bookData);

return render(singleBookView, { bookData });
}