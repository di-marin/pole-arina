const navLinks = Array.from(document.querySelectorAll(".topbar__links a"));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = `#${entry.target.id}`;
      const link = navLinks.find((item) => item.getAttribute("href") === id);
      if (!link) {
        return;
      }
      if (entry.isIntersecting) {
        navLinks.forEach((item) => item.classList.remove("is-active"));
        link.classList.add("is-active");
      }
    });
  },
  {
    rootMargin: "-40% 0px -45% 0px",
    threshold: 0
  }
);

sections.forEach((section) => navObserver.observe(section));

const modal = document.querySelector(".media-modal");
const modalImage = modal?.querySelector("img");
const modalCaption = modal?.querySelector(".media-modal__caption");
const modalClose = modal?.querySelector(".media-modal__close");
const mediaButtons = Array.from(document.querySelectorAll("[data-modal-image]"));

if (modal && modalImage && modalCaption && modalClose) {
  mediaButtons.forEach((button) => {
    button.addEventListener("click", () => {
      modalImage.src = button.dataset.modalImage;
      modalImage.alt = button.dataset.modalAlt || "";
      modalCaption.textContent = button.dataset.modalCaption || "";
      modal.showModal();
    });
  });

  modalClose.addEventListener("click", () => modal.close());

  modal.addEventListener("click", (event) => {
    const bounds = modal.getBoundingClientRect();
    const insideDialog =
      event.clientX >= bounds.left &&
      event.clientX <= bounds.right &&
      event.clientY >= bounds.top &&
      event.clientY <= bounds.bottom;
    if (!insideDialog) {
      modal.close();
    }
  });
}

const copyBibtexButton = document.querySelector("[data-copy-bibtex]");
const bibtexBlock = document.querySelector("#bibtex-block");

if (copyBibtexButton && bibtexBlock) {
  copyBibtexButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(bibtexBlock.textContent.trim());
      copyBibtexButton.textContent = "Copied";
      window.setTimeout(() => {
        copyBibtexButton.textContent = "Copy BibTeX";
      }, 1800);
    } catch (_error) {
      copyBibtexButton.textContent = "Copy failed";
      window.setTimeout(() => {
        copyBibtexButton.textContent = "Copy BibTeX";
      }, 1800);
    }
  });
}
