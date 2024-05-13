import { Card } from "./Card.js";

export const ContainerCards = (props) => {
  const { results } = props;

  const container = document.createElement("div");
  container.setAttribute("class", "container");

  const title = document.createElement("h2");
  title.textContent = "Cast";
  title.style.color = "white";
  title.setAttribute("class", "text-center mb-5");
  container.appendChild(title);

  const cardContainer = document.createElement("div");
  cardContainer.setAttribute(
    "class",
    "card-container d-flex flex-wrap justify-content-center gap-5"
  );

  results.forEach((item) => {
    const card = Card(item);
    cardContainer.appendChild(card);
  });

  container.appendChild(cardContainer);

  return container;
};
