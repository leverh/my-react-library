# ERoR cODes' - A React 'How To' Basic Guide

### Starting a React Project

To begin a new React project, you will use the Create React App (CRA) tool, which sets up the environment for you. CRA is an officially supported way to create single-page React applications. It offers a modern build setup with no configuration needed.

1. **Install Node.js**: Make sure Node.js is installed on your machine. It comes with npm (Node Package Manager), which is required to install React and its dependencies.

2. **Creating the React App**: Open your terminal and run the following command to create a new React application. Replace `my-app` with your desired project name:

```bash
   npx create-react-app my-app
```

This command creates a new directory named my-app with all the necessary files and configurations.

### Then:

1. **Opening the Project in VS Code**: Navigate to your project directory and open it in VS Code:

```bash
cd my-app
```
2. **Starting the Project**: Run the following command to start the project:
```bash
npm start
```
This command runs the app in development mode. Open http://localhost:3000 to view it in your browser. The page will reload if you make edits.

### Saving the Project to GitHub:

To save your project to GitHub, you need to have Git installed on your machine and a GitHub account.

1. **Initialize Git Repository**: In your project's root directory, initialize a new Git repository:

```bash
git init
```

2. **Add Files to Git Repository**: Add all files to the Git repository:

```bash
git add .
```

3. **Committing Files**: Commit the files with a message:

```bash
git commit -m "Initial commit"
```

4. **Create a Repository on GitHub**: Go to GitHub and create a new repository. Copy the repository URL.

5. **Linking Local Repository to GitHub**: In your project's root directory, link your local repository to GitHub with:
   
```bash
git remote add origin <YOUR_REPOSITORY_URL>
```

6. **Pushing Files to GitHub**: Push your files to GitHub with:

```bash
git push -u origin master
```
Replace master with main or your preferred branch name if necessary.

By following these steps, you will have your React application running locally and the code pushed to your GitHub repository.


This guide provides a straightforward, step-by-step approach for beginners to start a React project and save it to GitHub, especially tailored for those who are using VS Code. It includes necessary commands and explains each step, ensuring a smooth setup process.


### Usage in Your Application

After setting up these base styles, you can easily integrate the components from my library into your React application. The consistent base styling ensures that the components look and function as intended. Here's an example of how to use a component from my library in your `App.js`:

```jsx
import React from 'react';
import { MyComponent } from '[your-library-name]';

function App() {
  return (
    <div>
      <MyComponent />
      {/* Additional components can be added here */}
    </div>
  );
}

export default App;
```

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
### Styling Components with CSS Modules

In React, one of the best practices for styling components is to use CSS Modules. This approach helps in avoiding naming conflicts and ensures that styles are scoped to individual components. In our library, we follow this practice for clean and maintainable styling.

#### How CSS Modules Work

CSS Modules allow you to create a CSS file for each component. When you import this CSS file into your component, it becomes an object where each class name is a property. This scoped styling methodology ensures that styles do not bleed into other components unintentionally, keeping your styles encapsulated.

#### Using `className={styles.xxxx}` in JSX

When using CSS Modules, you assign class names in JSX as follows:

```jsx
import styles from './MyComponent.module.css';

function MyComponent() {
  return (
    <div className={styles.container}>
      {/* content */}
    </div>
  );
}
```
In this example, `styles.container` refers to a class named `.container` in the `MyComponent.module.css` file. This pattern allows you to use descriptive class names in CSS without worrying about global namespace pollution.

Advantages of CSS Modules

* Local Scope: Styles are scoped locally to the component, reducing the risk of unintended side effects.
* Maintainability: Easier to maintain and update styles for individual components.
* Reusability: Components with their styles can be easily reused across different parts of your application or even in different projects.
* Descriptive Naming: Since class names are locally scoped, you can use more descriptive, meaningful names without fear of conflicts.

By using `className={styles.xxxx}` in your JSX, you ensure that each component only applies the styles defined in its corresponding CSS module, leading to more predictable and easier-to-debug styling.

**Choosing the Right File Formats**: For images and icons, use formats like SVG for vector graphics, which are scalable and usually have smaller file sizes. For photographs, consider using WebP or JPEG formats, which offer good quality at lower file sizes.

### The Joy of Building with React

Developing websites and applications with React is not just about writing code—it's a genuinely fun and creative experience. When I first encountered React during my coding course, I it seemed daunting and limiting. However, the real learning began after the course ended. It was through hands-on practice, building actual projects, that the pieces of the React puzzle started falling into place. 

The beauty of React lies in its simplicity once you get the hang of it. Creating interactive UIs becomes almost intuitive. You start seeing the web in components, making it easier to design, develop, and maintain complex applications. I've learned that React is not just a library; it's a new way of thinking about web development.

And here's the thing: I'm still learning, and there's so much more to explore. With this library, I want to show you that React is indeed a piece of cake to use once you start applying it. If you're just beginning, remember that the best way to learn React is by doing. Build something, break it, fix it, build something on top of it, and improve it.

### Last but NOT least - Emphasizing Accessibility in Web Development

Accessibility is a fundamental aspect of modern web development that ensures your websites and applications are usable by everyone, including people with disabilities. Incorporating accessibility in your project is not just about adhering to legal requirements; it's about embracing inclusivity and extending the reach of your content to the widest possible audience. This includes designing for screen readers, ensuring keyboard navigability, and using ARIA (Accessible Rich Internet Applications) roles and attributes where necessary. Remember that accessible design benefits all users, not just those with disabilities. It improves the overall user experience, enhances SEO, and demonstrates social responsibility. Developers have the opportunity, responsibility, and (moral and legal) **obligation** to build a web that's inclusive and accessible to all, and this should be a key consideration in every project anyone undertakes. By integrating accessibility best practices into the React components and applications, you're not only creating a more inclusive web but also ensuring a smoother, more user-friendly experience for everyone.

### ERoR cODes supports, believes, and strives to make the world a better place!