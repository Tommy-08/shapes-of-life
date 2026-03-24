# Design System Strategy: Archival Modern

## 1. Overview & Creative North Star
**The Creative North Star: "The Digital Archivist"**

This design system is not a gallery; it is a repository. It rejects the loud, saturated trends of contemporary web design in favor of "Archival Modernism." The aesthetic mimics the precise, quiet atmosphere of a museum back-office—where high-end art meets technical documentation. 

We break the "template" look through **Calculated Asymmetry**. While the underlying grid is rigid and mathematically precise (mirroring a pen-plotter), content should breathe with intentional unevenness. A large-scale Serif headline might sit far to the left, balanced only by a tiny, technical label in the far-right margin. We prioritize the "object" (the art) and the "record" (the data) over the interface itself.

---

## 2. Colors & Surface Philosophy
The palette is rooted in the tactile world of physical archives: aged paper, carbon ink, and technical blueprints.

### The Palette (Material Design Tokens)
*   **Background / Base:** `#fbf9f4` (Surface) — A warm, off-white reminiscent of heavy-weight cotton paper.
*   **The Primary Ink:** `#000102` (Primary) — Not a true hex black, but a deep, "wet" ink charcoal used for high-contrast storytelling.
*   **The Technical Accent:** `#545f6e` (Surface Tint / Accent) — A muted, desaturated blue used for interactive precision.

### The "No-Line" Rule
Traditional 1px solid borders for sectioning are strictly prohibited. In this system, boundaries are defined by **Tonal Shifts**. To separate a hero section from a gallery grid, transition from `surface` to `surface-container-low`. The eye should perceive the change in "paper weight" rather than a hard graphical line.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked archival sheets. 
*   **Base Layer:** `surface` (#fbf9f4).
*   **The Inset (Technical Data):** `surface-container` (#f0eee9).
*   **The Floating Note:** `surface-container-highest` (#e4e2dd).

### The "Glass & Gradient" Rule
To prevent the design from feeling "flat" or "dated," use Glassmorphism for floating navigation or quick-view modals. Use `surface_bright` at 80% opacity with a `24px` backdrop blur. For primary CTAs, apply a subtle linear gradient from `primary` (#000102) to `primary_container` (#111d29) to give the "ink" a sense of depth and physical density.

---

## 3. Typography
The typographic pairing is a dialogue between the poetic and the technical.

*   **The Narrative (Newsreader):** Use for `display`, `headline`, and `body` scales. This serif is our "storyteller." It should be set with generous line-height (1.6+) and occasional italicization for emphasis to evoke a curated, editorial feel.
*   **The Record (Space Grotesk):** Use for `label` and `title-sm` scales. This technical sans-serif represents the "metadata" of the art. It should often be set in `ALL CAPS` with a letter-spacing of `0.05rem` to mimic the precision of a typewriter or a plotter.

**Hierarchy Note:** A `display-lg` headline should never be crowded. It requires at least `spacing-16` (5.5rem) of clear space to maintain its authoritative status.

---

## 4. Elevation & Depth
In an archival system, we do not use "drop shadows" in the traditional sense. We use **Tonal Layering**.

*   **The Layering Principle:** To lift a card, do not add a shadow. Instead, place a `surface-container-lowest` (#ffffff) card on a `surface-container` (#f0eee9) background. The contrast in "paper brightness" creates the lift.
*   **Ambient Shadows:** If a component must float (e.g., a lightbox), use a highly diffused shadow: `box-shadow: 0 20px 50px rgba(27, 28, 25, 0.05);`. The color is a tint of `on-surface`, never pure black.
*   **The "Ghost Border" Fallback:** For input fields or button boundaries, use the `outline-variant` (#c5c6ca) at **20% opacity**. It should be barely perceptible—a "whisper" of a line that guides the eye without trapping the content.

---

## 5. Components

### Buttons
*   **Primary:** Solid `primary` (#000102) with `on-primary` (#ffffff) `label-md` text. Square corners (`0px`).
*   **Secondary:** Ghost style. `Ghost Border` (20% opacity `outline-variant`) with `primary` text.
*   **Tertiary:** Underlined `label-md` text only. The underline should be a `1px` stroke placed `0.35rem` (spacing-1) below the baseline.

### Cards & Lists
*   **Rule:** No dividers. Use `spacing-10` (3.5rem) to separate list items.
*   **Image Handling:** Art should be presented in its raw aspect ratio. Never crop to squares. Use `surface-container-low` as a placeholder "matte" behind images.

### Input Fields
*   **Styling:** A single bottom border using `outline` (#75777a) at 30% opacity. No background fill unless focused.
*   **Focus State:** The bottom border becomes `primary` (#000102) 1px.

### The "Curator's Chip"
*   **Usage:** For art categories (e.g., "Sculpture," "19th Century").
*   **Style:** `surface-container-high` background, `0px` radius, `label-sm` typography.

---

## 6. Do's and Don'ts

### Do:
*   **Embrace the Edge:** Align text to the very edges of the grid columns to create a "technical drawing" feel.
*   **Use Massive Whitespace:** If you think there is enough space, double it. The art needs "gallery air."
*   **Hard Edges:** Maintain `0px` roundedness across every single element. Roundness feels "consumer," whereas hard edges feel "architectural."

### Don't:
*   **Don't use 100% Black:** Use our `primary` charcoal for text; it is softer on the eye and feels more like ink on paper.
*   **Don't center everything:** Default to left-aligned "archival" layouts. Centering is for templates; asymmetry is for curators.
*   **Don't use Dividers:** If you need a line to separate content, you have failed the layout. Use white space or a subtle shift from `surface` to `surface-container-low`.