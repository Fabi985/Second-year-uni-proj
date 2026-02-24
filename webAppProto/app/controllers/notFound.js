import render from "../render.js";
import { notFoundView } from "../views/notFound.js";

export function notFoundController({ request }) {

    const url = new URL(request.url);
    const badPath = url.pathname;
    return render(notFoundView, badPath, 404);
}