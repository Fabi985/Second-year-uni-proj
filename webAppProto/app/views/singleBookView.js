export function bookmark(bookId) {
    console.log(bookId);
}

// Displays what chapter the user has bookmarked
export function getLabel(chapterId, bookmarkedId) {
    if (chapterId == bookmarkedId) {
            return `<label id="bookmarked" for="chapterid">BOOKMARKED</label><input type="button" value="Remove Bookmark" onclick="this.form.submit()"> `;
        } else if (chapterId < bookmarkedId) {
            return `<label id="success" for="chapterid">READ</label><input type="button" value="Bookmark chpt ${chapterId}" onclick="this.form.submit()"> `;
        } else if (chapterId > bookmarkedId) {
            return `<label id="failed" for="chapterid">NOT READ</label><input type="button" value="Bookmark chpt ${chapterId}" onclick="this.form.submit()"> `;
        }
}

export function singleBookView({ bookData, bookChapterData, bookmarkedId }) {

    // Book Data
    const bookId = bookData[0].BookId
    const booktitle = bookData[0].BookTitle;
    const bookCover = bookData[0].BookImage;
    const bookAuthor = bookData[0].BookAuthor;
    const bookPublisher = bookData[0].BookPublisher;
    const bookAbout = bookData[0].BookAbout;

    const chaptersNotJoined = [];

    for (const item in bookChapterData) {
        const chapterId = bookChapterData[item].ChapterId;
        const chapterName = bookChapterData[item].ChapterName;
        const chapterRelease = bookChapterData[item].ChapterRelease;

        const ChapterFormLabel = getLabel(chapterId, bookmarkedId);

        const chapterSectionHTML = `
            <tr id="chapter">
                <td>Chapter ${chapterId} - ${chapterName}</td>
                <td>${chapterRelease}</td>
                <td>
                    <form method="POST" action="bookmark/${bookId}${chapterId}">
                        ${ChapterFormLabel}
                    </form>
                </td>
            </tr>
        `;

        chaptersNotJoined.push(chapterSectionHTML);
    }

    const chapters = chaptersNotJoined.join("\n");
        

    return `
    <section id="book-about" aria-label="book-about">
        <h1>${booktitle}</h1>
        <img src="/assets/bookCovers/${bookCover}"/>
        <p>${bookAuthor}, ${bookPublisher}</p>
        <p>${bookAbout}</p>
    </section>
    <section id="book-chapters" aria-label="book-chapters">
        <table>
            <tr>
                <th>Chapter title</th>
                <th>Chapter release</th>
                <th>Bookmarks</th>
            </tr>
            ${chapters}
        </table>
    </section>
        `
}