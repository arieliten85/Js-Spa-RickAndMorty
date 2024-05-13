import { ajax } from "./helpers/ajax.js";
import api from "./helpers/urls.js";

import { CardDetails } from "./components/card/CardDetails.js";
import { ContainerCards } from "./components/card/ContainerCards.js";
import { Rickverse } from "./components/Rickverse.js";

export const Router = () => {
  const { hash } = location;
  const path = hash.substring(2);

  if (path === "") {
    ajax({
      url: api.allUsers,
      callback: (data) => {
        const section = document.querySelector("#section");
        section.innerHTML = "";
        section.append(ContainerCards(data));
      },
    });
  } else if (path === "aboutTheShow") {
    const section = document.querySelector("#section");
    section.innerHTML = Rickverse();
  } else {
    ajax({
      url: api.findOne + localStorage.getItem("id"),
      callback: (data) => {
        document.querySelector("#section").append(CardDetails(data));
      },
    });
  }
};
