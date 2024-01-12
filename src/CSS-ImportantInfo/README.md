# Essential CSS Guidelines (At least- I think they're essential ;)) - Elevating the Web Experience 🚀 

I love CSS a LOT! I've been using it for several years now and I've learned a lot about it. I've also been using it to build my projects (rather than relying on Bootstrap or Tailwind). 

 ### Font Import

I often use Google Fonts (because it's simple) to import fonts. The use of Google Fonts ensures that these fonts are loaded efficiently and are consistent across different browsers and devices.

I always import my fonts at the top of the index.css file- this way I can use them in my project without having to import them in every single component.

```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;900&family=Open+Sans:wght@400;500;600&family=Press+Start+2P&display=swap');
``````


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


### Light and Dark Mode Styles

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