
(() => {
  const audio = document.getElementById("rhombusThemeAudio");
  const button = document.getElementById("rhombusMusicButton");
  const label = document.getElementById("rhombusMusicLabel");
  const icon = document.getElementById("rhombusMusicIcon");

  if (!audio || !button || !label || !icon) return;

  function updatePlayer(playing) {
    label.textContent = playing ? "PAUSE MUSIC" : "PLAY THEME";
    icon.textContent = playing ? "Ⅱ" : "▶";

    button.setAttribute("aria-pressed", String(playing));
    button.setAttribute(
      "aria-label",
      playing ? "Pause club theme music" : "Play club theme music"
    );
  }

  button.addEventListener("click", async () => {
    if (audio.paused) {
      label.textContent = "LOADING...";

      try {
        await audio.play();
        updatePlayer(true);
      } catch (error) {
        updatePlayer(false);
        label.textContent = "PLAYBACK UNAVAILABLE";
      }
    } else {
      audio.pause();
      updatePlayer(false);
    }
  });

  audio.addEventListener("play", () => updatePlayer(true));
  audio.addEventListener("pause", () => updatePlayer(false));

  audio.addEventListener("error", () => {
    updatePlayer(false);
    label.textContent = "CHECK AUDIO FILE";
  });
})();
