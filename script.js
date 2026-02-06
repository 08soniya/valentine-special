let heartsStarted = false;

function startFloatingHearts() {
  if (heartsStarted) return;
  heartsStarted = true;

  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "floating-heart";

    const hearts = ["💖", "💗", "💕", "🤍","🌹","🍫"];
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 18 + 14) + "px";
    heart.style.opacity = Math.random() * 0.8 + 0.2;

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 10000);
  }, 700);
}

startFloatingHearts();

function nextSlide(from, to) {
  document.getElementById(from)?.classList.remove("active");
  document.getElementById(to)?.classList.add("active");
}
