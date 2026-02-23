import render from "../render.js";
import { helpView } from "../views/help.js";

export function helpController(){
    return render(helpView, [], 200);
}
