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
        <h1 id="home-heading">Home Page</h1>
        <p>This is the home page</p>
        <p>This is for Slimballs</p>
    </section>
    <section aria-label="recently added book selection">
    <h2>Recently Added:</h2>
        <ul>
            ${listBooks}
        </ul>
    </section>
    `
}