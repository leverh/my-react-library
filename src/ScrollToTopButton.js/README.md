
# React ScrollToTopButton Component
The `ScrollToTopButton` component is a React component designed to create a button that appears when the user scrolls down a certain threshold and allows them to scroll back to the top of the page with a smooth scrolling animation.


## Installation

To use the `ScrollToTopButton` component in your React project, follow these steps:

1. Install the package using npm or yarn:

```bash
npm install your-react-scrolltotopbutton-library
# or
yarn add your-react-scrolltotopbutton-library
```
2. Import the `ScrollToTopButton` component in your React application:
```bash
import ScrollToTopButton from 'your-react-scrolltotopbutton-library';
```

Use the `ScrollToTopButton` component in your React application, passing the necessary props as described below.
## Usage

Here's how you can use the `ScrollToTopButton` component in your React application:

```bash
import React from 'react';
import ScrollToTopButton from 'your-react-scrolltotopbutton-library';

function App() {
  return (
    <div>
      <h1>Your App</h1>
      {/* Your application content */}
      <ScrollToTopButton />
    </div>
  );
}

export default App;
```

## Props

The `ScrollToTopButton` component accepts the following props:

*    style: (Optional) An object representing the inline CSS styles for the button.
*    className: (Optional) A string representing additional CSS classes for styling the button.
*    threshold: (Optional) A number specifying the scroll position (in pixels) at which the button becomes visible. Defaults to 300 pixels.
*    label: (Optional) A string representing the ARIA label for accessibility. Defaults to "Scroll to top."

### Example with Props
```bash
<ScrollToTopButton
  style={{ backgroundColor: 'blue', color: 'white' }}
  className="custom-button-style"
  threshold={500}
  label="Back to Top"
/>
```
## License
This component is open-source and available under the MIT License. You are free to use and modify it as needed for your projects.