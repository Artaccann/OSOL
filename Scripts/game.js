console.log('OSOL');

var canvas = document.getElementById('game-canvas');
var context = canvas.getContext('2d');

// Funkce pro nastavení velikosti canvasu a překreslení obrázku
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawCoverImage(base_image);
}

// Načte obrázek a uloží ho do proměnné
let base_image = new Image();
base_image.src = '../Sprites/room.png';
base_image.onload = function () {
    resizeCanvas(); // Zavolá se, jakmile se obrázek načte
};

// Překresluje obrázek tak, aby pokrýval celý canvas
function drawCoverImage(img) {
    let imgRatio = img.width / img.height;
    let canvasRatio = canvas.width / canvas.height;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (imgRatio > canvasRatio) {
        drawWidth = canvas.height * imgRatio;
        drawHeight = canvas.height;
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = 0;
    } else {
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgRatio;
        offsetX = 0;
        offsetY = (canvas.height - drawHeight) / 2;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
}

// Event listener pro změnu velikosti okna
window.addEventListener('resize', resizeCanvas);


// Spuštění hry a vykreslení první scény
function startGame() {
    console.log("🚀 Spouštím hru...");
    console.log("📌 Kontrola Loader.scenes při startu:", Loader.scenes);

    if (!Loader.scenes["chapter1"]) {
        console.error("❌ Chyba: Scéna 'chapter1' nebyla načtena. Čekám 500ms...");
        setTimeout(startGame, 500); // Pokud není načteno, čeká a zkouší znovu
        return;
    }

    console.log("✅ Scéna 'chapter1' byla načtena:", Loader.scenes["chapter1"]);
    showScene("chapter1"); // První scéna


}



console.log("📌 Loader.scenes před spuštěním hry:", Loader.scenes);
console.log("📌 Loader.scenes['chapter1'] před spuštěním hry:", Loader.scenes["chapter1"]);


function showScene(sceneName) {
    let scene = Loader.scenes[sceneName];
    if (!scene) {
        console.error(`❌ Chyba: Scéna '${sceneName}' neexistuje.`);
        return;
    }
    


    console.log(`📌 Zobrazení scény '${sceneName}':`, scene);

    let textContainer = document.getElementById("text-container");
    textContainer.innerHTML = ""; // ❗ Vymaže předchozí text

    let choicesContainer = document.getElementById("choices-container");
    choicesContainer.innerHTML = ""; // ❗ Vymaže předchozí tlačítka

    let textLines = scene.text || [];
    if (textLines.length === 0) {
        console.warn(`⚠️ Scéna '${sceneName}' nemá žádný text!`);
        textLines = ["⚠️ Tato scéna je prázdná!"];
    }

    let index = 0; // Aktuální řádek

    function showNextLine() {
        if (index < textLines.length) {
            textContainer.innerHTML = ""; // ❗ Vymaže předchozí řádek

            let p = document.createElement("p");
            textContainer.appendChild(p);

            typeWriterEffect(p, textLines[index], () => {
                index++;
            });
        } else {
            console.log("✅ Konec textu. Zobrazím volby.");
            showChoices(scene.choices || []);
            textContainer.removeEventListener("click", showNextLine);
        }
    }

    textContainer.addEventListener("click", showNextLine);
    showNextLine(); // Zobrazí první řádek
}

// Efekt psacího stroje (text se zobrazuje znak po znaku)
function typeWriterEffect(element, text, callback) {
    let i = 0;
    element.innerHTML = ""; // Vymaže starý text
    let speed = 30; // Rychlost psaní (v ms)

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            if (callback) callback(); // Zavolá callback po dopsání
        }
    }

    type();
}


// Zobrazí možnosti volby hráče
function showChoices(choices) {
    let choicesContainer = document.getElementById("choices-container");
    choicesContainer.innerHTML = ""; // Vymaže předchozí volby

    choices.forEach(choice => {
        let match = choice.match(/\[([^\]]+)\]\(#([^\)]+)\)/);
        if (match) {
            let choiceText = match[1]; // Text volby
            let targetScene = match[2]; // Cílová scéna

            let button = document.createElement("button");
            button.innerText = choiceText;
            button.onclick = function() {
                showScene(targetScene);
            };
            choicesContainer.appendChild(button);
        }
    });
}

// Kliknutím na text se přeskočí animace psacího stroje
document.getElementById("text-container").addEventListener("click", function() {
    let textContainer = document.getElementById("text-container");
    if (textContainer.innerHTML.length < textContainer.dataset.fullText.length) {
        textContainer.innerHTML = textContainer.dataset.fullText; // Okamžitě zobrazí celý text
    }
});

function showNextLine() {
    if (index < textLines.length) {
        textContainer.innerHTML = ""; // ❗ Vymaže předchozí řádek

        let p = document.createElement("p");
        textContainer.appendChild(p);

        typeWriterEffect(p, textLines[index], () => {
            index++;

            // Dynamická úprava velikosti text-boxu a dialog-window
            let textBox = document.querySelector(".text-box");
            let dialogWindow = document.querySelector(".dialog-window");

            textBox.style.height = "auto"; // Reset výšky
            dialogWindow.style.height = "auto"; // Reset výšky

            let newHeight = Math.min(textContainer.scrollHeight + 40, window.innerHeight * 0.5) + "px"; // Zvětší, ale nikdy nepřekročí 50 % výšky okna
            textBox.style.height = newHeight;
            dialogWindow.style.height = newHeight;
        });
    } else {
        console.log("✅ Konec textu. Zobrazím volby.");
        showChoices(scene.choices || []);
        textContainer.removeEventListener("click", showNextLine);
    }

    function skipToNextChoice() {
    console.log("⏩ Skip stisknut! Přeskakuji na další rozhodnutí...");

    // Najdeme nejbližší rozhodnutí (choice) v aktuální scéně
    while (index < textLines.length) {
        if (textLines[index].match(/\[([^\]]+)\]\(#([^\)]+)\)/)) {
            console.log(`⏩ Přeskočeno k volbě: ${textLines[index]}`);
            textContainer.innerHTML = ""; // Vyčistí text
            showChoices(scene.choices || []); // Zobrazí volby
            return;
        }
        index++;
    }

    // Pokud ve scéně žádné rozhodnutí není, necháme hru doběhnout normálně
    console.log("⏩ Nebyla nalezena žádná volba, pokračuji normálně.");
    index = textLines.length; 
}

    
}

