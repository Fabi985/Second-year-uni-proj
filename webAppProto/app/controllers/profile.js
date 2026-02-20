import render from "../render.js";
import { profileView } from "../views/profile.js";

export function profileController(){
    return  render(profileView, [], 200);
}