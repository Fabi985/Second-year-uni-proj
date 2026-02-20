export function singleBookView({ bookData }) {

    const booktitle = bookData[0].BookTitle;
    const bookCover = bookData[0].BookImage;
    const bookAuthor = bookData[0].BookAuthor;
    const bookPublisher = bookData[0].BookPublisher;
    const bookAbout = bookData[0].BookAbout;
    console.log(bookData);
    console.log(booktitle);
    console.log(bookCover);
    console.log(bookAuthor)

    return `
    <h1>${booktitle}</h1>
    <img src="/assets/bookCovers/${bookCover}">
    <p>${bookAuthor}, ${bookPublisher}</p>
    <p>${bookAbout}</p>
    `
}