// $(".search").on("click", function () {
//   $.ajax({
//     url: "http://www.omdbapi.com/?apikey=bbb34c58&s=" + $(".input-keyword").val(),
//     success: (results) => {
//       const movies = results.Search;
//       let cards = "";
//       movies.forEach((e) => {
//         cards += showCards(e);
//       });
//       $(".movie-container").html(cards);

//       // ketika tombol detail diklik
//       $(".modal-detail-button").on("click", function () {
//         $.ajax({
//           url: "http://www.omdbapi.com/?apikey=bbb34c58&i=" + $(this).data("imdbid"),
//           success: (e) => {
//             const movieDetail = showMovieDetail(e);
//             $(".modal-body").html(movieDetail);
//           },
//           error: (e) => {
//             console.log(e.responseText);
//           },
//         });
//       });
//     },
//     error: (e) => {
//       console.log(e.responseText);
//     },
//   });
// });

// fetch
const searchButton = document.querySelector(".search");

searchButton.addEventListener("click", function () {
  const inputKeyword = document.querySelector(".input-keyword");
  fetch("http://www.omdbapi.com/?apikey=bbb34c58&s=" + inputKeyword.value)
    .then((response) => response.json())
    .then((response) => {
      const movies = response.Search;
      let cards = "";

      movies.forEach((m) => (cards += showCards(m)));

      const movieContainer = document.querySelector(".movie-container");
      movieContainer.innerHTML = cards;

      // ketika tombol detail di-klik
      const modalDetailButton = document.querySelectorAll(".modal-detail-button");
      modalDetailButton.forEach((btn) => {
        btn.addEventListener("click", function () {
          const imdbid = this.dataset.imdbid;
          fetch("http://www.omdbapi.com/?apikey=bbb34c58&i=" + imdbid)
            .then((response) => response.json())
            .then((m) => {
              const movieDetail = showMovieDetail(m);
              const modalBody = document.querySelector(".modal-body");
              modalBody.innerHTML = movieDetail;
            });
        });
      });
    });
});

function showCards(e) {
  return `<div class="col-md-4 my-3">
                    <div class="card">
                        <img src="${e.Poster}" class="card-img-top" alt="" />
                        <div class="card-body">
                        <h5 class="card-title">${e.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${e.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${e.imdbID}">
                            Show Details
                        </a>
                        </div>
                    </div>
                </div>`;
}

function showMovieDetail(e) {
  return `<div class="container-fluid">
    <div class="row">
    <div class="col-md-3">
        <img src="${e.Poster}" class="img-fluid" />
    </div>
    <div class="col-md">
        <ul class="list-group">
        <li class="list-group-item"><h4>${e.Title} ${e.Year}</h4></li>
        <li class="list-group-item"><strong>Director : </strong> ${e.Director}</li>
        <li class="list-group-item"><strong>Actors : </strong>${e.Actors}</li>
        <li class="list-group-item"><strong>Writer : </strong>${e.Writer}</li>
        <li class="list-group-item">
            <strong>Plot : </strong><br />
            ${e.Plot}
        </li>
        </ul>
    </div>
    </div>
</div>`;
}
