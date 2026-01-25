# Copilot Instructions for lmelgar.github.io

## Project Overview
This is a personal portfolio and project showcase site for Luis Melgar, focused on data visualization, interactivity, and design. The site is static, with HTML, CSS, and JavaScript, and contains both the current portfolio and an `oldSite` archive.

## Structure & Key Directories
- **index.html, style.css, clock.js**: Main entry point and styling for the current portfolio.
- **/oldSite/**: Archive of previous portfolio, with its own HTML and CSS structure.
- **/nahj-2021/**: Contains a project with its own HTML, data (CSV), and images.
- **/pv-how-to/**, **/wonder-how-to/**: Additional project sub-sites.
- **/img/**, **/download/**, **/video/**: Static assets.

## Patterns & Conventions
- **No build system**: All files are static; no npm, bundlers, or frameworks.
- **jQuery**: Used in `clock.js` for DOM manipulation and event handling.
- **FontAwesome**: Included via CDN for icons.
- **Google Fonts**: Used for typography in both main and old sites.
- **Sectioned HTML**: Each project or section (e.g., `nahj-2021`) is self-contained, with its own styles and assets.
- **Minimal README**: The main `README.md` is a placeholder; most documentation is in code and file structure.

## Developer Workflows
- **No build/test commands**: Edit HTML/CSS/JS directly and refresh in browser.
- **No package management**: All dependencies are loaded via CDN.
- **To add a new project**: Create a new folder, add an `index.html` and assets, and link from the main page.
- **To update styles**: Edit `style.css` (main site) or `oldSite/css/style.css` (archive).

## Integration & Data
- **CSV data**: Some projects (e.g., `nahj-2021`) use local CSV files for data-driven visualizations.
- **No backend**: All data is static and loaded client-side.

## Examples
- See `/nahj-2021/index.html` for a self-contained project with custom styles and data.
- See `/oldSite/index.html` for the previous portfolio structure and navigation.

## Special Notes
- **Do not add build tools or frameworks** unless explicitly requested.
- **Preserve the separation** between the current site and `oldSite`.
- **Keep all assets local** unless using a CDN for fonts/icons.

---
For more details, review the structure and comments in each section or project folder.