export function homeView({ books }) {

    const listBooks = books.map(book => `
        <li>
        <section id="book" aria-label="books">
            <a href="/catalogue/book/${book.BookId}">
                <img alt="${book.BookTitle} Cover" src="/assets/bookCovers/${book.BookImage}"/>
                <p>${book.BookTitle}</p>
            </a>
        </section>
        </li>
        `).join("\n");

    // console.log(listBooks);

    return `
    <section id="home-page" aria-labelledby="home-heading">
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
}