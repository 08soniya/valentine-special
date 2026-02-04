function yesForever() {
  document.getElementById("finalMsg").innerText =
    "Too late 😌 You are mine forever 🤍";
  confettiBurst();
  setTimeout(() => window.location.href = "valentine-week.html", 3000);
}

function moveNo() {
  const btn = document.getElementById("noBtn");
  btn.style.left = Math.random() * 70 + "%";
  btn.style.top = Math.random() * 70 + "%";
}

function confettiBurst() {
  confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
}

setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.innerHTML = "🤍";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 10000);
}, 800);
