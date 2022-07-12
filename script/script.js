const projects = [
  {
    id: 1,
    gambar: "img/1.png",
    name: "Narama Mandiri",
    deskripsi: "ini adalah deksripsi untuk narama mandiri",
    tools: "Html, CSS, Javascript",
    url: "#",
  },
  {
    id: 2,
    gambar: "img/2.png",
    name: "Politeawoawaows Medicare",
    deskripsi: "",
    tools: "Html, CSS, Javascript",
    url: "#",
  },
  {
    id: 3,
    gambar: "img/3.png",
    name: "Bogor Berwisata",
    deskripsi: "",
    tools: "Html, CSS, Javascript",
    url: "#",
  },
  {
    id: 4,
    gambar: "img/4.png",
    name: "Game Suit Jawa",
    deskripsi: "",
    tools: "Html, CSS, Javascript",
    url: "projects/gameSuitJawa/index.html",
  },
  {
    id: 5,
    gambar: "img/5.png",
    name: "Movie Searcher App",
    deskripsi: "",
    tools: "Html, CSS, Javascript",
    url: "projects/movieFinder/index.html",
  },
  {
    id: 6,
    gambar: "img/6.png",
    name: "Weather App",
    deskripsi: "",
    tools: "Html, CSS, Javascript",
    url: "projects/weatherApp/index.html",
  },
  {
    id: 7,
    gambar: "img/7.png",
    name: "Music Player App",
    deskripsi: "",
    tools: "Html, CSS, Javascript",
    url: "projects/musicPlayer/index.html",
  },
];

const modalcontent = document.querySelector(".modal-content");

// harus tau setiap gambar yang di klik
// setiapp gambar yang diklik itu nampilin data data dari gambar tersebut

// 1. tangkap dulu elemen gambar nya
const gambar = document.querySelectorAll(".direct");

gambar.forEach((gambarSatuan) => {
  gambarSatuan.addEventListener("click", function () {
    const project = projects[gambarSatuan.id];
    let modal = "";
    modal += showIsiModal(project);
    modalcontent.innerHTML = modal;
  });
});

function showIsiModal(isi) {
  return `<div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row justify-content-center">
              <img src="${isi.gambar}" class="thumb" alt="..." width="100px" />
            </div>
            <div class="row">
              <ul class="list-group">
                <li class="list-group-item"><strong>Project Name : </strong> ${isi.name} </li>
                <li class="list-group-item"><strong>Project Description : </strong> ${isi.deskripsi} </li>
                <li class="list-group-item"><strong><i class="bi bi-gear-fill"></i></strong> ${isi.tools} </li>
              </ul>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-dark" onclick="window.location.href='${isi.url}'">View Live Demo</button>
            <button type="button" class="btn btn-dark">View Source Code</button>
          </div>`;
}
