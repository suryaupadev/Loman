# LOMAN — Smart eyewear website concept

LOMAN is a responsive, single-page website for a smart-eyewear design concept. It turns a visual brief into a complete product story: an editorial hero, product overview, feature explanations, design details, a closing call to action, and a compact footer.

The page uses real HTML text, custom CSS, and three AI-generated transparent PNG renders of one eyewear concept. It is built with plain HTML, CSS, and JavaScript, so there is no framework, package install, or build step. The images are illustrative concept art, not manufacturing-accurate product renders or evidence of available product features.

**Live website:** [suryaupadev.github.io/Loman](https://suryaupadev.github.io/Loman/)

**Public source code:** [github.com/suryaupadev/Loman](https://github.com/suryaupadev/Loman)

## Run it locally

With Node.js installed, run:

```sh
npm run dev
```

Open [http://localhost:4173](http://localhost:4173). You can also open `index.html` directly, though a local server gives the most reliable browser behavior.

## What you can learn from this project

- **Page structure:** Use semantic HTML landmarks, headings, links, buttons, and image descriptions to make a marketing page easier to navigate and understand.
- **Responsive layout:** Build the desktop composition and a purpose-designed mobile layout with CSS Grid, Flexbox, fluid type, breakpoints, and viewport-aware sizing.
- **Above-the-fold design:** Balance the headline, product image, calls to action, and feature row so the hero fits common laptop, tablet, and phone screens.
- **Product image consistency:** Reuse one transparent product render across sections, then introduce side and front views for other angles. CSS backgrounds create the scene without baking it into each PNG.
- **Accessible interaction:** Make the mobile menu keyboard-friendly, reflect its state with ARIA, and use the native `<dialog>` element for the film, product, and information panels.
- **Honest product communication:** Present this as a design concept and avoid treating generated visuals or illustrative descriptions as verified product specifications.
- **Static site deployment:** Publish a buildless website from GitHub with a GitHub Actions workflow and GitHub Pages.

## Project files

| File | Purpose |
| --- | --- |
| `index.html` | Page content and section structure |
| `styles.css` | Visual design, responsive layouts, and CSS-drawn interface details |
| `script.js` | Mobile navigation, waveform decoration, and accessible information dialogs |
| `server.js` | Small dependency-free local preview server |
| `assets/loman-hero.png` | Transparent three-quarter product view, reused in the hero and closing section |
| `assets/loman-side.png` | Transparent side view for the product and experience sections |
| `assets/loman-front.png` | Transparent front view for the design section |
| `assets/dm-sans-variable.ttf` | Locally hosted variable font |
| `assets/FONT-LICENSE.txt` | DM Sans license |
| `design-reference.png` | Visual reference used while building the page |
| `.github/workflows/pages.yml` | Publishes the static website to GitHub Pages when `main` changes |

## Deployment

The included GitHub Actions workflow stages the website files and publishes them to GitHub Pages whenever code is pushed to `main`. GitHub Pages is configured to use the workflow. After the first successful deployment, the public URL follows this format: `https://suryaupadev.github.io/Loman/`.

## Image notes

The three product renders were generated with OpenAI imagegen using the original page image as a visual reference. The prompts specified a consistent ivory wraparound frame, smoke lenses, centered nose bridge, round temple camera, small angular mark, sculpted temples, transparent background, and the required viewing angle. The design reference and images are included to make the visual decisions reviewable.
