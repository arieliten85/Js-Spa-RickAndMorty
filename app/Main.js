export const Main = () => {
  const main = document.createElement("main");
  main.id = "section";

  main.setAttribute(
    "class",
    "card-container d-flex flex-wrap justify-content-center gap-5 mt-5"
  );
  return main;
};
