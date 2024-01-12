# React Footer Component

The `Footer` component is a React component designed to create a footer section for your web application. It displays copyright information, the company name, and optional links.

## Installation

To use the `Footer` component in your React project, follow these steps:

1. Install the package using npm or yarn:

```bash
npm install your-react-footer-library
# or
yarn add your-react-footer-library
```
Import the `Footer` component in your React application:
```bash
import Footer from 'your-react-footer-library';
```
Use the `Footer` component in your React application, passing the necessary props as described below.
## Usage
Here's how you can use the `Footer` component in your React application:
```bash
import React from 'react';
import Footer from 'your-react-footer-library';

function App() {
  const year = 2024; // Replace with the current year
  const companyName = 'Your Company Name';
  const links = [
    { label: 'Home', url: '/' },
    { label: 'About Us', url: '/about' },
    // Add more links as needed
  ];

  return (
    <div>
      {/* Your application content */}
      <Footer year={year} companyName={companyName} links={links} />
    </div>
  );
}

export default App;
```
## Props
The `Footer` component accepts the following props:

*    year: (Optional) The current year for the copyright notice. If not provided, it defaults to the current year.

*    companyName: (Optional) The name of your company. If not provided, it defaults to 'Your Company Name.'

*    links: (Optional) An array of objects representing links to display in the footer, with the following properties:
     *   label: (Required) The label or text for the link.
     *   url: (Required) The URL or destination of the link.
### Example with Props
```bash
const year = 2024; // Replace with the current year
const companyName = 'Your Company Name';
const links = [
  { label: 'Home', url: '/' },
  { label: 'About Us', url: '/about' },
  // Add more links as needed
];

<Footer year={year} companyName={companyName} links={links} />
```
## License
This component is open-source and available under the MIT License. You are free to use and modify it as needed for your projects.


