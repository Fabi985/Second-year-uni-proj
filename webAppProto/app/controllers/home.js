import { getRecentlyAddedBooks } from "../models/home.js";
import render from "../render.js";
import { homeView } from "../views/home.js";

export function homeController() {
    const books = getRecentlyAddedBooks();
    //console.log(books);

    return render(homeView, { books });
}