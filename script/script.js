const projects = [
  {
    id: 1,
    name: "Narama Mandiri",
    deskripsi: "ini adalah deksripsi untuk narama mandiri",
    url: "",
  },
  {
    id: 1,
    name: "Politeknik Kesehatan Genesis Medicare",
    deskripsi: "",
    url: "",
  },
  {
    id: 1,
    name: "Bogor Berwisata",
    deskripsi: "",
    url: "",
  },
  {
    id: 1,
    name: "Game Suit Jawa",
    deskripsi: "",
    url: "",
  },
  {
    id: 1,
    name: "Movie Searcher App",
    deskripsi: "",
    url: "",
  },
  {
    id: 1,
    name: "Weather App",
    deskripsi: "",
    url: "",
  },
  {
    id: 1,
    name: "Music Player App",
    deskripsi: "",
    url: "",
  },
];

const testing = document.querySelector(".testing");

const iseng = document.querySelector(".iseng");

const tombol = document.querySelector(".tombol");

tombol.addEventListener("click", function () {
  let project = "";
  projects.forEach((m) => {
    project += showProject(m);
  });
  iseng.innerHTML = project;
});

function showProject(m) {
  return `<h1>${m.name}</h1>
            <h2>${m.deskripsi}</h2>
            <h3><a href="${m.url}">go to page</a></h3>`;
}
