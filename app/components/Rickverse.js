export const Rickverse = () => {
  const container = document.createElement("div");
  container.classList.add("container");

  const row = document.createElement("div");
  row.classList.add("row");

  const col = document.createElement("div");
  col.classList.add("col", "p-4");

  const title = document.createElement("h2");
  title.classList.add("mt-4", "mb-4");
  title.textContent = "Exploring the Rickdom: A Look at Rick and Morty";
  title.style.color = "white";

  const paragraphs = [
    "Rick and Morty is an adult animated television series created by Justin Roiland and Dan Harmon. The series follows the adventures of an eccentric, alcoholic scientist named Rick Sanchez and his grandson Morty Smith, who travel through space and alternate dimensions on various intergalactic adventures. The series combines elements of science fiction, absurd comedy, and satire. Here are some key points about the series:",
    "Main characters: Rick Sanchez is a scientific genius but also an alcoholic and selfish. Morty Smith is his grandson, a shy and nervous teenager who often accompanies Rick on his travels. Other members of the Smith family are also present, including Rick's daughter Beth, her husband Jerry, and their daughter Summer.",
    "Humor and themes: Rick and Morty is known for its dark humor, its satire of pop culture, and its exploration of existential and philosophical themes. The series addresses themes such as morality, family, identity, and mortality in a unique and often unexpected way.",
    "Expansive Universe: The series features a vast universe filled with alien planets, alternate dimensions, and a variety of quirky and bizarre characters.",
    "Reception: Rick and Morty has been critically acclaimed and has won numerous awards, including the Emmy Award. It has developed a large fan base who appreciate its intelligent humor and its ability to mix the absurd with the thoughtful.",
    "Creators: Justin Roiland, who also voices the main characters, is known for his unique and often grotesque style of comedy. Dan Harmon, co-creator of the Community series, brings his talent for writing and serialized storytelling. The series has been renewed for multiple seasons and has spawned a wide range of spin-offs, including comics, video games, and merchandise. Its cultural impact has been significant, making it one of the most influential animated series of the decade.",
  ];

  const ul = document.createElement("ul");
  paragraphs.forEach((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    li.style.color = "white";
    ul.appendChild(li);
  });

  const button = document.createElement("a");
  button.classList.add("btn", "btn-info", "text-white", "mx-4", "float-end");
  button.textContent = "Back";
  button.href = "#/";

  col.appendChild(title);
  col.appendChild(ul);
  col.appendChild(button);
  row.appendChild(col);
  container.appendChild(row);

  return container.innerHTML;
};
