import { aboutController } from "./controllers/about.js";
import { catologueController } from "./controllers/catalogue.js";
import { helpController } from "./controllers/help.js";
import { homeController } from "./controllers/home.js";
import { notFoundController } from "./controllers/notFound.js";
import { profileController } from "./controllers/profile.js";
import { staticController } from "./controllers/static.js";

export default function server(request) {
    const url = new URL(request.url);
    console.log(`\n${request.method} ${url.pathname}${url.searchParams}`);

    if (url.pathname.startsWith("/assets")) {
        return staticController({ request });
    }

    if (url.pathname == "/" && request.method == "GET") {
        return homeController({ request });
    }

    if (url.pathname == "/catalogue"){
        return catologueController({ request });
    }

    if (url.pathname =="/help"){
        return helpController({ request });
    }

    if (url.pathname =="/about"){
        return aboutController({ request })
    }

    if (url.pathname =="/profile"){
        return profileController({ request });
    }

    return notFoundController( {request} );
}