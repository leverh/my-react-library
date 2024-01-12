
# React ItemList Component

The `ItemList` component is a versatile React component designed to display a list of items, each represented as a `SectionItem`, along with an optional call-to-action (CTA) section. It is suitable for creating sections with lists of items and a CTA for your web application.

## Installation

To use the `ItemList` component in your React project, follow these steps:

1. Install the package using npm or yarn:

```bash
npm install your-react-itemlist-library
# or
yarn add your-react-itemlist-library
```
2. Import the `ItemList` component in your React application:
```bash
import ItemList from 'your-react-itemlist-library';
```

Use the `ItemList` component in your React application, passing the necessary props as described below.

## Usage
Here's how you can use the `ItemList` component in your React application:
```bash
import React from 'react';
import ItemList from 'your-react-itemlist-library';

function App() {
  const items = [
    {
      title: 'Item 1',
      description: 'Description for Item 1',
      iconName: 'icon-1'
    },
    {
      title: 'Item 2',
      description: 'Description for Item 2',
      iconName: 'icon-2'
    },
    // Add more items as needed
  ];

  const ctaContent = 'Explore more items';
  const ctaLink = '/explore';

  return (
    <div>
      <ItemList items={items} ctaContent={ctaContent} ctaLink={ctaLink} />
      {/* Your other application content */}
    </div>
  );
}

export default App;
```
## Props
The `ItemList` component accepts the following props:

* items: (Required) An array of items, each represented as an object with the following properties:
* title: (Required) The title of the item.
* description: (Required) The description or content of the item.
* iconName: (Optional) The name or identifier of an icon associated with the item.

* ctaContent: (Optional) The content or text for the call-to-action (CTA) section. If provided, it displays the CTA section.

* ctaLink: (Optional) The URL or link for the CTA button. Defaults to "#" if not provided.
### Example with Props
```bash
const items = [
  {
    title: 'Item 1',
    description: 'Description for Item 1',
    iconName: 'icon-1'
  },
  {
    title: 'Item 2',
    description: 'Description for Item 2',
    iconName: 'icon-2'
  },
  // Add more items as needed
];

const ctaContent = 'Explore more items';
const ctaLink = '/explore';

<ItemList items={items} ctaContent={ctaContent} ctaLink={ctaLink} />
```
## License
This component is open-source and available under the MIT License. You are free to use and modify it as needed for your projects.