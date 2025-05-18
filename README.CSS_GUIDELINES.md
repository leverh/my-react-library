# Essential CSS Guidelines - Elevating the Web Experience 🚀

I love CSS a LOT! I've been using it for several years now and I've learned a lot about it and yet I feel i only started to scratch the surface. I've also been using it to build my projects (rather than relying on Bootstrap or Tailwind).

## Font Import

I often use Google Fonts (because it's simple) to import fonts. The use of Google Fonts ensures that these fonts are loaded efficiently and are consistent across different browsers and devices.

I always import my fonts at the top of the index.css file- this way I can use them in my project without having to import them in every single component.

```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;900&family=Open+Sans:wght@400;500;600&family=Press+Start+2P&display=swap');
```

**Performance Tip:** For production, consider using the `&display=swap` parameter and preloading critical fonts:

```html
<!-- In your HTML head -->
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap">
```

## CSS Reset and Base Font Size

The CSS reset ensures a consistent starting point across all browsers by removing default browser styling. This helps in maintaining a uniform look for elements across different web environments.

Setting the base font size to 62.5% makes scaling and calculating rem units more intuitive. Since the default browser font size is 16px, setting it to 62.5% effectively makes 1rem equal to 10px. This simplification streamlines the process of setting font sizes, margins, paddings, and other dimensions throughout the app (especially helpful if you hate calculating like I do...).

```css
html {
  font-size: 62.5%; /* 1rem = 10px */
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}
```

## Light and Dark Mode Styles

My library supports both light and dark mode styles. By default, the body of the document is styled for light mode, with a light background and dark text. The `.dark-mode` class can be toggled on the body to switch to dark mode, which inverts the colors, using a dark background and light text. This approach provides a seamless experience for users who prefer different color schemes or are sensitive to bright screens.

```css
/* Light Mode Styles (default) */
body {
  background-color: #FAFAFA;
  color: black;
}

/* Dark Mode Styles */
body.dark-mode {
  background-color: #121212;
  color: white;
}
```

## CSS Variables for Theming

I use CSS custom properties (variables) for theming and consistent styling. This approach makes life easier and it's easy to maintain and update values in one place:

```css
:root {
  /* Colors */
  --color-primary: #3498db;
  --color-secondary: #2ecc71;
  --color-accent: #e74c3c;
  --color-text: #333333;
  --color-text-light: #666666;
  --color-background: #ffffff;
  --color-border: #dddddd;
  
  /* Spacing */
  --spacing-xs: 0.4rem;
  --spacing-sm: 0.8rem;
  --spacing-md: 1.6rem;
  --spacing-lg: 2.4rem;
  --spacing-xl: 3.2rem;
  
  /* Typography */
  --font-family-heading: 'Montserrat', sans-serif;
  --font-family-body: 'Open Sans', sans-serif;
  --font-size-xs: 1.2rem;
  --font-size-sm: 1.4rem;
  --font-size-md: 1.6rem;
  --font-size-lg: 2rem;
  --font-size-xl: 2.4rem;
  --font-size-xxl: 3.2rem;
  
  /* Border Radius */
  --border-radius-sm: 4px;
  --border-radius-md: 8px;
  --border-radius-lg: 16px;
  --border-radius-circle: 50%;
  
  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.12);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
  
  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-normal: 300ms ease;
  --transition-slow: 500ms ease;
}

/* Dark mode overrides */
body.dark-mode {
  --color-text: #f0f0f0;
  --color-text-light: #b0b0b0;
  --color-background: #121212;
  --color-border: #333333;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.5);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.4);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.4);
}
```

The best thing about it, as that you can re-use these for every project, only having to tweak colors and sizes! 

## Media Queries and Responsive Design

I use both mobile-first desktop-first approach approach with breakpoints defined as variables for consistent responsive behavior:

```css
:root {
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
}

/* Mobile styles (default) */
.container {
  padding: 1.6rem;
}

/* Tablet and larger */
@media (min-width: 768px) {
  .container {
    padding: 3.2rem;
  }
}

/* Desktop */
@media (min-width: 992px) {
  .container {
    padding: 4.8rem;
  }
}
```

## Accessibility Considerations

I prioritize accessibility in my CSS by ensuring sufficient color contrast, providing focus styles, and supporting reduced motion:

```css
/* Improved focus styles */
:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
}

/* Respect user's motion preferences */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Screen reader only content */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

## Modern Layout Techniques

I use CSS Grid and Flexbox for layouts, avoiding older techniques like floats:

```css
/* Basic Grid Layout */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-md);
}

/* Content and Sidebar Layout */
.page-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-lg);
}

@media (min-width: 992px) {
  .page-layout {
    grid-template-columns: 3fr 1fr;
  }
}

/* Flexbox for component layouts */
.card {
  display: flex;
  flex-direction: column;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

## Animation and Transitions

I use subtle animations to enhance user experience (lately creating 3d stuff and animations using Three.js and Anime.js), but always ensure they can be disabled:

```css
.button {
  transition: transform var(--transition-fast), 
              background-color var(--transition-fast);
}

.button:hover {
  transform: translateY(-2px);
}

.fade-in {
  animation: fadeIn var(--transition-normal);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

## Performance Considerations

I optimize CSS for performance by:

1. **Avoiding expensive properties** - Using transforms and opacity instead of properties that trigger layout recalculations
2. **Being specific with selectors** - Not over-nesting or creating overly specific selectors
3. **Using logical property naming** - Using `gap` instead of separate margin properties
4. **Container queries** - For responsive components that adapt based on their container, not just the viewport

```css
/* Using will-change judiciously */
.gallery-item:hover {
  will-change: transform;
  transform: scale(1.05);
}

/* Container queries for component-level responsiveness */
@container (min-width: 400px) {
  .card-content {
    display: grid;
    grid-template-columns: auto 1fr;
  }
}
```

## Final Thoughts

CSS is incredibly powerful when used thoughtfully. By focusing on simplicity, consistency, and modern techniques, you can create beautiful, accessible, and responsive user interfaces without relying on heavy frameworks.

The approach I take with my component library is to provide sensible defaults while allowing for easy customization.

Remember that CSS is not just about making things look pretty—it's about creating inclusive, performant experiences that work for everyone.