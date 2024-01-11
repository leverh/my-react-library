# A React 'How To' Basic Guide

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