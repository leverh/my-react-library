# React CookiePolicy Component

The `CookiePolicy` component is a React component designed to display a cookie policy or similar legal information. It includes a title, content, and an optional contact email for inquiries.

## Installation

To use the `CookiePolicy` component in your React project, follow these steps:

1. Install the package using npm or yarn:

```bash
npm install your-react-cookiepolicy-library
# or
yarn add your-react-cookiepolicy-library
```
Import the `CookiePolicy` component in your React application:
```bash
import CookiePolicy from 'your-react-cookiepolicy-library';
```
Use the `CookiePolicy` component in your React application, passing the necessary props as described below.
## Usage
Here's how you can use the `CookiePolicy` component in your React application:
```bash
import React from 'react';
import CookiePolicy from 'your-react-cookiepolicy-library';

function App() {
  const title = 'Cookie Policy';
  const content = `
    <p>This is the content of our cookie policy.</p>
    <p>It supports HTML rendering.</p>
  `;
  const contactEmail = 'contact@example.com';

  return (
    <div>
      {/* Your application content */}
      <CookiePolicy title={title} content={content} contactEmail={contactEmail} />
    </div>
  );
}

export default App;
```
## Props
The `CookiePolicy` component accepts the following props:

* title: (Optional) The title for the cookie policy. If not provided, it defaults to 'Cookie Policy.'

* content: (Required) The content of the cookie policy. It supports HTML rendering.

* contactEmail: (Optional) An email address for contacting the website regarding the policy.
### Example with Props
```bash
const title = 'Cookie Policy';
const content = `
  <p>This is the content of our cookie policy.</p>
  <p>It supports HTML rendering.</p>
`;
const contactEmail = 'contact@example.com';

<CookiePolicy title={title} content={content} contactEmail={contactEmail} />
```
## License
This component is open-source and available under the MIT License. You are free to use and modify it as needed for your projects.


