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

const progressFill = document.getElementById("progress-fill");
const progressDot = document.getElementById("progress-dot");
const currentTime = document.querySelector("#time-info span:first-child");
const totalDuration = document.querySelector("#time-info span:last-child");

function formatTime(sec) {
  if (isNaN(sec)) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}

music.addEventListener("loadedmetadata", () => {
  totalDuration.textContent = formatTime(music.duration);
});

music.addEventListener("timeupdate", () => {
  const progressPercent = (music.currentTime / music.duration) * 100;
  progressFill.style.width = `${progressPercent}%`;
  currentTime.textContent = formatTime(music.currentTime);
});
