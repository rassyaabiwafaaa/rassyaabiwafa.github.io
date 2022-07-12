function getComputerOption() {
  //menangkap pilihan komputer
  //membangkitkan pilihan random
  let comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

function getResult(comp, player) {
  //menentukan rules
  if (comp == player) return "Draw";
  if (player == "gajah") return comp == "orang" ? "Win!" : "Lose";
  if (player == "orang") return comp == "gajah" ? "Lose" : "Win";
  if (player == "semut") return comp == "orang" ? "Lose" : "Win!";
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    let pilihanKomputer = getComputerOption();
    let pilihanPlayer = pil.className;
    let hasil = getResult(pilihanKomputer, pilihanPlayer);

    let imageComp = document.querySelector(".img-komputer");
    imageComp.setAttribute("src", `images/${pilihanKomputer}.png`);

    let info = document.querySelector(".info");
    info.innerHTML = hasil;
  });
});
