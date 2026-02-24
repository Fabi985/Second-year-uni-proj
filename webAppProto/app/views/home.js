export function homeView({ books }) {

    const listBooks = books.map(book => `
        <section id="book" aria-label="books">
            <a href="/catalogue/book/${book.BookId}">
                <img alt="${book.BookTitle} Cover" src="/assets/bookCovers/${book.BookImage}"/>
                <li>${book.BookTitle}</li>
            </a>
        </section>
        `).join("\n");

    // console.log(listBooks);

    return `
    <section id="" aria-labelledby="home-heading">
        <h1 id="home-heading">Home Page</h1>
        <section id="home-page-body" aria-label="home-page-body">
            <p>This is the home page</p>
            <p>This is for Slimballs</p>
        </section>
    </section>
    <section id="recently-added-books" aria-label="recently-added-books">
    <h2>Recently Added:</h2>
    <section id="recently-added-books-list" aria-label="recently-added-books-list"
        <ul>
            ${listBooks}
        </ul>
    </section>
    </section>
    `
    // still need to fix this broken ass css 
    // footer and headder done
}