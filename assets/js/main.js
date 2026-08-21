/* Collect - interactions (aucune dependance) */
(function () {
  "use strict";

  /* --- Menu mobile --- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      links.classList.toggle("is-open", !open);
    });

    links.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        toggle.setAttribute("aria-expanded", "false");
        links.classList.remove("is-open");
      }
    });
  }

  /* --- Bordure du header au scroll --- */
  var header = document.querySelector(".site-header");

  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* --- Apparition au scroll --- */
  var targets = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    targets.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry, i) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        el.style.transitionDelay = Math.min(i * 70, 280) + "ms";
        el.classList.add("is-visible");
        observer.unobserve(el);
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
  );

  targets.forEach(function (el) {
    observer.observe(el);
  });
})();
