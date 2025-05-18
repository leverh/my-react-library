# A React 'How To' Basic Guide

## Starting a React Project with Vite

To begin a new React project, we'll use Vite, which is a modern, fast build tool that significantly improves the development experience. Vite offers near-instant server start, lightning-fast HMR (Hot Module Replacement), and optimized builds out of the box.

### Prerequisites

1. **Install Node.js**: Make sure Node.js (version 14.18+ or 16+) is installed on your machine. It comes with npm (Node Package Manager), which is required to install React and its dependencies.

2. **Check Node and npm versions**:
   ```bash
   node -v
   npm -v
   ```

### Creating a New React Project with Vite

1. **Create a new Vite project**:
   ```bash
   npm create vite@latest my-app -- --template react
   ```
   Replace `my-app` with your desired project name. This command creates a new directory with the specified name and sets up a React project using Vite.

2. **Navigate to your project directory**:
   ```bash
   cd my-app
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

### Running Your Project

1. **Start the development server**:
   ```bash
   npm run dev
   ```
   This command runs the app in development mode. Open the URL shown in your terminal (typically http://localhost:5173) to view it in your browser. The page will automatically reload if you make edits to your code.

2. **Building for production**:
   ```bash
   npm run build
   ```
   This command builds the app for production to the `dist` folder, optimizing the build for the best performance.

3. **Preview the production build**:
   ```bash
   npm run preview
   ```
   This allows you to preview your production build locally before deploying.

## Project Structure

A typical Vite React project has the following structure:

```
my-app/
├── node_modules/
├── public/
│   ├── favicon.ico
│   └── ...
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

- **src/**: Contains all of your React source code
  - **main.jsx**: The entry point of your application
  - **App.jsx**: The main App component
- **public/**: Contains static assets that will be served directly
- **index.html**: The HTML template for your app
- **vite.config.js**: Configuration file for Vite

## Saving the Project to GitHub

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
   git push -u origin main
   ```
   Note: Vite projects typically use `main` as the default branch rather than `master`.

## Using My Component Library

After setting up your React project, you can easily integrate the components from my library into your application. Here's how:

1. **Install the component library**:
   ```bash
   npm install your-react-component-library
   ```

2. **Import and use components in your code**:
   ```jsx
   import React from 'react';
   import { Navbar, ScrollToTopButton } from 'your-react-component-library';
   
   function App() {
     const navLinks = [
       { path: '/', label: 'Home' },
       { path: '/about', label: 'About' },
       { path: '/contact', label: 'Contact' }
     ];
   
     return (
       <div className="app">
         <Navbar 
           links={navLinks} 
           logo="/logo.svg"
         />
         
         <main>
           {/* Your page content */}
         </main>
         
         <ScrollToTopButton 
           threshold={300}
           showAnimation={true}
         />
       </div>
     );
   }
   
   export default App;
   ```

## Key Differences Between Vite and Create React App

If you're transitioning from Create React App to Vite, here are some key differences:

1. **Speed**: Vite is significantly faster for both development startup and hot reloading
2. **File Extensions**: Vite uses `.jsx` for React components by default rather than `.js`
3. **Entry Point**: Vite uses `main.jsx` and `index.html` at the root level (vs `index.js` and `public/index.html` in CRA)
4. **Build Output**: Vite outputs to `dist/` folder (vs `build/` in CRA)
5. **Environment Variables**: Vite uses `import.meta.env` instead of `process.env`
6. **Configuration**: Vite uses `vite.config.js` instead of various react-scripts configurations

## Additional Resources

- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://react.dev/)
- [My Component Library Documentation](https://github.com/leverh/PixelSummit-React-Library)

This guide provides a straightforward, step-by-step approach for beginners to start a React project using Vite and save it to GitHub, especially tailored for those who are using VS Code. It includes necessary commands and explains each step, ensuring a smooth setup process.