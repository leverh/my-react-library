
# React Imprint Component

The `Imprint` component is a React component designed to create an imprint or legal information section for your web application. It allows you to display dynamic content, contact details, and a legal disclaimer.

## Installation

To use the `Imprint` component in your React project, follow these steps:

1. Install the package using npm or yarn:

```bash
npm install your-react-imprint-library
# or
yarn add your-react-imprint-library
```
Import the `Imprint` component in your React application:
```bash
import Imprint from 'your-react-imprint-library';
```
Use the `Imprint` component in your React application, passing the necessary props as described below.
## Usage
```bash
import React from 'react';
import Imprint from 'your-react-imprint-library';

function App() {
  const content = `
    <p>This is the dynamic content of the imprint.</p>
    <p>It supports HTML rendering.</p>
  `;

  const metaData = {
    author: 'Your Name',
    date: 'January 1, 2024'
  };

  const contactDetails = [
    'Address: 123 Main St, City',
    'Email: contact@example.com',
    'Phone: (123) 456-7890'
  ];

  const legalDisclaimer = 'This is the legal disclaimer text.';

  return (
    <div>
      <Imprint
        content={content}
        metaData={metaData}
        contactDetails={contactDetails}
        legalDisclaimer={legalDisclaimer}
      />
      {/* Your other application content */}
    </div>
  );
}

export default App;
```

## Props
The `Imprint` component accepts the following props:

* content: (Required) A string containing the dynamic content to be displayed. It supports HTML rendering.

* metaData: (Optional) An object with metadata information, such as author and date.

* contactDetails: (Required) An array of strings representing contact details.

* legalDisclaimer: (Required) A string containing the legal disclaimer text.
### Example with Props
```bash
const content = `
  <p>This is the dynamic content of the imprint.</p>
  <p>It supports HTML rendering.</p>
`;

const metaData = {
  author: 'Your Name',
  date: 'January 1, 2024'
};

const contactDetails = [
  'Address: 123 Main St, City',
  'Email: contact@example.com',
  'Phone: (123) 456-7890'
];

const legalDisclaimer = 'This is the legal disclaimer text.';

<Imprint
  content={content}
  metaData={metaData}
  contactDetails={contactDetails}
  legalDisclaimer={legalDisclaimer}
/>
```
## License
This component is open-source and available under the MIT License. You are free to use and modify it as needed for your projects.