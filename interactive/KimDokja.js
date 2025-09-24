const music = document.getElementById("eternity");
const playButton = document.querySelector(".play");
const pauseButton = document.querySelector(".pause"); // make sure this exists in HTML!

playButton.addEventListener("click", () => {
  music.paused;
  music.play();
  playButton.style.display = "none";
  pauseButton.style.display = "block";
});

pauseButton.addEventListener("click", () => {
  !music.paused;
  music.pause();
  pauseButton.style.display = "none";
  playButton.style.display = "block";
});
