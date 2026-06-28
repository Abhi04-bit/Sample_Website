---
name: Architectural Precision
colors:
  surface: '#fbf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#fbf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ef'
  surface-container: '#efeeea'
  surface-container-high: '#eae8e4'
  surface-container-highest: '#e4e2de'
  on-surface: '#1b1c1a'
  on-surface-variant: '#494740'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f0ed'
  outline: '#7a776f'
  outline-variant: '#cbc6bd'
  surface-tint: '#605e5b'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b19'
  on-primary-container: '#868380'
  inverse-primary: '#cac6c2'
  secondary: '#735a33'
  on-secondary: '#ffffff'
  secondary-container: '#fddba9'
  on-secondary-container: '#785e36'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1d1b16'
  on-tertiary-container: '#87837c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e6e2de'
  primary-fixed-dim: '#cac6c2'
  on-primary-fixed: '#1c1b19'
  on-primary-fixed-variant: '#484644'
  secondary-fixed: '#ffdeae'
  secondary-fixed-dim: '#e3c291'
  on-secondary-fixed: '#281900'
  on-secondary-fixed-variant: '#59431d'
  tertiary-fixed: '#e8e2d9'
  tertiary-fixed-dim: '#cbc6be'
  on-tertiary-fixed: '#1d1b16'
  on-tertiary-fixed-variant: '#494640'
  background: '#fbf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2de'
  charcoal-2: '#2A2924'
  slate-2: '#6B6763'
  brass-lt: '#D4B896'
  brass-dk: '#7A5F38'
  sand: '#F2EDE4'
  fog: '#E8E4DC'
  ink: '#1C1B19'
  deep-dark: '#141412'
typography:
  display-hero:
    fontFamily: EB Garamond
    fontSize: 96px
    fontWeight: '300'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: EB Garamond
    fontSize: 52px
    fontWeight: '300'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-section:
    fontFamily: EB Garamond
    fontSize: 44px
    fontWeight: '300'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-section-mobile:
    fontFamily: EB Garamond
    fontSize: 28px
    fontWeight: '300'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  card-heading:
    fontFamily: EB Garamond
    fontSize: 22px
    fontWeight: '400'
    lineHeight: '1.4'
  ui-eyebrow:
    fontFamily: DM Sans
    fontSize: 11px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  body-main:
    fontFamily: DM Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: '1.7'
  nav-button:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.08em
  caption:
    fontFamily: DM Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  max-width: 1280px
  base-unit: 4px
  section-gap-min: 5rem
  section-gap-max: 9rem
  gutter-min: 1.5rem
  gutter-max: 4rem
  component-gap: 1.5rem
---

## Brand & Style

The design system is rooted in the concept of **Architectural Minimalism**. It treats digital space as a structural material, emphasizing technical authority, civic responsibility, and the craft of building. The personality is professional and precise, rejecting fleeting web trends in favor of the permanence associated with physical structures.

The visual style is **High-Contrast & Grid-Based**, drawing heavily from technical drafting and blueprint aesthetics. It utilizes "hard" depth, where hierarchy is established through structural lines, color blocking, and hairline borders rather than shadows or gradients. The user experience should feel like navigating a living technical drawing—deliberate, clean, and expertly composed.

**Key Stylistic Pillars:**
- **Structural Honesty:** No drop shadows or artificial "soft" depth.
- **Architectural Gaps:** Large, intentional use of white space to frame content.
- **Technical Accents:** Use of the Blueprint Grid SVG as a signature watermark.
- **Narrative Contrast:** High-contrast pairing of editorial serifs with utilitarian sans-serifs.

## Colors

The palette is inspired by architectural materials: ink, sand, brass, and slate. It is designed to be sophisticated and grounded.

- **Primary (Charcoal):** Used for deep backgrounds, primary text on light surfaces, and navigation states.
- **Secondary (Brass):** The sole chromatic accent, reserved for calls to action, active states, and structural highlights.
- **Neutral (Warm White):** The primary canvas color, providing a soft, gallery-like backdrop that is less clinical than pure white.
- **Supporting Tones:** **Sand** and **Fog** provide subtle tonal shifts for sectioning and UI borders without breaking the minimalist aesthetic. **Slate-2** is the dedicated color for long-form body copy to ensure optimal legibility and reduced eye strain.

## Typography

This design system employs a disciplined typographic hierarchy that separates "Narrative" from "Utility."

- **Narrative (EB Garamond):** Used for storytelling, headlines, and large display moments. It should be typeset with tight tracking and light weights to evoke a premium, editorial feel. Use italics sparingly for emphasis or as a stylistic "em" tag.
- **Utility (DM Sans):** Used for all functional UI elements, navigation, and body copy. It provides a clean, modern contrast to the serif. 
- **Eyebrows:** Always use the `ui-eyebrow` style in **Brass** to introduce sections or provide context above headings.
- **Mobile Scaling:** Headlines must use the defined mobile-specific sizes to maintain readability and prevent awkward line breaks on small viewports.

## Layout & Spacing

The layout philosophy is based on a **12-column fluid masonry grid**. It mimics the precision of architectural blueprints while remaining adaptable to modern screens.

- **Grid Model:** A 12-column system is used for portfolios and primary layouts. Footers transition to a 4-column structure, while content-heavy sections often utilize a 2-column "split" view.
- **Rhythm:** Use `clamp()` for vertical section gaps and horizontal gutters to ensure the "breathability" of the design scales proportionally with the screen size.
- **The Blueprint Grid:** A signature SVG pattern (0.5px - 1px stroke weight) should be used as a background layer in transition zones or hero sections. It features a 40x40 grid and technical annotations.
- **Breakpoints:**
  - **Desktop:** 12-column grid, max-width 1280px, 4rem margins.
  - **Tablet:** 6-column grid, 2.5rem margins.
  - **Mobile:** 2-column or single-column stacked, 1.5rem margins.

## Elevation & Depth

This design system explicitly rejects shadows. Depth is achieved through layering and tonal contrast rather than blur.

- **Structural Layers:** Use different background shades (e.g., Warm White to Sand or Charcoal) to define distinct content zones.
- **Hairline Dividers:** Use 1px solid borders in **Fog** or **Brass** (at low opacity) to separate elements. This mimics the clean lines of a technical drawing.
- **Functional Blur:** The only exception to the "no-blur" rule is the Navigation Bar. Upon scrolling, the nav container should apply a `backdrop-filter: blur(16px)` with a semi-transparent **Charcoal** or **Warm White** background to maintain legibility over moving content.
- **Motion-Based Depth:** Use "Reveal" animations (staggered translateY and opacity) to introduce hierarchy as the user scrolls.

## Shapes

The shape language is rigid and geometric. Curves are minimized to maintain the architectural theme.

- **Corner Radii:** Use a maximum of **2px** for buttons and UI elements, and **4px** for larger cards. Large-scale "pill" shapes are strictly forbidden.
- **Borders:** Borders are a primary design element. Most containers should use a 1px hairline stroke rather than a filled background to maintain a sense of lightness and precision.
- **Custom Cursor:** The cursor is a dynamic shape element. A small 8px solid Brass dot is trailed by a 36px Brass ring. On interactive elements, the ring expands to 64px and can house "View" or "Close" text labels.

## Components

### Buttons
- **Primary:** Solid **Brass** background with **Charcoal** text. 2px border radius. Hover state shifts to **Brass-lt**.
- **Ghost:** 1px solid **Brass** or **Fog** border with transparent background. DM Sans Uppercase text. 8px gap for trailing icons.
- **Transition:** Buttons should have a 0.25s background-color transition.

### Navigation
- **Behavior:** Starts transparent and transitions to a solid background (Charcoal or Warm White) with a backdrop blur on scroll.
- **Links:** DM Sans 12px Uppercase. Active links use a **Brass** underline or text color.

### Cards & Project Grids
- **Construction:** Flat containers with 1px **Fog** borders. 
- **Interaction:** On hover, the internal image should subtly scale (1.03x) while the text remains static. Use a 1.5rem gap between cards in the 12-column masonry grid.

### Input Fields
- **Style:** Minimalist bottom-border only or a full 1px **Fog** outline. Focus state changes border color to **Brass**. No shadows.

### Reveal Animations
- All major components should utilize a staggered reveal.
- **Initial State:** `opacity: 0; transform: translateY(20px);`
- **Active State:** `opacity: 1; transform: translateY(0); transition: 0.8s cubic-bezier(0.16, 1, 0.3, 1);`
- **Stagger:** Delay child elements by 80ms-120ms to create a sophisticated, cascading entrance.