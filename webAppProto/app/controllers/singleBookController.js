import { getSpecificBook } from "../models/books.js";
import { getChaptersOfSpecificBook } from "../models/chapters.js";
import { checkForExistingBookmark, insertBookmark, updateBookmark, checkBookmarks } from "../models/bookmarks.js"
import render from "../render.js";
import { singleBookView } from "../views/singleBookView.js";

// Gets specific book data and chapters involved, gets the chapter the user in session has bookmarked 
export function singleBookController({ BookId }) {
    const bookData = getSpecificBook(BookId);
    const bookChapterData = getChaptersOfSpecificBook(BookId);
    
    const UserId = 1; // Get user id in session

    const chapterBookmarked = checkBookmarks(UserId, BookId);
    const bookmarkedId = chapterBookmarked[0].ChapterId;
    // console.log("User has chapter-" + bookmarkedId + " Bookmarked")

    return render(singleBookView, { bookData, bookChapterData, bookmarkedId }, 200);
}

// Bookmarks the chapter user requested
export function bookmarkChapterController({ BookId, ChapterId }){
    const UserId = 1; // Get user id in session

    const bookmarkCheck = checkForExistingBookmark(UserId, BookId);
    
    if (bookmarkCheck == "") {
        insertBookmark(UserId, BookId, ChapterId);
    }
    else if (bookmarkCheck != "") {
        updateBookmark(ChapterId, UserId, BookId);
    }

    const headers = new Headers();
    headers.set('location', `/catalogue/book/${BookId}`)
    return new Response(null, {headers, status: 303});
}