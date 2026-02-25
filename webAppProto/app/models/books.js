import { db } from "../db.js";

export function getAllBooks() {
    return db.prepare(`
        SELECT BookId, BookTitle, BookImage
        FROM Books;
        `).all();
}

export function getRecentlyAddedBooks() {
    return db.prepare(`
        SELECT BookId, BookTitle, BookImage
        FROM Books
        ORDER BY BookId DESC
        LIMIT 5;
        `).all();
}

export function getSpecificBook(BookId) {
    return db.prepare(`
        Select BookId, BookTitle, BookImage, BookAuthor, BookPublisher, BookAbout, BookSource
        From Books
        WHERE BookId = (?);
        `).get(BookId);
}

export function searchFor(BookTitle) {
    return db.prepare(`
        SELECT BookId, BookTitle, BookImage
        FROM Books
        WHERE BookTitle like CONCAT('%', ?, '%');
        `).all(BookTitle);
}