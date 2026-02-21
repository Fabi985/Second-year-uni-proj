export function homeView({ books }) {

    const listBooks = books.map(book => `
        <section id="book">
            <a href="/catalogue/book/${book.BookId}">
                <img alt="${book.BookTitle} Cover" src="/assets/bookCovers/${book.BookImage}"/>
                <li>${book.BookTitle}</li>
            </a>
        </section>
        `).join("\n");

    // console.log(listBooks);

    return `
    <section aria-labelledby="home-heading">
        <h2 id="home-heading">Home Page</h2>
        <p>This is the home page</p>
        <p>This is for Slimballs</p>
    </section>
    <section aria-label="recently added book selection">
        <ul>
            ${listBooks}
        </ul>
    </section>
    `
}