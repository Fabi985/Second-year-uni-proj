import { db } from "../db.js";

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
        Select BookTitle, BookImage, BookAuthor, BookPublisher, BookAbout, BookSource
        From Books
        WHERE BookId = (?);
        `).all(BookId);
}