### Tables:
- Catalok
- Chapters
- Users
- UserBookStatus

### Table fields:

___
### Catalog
| BookID                          | BookTitle | ReleaseDate | BookAbout | BookAuthor | BookPublisher | BookImage | BookStatus | BookSource |
| ------------------------------- | --------- | ----------- | --------- | ---------- | ------------- | --------- | ---------- | ---------------- |
| PK, Int, auto increment, unique | String    | DateTime    | String    | String     | String        | String    | String     | String           |
___
### Chapters
| ChapterID                       | BookID  | ChapterName | ChapterRelease |
| ------------------------------- | ------- | ----------- | -------------- |
| PK, Int, auto increment, unique | FK, Int | String      | Datetime       |
___
### Users
| UserID                          | UserName | UserPass | DateCreated |
| ------------------------------- | -------- | -------- | ----------- |
| PK, Int, Auto increment, Unique | String   | String   | Timestamp   |
___
### UserBookStatus
| UserID  | ChapterID |
| ------- | --------- |
| FK, Int | FK, Int   |
___

# Relationship of databases
![alt text](DesignAssets/DatabaseDesignsofar.png)