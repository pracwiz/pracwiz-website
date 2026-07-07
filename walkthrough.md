# Walkthrough: PracWiz Solutions Homepage Mockup

We have built a premium, light, and soothing website mockup inside the project folder. The design acts as an "operational relief" portal, using generous whitespace, calm ocean wave animations, and soft color palettes to contrast against the daily operational stress experienced by your target demographic.

---

## File Deliverables

All components of the mockup are fully functional and written directly to your project workspace:

1. **Homepage Markup**: [index.html](file:///Users/pracwiz/Library/CloudStorage/GoogleDrive-pracwiz.solutions@gmail.com/My%20Drive/PracWiz/Website/index.html)
   - Built with clean semantic HTML5 (`header`, `main`, `section`, `nav`, `footer`).
   - The inline SVG logo is adapted with a custom `viewBox` that removes vertical margins, rendering perfectly vector-sharp on all screens.
2. **Design System & Stylesheet**: [style.css](file:///Users/pracwiz/Library/CloudStorage/GoogleDrive-pracwiz.solutions@gmail.com/My%20Drive/PracWiz/Website/style.css)
   - Soothing warm-white/blue background gradients, deep corporate-blue typography, soft sage and sky accent cards.
   - Glassmorphic card surfaces, responsive grids, and interactive form states.
3. **Interactive Script**: [script.js](file:///Users/pracwiz/Library/CloudStorage/GoogleDrive-pracwiz.solutions@gmail.com/My%20Drive/PracWiz/Website/script.js)
   - Drives the interactive canvas background and the operational savings calculator.

---

## Key Features Built

### 1. The Inline Vector Logo Integration
The logo SVG code is inlined directly inside [index.html](file:///Users/pracwiz/Library/CloudStorage/GoogleDrive-pracwiz.solutions@gmail.com/My%20Drive/PracWiz/Website/index.html).
- For the **Header**, the text has its default deep corporate-blue fill.
- For the **Footer** (which has a solid navy background), a CSS rule automatically overrides the text fills to white:
  ```css
  .footer-logo svg .text-pracwiz,
  .footer-logo svg .text-solutions {
    fill: #ffffff !important;
  }
  ```

### 2. Soothing Wave Background Animation (Canvas)
The canvas draws 3 slow, gentle overlapping sine waves moving at staggered speeds and phases:
- Sky Blue wave (`rgba(224, 242, 254, 0.45)`)
- Calm Green wave (`rgba(230, 247, 240, 0.5)`)
- Accent Blue glow wave (`rgba(14, 165, 233, 0.08)`)
This creates an undulating, parallax liquid look that gives the page an immediate sense of calm and breathing room.

### 3. Reclaimed Hours Calculator (JS Widget)
An interactive pain-relief estimator:
- Users select checkboxes for operational pain points (e.g. *Manual Data Entry*, *Repetitive Reporting*).
- Users drag a slider to indicate the weekly operational overhead per employee.
- The Javascript dynamically calculates the reclaimed hours per week, runs a smooth numeric counter transition, updates a gradient gauge progress bar, and prints the corresponding number of working days saved per year.

---

## Verification & Testing
- **Markup and Styles**: Clean standards compliance with no external JS dependencies, allowing instantaneous page loading.
- **Responsive Layout**: Validated via CSS queries supporting mobile viewports (collapsing links menu, scaling cards, stacking side panels) up to massive widescreen monitors.
