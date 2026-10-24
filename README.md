# Architecture Portfolio — Stage 03: Multi-page navigation

## Purpose
Turn the single-page prototype into a portfolio with dedicated pages, while keeping its familiar homepage layout.

## Changes in this stage
- Add `about.html`, `projects.html`, four project detail pages, `photography.html`, and `other.html`.
- Change the primary navigation from JavaScript tab switching to links to separate HTML pages.
- Keep the homepage heading, horizontal search bar, and two featured image/text blocks.
- Keep the homepage styling in `css/prototype.css` and use `css/style.css` for the new pages.
- Use images from `assets/images/` for the architecture work and galleries.

## Structure
The project now has nine HTML pages. The homepage still contains some demonstration text and controls from the original prototype; those can be revised as the personal portfolio content grows.

## Editing and testing
1. Open `index.html` and check that the homepage layout is preserved.
2. Open the About, Projects, Photography, and Other links.
3. Confirm all four project cards link to their own detail pages.
4. Check image paths, desktop layout, and mobile layout.

The homepage styles are locally defined; no external Tailwind CDN is required for the nine-page structure. JavaScript remains for the prototype's still-used interactive controls.
