import { getRecentlyAddedBooks } from "../models/books.js";
import render from "../render.js";
import { homeView } from "../views/home.js";

export function homeController() {
    const books = getRecentlyAddedBooks();
    //console.log(books);

    return render(homeView, { books });
}