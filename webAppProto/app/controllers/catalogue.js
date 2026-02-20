import render from "../render.js";
import { catalogueView } from "../views/catalogue.js";

export function catologueController(){
    return render(catalogueView, [], 200);
}