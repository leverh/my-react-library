
# React NotFound Component

The `NotFound` component is a React component designed to create a custom 404 error page for your web application. It allows you to display a personalized message and links to the homepage and portfolio, with optional customization for title, message, image, and URLs.

## Installation

To use the `NotFound` component in your React project, follow these steps:

1. Install the package using npm or yarn:

```bash
npm install your-react-notfound-library
# or
yarn add your-react-notfound-library
```

2. Import the `NotFound` component into your project:
```bash
import NotFound from 'your-react-notfound-library';
```
Use the `NotFound` component in your React application, passing the necessary props as described below.
## Usage
Here's how you can use the `NotFound` component in your React application:
```bash
import React from 'react';
import NotFound from 'your-react-notfound-library';

function App() {
  return (
    <div>
      <NotFound
        title="404 - Page Not Found"
        message="Oops! The page you are looking for does not exist. It might have been moved or deleted."
        homeUrl="/"
        portfolioUrl="/portfolio"
        imageUrl="/path/to/404-image.png"
      />
      {/* Your other application content */}
    </div>
  );
}

export default App;
```
## Props
The `NotFound` component accepts the following props:

*  title: (Optional) The title for the 404 page. Defaults to "404 - Page Not Found."
*    message: (Optional) The error message to display. Defaults to a generic message.
*    homeUrl: (Optional) The URL for the homepage link. Defaults to the root URL ("/").
*    portfolioUrl: (Optional) The URL for the portfolio link. If provided, it displays "or check out my Portfolio" and links to the specified URL.
*    imageUrl: (Optional) The URL or path to an image to display on the 404 page. Defaults to a default image.
### Example with Props
```bash
<NotFound
  title="404 - Custom Title"
  message="This is a custom 404 error message."
  homeUrl="/"
  portfolioUrl="/portfolio"
  imageUrl="/path/to/custom-404-image.png"
/>
```
## License
This component is open-source and available under the MIT License. You are free to use and modify it as needed for your projects.