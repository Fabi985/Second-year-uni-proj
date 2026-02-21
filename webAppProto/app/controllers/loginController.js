import render from '../render.js';
import { loginView } from '../views/loginView.js'

export function loginController({ request }) {
    if (request.method == "GET") {
        return render(loginView, {}, 200);
    }
}