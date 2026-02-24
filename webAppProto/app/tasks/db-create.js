import { db } from "../db.js";

db.exec(`
--    DROP TABLE Users;
--    DROP TABLE Books;
--    DROP TABLE Chapters;
--    DROP TABLE Bookmarks;
--    DROP TABLE Favourites;

    -- Creates the user table
    CREATE TABLE "Users" (
	"UserId"	INTEGER NOT NULL UNIQUE,
	"Username"	TEXT NOT NULL UNIQUE,
	"UserPass"	TEXT NOT NULL,
	"DateCreated"	BLOB NOT NULL,
	"UserPfp" TEXT NOT NULL,
	PRIMARY KEY("UserId" AUTOINCREMENT)
    );

    -- Creates the books table
    CREATE TABLE "Books" (
	"BookId"	INTEGER NOT NULL UNIQUE,
	"BookTitle"	TEXT NOT NULL,
	"ReleaseDate"	TEXT NOT NULL,
	"BookAbout"	TEXT NOT NULL,
	"BookAuthor"	TEXT NOT NULL,
	"BookPublisher"	TEXT NOT NULL,
	"BookImage"	TEXT NOT NULL,
	"BookStatus"	TEXT NOT NULL,
	"BookSource"	TEXT NOT NULL,
	PRIMARY KEY("BookId" AUTOINCREMENT)
    );

    -- Creates the chapters table
    CREATE TABLE "Chapters" (
	"ChapterId"	INTEGER NOT NULL,
	"BookId"	INTEGER NOT NULL,
	"ChapterName"	TEXT NOT NULL,
	"ChapterRelease"	TEXT NOT NULL,
	PRIMARY KEY("ChapterId","BookId"),
	FOREIGN KEY("BookId") REFERENCES "Books"("BookId")
    );

    -- Creates the bookmarks table
    CREATE TABLE "Bookmarks" (
	"UserId"	INTEGER NOT NULL,
	"BookId"	INTEGER NOT NULL,
	"ChapterId"	INTEGER NOT NULL,
	FOREIGN KEY("BookId") REFERENCES "Books"("BookId")
    );

    -- create the favourites table
    CREATE TABLE "Favourites" (
	"UserId"	INTEGER NOT NULL,
	"BookId"	INTEGER NOT NULL,
	FOREIGN KEY("UserId") REFERENCES "Users"("UserId"),
	FOREIGN KEY("BookId") REFERENCES "Books"("BookId")
    );
`)