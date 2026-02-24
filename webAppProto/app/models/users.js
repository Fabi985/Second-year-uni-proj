import { db } from "../db.js";

export function createUser(username, hashedPass, dateCreated, userPfp) {
    db.prepare(`
        INSERT INTO Users (Username, UserPass, DateCreated, UserPfp)
        VALUES (?, ?, ?, ?);
    `).run(username, hashedPass, dateCreated, userPfp);
}