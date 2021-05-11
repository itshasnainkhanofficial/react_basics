# React Learning path


1. React Introduction
2. React using CDN
    ```
    1. <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    2. <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    3. <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    ```
3. React without babel or without JSX
4. React with babel or with JSX
5. React JSX syntax
6. without react
7. VirtualDom concept
8. Create New React App
    1. first install nodejs
    2. npx create-react-app appname
    3. goto app directory and npm start
9. for styling install tailwindcss
    1. npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
    2. npm install @craco/craco
    3. replace
        ```
        1. "start": "react-scripts start",
        2. "build": "react-scripts build",
        3. "test": "react-scripts test",

                 with

        1. "start": "craco start",
        2. "build": "craco build",
        3. "test": "craco test",
        ```
    5. create a craco.config.js at the root and add the tailwindcss and autoprefixer as PostCSS plugins:
       ```
        module.exports = {
            style: {
            postcss: {
                plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
                ],
            },
            },
          }
        ```
    6. generate your tailwind.config.js file
        1. npx tailwindcss init
        2. This will create a minimal tailwind.config.js file at the root of your project
        ```
            // tailwind.config.js
            module.exports = {
            purge: [],
            darkMode: false, // or 'media' or 'class'
            theme: {
                extend: {},
            },
            variants: {
                extend: {},
            },
            plugins: [],
            }
        ```
        3. Configure Tailwind to remove unused styles in production
        ```
        module.exports = {
            purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
            darkMode: false, // or 'media' or 'class'
            theme: {
            extend: {},
            },
            variants: {
            extend: {},
            },
            plugins: [],
        }
        ```
    7. Include Tailwind in your CSS
        ```
        /* ./src/index.css */
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        ```
    8. Finally, ensure your CSS file is being imported in your ./src/index.js file:
        1. import './index.css';
    9. to get intellisense of tailwind install extension Tailwind CSS IntelliSense
10. Extension for react ES7 React by dsznajder
11. to get JSX intellesense goto setting and add
    ```
     "emmet.includeLanguages": {
        "javascript": "javascriptreact"
    }
    ```
12. Use Of class and functional component
