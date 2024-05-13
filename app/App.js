import { Main } from "./Main.js";
import { Router } from "./Router.js";
import { Header } from "./components/header/Header.js";
import { BgImage } from "./images/urls.js";

let body = document.querySelector("body");
let divRoot = document.querySelector("#root");

export const App = () => {
  body.style.background = `url(${BgImage})   no-repeat center center fixed`;
  body.style.backgroundSize = "cover";

  divRoot.innerHTML = "";
  divRoot.setAttribute("class", "pt-5");
  divRoot.append(Header());
  divRoot.append(Main());

  Router();
};
