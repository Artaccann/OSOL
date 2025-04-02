console.log('OSOL');

const bgcanvas = document.getElementById('background-canvas');
const bgCtx = bgcanvas.getContext('2d');
const charcanvas = document.getElementById('character-canvas');
const charCtx = charcanvas.getContext('2d');

let base_image = CH1_BACKGROUNDS.room; // výchozí pozadí
const characters = []; // pole postav

function resizeCanvas() {
  bgcanvas.width = window.innerWidth;
  bgcanvas.height = window.innerHeight;
  charcanvas.width = window.innerWidth;
  charcanvas.height = window.innerHeight;

  drawBackground(base_image);
  drawCharacters();
}

window.addEventListener('resize', resizeCanvas);

function drawBackground(img) {
  const imgRatio = img.width / img.height;
  const canvasRatio = bgcanvas.width / bgcanvas.height;

  let drawWidth, drawHeight, offsetX, offsetY;

  if (imgRatio > canvasRatio) {
    drawWidth = bgcanvas.height * imgRatio;
    drawHeight = bgcanvas.height;
    offsetX = (bgcanvas.width - drawWidth) / 2;
    offsetY = 0;
  } else {
    drawWidth = bgcanvas.width;
    drawHeight = bgcanvas.width / imgRatio;
    offsetX = 0;
    offsetY = (bgcanvas.height - drawHeight) / 2;
  }

  bgCtx.clearRect(0, 0, bgcanvas.width, bgcanvas.height);
  bgCtx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
}

function drawCharacters() {
  charCtx.clearRect(0, 0, charcanvas.width, charcanvas.height);

  const w = charcanvas.width;
  const h = charcanvas.height;

  characters.forEach(char => {
    if (!char.image.complete) return;

    const imgRatio = char.image.width / char.image.height;
    const targetHeight = h * 0.9;
    const targetWidth = targetHeight * imgRatio;
    
    let x;
    switch (char.position) {
      case "left":
        x = w * 0.1;
        break;
      case "center":
        x = (w - targetWidth) / 2;
        break;
      case "right":
        x = w * 0.9 - targetWidth;
        break;
    }

    const y = h - targetHeight - 20;
    charCtx.drawImage(char.image, x, y, targetWidth, targetHeight);
  });
}

// Volání scény
function showScene(sceneName) {
  if (!Loader.scenes[sceneName]) {
    console.error(`❌ Chyba: Scéna '${sceneName}' neexistuje.`);
    return;
  }

  setupChapter1Scene(sceneName); // Použije kapitolu 1

  const scene = Loader.scenes[sceneName];
  let textLines = scene.text || [];

  const textContainer = document.getElementById("text-container");
  const choicesContainer = document.getElementById("choices-container");

  textContainer.innerHTML = "";
  choicesContainer.innerHTML = "";

  let index = 0;

  function showNextLine() {
    if (index < textLines.length) {
      textContainer.innerHTML = "";
      let p = document.createElement("p");
      textContainer.appendChild(p);

      typeWriterEffect(p, textLines[index], () => index++);
    } else {
      showChoices(scene.choices || []);
      textContainer.removeEventListener("click", showNextLine);
    }
  }

  textContainer.addEventListener("click", showNextLine);
  showNextLine();
}

function typeWriterEffect(element, text, callback) {
  let i = 0;
  element.innerHTML = "";
  const speed = 30;

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else if (callback) {
      callback();
    }
  }

  type();
}

function showChoices(choices) {
  const container = document.getElementById("choices-container");
  container.innerHTML = "";

  choices.forEach(choice => {
    const match = choice.match(/\[([^\]]+)\]\(#([^\)]+)\)/);
    if (match) {
      const [_, text, target] = match;
      const btn = document.createElement("button");
      btn.innerText = text;
      btn.onclick = () => showScene(target);
      container.appendChild(btn);
    }
  });
}

// Start
function startGame() {
  console.log("🚀 Spouštím hru...");
  if (!Loader.scenes["chapter1"]) {
    console.warn("⏳ Čekám na načtení...");
    setTimeout(startGame, 500);
    return;
  }
  showScene("chapter1");
}

window.onload = () => {
  startGame();
};
