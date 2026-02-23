export function catalogueView({ books }) {

    const listBooks = books.map(book => `
        <section id="book">
            <a href="/catalogue/book/${book.BookId}">
                <img alt="${book.BookTitle} Cover" src="/assets/bookCovers/${book.BookImage}"/>
                <li>${book.BookTitle}</li>
            </a>
        </section>
        `).join("\n");

    return `
    <section aria-label="Catalogue">
    <h1>Catalogue:</h1>
        <ul>
            ${listBooks}
        </ul>
    </section>
    `
}