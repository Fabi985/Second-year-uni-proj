import { aboutController } from "./controllers/about.js";
import { catologueController, searchRedirectBookController, showSearchedBookController } from "./controllers/catalogue.js";
import { helpController } from "./controllers/help.js";
import { homeController } from "./controllers/home.js";
import { notFoundController } from "./controllers/notFound.js";
import { profileController } from "./controllers/profile.js";
import { staticController } from "./controllers/static.js";
import { singleBookController, bookmarkChapterController } from "./controllers/singleBookController.js";
import { signUpController, signUpUserController } from "./controllers/signUpController.js";
import { loginController, userLoginController } from "./controllers/loginController.js";

const bookPattern = new URLPattern({pathname:"/catalogue/book/:BookId"});
const searchBooksPattern = new URLPattern({pathname:"/catalogue/:searchQuery"})
const bookmarkPattern = new URLPattern({pathname:"/catalogue/book/bookmark/:BookId:ChapterId"})

export default function server(request) {
    const url = new URL(request.url);
    console.log(`\n${request.method} ${url.pathname}${url.searchParams}`);

    if (url.pathname.startsWith("/assets")) {
        return staticController({ request });
    }

    if (url.pathname == "/" && request.method == "GET") {
        return homeController({ request });
    }

    if (url.pathname == "/catalogue" && request.method == "GET"){
        return catologueController({ request });
    }

    if (url.pathname == "/catalogue" && request.method == "POST"){
        return searchRedirectBookController({ request });
    }

    if (searchBooksPattern.test(url)) {
        const searchQuery = searchBooksPattern.exec(url).pathname.groups.searchQuery;
        return showSearchedBookController({ searchQuery })
    }

    if (bookPattern.test(url)) {
        const BookId = bookPattern.exec(url).pathname.groups.BookId;
        return singleBookController({ BookId });
    }

    if (bookmarkPattern.test(url)){
        const BookId = bookmarkPattern.exec(url).pathname.groups.BookId;
        const ChapterId = bookmarkPattern.exec(url).pathname.groups.ChapterId;
        return bookmarkChapterController({ BookId, ChapterId })
    }

    if (url.pathname == "/help"){
        return helpController({ request });
    }

    if (url.pathname == "/about"){
        return aboutController({ request });
    }

    if (url.pathname == "/profile"){
        return profileController({ request });
    }

    if (url.pathname == "/sign-up" && request.method == "GET") {
        return signUpController({ request });
    }

    if (url.pathname == "/sign-up" && request.method == "POST") {
        return signUpUserController({ request });
    }

    if (url.pathname == "/login" && request.method == "GET") {
        return loginController({ request })
    }

    if (url.pathname == "/login" && request.method == "POST") {
        return userLoginController({ request })
    }

    return notFoundController({ request });
}