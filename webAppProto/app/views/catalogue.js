export function catalogueView({ books }) {

    const listBooks = books.map(book => `
        <section id="book" aria-label="book">
            <li>
                <a href="/catalogue/book/${book.BookId}">
                    <img alt="${book.BookTitle} Cover" src="/assets/bookCovers/${book.BookImage}"/>
                    <p>${book.BookTitle}</p>
                </a>
            </li>
        </section>
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
        <ul>
            ${listBooks}
        </ul>
    </section>
    `
}