(() => {
  const img = document.getElementById("banner-img");
  if (!img) return;

  const base = img.src.replace(/banner1\.(jpg|png)$/i, "");
  const slides = [
    { src: base + "banner1.jpg", alt: "Arbovirus particle visualization" },
    { src: base + "banner2.jpg", alt: "Mosquito and virus illustration" },
    { src: base + "banner4.jpg", alt: "Mosquito concept image" },
  ];

  let i = 0;
  let playing = true;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const setSlide = (idx) => {
    i = (idx + slides.length) % slides.length;
    img.src = slides[i].src;
    img.alt = slides[i].alt;
  };

  const next = () => setSlide(i + 1);
  const prev = () => setSlide(i - 1);

  document.getElementById("banner-next")?.addEventListener("click", next);
  document.getElementById("banner-prev")?.addEventListener("click", prev);

  const toggleBtn = document.getElementById("banner-toggle");
  const updateToggleLabel = () => { if (toggleBtn) toggleBtn.textContent = playing ? "Pause" : "Play"; };

  toggleBtn?.addEventListener("click", () => { playing = !playing; updateToggleLabel(); });

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  });

  updateToggleLabel();
  if (!prefersReduced) {
    setInterval(() => { if (playing) next(); }, 7000);
  }
})();
