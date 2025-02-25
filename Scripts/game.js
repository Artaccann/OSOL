console.log('OSOL');

var canvas = document.getElementById('game-canvas');
var context = canvas.getContext('2d');

// Nastaví velikost canvasu na celou obrazovku
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Načte a vykreslí obrázek správně
make_base();

function make_base() {
    let base_image = new Image();
    base_image.src = '../Sprites/room.png';

    base_image.onload = function() {
        drawCoverImage(base_image);
    };
}

// Funkce, která vykreslí obrázek tak, aby vyplnil celý canvas, byl vycentrovaný a nedeformoval se
function drawCoverImage(img) {
    let imgRatio = img.width / img.height;
    let canvasRatio = canvas.width / canvas.height;
    
    let drawWidth, drawHeight, offsetX, offsetY;

    if (imgRatio > canvasRatio) {
        // Obrázek je širší než canvas → upravíme šířku
        drawWidth = canvas.height * imgRatio;
        drawHeight = canvas.height;
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = 0;
    } else {
        // Obrázek je vyšší než canvas → upravíme výšku
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgRatio;
        offsetX = 0;
        offsetY = (canvas.height - drawHeight) / 2;
    }

    context.clearRect(0, 0, canvas.width, canvas.height); // Vyčistí canvas před překreslením
    context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
}
