const musicBtn = document.querySelector(".music-btn");

music.addEventListener("play", () => {
    musicBtn.textContent = "❚❚";
});

music.addEventListener("pause", () => {
    musicBtn.textContent = "♫";
});

function toggleMusic() {
    music.paused ? music.play() : music.pause();
}
