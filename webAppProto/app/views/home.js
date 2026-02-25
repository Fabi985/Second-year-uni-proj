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
            <p>
            Slimeballs presents this web app as our project. What we have created is a book/comic/manga tracker, this allows users to create their own account 
            and keep track of all the books that they have read! Users will be able to favourite the content they enjoy for quicker/easier access to it, 
            users will also be able to keep bookmarks on the content that are currently reading.

            In the future we hope to add: Commenting on series, Rating a series on how good you personally think it was, and many more!
            </p>
        </section>
    </section>
    <section id="recently-added-books" aria-label="recently-added-books">
        <h2>Recently Added:</h2>
        <section id="books-list" aria-label="recently-added-books-list"
            <ul>
                ${listBooks}
            </ul>
        </section>
    </section>
    `
    // still need to fix this broken ass css 
    // footer and headder done
}