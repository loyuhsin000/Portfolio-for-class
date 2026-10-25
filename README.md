# LO YU HSIN — Portfolio

A multi-page portfolio built with semantic HTML, plain CSS, and small JavaScript modules. It presents architecture work, photography, architectural models, paintings, sports, and travel interests.

## Pages
- `index.html`: homepage, biography preview, architectural design preview, and other-work carousel
- `about.html`: personal background, education, skills, internships, and achievements
- `projects.html`: four-project architectural overview
- `project-01.html` to `project-04.html`: individual architecture project pages
- `photography.html`: photography gallery
- `other.html`: architectural models and artwork
- `sports.html`: sports activities and accomplishments
- `travel.html`: visited countries and regions

## Website structure
- `css/style.css` contains the shared page styling, typography, and responsive rules.
- `js/language.js` handles English and Traditional Chinese selection.
- `site-content.json` holds supported translation fields and project content for HTTP(S) use.
- `js/content.js` provides a fallback for offline previews where JSON fetching is restricted.
- `js/carousel.js` controls the rotating homepage previews.
- `js/menu.js` supports navigation on narrow screens.
- `js/image-guard.js` limits ordinary dragging and context-menu interactions on images. These measures do **not** prevent screenshots, downloads through browser tools, or access to public images.
- `assets/images/` groups site imagery by content area; `IMAGE-MAPPING.csv` documents asset paths.

## Editing content
Use `site-content.json` for supported bilingual text and project metadata. Keep existing translation keys unchanged. Update `js/content.js` as well if offline previews must show those edits. For page sections not connected to JSON, edit the matching HTML page. Replace pictures by updating the image file and/or the `src` paths in HTML.

## Styling and accessibility
The design uses warm orange `#F4A261`, serif display typography, visible keyboard focus, and responsive layouts. Navigation links work without JavaScript. Where used, animation honors `prefers-reduced-motion`.

## Changes in this stage
- Refine editorial headline and identity typography.
- Keep both identity separators warm orange in either language.
- Repair the two-letter country/region abbreviations in the Travel grid.

## Hosting
Repository: `https://github.com/loyuhsin000/Portfolio-for-class`

To publish with GitHub Pages, place `index.html` at the repository root, then select **Settings → Pages → Deploy from a branch → main → /(root)**. Test all page links and image paths on the public URL.

## Known limits
Some page text and captions are still authored directly in HTML. This project does not include a PDF CV. Public pictures can be saved by visitors despite the image context-menu restrictions.
