(() => {
  const img = document.getElementById("banner-img");
  const frame = document.getElementById("banner-frame");
  if (!img || !frame) return;

  // Build slide list based on current src path
  const src = img.getAttribute("src") || "";
  const base = src.replace(/banner1\.(jpg|png)$/i, "");
  const slides = [
    { src: base + "banner1.jpg", alt: "Banner image 1" },
    { src: base + "banner2.jpg", alt: "Banner image 2" },
    { src: base + "banner3.png", alt: "Banner image 3" },
    { src: base + "banner4.jpg", alt: "Banner image 4" },
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

  const updateAria = () => {
    frame.setAttribute(
      "aria-label",
      playing ? "Pause slideshow" : "Play slideshow"
    );
    frame.classList.toggle("is-paused", !playing);
  };

  // Toggle play/pause on click
  const toggle = () => {
    playing = !playing;
    updateAria();
  };

  frame.addEventListener("click", toggle);

  // Keyboard access: Enter/Space toggles
  frame.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  });

  updateAria();

  if (!prefersReduced) {
    setInterval(() => {
      if (playing) next();
    }, 7000);
  }
})();
