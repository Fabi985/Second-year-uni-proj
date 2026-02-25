import { getAllBooks, searchFor } from "../models/books.js";
import render from "../render.js";
import { catalogueView } from "../views/catalogue.js";

export function catologueController(){

    const books = getAllBooks();

    return render(catalogueView, { books }, 200);
}

// new response for user allows us to display any view with the search
export function showSearchedBookController({ searchQuery }){

    const searchResponse = searchFor(searchQuery);
    
    console.log(`searched for similar/contains "${searchQuery}":`);
    for (const property in searchResponse) {
        console.log(`${property}: ${searchResponse[property].BookTitle}`);
    }

    const books = searchResponse;

    return render(catalogueView, { books }, 200);
}

// This gets the search query and then gets a new response 
export async function searchRedirectBookController({ request }){
    const formData = await request.formData();
    const searchQuery = formData.get("book-search");

    const headers = new Headers();
    headers.set('location', `/catalogue/${searchQuery}`);
    return new Response(null, {headers, status: 303});
}
