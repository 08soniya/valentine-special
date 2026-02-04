function nextSlide(current) {
  document.getElementById("s" + current).classList.remove("active");
  document.getElementById("s" + (current + 1)).classList.add("active");
}
