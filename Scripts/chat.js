const apiKey = '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';
const modelId = 'ft:gpt-4.1-2025-04-14:aneee:laziel:BYquVXCx';

const chat = document.getElementById("chat-messages");
const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const returnBtn = document.getElementById("returnBtn");

const messages = [
  { role: "system", content: "You are Laziel, but prefer Laz. ..." }
];

sendBtn.addEventListener("click", sendMessage);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

returnBtn.addEventListener("click", () => {
  localStorage.setItem("showDemoEnd", "true");
  window.location.href = "Game.html";
});


async function sendMessage() {
  const userMessage = input.value.trim();
  if (!userMessage) return;

  addMessageBubble(userMessage, "player");
  messages.push({ role: "user", content: userMessage });
  input.value = "";

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: modelId,
        messages,
        temperature: 0.7
      })
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "Žádná odpověď.";
    messages.push({ role: "assistant", content: reply });
    addMessageBubble(reply, "ai");

  } catch (err) {
    console.error("❌ Chyba při odesílání zprávy:", err);
    addMessageBubble("Chyba při spojení s AI.", "ai");
  }
}

function addMessageBubble(text, type) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("chat-bubble", `bubble-${type}`);

  const img = document.createElement("img");
  img.src = type === "ai" ? "../Sprites/Default/UI/UI_chat_bubble_character.svg" : "../Sprites/Default/UI/UI_chat_bubble_player.svg";
  img.alt = type === "ai" ? "Lazielova bublina" : "Hráčova bublina";

  const txt = document.createElement("div");
  txt.className = "chat-text";
  txt.textContent = text;

  wrapper.appendChild(img);
  wrapper.appendChild(txt);
  chat.appendChild(wrapper);
  chat.scrollTop = chat.scrollHeight;
}
