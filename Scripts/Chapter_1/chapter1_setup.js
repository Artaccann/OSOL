// Nastavení scén v Chapter 1 (včetně postav a pozadí)

function setupChapter1Scene(sceneName) {
  characters.length = 0;

  switch (sceneName) {
    case "chapter1":
      base_image = CH1_BACKGROUNDS.oldroom;
      characters.push(
        { ...CH1_CHARACTERS.doctor,
          position: "center",
          currentEmotion: "happy"
        }
      );
      break;

   case "ch1_joke_yes":
  base_image = CH1_BACKGROUNDS.outside;
  characters.push(
    { ...CH1_CHARACTERS.advisor, position: "left", currentEmotion: "neutral" },
    { ...CH1_CHARACTERS.maid, position: "right", currentEmotion: "happy" }
  );
  break;


    default:
      console.warn("Neznámá scéna:", sceneName);
  }

  resizeCanvas();     // Vykreslí BG
  drawCharacters();   // Vykreslí postavy
}
