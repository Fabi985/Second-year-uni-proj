export function catalogueView({ books }) {

    const listBooks = books.map(book => `
        <section id="book" aria-label="book">
            <a href="/catalogue/book/${book.BookId}">
                <img alt="${book.BookTitle} Cover" src="/assets/bookCovers/${book.BookImage}"/>
                <li>${book.BookTitle}</li>
            </a>
        </section>
        `).join("\n");

    return `
    <section id="catalogue-page" aria-label="catalogue-page">
    <h1>Catalogue:</h1>
        <ul>
            ${listBooks}
        </ul>
    </section>
    `
}