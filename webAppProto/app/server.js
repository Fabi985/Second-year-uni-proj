import { homeController } from "./controllers/home.js";
import { notFoundController } from "./controllers/notFound.js";
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

    return notFoundController({ request });
}