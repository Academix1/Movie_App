
# Pre-Assignment: First Day of React

## 1. Checking Version of Node in Console:
- Open your terminal or command prompt and check if **Node.js** is installed by running:
  ```bash
  node -v
  ```
- If the version is displayed (e.g., `v16.x.x`), Node.js is installed on your machine. If you get an error, proceed to the next step to install Node.js.

## 2. If Node.js is Not Installed, Install Node.js:
- Visit the official Node.js website: [Node.js Download](https://nodejs.org/)
- Download and install the **LTS** version for your operating system.
- After installation, verify by running the following command again:
  ```bash
  node -v
  ```

## 3. Creating a React App:
- Once Node.js is installed, you can create a new React project using **Create React App**:
  ```bash
  npx create-react-app my-first-react-app
  ```
- This command will create a new React project called `my-first-react-app` in a folder.

## 4. Having an Idea about `npm install`:
- **`npm install`** is used to install all the dependencies required for your project.
  - After creating your React app, navigate into the project directory:
    ```bash
    cd my-first-react-app
    ```
  - You will see a `node_modules` folder which contains all the installed packages. If you ever want to install new packages, use `npm install <package-name>`.

## 5. Starting the React Project:
- Now, start the React development server by running:
  ```bash
  npm start
  ```
- This will open your React app in the browser at `http://localhost:3000`.
