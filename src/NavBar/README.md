# React Navbar Component

The `Navbar` component is a customizable navigation bar for your React applications. It provides a responsive menu with navigation links and options for user authentication and dark mode toggling.

## Installation

To use the `Navbar` component in your React project, follow these steps:

1. Install the package using npm or yarn:
```bash
npm install your-react-navbar-library
# or
yarn add your-react-navbar-library
```

## Usage

Here's how you can use the `Navbar` component in your React application:

```bash
import React from 'react';
import Navbar from 'your-react-navbar-library';

const links = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  // Add more navigation links as needed
];

function App() {
  return (
    <div>
      <Navbar
        links={links}
        // Other props as needed
      />
      {/* Your other application content */}
    </div>
  );
}

export default App;
```

## Props

The `Navbar` component accepts the following props:

*   **links**: An array of navigation links with objects containing path and label.
*    **logo**: (Optional) A URL for your application logo.
*   **currentUser**: (Optional) An object representing the current user.
*    **onSignOut**: (Optional) A function to handle user sign-out.
*    **toggleDarkMode**: (Optional) A function to toggle dark mode.
*    **darkMode**: (Optional) A boolean representing the current dark mode state. 

### Example with Props

```bash
<Navbar
  links={links}
  logo="/path/to/your/logo.png"
  currentUser={currentUser}
  onSignOut={handleSignOut}
  toggleDarkMode={toggleDarkMode}
  darkMode={isDarkModeEnabled}
/>
```
## License

This component is open-source and available under the MIT License. You are free to use and modify it as needed for your projects.