import { createUser } from "../models/users.js";
import render from "../render.js";
import { signUpView } from "../views/signUpView.js";

export function signUpController({ request }) {
    return render(signUpView, {}, 200);
}

export async function signUpUserController({ request }) {

    const formData = await request.formData();
    const username = formData.get("username");
    const password = formData.get("pass");
    const dateCreated = new Date();
    const userPfp = "Default.png";

    console.log("User: " + username);
    console.log("Password: " + password);
    console.log("Date created: " + dateCreated)

    createUser(username, password, dateCreated, userPfp);

    const headers = new Headers();
    headers.set('location', '/sign-up')
    return new Response(null, {headers, status: 303});
}