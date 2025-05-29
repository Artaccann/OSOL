window.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('menu-bg-video');
  const logo = document.getElementById('logo_mark');
  const menu = document.querySelector('.menu-box');
  const continueBtn = document.getElementById("continue-button");

  const cameFromGame = /Game\.html|Chapters\.html|Settings\.html/.test(document.referrer);

   const newGameBtn = document.getElementById("new-game-button");

newGameBtn?.addEventListener("click", () => {
  localStorage.setItem("startWithCutscene", "true");
  window.location.href = "Game.html";
});




  function loadGameProgress() {
  const raw = localStorage.getItem("osol-save");
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch (e) {
    console.warn("❌ Chyba při čtení uložené pozice:", e);
    return null;
  }
}

  // ⬇️ Přidání tlačítka Continue
  const save = loadGameProgress();

  console.log("🔍 continueBtn: ", continueBtn);
  console.log("📦 save: ", save);

  if (continueBtn && save) {
    continueBtn.style.display = "block";
    continueBtn.addEventListener("click", () => {
      localStorage.setItem("loadFromSave", "true");
      window.location.href = "Game.html";
    });
  }

  if (cameFromGame) {
    // Při návratu z hry – rovnou zobrazit stav po intru
    logo.style.opacity = '1';
    logo.style.top = '3%';
    logo.style.left = '95%';
    logo.style.transform = 'translate(-100%, 0) scale(0.6)';
    menu.style.opacity = '1';

    video.addEventListener('loadedmetadata', () => {
      video.currentTime = video.duration - 0.1;
      video.pause();
    });
  } else {
    const startIntro = () => {
      setTimeout(() => {
        logo.style.opacity = '1';
      }, 2000);
    
      setTimeout(() => {
        logo.style.top = '3%';
        logo.style.left = '95%';
        logo.style.transform = 'translate(-100%, 0) scale(0.6)';
      }, 3000);
    
      setTimeout(() => {
        menu.style.opacity = '1';
      }, 4500);
    };
    
    if (document.hidden) {
      document.addEventListener('visibilitychange', () => {
        if (!document.hidden) {
          startIntro();
        }
      });
    } else {
      startIntro();
    }
  }
});
