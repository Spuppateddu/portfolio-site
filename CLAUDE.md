# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a portfolio website built with Vite and Tailwind CSS. The site is a single-page application that renders all content client-side via vanilla JavaScript.

## Development Commands

- `npm run dev` - Start development server (already running, tell user to reset if needed)
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build

## Architecture

### Entry Points
- `index.html` - Main HTML template with `#app` mount point
- `src/main.js` - Application entry point that renders the entire portfolio into `#app`

### Structure
The portfolio is rendered as a single-page layout with:
1. **Header Section** (2-column grid on large screens):
   - Left: Profile photo placeholder with fallback initials
   - Right: Professional timeline with color-coded entries
2. **Bio Section**: About Me content area
3. **Projects Section**: 3-column grid of project cards with technology tags

### Styling
- Tailwind CSS with PostCSS processing (configured in `postcss.config.js`)
- Dark mode support via `dark:` utility classes
- Custom base styles in `src/style.css`
- Tailwind scans `index.html` and all files in `src/**/*.{js,ts,jsx,tsx}` for classes

### Template Rendering
All HTML is generated via template literals in `src/main.js`. Content updates require editing the JavaScript template string directly.

## Important Notes

- Backend/frontend servers are already running - don't attempt to start them
- `src/counter.js` is unused legacy code from Vite template (not imported in main.js)
