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
    1. Note that, Component Shuold be in uppercase
13. props in class and functional component , use of default, arrow function, props as immutable, React Library
14. state v/s props
    - props are passed to components while state managed in component
    - props are function paramters while state are declared in body
    - props are immutable while state are mutable
    - in functional components props are used using just props
    - in class components props are used using this.props
    - in functional components states are used using useState
    - in class components states are used using this.state
15. state
    1. create state and initilize it
    2. super is used because call is made to base class constructor
    3. simply display message just like props
    4. then change message on button click using setState function
    5. Update using previous state
    6. update using previous state and props
    7. update state using spread operator
    8. don't update state directly instead use setState to update state
16. Destructuring props and state for code readability
    1. there are two ways to destructure in functional component
    2. in class component destructure it in render method
17. Event Handling
    1. don't use parenthesis in event handler 
    2. in class component don't use function keyword
    3. use onClick instead of onclick
16. Binding Event Handlers 
    1. Binding In Render Method
    2. Arrow Function In Render method
    3. Official Docs Apprch Binding in constructor
    4. As class property as arrow function
17. Component Communication
    1. Parent to Child (simple)
    2. Child to parent (tricky)
        1. we can not send data from child to parent but we can send method
        2. so in method parameter we pass data from parent to child
18. Conditional Rendering
    1. if/else
        1. if/else not work inside jsx
    2. Element variables
    3. Ternary conditional operator
    4. Short circuit operator
        1. For something or nothing logic
19. Use id as key in list
    1. index of array can cause rendering problem when adding or sorting
20. Css styling, inline , module  
20. naming convention for css module style sheet, file name should end with module.css
21. lifecycle methods only for class components while in functional component we use useEffect hook as lifecyle
    - There are three phases of react component
        1. mounting (render on page)
        2. updating (if props cause compoent re-render, if component state change)
        3. unmounting (when you hide a component or no longer want component)
22. Order of mounting lifecycle method
23. Fragments group list of childern without adding extra node to the DOM
24. Context api provides a way to pass data through the component tree without having to pass props down manually at every level
25. There are three steps to implement context
    1. Create Context
    2. Provide Context (In the parent compoent so that child can access them)
    3. Consume the context Value (using a function which return valid jsx)
26. Higher Order components are used to make code DRY
    1. Higher Order Components are the functions which takes a component as argument and returna a new enhanced component
27. Pure components are used to render a component if the state or props is changed
28. Memo also works just like pure component but its for functional component
