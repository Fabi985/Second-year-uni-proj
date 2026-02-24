import { db } from "../db.js";

export function createUser(username, hashedPass, dateCreated) {
    db.prepare(`
        INSERT INTO Users (Username, UserPass, DateCreated)
        VALUES (?, ?, ?);
    `).run(username, hashedPass, dateCreated);
}