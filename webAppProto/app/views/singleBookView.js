export function bookmark(bookId) {
    console.log(bookId);
}

// Displays what chapter the user has bookmarked
export function getLabel(chapterId, bookmarkedId) {
    let ChapterFormLabel = ''; // IDK why this is here, but trust me dont remove it or it breaks everything ToT.

    if (chapterId == bookmarkedId) {
            return ChapterFormLabel = '<label id="bookmarked" for="chapterid">BOOKMARKED</label>';
        } else if (chapterId < bookmarkedId) {
            return ChapterFormLabel = '<label id="success" for="chapterid">READ</label>';
        } else if (chapterId > bookmarkedId) {
            return ChapterFormLabel = '<label id="failed" for="chapterid">NOT READ</label>';
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
                        <input type="button" value="Bookmark chpt ${chapterId}" onclick="this.form.submit()"> 
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