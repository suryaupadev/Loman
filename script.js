const menuButton = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");
menuButton.addEventListener("click", () => {
  const expanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!expanded));
  menuButton.setAttribute(
    "aria-label",
    expanded ? "Open navigation" : "Close navigation",
  );
  mobileMenu.hidden = expanded;
});
mobileMenu.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    mobileMenu.hidden = true;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
  }),
);

const waveform = document.querySelector(".waveform");
[5, 12, 22, 40, 61, 76, 51, 34, 22, 14, 10, 7, 5, 3, 2].forEach((height) => {
  const bar = document.createElement("i");
  bar.style.height = `${height}%`;
  waveform.append(bar);
});

const dialog = document.querySelector("#info-dialog");
const title = document.querySelector("#dialog-title");
const content = document.querySelector("#dialog-content");
const views = {
  product: {
    title: "A new perspective.",
    html: '<img src="assets/loman-hero.png" alt="Loman eyewear design concept"><p>Loman is a smart eyewear design concept exploring a balance of vision, open-ear sound and everyday assistance.</p><p>This page is a visual product study. Availability, pricing and final specifications have not been announced.</p><a class="button" href="#product" data-dismiss>Explore the design <span aria-hidden="true">↗</span></a>',
  },
  film: {
    title: "The Loman perspective.",
    html: '<img src="assets/loman-hero.png" alt="Three-quarter view of the Loman eyewear concept"><p>A new perspective on everyday life.</p><p>A campaign film has not been supplied for this concept. Explore the product details below.</p><a class="button" href="#experience" data-dismiss>Explore the experience <span aria-hidden="true">↗</span></a>',
  },
  contact: {
    title: "Get in touch.",
    html: "<p>This is a Loman smart eyewear design concept. A brand contact address has not been provided.</p><p>For project enquiries, use the contact details of the designer or team who shared this website.</p>",
  },
  privacy: {
    title: "Your privacy.",
    html: "<p>This concept website has no sign-up form, analytics or account system. It does not intentionally collect personal information or store data in your browser.</p><p>Images, fonts and scripts are served locally. The page makes no external font or analytics requests.</p>",
  },
  terms: {
    title: "About this concept.",
    html: "<p>This website is a visual design demonstration. Product images are AI-generated concept renders.</p><p>Descriptions illustrate the proposed experience. They are not verified product specifications, a sales offer or a guarantee of availability.</p>",
  },
};
document.querySelectorAll("[data-open]").forEach((button) =>
  button.addEventListener("click", () => {
    const view = views[button.dataset.open];
    title.textContent = view.title;
    content.innerHTML = view.html;
    dialog.showModal();
  }),
);
document
  .querySelector(".dialog-close")
  .addEventListener("click", () => dialog.close());
content.addEventListener("click", (event) => {
  if (event.target.closest("[data-dismiss]")) dialog.close();
});
dialog.addEventListener("click", (event) => {
  const rect = dialog.getBoundingClientRect();
  if (
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom
  )
    dialog.close();
});
