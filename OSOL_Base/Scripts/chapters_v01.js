document.addEventListener("DOMContentLoaded", function () {
    const chapters = document.querySelectorAll(".chapter-section");

    chapters.forEach((chapter, index) => {
        chapter.addEventListener("mouseenter", function () {
            // Přesuneme aktivní sekci mírně doleva
            chapter.style.right = "-5vw";
            chapter.style.width = "85vw";
            chapter.style.zIndex = "10";

            // Ostatní sekce se sesunou doprava
            chapters.forEach((ch, i) => {
                if (ch !== chapter) {
                    ch.style.right = "5vw";
                    ch.style.width = "75vw";
                    ch.style.zIndex = i;
                }
            });
        });

        chapter.addEventListener("mouseleave", function () {
            // Vrátíme všechny sekce do původního stavu
            chapters.forEach((ch, i) => {
                ch.style.right = `${i * -10}vw`;
                ch.style.width = "-80vw";
                ch.style.zIndex = 5 - i;
            });
        });
    });
});
