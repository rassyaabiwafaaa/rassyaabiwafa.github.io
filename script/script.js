const projects = [
  {
    id: 1,
    gambar: "img/2.png",
    name: "Politeawoawaows Medicare",
    deskripsi: "",
    tools: "Html, CSS, Javascript",
    url: "projects/poltekkes/index.html",
  },
  {
    id: 2,
    gambar: "img/3.png",
    name: "Bogor Berwisata",
    deskripsi: "",
    tools: "Html, CSS, Javascript",
    url: "#",
  },
  {
    id: 3,
    gambar: "img/4.png",
    name: "Game Suit",
    deskripsi: "a simple game that let you pick 1 of 3 choice and computer will pick the same thing, but randomly, and the program decide who win, this game similiar with Rock, Paper,Scissor but in Indonesia version",
    tools: "Html, CSS, Javascript",
    url: "projects/gameSuitJawa/index.html",
  },
  {
    id: 4,
    gambar: "img/5.png",
    name: "Movie Searcher App",
    deskripsi: "",
    tools: "Html, CSS, Javascript",
    url: "projects/movieFinder/index.html",
  },
  {
    id: 5,
    gambar: "img/6.png",
    name: "Weather App",
    deskripsi: "an App that allow you to know what weather condisition at some place, the information include the weather, temp, and humidity",
    tools: "Html, CSS, Javascript",
    url: "projects/weatherApp/index.html",
  },
  {
    id: 6,
    gambar: "img/7.png",
    name: "Music Player App",
    deskripsi: "Music player that base on website, and like usual music player, this App can be play next and previous song, shuffle, and replay and build by HTML, CSS, and Javascript",
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
  if (isi.id == 2) {
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
              <button type="button" class="btn btn-dark" onclick="window.location.href='${isi.url}'">View Source Code</button>
            </div>`;
  } else {
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
              <button type="button" class="btn btn-dark" onclick="window.location.href='${isi.url}'">View The Project</button>
            </div>`;
  }
}

if (window.innerWidth < 500) {
  document.body.style.backgroundColor = "blue";
}
