const music = document.getElementById("eternity");
const playButton = document.querySelector(".play");

playButton.addEventListener("click"),
  () => {
    if (music.paused) {
      music.play();
      playButton.classList.remove("fa-solid fa-play");
      playButton.classList.add("fa-solid fa-pause");
    } else {
      music.pause();
      playButton.classList.remove("fa-solid fa-pause");
      playButton.classList.add("fa-solid fa-play");
    }
  };
