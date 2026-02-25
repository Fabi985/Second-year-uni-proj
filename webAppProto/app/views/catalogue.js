export function catalogueView({ books }) {

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

    return `
    <section id="catalogue-page" aria-label="catalogue-page">
        <h1>Catalogue:</h1>
        <section id="book-search" aria-label="book-search">
            <form method="POST" action="/catalogue">
                <input type="text" placeholder="Search book..." name="book-search" required>
                <button type="submit">Search</button>
            </form>
        </section>
    </section>
    <section id="catalogue" aria-label="catalogue"
        <section id="books-list" airia-label="books-list">
            <ul>
                ${listBooks}
            </ul>
        </section>
    </section>
    `
}