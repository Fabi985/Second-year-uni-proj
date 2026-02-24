import { getAllBooks, searchFor } from "../models/books.js";
import render from "../render.js";
import { catalogueView } from "../views/catalogue.js";

export function catologueController(){

    const books = getAllBooks();

    return render(catalogueView, { books }, 200);
}

/* 
Is this function correct?
At the moment it gets the data the user searched
Then it queries it in SQL
then it outputs the book/s similar to it 
but if you refresh the page it has to resend the data?
*/
export async function searchedBookController({ request }){
    const formData = await request.formData();
    const searchQuery = formData.get("book-search");

    const searchResponse = searchFor(searchQuery);
    console.log("searched for: " + searchResponse[0].BookTitle);

    const books = searchResponse;

    return render(catalogueView, { books }, 200);
    // const headers = new Headers();
    // headers.set('location', '/catalogue');
    // return new Response(null, {headers, status: 303});
}
