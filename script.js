document.addEventListener("DOMContentLoaded", () => {
  // ---------- Theme (saved) ----------
  const themeToggle = document.getElementById("theme-toggle");

  function setTheme(mode) {
    // mode: "light" or "dark"
    document.body.classList.toggle("light", mode === "light");
    document.body.classList.toggle("dark", mode === "dark");
    localStorage.setItem("theme", mode);
    if (themeToggle) themeToggle.textContent = mode === "dark" ? "☀️" : "🌙";
  }

  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") {
    setTheme(saved);
  } else {
    // default = dark (modern look), you can change to "light" if you prefer
    setTheme("dark");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isDark = document.body.classList.contains("dark");
      setTheme(isDark ? "light" : "dark");
    });
  }

  // ---------- Contact form (no reload + feedback) ----------
  const form = document.getElementById("contact-form");
  const message = document.getElementById("form-message");

  if (form && message) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name")?.value.trim();
      const email = document.getElementById("email")?.value.trim();
      const msg = document.getElementById("message")?.value.trim();

      if (!name || !email || !msg) {
        message.textContent = "Please fill in all fields.";
        message.style.color = "crimson";
        return;
      }

      message.textContent = "Thanks! Your message is ready (demo form).";
      message.style.color = "seagreen";
      form.reset();
    });
  }

  // ---------- Scroll to top ----------
  const scrollBtn = document.getElementById("scrollTopBtn");

  function updateScrollBtn() {
    if (!scrollBtn) return;
    scrollBtn.style.display = window.scrollY > 500 ? "block" : "none";
  }

  if (scrollBtn) {
    window.addEventListener("scroll", updateScrollBtn, { passive: true });
    updateScrollBtn();

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ---------- Active nav highlight (sticky-navbar aware) ----------
  const sections = document.querySelectorAll("main section[id]");
  const desktopLinks = document.querySelectorAll("#desktop-links a[href^='#']");
  const navbar = document.querySelector(".navbar");

  function setActiveLink(id) {
    desktopLinks.forEach((a) => {
      a.classList.toggle("active", a.getAttribute("href") === `#${id}`);
    });
  }

  function updateActiveNav() {
    if (!navbar) return;

    const offset = navbar.offsetHeight + 20;
    let current = sections[0]?.id || "";

    sections.forEach((sec) => {
      const top = sec.getBoundingClientRect().top - offset;
      if (top <= 0) current = sec.id;
    });

    setActiveLink(current);
  }

  window.addEventListener("scroll", updateActiveNav, { passive: true });
  window.addEventListener("load", updateActiveNav);
  updateActiveNav();

  // ---------- Mobile drawer (off-canvas) ----------
  const menuBtn = document.getElementById("menu-btn");
  const drawer = document.getElementById("mobile-drawer");
  const backdrop = document.getElementById("backdrop");
  const closeDrawerBtn = document.getElementById("close-drawer");
  const mobileLinks = document.querySelectorAll("#mobile-links a[href^='#']");

  function openDrawer() {
    if (!drawer || !backdrop || !menuBtn) return;
    drawer.hidden = false;
    backdrop.hidden = false;
    menuBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    if (!drawer || !backdrop || !menuBtn) return;
    drawer.hidden = true;
    backdrop.hidden = true;
    menuBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  if (menuBtn) menuBtn.addEventListener("click", openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener("click", closeDrawer);
  if (backdrop) backdrop.addEventListener("click", closeDrawer);

  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeDrawer);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDrawer();
  });
});
