document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  const footer = document.querySelector(".site-footer");

  if (footer) {
    const meta = document.createElement("p");
    meta.className = "footer-meta";
    meta.textContent = `© ${year} Circular Network LLC`;
    meta.style.marginTop = "1rem";
    meta.style.color = "#5b5d5a";
    meta.style.fontSize = "0.8rem";
    meta.style.letterSpacing = "0.08em";
    meta.style.textTransform = "uppercase";
    footer.appendChild(meta);
  }

  const sections = document.querySelectorAll("main section[id], footer[id]");
  const navLinks = document.querySelectorAll(".main-nav a");

  const activateLink = (id) => {
    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("active", isActive);
      link.style.color = isActive ? "#1e2121" : "";
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activateLink(entry.target.id);
        }
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach((section) => {
    if (section.id) observer.observe(section);
  });
});
