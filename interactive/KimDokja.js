const music = document.getElementById("eternity");
const playButton = document.querySelector(".play");
const pauseButton = document.querySelector(".pause");

playButton.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    playButton.style.display = "none";
    pauseButton.style.display = "inline-block";
  }
});

pauseButton.addEventListener("click", () => {
  if (!music.paused) {
    music.pause();
    pauseButton.style.display = "none";
    playButton.style.display = "inline-block";
  }
});
