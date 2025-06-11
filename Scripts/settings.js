document.addEventListener("DOMContentLoaded", () => {
    const settingsModal = document.getElementById("settings-modal");
    const settingsButton = document.getElementById("settings-button");
    const closeSettingsBtn = document.getElementById("close-settings");

    if (settingsButton) {
        settingsButton.addEventListener("click", (e) => {
            e.preventDefault();
            settingsModal.classList.remove("hidden");
        });
    }

    closeSettingsBtn.addEventListener("click", (e) => {
        e.preventDefault();
        settingsModal.classList.add("hidden");
    });

    // FULLSCREEN toggle
    const fullscreenToggle = document.getElementById("fullscreen-toggle");
    fullscreenToggle.addEventListener("click", () => {
        fullscreenToggle.classList.toggle("active");
        const status = fullscreenToggle.querySelector(".toggle-status");
        if (fullscreenToggle.classList.contains("active")) {
            status.textContent = "On";
            document.documentElement.requestFullscreen().catch(err => console.log("Fullscreen error", err));
            localStorage.setItem("fullscreen", "true");
        } else {
            status.textContent = "Off";
            if (document.fullscreenElement) document.exitFullscreen();
            localStorage.setItem("fullscreen", "false");
        }
    });

    // SOUND toggle
    const soundToggle = document.getElementById("sound-toggle");
    soundToggle.addEventListener("click", () => {
        soundToggle.classList.toggle("active");
        const status = soundToggle.querySelector(".toggle-status");
        status.textContent = soundToggle.classList.contains("active") ? "On" : "Off";
    });

    // LANGUAGE dropdown
    const languageHeader = document.getElementById("language-header");
    const languageOptions = document.getElementById("language-options");
    const arrow = document.getElementById("language-dropdown-toggle");

    languageHeader.addEventListener("click", () => {
        if (languageOptions.style.display === "flex") {
            languageOptions.style.display = "none";
            arrow.classList.remove("open");
        } else {
            languageOptions.style.display = "flex";
            arrow.classList.add("open");
        }
    });

    document.querySelectorAll(".language-option").forEach(option => {
        option.addEventListener("click", () => {
            document.querySelectorAll(".language-option").forEach(o => o.classList.remove("selected"));
            option.classList.add("selected");

            document.querySelectorAll(".language-option img.language-heart").forEach(img => img.remove());

            const heartImg = document.createElement("img");
            heartImg.src = "../Sprites/Default/UI/UI_heart_R.svg";
            heartImg.classList.add("language-heart");
            option.appendChild(heartImg);
        });
    });
});
