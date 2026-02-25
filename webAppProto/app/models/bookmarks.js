import { db } from "../db.js";

export function checkForExistingBookmark(UserId, BookId) {
    return db.prepare(`
        SELECT ChapterId
        FROM Bookmarks
        WHERE UserId = (?) AND BookId = (?);
        `).all(UserId, BookId);
}

export function checkBookmarks(UserId, BookId) {
    return db.prepare(`
        SELECT *
        FROM Bookmarks
        WHERE UserId = (?) AND BookId = (?);
        `).all(UserId, BookId);
}

export function insertBookmark(UserId, BookId, ChapterId) {
    return db.prepare(`
        INSERT INTO Bookmarks (UserId, BookId, ChapterId)
        VALUES (?, ?, ?);
        `).all(UserId, BookId, ChapterId);
}

export function updateBookmark(ChapterId, UserId, BookId) {
    return db.prepare(`
        UPDATE Bookmarks
        SET ChapterId = (?)
        WHERE UserId = (?) AND BookId = (?);
        `).all(ChapterId, UserId, BookId);
}

export function removeBookmark(UserId, BookId, ChapterId){
    return db.prepare(`
        DELETE FROM Bookmarks
        WHERE UserId = (?) AND BookId = (?) AND ChapterId = (?);
        `).all(UserId, BookId, ChapterId);
}