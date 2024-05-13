export const CardDetails = (props) => {
  const { name, image, id, species, status, gender, origin, location } = props;
  const div = document.createElement("div");
  div.setAttribute("class", "card");
  div.style.width = "18rem";

  div.innerHTML = `
    <img src="${image}" class="card-img-top" alt="${name}">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">Species: ${species}</p>
      <p class="card-text">Status: ${status}</p>
      <p class="card-text">Gender: ${gender}</p>
      <p class="card-text">Origin: ${origin.name}</p>
      <p class="card-text">Location: ${location.name}</p>
      <a href="#/" class="btn btn-primary">Back</a>
    </div>
  `;

  return div;
};
