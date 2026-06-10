# Article TOC Navigator


A premium, modern Chrome extension that automatically generates a beautifully styled Table of Contents sidebar for any long-form article, blog, or documentation page.

<img width="1895" height="902" alt="image" src="https://github.com/user-attachments/assets/bdc7a621-dd7e-4046-a55e-1d3dfc9ad7d1" />

## Features

- **Dynamic Headings Extraction**: Automatically scans the page for `H1`, `H2`, and `H3` tags.
- **Hierarchical Numbering**: Automatically assigns nested numbering (e.g., `1.`, `1.1.`, `1.1.1.`) to your headings.
- **Modern Glassmorphism UI**: A vibrant purple color scheme with a blurred, semi-transparent backdrop.
- **Smooth Scrolling**: Clicking a heading smoothly scrolls you directly to that section, with an intelligent offset to avoid sticky navigation bars.
- **Dark Mode Support**: Adapts perfectly to your system's dark theme with sleek neon purple accents.

## Installation / How to Run

1. Clone or download this repository to your computer.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer Mode** by toggling the switch in the top right corner.
4. Click the **Load unpacked** button in the top left.
5. Select the folder containing these extension files.
6. Open any article, and the Table of Contents sidebar will appear automatically on the right side of your screen!

## File Structure

- `manifest.json`: Configuration and metadata for the Chrome extension.
- `content.js`: The core logic that parses the DOM, extracts headings, builds the sidebar UI, and handles scroll interactions.
- `styles.css`: The premium styling (CSS) for the sidebar, including animations and dark mode media queries.
- `icon.png`: The logo for the extension.
