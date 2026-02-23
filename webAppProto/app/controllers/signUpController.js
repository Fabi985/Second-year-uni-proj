import { createUser } from "../models/users.js";
import render from "../render.js";
import { signUpView } from "../views/signUpView.js";
import { notFoundController } from "./notFound.js";

export function signUpController({ request }) {
    if (request.method == "GET") {
        return render(signUpView, {}, 200);
    }
    
    if (request.method == "POST") {
        const url = new URL(request.url);
        const username = url.searchParams.get('username');
        const password = url.searchParams.get('pass');
        console.log("Need to ask how to do POST forms")
        console.log("User: " + username);
        console.log("Password: " + password);
        return notFoundController( {request} )
        // createUser();
    }
}