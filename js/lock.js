const giftDates = {
  rose: "2026-02-07",
  propose: "2026-02-08",
  chocolate: "2026-02-09",
  teddy: "2026-02-10",
  promise: "2026-02-11",
  hug: "2026-02-12",
  valentine: "2026-02-14"
};

function openGift(day) {
  const today = new Date().toISOString().split("T")[0];

  if (today >= giftDates[day]) {
    window.location.href = `gifts/${day}.html`;
  } else {
    alert("Shhh 🤫 This gift unlocks on its special day 💕");
  }
}
