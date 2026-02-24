import { db } from "../db.js";

db.exec(`
    DROP TABLE Favourites;
    DROP TABLE Bookmarks;
    DROP TABLE Users;
    DROP TABLE Chapters;
    DROP TABLE Books;
    `);