import render from '../render.js';
import { loginView } from '../views/loginView.js'

export function loginController({ request }) {
    return render(loginView, {}, 200);
}

export function userLoginController({ request }) {
    return notFoundController( {request} )
}