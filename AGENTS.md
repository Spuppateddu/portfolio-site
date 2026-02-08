# AGENTS.md

Guidelines for AI coding agents working in this repository.

## Project Overview

A portfolio website built with **Vite 7.x** and **Tailwind CSS 3.x**. This is a single-page application (SPA) that renders all content client-side using vanilla JavaScript with ES Modules.

### Technology Stack

| Category       | Technology                          |
|----------------|-------------------------------------|
| Build Tool     | Vite 7.1.7                          |
| CSS Framework  | Tailwind CSS 3.4.18                 |
| CSS Processing | PostCSS 8.5.6 + Autoprefixer 10.4.x |
| Language       | Vanilla JavaScript (ES Modules)     |
| Type           | Single-Page Application             |

---

## Build/Lint/Test Commands

### Available Scripts

```bash
# Development server (HMR enabled)
npm run dev

# Production build (outputs to dist/)
npm run build

# Preview production build locally
npm run preview
```

### Important Notes

- **Servers are already running** - Do NOT attempt to start `npm run dev`. If changes require a server restart, inform the user to reset it manually.
- **No linting configured** - ESLint/Prettier are not set up in this project.
- **No tests configured** - No test runner (Jest, Vitest, etc.) is installed.

### If Tests Are Added Later

When adding Vitest (recommended for Vite projects):

```bash
# Install
npm install -D vitest

# Run all tests
npm run test

# Run single test file
npx vitest run path/to/file.test.js

# Run tests matching pattern
npx vitest run -t "test name pattern"

# Watch mode
npx vitest
```

---

## Project Structure

```
portfolio-site/
├── index.html           # Main HTML template with #app mount point
├── src/
│   ├── main.js          # Application entry point - renders entire portfolio
│   ├── style.css        # Base styles + Tailwind directives
│   └── counter.js       # UNUSED - legacy Vite template code (ignore)
├── public/
│   └── vite.svg         # Static assets served at root
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS plugins
├── package.json         # Dependencies and scripts
├── CLAUDE.md            # Claude Code specific instructions
└── AGENTS.md            # This file
```

### Key Files

| File               | Purpose                                    |
|--------------------|--------------------------------------------|
| `src/main.js`      | All HTML rendering via template literals   |
| `src/style.css`    | Tailwind imports + custom base styles      |
| `index.html`       | Shell HTML with `#app` div mount point     |
| `src/counter.js`   | DEAD CODE - not imported, do not use       |

---

## Code Style Guidelines

### Module System

- **ES Modules only** - The project uses `"type": "module"` in package.json
- Use `import`/`export` syntax, never CommonJS `require()`

```javascript
// Correct
import './style.css'
export function myFunction() {}
export default { config: true }

// Incorrect
const module = require('./module')
module.exports = {}
```

### Import Order

1. Side-effect imports (CSS)
2. External dependencies (npm packages)
3. Local modules (relative paths)

```javascript
import './style.css'
import somePackage from 'some-package'
import { helper } from './utils.js'
```

### Naming Conventions

| Type              | Convention    | Example                    |
|-------------------|---------------|----------------------------|
| Files             | lowercase     | `main.js`, `style.css`     |
| Functions         | camelCase     | `setupCounter`, `renderApp`|
| Variables         | camelCase     | `counter`, `setCounter`    |
| Constants         | UPPER_SNAKE   | `MAX_ITEMS`, `API_URL`     |
| CSS Classes       | kebab-case    | `text-center`, `bg-blue-500`|
| Config exports    | default export| `export default { ... }`   |

### Formatting

- **Indentation**: 2 spaces
- **Quotes**: Single quotes for strings
- **Semicolons**: Optional (project is inconsistent - prefer adding them)
- **Trailing commas**: Use in multiline objects/arrays
- **Line length**: Keep reasonable (~100 chars), no strict limit

```javascript
// Preferred style
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### HTML Rendering Pattern

All HTML is generated via template literals assigned to `innerHTML`:

```javascript
document.querySelector('#app').innerHTML = `
  <div class="container mx-auto">
    <h1 class="text-4xl font-bold">Title</h1>
  </div>
`
```

- Use backticks for multiline HTML templates
- Embed Tailwind utility classes inline
- Maintain consistent indentation within template strings

---

## Tailwind CSS Guidelines

### Class Usage

- Use utility-first approach with Tailwind classes
- Support dark mode with `dark:` prefix variants
- Use responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`

```html
<div class="bg-white dark:bg-gray-800 p-4 md:p-8 lg:p-12">
  <h1 class="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
    Heading
  </h1>
</div>
```

### Content Configuration

Tailwind scans these paths for classes (defined in `tailwind.config.js`):
- `./index.html`
- `./src/**/*.{js,ts,jsx,tsx}`

If you add new file types or directories containing Tailwind classes, update the `content` array.

### Custom Styles

Add custom base styles to `src/style.css` below the Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom styles below */
.custom-class {
  /* ... */
}
```

---

## Error Handling

Since this is a static portfolio site with no backend:

- Use `onerror` handlers for image fallbacks (already implemented)
- Validate data before rendering if dynamic content is added
- Console errors are acceptable for development debugging

```javascript
// Image fallback pattern used in main.js
onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
```

---

## Adding New Features

### New Sections

Edit `src/main.js` and add HTML within the main template literal. Follow the existing pattern:

```javascript
<!-- New Section -->
<div class="max-w-4xl mx-auto mb-16">
  <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Section Title</h2>
    <!-- Content -->
  </div>
</div>
```

### New JavaScript Modules

1. Create file in `src/` directory
2. Use ES Module export syntax
3. Import in `main.js`

```javascript
// src/utils.js
export function formatDate(date) {
  return new Intl.DateTimeFormat('en-US').format(date);
}

// src/main.js
import { formatDate } from './utils.js'
```

---

## Common Pitfalls

1. **Do not start dev server** - Already running. Tell user to reset if needed.
2. **Do not use counter.js** - Dead code from Vite template.
3. **Do not use CommonJS** - ES Modules only (`import`/`export`).
4. **Remember dark mode** - Always include `dark:` variant classes.
5. **Check Tailwind content paths** - New file locations need config updates.

---

## No External Rules Files

This project does not contain:
- Cursor rules (`.cursor/rules/` or `.cursorrules`)
- Copilot rules (`.github/copilot-instructions.md`)
- ESLint configuration
- Prettier configuration

Refer to this file and `CLAUDE.md` for all coding guidelines.
