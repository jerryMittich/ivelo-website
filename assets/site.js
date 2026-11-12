// iVelo Apps – Animationen beim Scrollen. Keine Cookies, kein Tracking.
(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Elemente einblenden, sobald sie ins Bild kommen.
  var reveals = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  }

  // Scroll-Fortschritt als CSS-Variable: --s für den Hero (0 oben, 1 nach einer
  // Bildschirmhöhe), --p für die Bühnen (0 beim Hereinkommen, 1 in der Mitte).
  var hero = document.querySelector("[data-hero]");
  var stages = document.querySelectorAll("[data-stage]");
  var ticking = false;

  function clamp(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }

  function update() {
    ticking = false;
    var vh = window.innerHeight;
    if (hero) {
      hero.style.setProperty("--s", clamp(window.scrollY / (vh * 0.9)).toFixed(3));
    }
    stages.forEach(function (st) {
      var r = st.getBoundingClientRect();
      // 0, wenn die Oberkante unten ins Bild kommt; 1, wenn die Mitte bei 55 % steht.
      var p = clamp((vh - r.top) / (vh - vh * 0.55 + r.height / 2));
      st.style.setProperty("--p", p.toFixed(3));
    });
  }

  if (!reduce && (hero || stages.length)) {
    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  // Galerie-Knöpfe.
  document.querySelectorAll("[data-gallery]").forEach(function (box) {
    var list = box.querySelector(".gallery");
    var prev = box.querySelector("[data-prev]");
    var next = box.querySelector("[data-next]");
    if (!list || !prev || !next) return;
    function step() {
      var img = list.querySelector("img");
      return img ? img.getBoundingClientRect().width + 14 : 250;
    }
    function state() {
      prev.disabled = list.scrollLeft <= 4;
      next.disabled = list.scrollLeft + list.clientWidth >= list.scrollWidth - 4;
    }
    prev.addEventListener("click", function () { list.scrollBy({ left: -step() * 2, behavior: reduce ? "auto" : "smooth" }); });
    next.addEventListener("click", function () { list.scrollBy({ left: step() * 2, behavior: reduce ? "auto" : "smooth" }); });
    list.addEventListener("scroll", state, { passive: true });
    window.addEventListener("resize", state);
    state();
  });
})();
