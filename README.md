# Architecture Portfolio — Stage 04: JSON content management

## Purpose
Separate bilingual content from presentation so portfolio information is easier to maintain.

## Changes in this stage
- Add `site-content.json` for translatable text and project information.
- Update `js/language.js` to request JSON when the site is served over HTTP(S).
- Keep `js/content.js` as fallback content for local `file://` previews.
- Keep the existing nine HTML pages and homepage layout unchanged.

## Updating text
Edit a value in `site-content.json` without changing its key. Reload the website through a local web server or GitHub Pages to see the change. Text not connected to the content keys remains in its HTML page.

## Testing
Check both languages on the homepage and project pages. When opening the HTML file directly from disk, note that browsers may restrict `fetch()`; the bundled JavaScript fallback provides offline text.
