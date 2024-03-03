# React JS

React is a frontend framework used to build user interfaces. It offers a variety of features and benefits:

- Single page applications (SPAs)
- Reusable components
- Fast and scalable web applications
- Support for mobile, desktop, VR, AR, server-side, native, hybrid, progressive web, static, and dynamic websites

## DOM

React operates with two types of DOM:

1. Real Document Object Model (DOM): Created by the browser.
2. Virtual Document Object Model (DOM): Created by React for faster and easier manipulation.

## Rendering

Rendering is the process of converting the virtual DOM into the real DOM. It can occur server-side or client-side.

## Importing/Creating React

There are multiple ways to import or create a React application:

1. Manually
2. Using CDN
3. Using `create-react-app`

## JSX

JSX is a syntax extension that allows writing HTML in React components.

## Components

Components are the building blocks of React applications. They can be functional or class-based.

### Class Components

Class components are created using ES6 classes and have a `render` method, state, lifecycle methods, and a constructor.

### Functional Components

Functional components are created using functions and are simpler and lighter than class components.

### Render Method

The `render` method is used to return JSX code within a component.

### Nested Components

Components can be nested within one another to create complex UI structures.

## Props

Props are properties passed to components, allowing data to be provided from parent to child components.

## State

State represents the data within a component and is used to manage component-specific data. It should be treated as immutable.

## Handling 'this' in Normal Functions

To handle `this` in normal functions, use the following in the class constructor:
```javascript
this.functionName = this.functionName.bind(this);
```

## Conditional Rendering

Conditional rendering involves rendering components based on certain conditions. There are three common approaches:

1. **If-Else**: Render components based on a condition using an if-else statement.

    ```jsx
    if (condition) {
        return (
            <div>
                <h1>Hello World</h1>
            </div>
        );
    } else {
        return (
            <div>
                <h1>Bye World</h1>
            </div>
        );
    }
    ```

2. **Ternary Operator**: Use a ternary operator to conditionally render components.

    ```jsx
    return condition ? (
        <div>
            <h1>Hello World</h1>
        </div>
    ) : (
        <div>
            <h1>Bye World</h1>
        </div>
    );
    ```

3. **Short Circuit Operator (Logical &&)**: Render components based on a condition using the short circuit operator.

    ```jsx
    return condition && (
        <div>
            <h1>Hello World</h1>
        </div>
    );
    ```

## Lifecycle Methods

Lifecycle methods are automatically called during various stages of a component's lifecycle. The commonly used methods are:

- **componentDidMount()**: Called after the component is mounted. Useful for initializing data.
- **componentDidUpdate()**: Called after the component is updated. Useful for responding to state or prop changes.
- **componentWillUnmount()**: Called before the component is unmounted. Useful for cleanup tasks.

## Events Handling

Event handling in React involves handling user interactions like clicks, inputs, etc. Use the `preventDefault()` method to prevent default behavior, such as form submission.

```jsx
handleFunctionName = (e) => {
    e.preventDefault();
    // Handle event logic here
};
```

## Centralized State

Centralized state management involves maintaining the state in a single location accessible by all components. This can be achieved using tools like Redux.

## Redux

Redux is a state management tool used to manage the state of the application. It facilitates managing complex state across components in a predictable and efficient manner.


# Functional Components

Functional components are preferred over class components for several reasons:

- They are easier to read, write, understand, debug, and test.
- Functional components have better performance compared to class components.
- Class components should be used when lifecycle methods are necessary.

## Syntax of Functional Components

```jsx
const componentName = (props) => {
    return(
        <div>
            <h1>Hello World</h1>
        </div>
    );
};
```

## Props in Functional Components

Props can be easily used in functional components without the need for the `this` keyword. Destructure props directly in the function parameters.

```jsx
const componentName = ({ propsName1, propsName2 }) => {
    return(
        <div>
            <h1>Hello World {propsName1}</h1>
        </div>
    );
};
```

## Hooks

Hooks are functions that enable the use of state and lifecycle features in functional components. Here are some commonly used hooks:

### `useState()`

Used to manage state in functional components. Returns an array with the current state value and a function to update the state.

### `useEffect()`

Used to perform side effects in functional components, such as data fetching or DOM manipulation. It runs after every render and accepts a function as its first argument.

### `useParams()`

Used to access parameters from the URL in React Router. Returns an object containing the URL parameters.

### `useNavigate()`

Used to navigate to different pages in React Router. Returns a navigate function to change routes.

### `useSearchParams()`

Used to access and manipulate query parameters in the URL in React Router. Returns an array with the current search parameters.

### `useFormik()`

Used to manage forms in React. Returns an object containing form state and helper functions.

### `useRef()`

Used to create a mutable reference that persists between renders. Can be used to access DOM elements or store mutable values without triggering re-renders.

```jsx
import { useRef } from 'react';

const Ref = () => {
    const countRef = useRef(0);

    const handle = () => {
        countRef.current++;
        console.log(`Clicked ${countRef.current} times`);
    };

    return <button onClick={handle}>Click me</button>;
};

export default Ref;
```

```jsx
import { useRef, useState, useEffect } from 'react';

const Stopwatch = () => {
    const timerIdRef = useRef(0);
    const [count, setCount] = useState(0);

    const startHandler = () => {
        if (timerIdRef.current) { return; }
        timerIdRef.current = setInterval(() => setCount(c => c + 1), 1000);
    };

    const stopHandler = () => {
        clearInterval(timerIdRef.current);
        timerIdRef.current = 0;
    };

    useEffect(() => {
        return () => clearInterval(timerIdRef.current);
    }, []);

    return (
        <div>
            <div>Timer: {count}s</div>
            <div>
                <button onClick={startHandler}>Start</button>
                <button onClick={stopHandler}>Stop</button>
            </div>
        </div>
    );
};

export default Stopwatch;
```

```jsx
import { useRef, useEffect } from 'react';

const InputFocus = () => {
    const inputRef = useRef();

    useEffect(() => {
        console.log(inputRef.current);
        inputRef.current.focus();
    }, []);

    console.log(inputRef.current);

    return <input ref={inputRef} type="text" />;
};

export default InputFocus;
```

# Using CSS Frameworks in React

## Bootstrap

Bootstrap can be integrated into React projects using either CDN or npm.

### CDN

```html
<link
    rel='stylesheet'
    href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'
    integrity='sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z'
    crossorigin='anonymous'
/>
```

### NPM

```bash
npm install react-bootstrap bootstrap --save
```

Then, include the following line in your `index.js` file:

```jsx
import 'bootstrap/dist/css/bootstrap.min.css';
```

## Semantic UI

Semantic UI can be used in React similarly to Bootstrap.

```bash
npm i semantic-ui-react semantic-ui-css --save
```

Add the following line to your project's entry point (e.g., `index.js`):

```jsx
import 'semantic-ui-css/semantic.min.css';
```

## Material UI

Material UI is commonly used in large projects and is highly customizable.

```bash
npm install @mui/material @emotion/react @emotion/styled
```

For icons, install:

```bash
npm install @mui/icons-material
```

To use fonts, add the following line to your `index.html` file:

```html
<link
    rel='stylesheet'
    href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
/>
```

Then, you can use Material UI components in your project:

```jsx
import Button from '@material-ui/core/Button';

<Button variant='contained' color='primary'>Hello World</Button>
```

# Routers in React

## Introduction to Routers

Routers are used to manage paths in a website. React Router is a popular library for routing in React applications.

### Types of Routing

1. **Server-side routing**: The entire page is sent from the server to the client.
2. **Client-side routing**: Only the HTML file is sent from the server, and the page is rendered on the client-side.

## Using React Router

First, install React Router:

```bash
npm i react-router-dom
```

Then, import the necessary components:

```jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
```

Define routes using the `Router`, `Routes`, and `Route` components:

```jsx
<Router>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* Other routes */}
    </Routes>
</Router>
```

## Lazy Loading

Lazy loading is used to load components, images, or fonts only when they are needed.

```jsx
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./Home'));

<Suspense fallback={<div>Loading...</div>}>
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            {/* Other routes */}
        </Routes>
    </Router>
</Suspense>
```

Lazy loading can also be applied to images and fonts similarly to components.

# Formik Form Handling

To build forms in React with ease, you can use Formik along with Yup for validation.

First, install Formik:
```bash
npm i formik
```

And install Yup for validation:
```bash
npm i yup
```

Then import the necessary components:
```jsx
import { useFormik } from 'formik';
import * as Yup from 'yup';
```

Usage example:
```jsx
const formik = useFormik({
    initialValues: {
        name: '',
        email: '',
    },
    onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object({
        name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
    }),
});

return (
    <form onSubmit={formik.handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input
            id='name'
            name='name'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name ? formik.errors.name : null }

        <label htmlFor='email'>Email</label>
        <input
            id='email'
            name='email'
            type='email'
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? formik.errors.email : null }

        <button type='submit'>Submit</button>
    </form>
);
```

Validation Schema:
Yup provides methods for defining validation rules, such as `string()`, `number()`, `required()`, `email()`, etc.

## Testing in React

Testing in React involves two types: unit testing and integration testing.

### Development Server

Used for running the application in development mode.

### Production Server

Used for running the application in production mode.

Unit Testing:
- Tests individual components.

Integration Testing:
- Tests the entire application.

Testing is mainly done during the development phase.

## Next Steps
Here are some additional topics and concepts related to React JS that are needed to be:

1. **React Fragments**: Sometimes, you might want to return multiple elements from a component without adding an extra DOM element. React Fragments allow you to group multiple elements without adding extra nodes to the DOM.

2. **Error Boundaries**: Error boundaries are React components that catch JavaScript errors anywhere in their child component tree and log those errors, displaying a fallback UI instead of crashing the entire application.

3. **Higher-Order Components (HOC)**: HOCs are a pattern in React for reusing component logic. They are functions that take a component and return a new component with enhanced capabilities.

4. **Context API**: Context provides a way to pass data through the component tree without having to pass props down manually at every level. It's useful for passing data like themes, user preferences, or authentication tokens.

6. **Portals**: Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. They are useful for modals, tooltips, and other overlays.

7. **Server-Side Rendering (SSR)**: SSR is a technique used to render React components on the server and send the HTML to the client, improving initial load times and SEO.

8. **Code Splitting**: Code splitting is a technique used to split your code into smaller chunks and load them on demand. This can improve performance by reducing the initial bundle size and loading only the code needed for the current view.

9.  **Context Providers and Consumers**: In addition to using the Context API directly, you can also use `React.createContext()` to create context providers and consumers, which simplifies sharing data between components.
    
10. **Memoization**: Memoization is a performance optimization technique used to store the results of expensive function calls and return the cached result when the same inputs occur again.

11. **React Hooks Rules**: Understanding the rules of using React Hooks, such as only calling hooks at the top level of a function component, and not calling hooks conditionally.