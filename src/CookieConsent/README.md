# React CookieConsent Component

The `CookieConsent` component is a React component designed to display a cookie consent message to website visitors. It includes a message, a "Learn More" link, and a button for users to provide their consent to cookies.

## Installation

To use the `CookieConsent` component in your React project, follow these steps:

1. Install the package using npm or yarn:

```bash
npm install your-react-cookieconsent-library
# or
yarn add your-react-cookieconsent-library
```
Import the `CookieConsent` component in your React application:
```bash
import CookieConsent from 'your-react-cookieconsent-library';
```
Use the `CookieConsent` component in your React application, passing the necessary props as described below.
## Usage
Here's how you can use the `CookieConsent` component in your React application:
```bash
import React from 'react';
import CookieConsent from 'your-react-cookieconsent-library';

function App() {
  const consentText = 'This website uses cookies to ensure you get the best experience on our website.';
  const learnMoreLink = '/cookie-policy'; // Link to your cookie policy page

  const handleConsent = () => {
    // Implement your logic when the user provides consent
    console.log('User has provided consent to cookies.');
  };

  return (
    <div>
      {/* Your application content */}
      <CookieConsent
        consentText={consentText}
        learnMoreLink={learnMoreLink}
        onConsent={handleConsent}
      />
    </div>
  );
}

export default App;
```
## Props
The `CookieConsent` component accepts the following props:

* consentText: (Optional) The text message to inform users about the use of cookies. If not provided, it defaults to a generic message.

* learnMoreLink: (Optional) A link to the page where users can learn more about your cookie policy. If not provided, it defaults to '/cookie-policy'.

* onConsent: (Optional) A function that is called when the user provides consent by clicking the "Got it!" button.
### Example with Props
```bash
const consentText = 'This website uses cookies to ensure you get the best experience on our website.';
const learnMoreLink = '/cookie-policy';

<CookieConsent
  consentText={consentText}
  learnMoreLink={learnMoreLink}
  onConsent={handleConsent}
/>
```
## License
This component is open-source and available under the MIT License. You are free to use and modify it as needed for your projects.


