export const Card = (props) => {
  const { name, image, id, species } = props;
  const div = document.createElement("div");
  div.setAttribute("class", "card");
  div.style.width = "18rem";

  document.addEventListener("click", (e) => {
    if (e.target.className == "btn btn-primary") {
      localStorage.setItem("id", e.target.id);
    }
  });

  div.innerHTML = `
    <img src="${image}" class="card-img-top" alt="${name}">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${species}</p>
      <a href="#/${name}" id=${id} class="btn btn-info text-white">See more</a>
    </div>
  `;

  return div;
};
