import { getSpecificBook } from "../models/books.js";
import { getChapterOfSpecificBook } from "../models/chapters.js";
import render from "../render.js";
import { singleBookView } from "../views/singleBookView.js";

export function singleBookController({ BookId }) {
    const bookData = getSpecificBook(BookId);
    const bookChapterData = getChapterOfSpecificBook(BookId);
    console.log(bookChapterData);
    // console.log(bookData);

    return render(singleBookView, { bookData, bookChapterData });
}