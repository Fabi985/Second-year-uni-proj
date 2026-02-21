import { db } from "../db.js";

export function createUser(username, hashedPass) {
    db.prepare(`
        INSERT INTO Users (Username, UserPass)
        VALUES (?, ?);
    `).run(username, hashedPass);
}