function checkQ1() {
  const selected = document.querySelector('input[name="q1"]:checked');
  if (!selected) return;

  selected.value === "correct"
    ? nextSlide(2)
    : alert("Sach bolo mister 😏");
}

function correctQ2() {
  nextSlide(3);
}

function wrongQ2() {
  alert("Look carefully baby 😌");
}

function checkQ3() {
  const selected = document.querySelector('input[name="q3"]:checked');
  if (!selected) return;

  if (["tumsehi", "perfect"].includes(selected.value)) {
    nextSlide(4);
    confettiBurst();
  } else {
    alert("Think again about our dance 💃");
  }
}
