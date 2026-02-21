import { getAllBooks } from "../models/books.js";
import render from "../render.js";
import { catalogueView } from "../views/catalogue.js";

export function catologueController(){

    const books = getAllBooks();

    return render(catalogueView, { books }, 200);
}