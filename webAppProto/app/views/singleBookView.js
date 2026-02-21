export function bookmark(bookId) {
    console.log(bookId);
}

export function singleBookView({ bookData, bookChapterData }) {

    // Book Data
    const bookId = bookData[0].BookId
    const booktitle = bookData[0].BookTitle;
    const bookCover = bookData[0].BookImage;
    const bookAuthor = bookData[0].BookAuthor;
    const bookPublisher = bookData[0].BookPublisher;
    const bookAbout = bookData[0].BookAbout;

    // Chapter Data
    const chptList = bookChapterData.map(chapter => `
        <tr id="chapter">
            <td>Chapter ${chapter.BookChpId} - ${chapter.ChapterName}</td>
            <td>${chapter.ChapterRelease}</td>
            <td>
                <form action="catalogue/books/book/${bookId}:${chapter.BookChpId}">
                    <label for="chapterid">NOT READ</label><br>
                    <input type="button" value="Bookmark chpt ${chapter.BookChpId}" onclick="this.form.submit()"> 
                </form>
            </td>
        </tr>
        `).join("\n");
        

    return `
    <section>
        <h1>${booktitle}</h1>
        <img src="/assets/bookCovers/${bookCover}"/>
        <p>${bookAuthor}, ${bookPublisher}</p>
        <p>${bookAbout}</p>
    </section>
    <section>
        <table>
            <tr>
                <th>Chapter title</th>
                <th>Chapter release</th>
                <th>Bookmarks</th>
            </tr>
            ${chptList}
        </table>
    </section>
        `
}