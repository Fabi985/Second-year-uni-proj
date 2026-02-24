import { db } from "../db.js";

export function getChaptersOfSpecificBook(BookId) {
    return db.prepare(`
        SELECT ChapterId, BookTitle, ChapterName, ChapterRelease
        FROM Books B
        JOIN Chapters CHP
        ON B.BookId = CHP.BookId
        WHERE B.BookId = (?);
        `).all(BookId);
}