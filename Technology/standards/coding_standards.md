# Engineering Standards & Coding Guidelines

This document outlines the coding style, source control workflow, and quality gates for the PracWiz repository.

---

## 1. Technical Standards

### A. HTML / Frontend
- Use semantic HTML5 layout tags (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`) to maintain a clean document structure and high accessibility scores.
- Every interactive element (buttons, anchors, inputs) must carry unique, descriptive ID tags for automated end-to-end testing and readability.
- SVG assets (like logos or custom diagrams) must be inlined directly in the markup where possible to support clean color manipulation via CSS variables and eliminate additional HTTP requests.

### B. Styling (CSS)
- Keep styling written in clean, modular CSS. Do not use heavy utility classes or inline style attributes.
- Use CSS Variables (`:root` level custom properties) for colors, fonts, shadows, and transition times.
- Ensure all transitions are smooth (`transition: all 0.3s ease`).
- Design system must support mobile responsiveness out of the box using flexible grid layouts and media queries.

### C. Javascript
- Use clean, modular, and modern ES6 vanilla JavaScript. Avoid third-party dependencies (like jQuery or Lodash) to maintain fast page load times.
- Handle state reactively. When user metrics change (like in the savings calculator), DOM elements must update instantly.

---

## 2. Git & Version Control Guidelines

- **Primary Branch:** `main` serves as our production branch.
- **Commit Format:** Use clear, descriptive commit messages specifying the feature area or fix (e.g., `feat: integrate Web3Forms for contact form`, `style: refine footer logo white override`).
- **Deployments:** The website is served via GitHub Pages tracking the `main` branch. Commits merged to `main` will automatically trigger a deployment.

---

## 3. Accessibility & SEO Guidelines
- Every image element must contain descriptive `alt` tags.
- Use proper heading hierarchies: only one `<h1>` per page, followed by sequential `<h2>` and `<h3>` tags.
- Include proper `aria-expanded` and `aria-label` settings on buttons (like the mobile nav toggler) to support screen readers.
