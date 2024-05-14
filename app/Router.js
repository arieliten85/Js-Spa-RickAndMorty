import api from "./helpers/urls.js";
import { ContainerCards } from "./components/card/ContainerCards.js";
import { Rickverse } from "./components/Rickverse.js";
import { fetchData } from "./helpers/fetchData.js";
import { CardDetails } from "./components/Card/CardDetails.js";

export const Router = () => {
  const { hash } = location;
  const path = hash.substring(2);

  if (path === "") {
    fetchData({
      url: api.allUsers,
      callback: (data) => {
        const section = document.querySelector("#section");
        section.innerHTML = "";
        section.append(ContainerCards(data));
      },
    });
  }
  if (path === "aboutTheShow") {
    const section = document.querySelector("#section");
    section.innerHTML = Rickverse();
  } else {
    fetchData({
      url: api.findOne + localStorage.getItem("id"),
      callback: (data) => {
        document.querySelector("#section").append(CardDetails(data));
      },
    });
  }
};
