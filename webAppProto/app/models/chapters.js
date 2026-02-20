import { db } from "../db.js";

export function getChapterOfSpecificBook(BookId) {
    return db.prepare(`
        SELECT BookTitle, ChapterName, ChapterRelease
        FROM Books B
        JOIN Chapters CHP
        ON B.BookId = CHP.BookId
        WHERE B.BookId = (?);
        `).all(BookId);
}