export function singleBookView({ bookData, bookChapterData }) {

    // Book Data
    const booktitle = bookData[0].BookTitle;
    const bookCover = bookData[0].BookImage;
    const bookAuthor = bookData[0].BookAuthor;
    const bookPublisher = bookData[0].BookPublisher;
    const bookAbout = bookData[0].BookAbout;

    // Chapter Data
    const chptList = bookChapterData.map(chapter => `
        <tr id="chapter">
            <td>${chapter.ChapterName}</td>
            <td>${chapter.ChapterRelease}</td>
            <td>
                <input type="radio" id="chapterid" name="bookmark" value="chapterid">
                <label for="chapterid">NOT READ</label><br>
            </td>
        </tr>
        `).join("\n");

        // Replace the "chapterid" inside radio with the actual chapter id of the chapter

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