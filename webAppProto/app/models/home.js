import { db } from "../db.js";

export function getRecentlyAddedBooks() {
    return db.prepare(`
        SELECT BookId, BookTitle, BookImage
        FROM Books
        ORDER BY BookId DESC
        LIMIT 5;
        `).all();
}