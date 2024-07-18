# Advanced React by Meta
## [Course](https://www.coursera.org/learn/advanced-react) from Coursera [Taught by Meta Staff](https://www.coursera.org/instructor/~30575670)

## Content
- [Advanced React by Meta](#advanced-react-by-meta)
  - [Course from Coursera Taught by Meta Staff](#course-from-coursera-taught-by-meta-staff)
  - [Content](#content)
  - [Week 1: Components](#week-1-components)
    - [Rendering Lists in React](#rendering-lists-in-react)
    - [Forms in React](#forms-in-react)
    - [React Content](#react-content)
  - [Week 2: React Hooks and Custom Hooks](#week-2-react-hooks-and-custom-hooks)
    - [2.1 Getting Started with Hooks](#21-getting-started-with-hooks)
    - [2.2 Rules of Hooks and Fetching Data with Hooks](#22-rules-of-hooks-and-fetching-data-with-hooks)
    - [2.3: Advanced Hooks](#23-advanced-hooks)
  - [Week 3rd: JSX and Testing](#week-3rd-jsx-and-testing)
    - [3.1 JSX Deep Dive](#31-jsx-deep-dive)
    - [3.2 Reusing Behaviour](#32-reusing-behaviour)
    - [3.3 Integration Tests with React Testing Library](#33-integration-tests-with-react-testing-library)
  - [Week 4th: Final Project](#week-4th-final-project)


## Week 1: Components

### Rendering Lists in React

- A **list** is a collection of elements that, in JavaScript terms, represent an array. Arrays can contain any type of data.

- The `map()` method is used to transform the array and extract only the data that users care about, omitting the rest.

- **JSX** is a special syntax akin to JavaScript that React uses to describe user interfaces, or UIs. In React, a component is essentially a function that returns JSX.

- Keys are identifiers that help React determine which items have changed, been added, or removed. They also instruct how to manage a specific element when an update occurs, including whether its internal state should be preserved.

- Stable identifiers should be used for keys, such as `key: 'wine'` for wine and `key: 'beer'` for beer. While indexes can be used, they are not recommended as keys if the order of items might change— for instance, when users can sort, add, or remove items. IDs from a server can also be used. In summary, a `key` should be unique among its siblings.
- See Lab / Example Code [Here](./src/labs/lab1/DesertList.jsx)
  
### Forms in React

- Traditional HTML forms keep some internal state inside the DOM and have some default behavior when submitting them.
- The `action` attribute points to the endpoint that will handle the request.
- Controlled components are a set of components that offer a declarative application programming interface (API) to enable full control of the state of form elements at any point in time using React state.
- `value` is a special property that React adds to most of the form elements to determine the input content at any point in time during the lifecycle of the component.
- The `onChange` prop is an `onChange` callback.
  ```javascript
  const handleChange = (event) => {
      setValue(event.target.value);
  }
  ```
- To have control over the form values whenever the form is submitted, we can use the `onSubmit` prop in the form HTML element. `onSubmit` also receives a DOM event as a parameter.
  ```jsx
  <form onSubmit={handleSubmit}>
  ...
  const handleSubmit = (event) => {
      event.preventDefault();
      // ...submit logic
  }
  ```

- A controlled component is a component that is controlled by React state, while an uncontrolled component is a component that maintains its own internal state.
- For example, an uncontrolled component:
  ```javascript
  const Form = () => {
      const inputRef = useRef(null);
      const handleSubmit = () => {
          const inputValue = inputRef.current.value;
          // ...submit logic
      };
      
      return (
          <form onSubmit={handleSubmit}>
              <input ref={inputRef} type="text" />
          </form>
      );
  }
  ```
- For example, a controlled component:
  ```javascript
  const Form = () => {
      const [value, setValue] = useState("");
      const handleChange = e => setValue(e.target.value);

      return (
          <form>
              <input value={value} type="text" onChange={handleChange} />
          </form>
      );
  }
  ```

Below table summarizes the features that each one supports:

| Feature                         | Uncontrolled | Controlled |
|---------------------------------|:------------:|:----------:|
| One-time value retrieval        | ✓            | ✓          |
| Validating on submit            | ✓            | ✓          |
| Instant field validation        | ✗            | ✓          |
| Conditionally disables submit button | ✗       | ✓          |
| Enforces a specific input format | ✗           | ✓          |
| Serves input for one piece of data | ✗         | ✓          |
| Dynamic inputs                  | ✗            | ✓          |

- By submitting a form the default action of the form kicks in which is a GET request to the root and a page refresh.

- The `onBlur` event is used whenever the input loses focus while an `onFocus` event is used when an input gains focus.
  ```javascript
  onBlur /* or onFocus*/={() => setValue(...)}
  ```

- Open source modules are helpful for dealing with forms, validation, and states; for example, `Yup`, `react-hook-form`, `formik`.
- See Lab / Example Code [Here](./src/labs/lab2/RegistrationForm.jsx)

### React Content

- Props and states are plain JavaScript objects which the React uses to hold information. Both influence the render output. Props are passed to components like parameters in a function, and state is managed in a component like variables in a function.

- Props are shorthand for properties, and are passed to components as part of a component's configuration. They are received from parent and are immutable.

- State allows React to re-render. State is a serialized double representation at one point in time or in other words, a snapshot. State is private to a component.

- **Stateful components** have both state and props, used for:
  - Client-Server communication
  - Data processing
  - Responding to user events

- **Stateless components** have only props, used for:
  - Presentation
  - Formatting logic

- Prop drilling problems occur when passing data through all component tree levels, even to components that do not need it.

- React provides us a context API, which provides an alternative way to pass data through the component tree without having to pass props down manually.
- See Lab / Example Code [Here](./src/labs/lab3/Context.jsx)

- The right tool to use when we need to share data that can be considered global for a tree of React components.

- If the component renders the same result given the same props, you can wrap it in a call to `React.memo` for a performance boost by memoizing the result.

- Memoization is a programming technique that accelerates performance by caching the return value of expensive function calls.


## Week 2: React Hooks and Custom Hooks

### 2.1 Getting Started with Hooks

- `useState` hook works with state in a React component, with state being all the data and app is working with at a given time.

- In destructuring, we are free to give any variable name during destructuring of arrays while we should use the exact property name for variables when destructuring objects.

- Invocation of `useState` hook returns a two-member array. Conventions are followed in below snippets:
  ```javascript
  const [something, setSomething] = useState(initialState);
  ```
  - `initialState`: It is the current state of this state when the component first renders. Can be of any type.
  - `something`: Stores the current state of the app, initially set to `initialState`.
  - `setSomething`: A function to update the state, it returns nothing and takes the `nextState` in parameters.
- See Lab / Example Code [Here](./src/labs/lab4/GiftCardPage.jsx)

- A function can be classified as pure and impure; simply put, pure functions don't have side effects and impure functions do.

  - For pure functions, the specific parameters will always return the exact same output, no matter how many times it is invoked.

  - Impure functions will perform a side effect such as invoke `console.log`, fetch a browser geolocation.

- Side effects can be thought of as something external to or outside the function.

- To deal with issues of impure functions, we need to use the `useEffect` hook.
  ```javascript
  useEffect(setup, dependencies);
  ```
  - `setup`: A function with effects logic, optionally returning a `cleanup` function. This function is invoked when the component is mounted or when every re-render. Cleanup function is invoked and returned from the setup function, is invoked after removal of the component. The cleanup function is to clear.
  - `dependencies`? (optional): The list of all reactive values referenced inside the `setup` function. Reactive values may be props, state, and all other variables and functions.
  - returns `undefined`.

- `useEffect` is invoked after every render, and also when the provided dependencies change.

- We can use multiple effects to separate concerns.

- We should clean the resources which are not needed via cleanup function.

### 2.2 Rules of Hooks and Fetching Data with Hooks

- Some rules for hooks are:
  - Only call hooks from a React functional component.
  - Only call hooks at the top level.
  - Can call multiple state or effects hooks.
  - Make multiple hooks calls in the same sequence.

- Fetching data from a third-party API is considered a HTTP side effect.
  ```javascript
  useEffect(() => {
      fetch(url).then(/* ... */);
  }, [url]);
  ```

- It is very important in API design and the readability of it is a big plus. Keep it simple, and try to keep it stable and free of bugs.
- See Lab / Example Code [Here](./src/labs/lab5/FetchRandomUser.jsx)


### 2.3: Advanced Hooks

- `useState` has limitations; for instance, when we have complex state logic that involves multiple sub-values or when the next state depends on the previous state.

- We can think of `useReducer` as a superpowered `useState`.

- The `useState` hook starts with an initial state, but the `useReducer` hook gets a reducer function in addition to the initial state.

```javascript
const [state, dispatch] = useReducer(reducer, initialArg, init);
```

- `reducer`: a function that specifies how the state gets updated. It must be pure, should take the action and state as parameters arguments, and should return the next state. State and action can be of any type.

- `initialArg`: The value from which the initial state is calculated. It can be of any type. How the initial state is calculated depends on the `init` argument.

- `init`: The initializer function that should return the initial state. If it is not specified the initial state is set to `initialArg` otherwise set to `init(initialArg)`.

- `state`: Returns the current state, set to `init(initialArg)` or `initialArg` on its first render.

- `dispatch`: Returns a function that lets us update the state to a different value and trigger a re-render.

  - `action`: The dispatch function takes the action performed by the user which can be of any type, usually an object with a type property defining it and optionally other properties with additional data.

  - `dispatch` does not have a return value.

- `useState` hook is best for less complex data, better to use it with primitive data types.

- `useReducer` is best for more complex data, specifically arrays and objects.

- `useRef` lets us reference a value that's not needed for rendering. Used for referencing a value with a ref, mainly due to not causing rerendering and avoiding recreating the ref contents.

```javascript
const intervalRef = useRef(initialValue);
```

- @param `initialValue`: The value we want the ref's object's current property to be initially. It can be a value of any type. This argument is ignored after the initial render.

- @return `current`: `useRef` returns an object with a single property, initially it is set to `initialValue` we have passed. We can later set it to something else. If we pass the ref object to React as a ref attribute to a JSX node, React will set its current property.

- By creating a custom hook, we can create a reusable and streamlined way to reuse a piece of functionality in our React apps. Hooks provide a repeatable, streamlined way to deal with specific requirements in our app.

- It is a convention that a custom hook needs to have a name that begins with `use`.
- See Lab / Example Code [Here](./src/labs/lab6/WorkDay.jsx)

## Week 3rd: JSX and Testing

### 3.1 JSX Deep Dive

- JSX is a syntax extension to JS that React uses to describe what the UI should look like. It is a powerful abstraction that combines both markup and business logic into an entity called "component."

- JSX is allowed to represent the final HTML output as a plain object. Each consists of primarily two attributes:
  - `type`: defines the type of node such as button.
  - `props`: all properties of the component received in a single object.

- Elements can be nested via the `children` property.

- The `type` of an element can also be a function corresponding to a React component.

- Performance is the invisible thing that you might not notice right away; you may not be able to show it or brag about it, but it's really very important.

- There are two main features that enable compound components:
  - Containment refers to the fact that some components don't know their children ahead of time. They are like generic boxes, e.g., sidebars, dialogues, etc. For these component boxes, the recommended approach is to use the `children` prop to pass children components directly as their content.

  - Specialization defines components as special cases of other components.

- In JSX, the content between the opening and closing tags is passed as a unique prop called `children`.

- A fragment component lets us group a list of children without adding extra nodes to the DOM.
  ```jsx
  <React.Fragment> {/* ... */} </React.Fragment>
  // or
  <> {/* ... */} </>
  ```

- We can pass any JavaScript expression as children by enclosing it with curly braces like:
  ```jsx
  <Component>{'Little Lemur'}</Component>
  ```

- `false`, `null`, `undefined`, and `true` are all valid children which don't render anything.

- `React.cloneElement` is part of React's top-level API and it is used to manipulate and transform elements.
  ```jsx
  React.cloneElement(element, [props])
  ```

- Top-level API refers to the way you would import these functions from the React package.

- `React.cloneElement` effectively clones and returns a new copy of the provided element.
  - @param `element`: the React element we would like to clone.

  - @param `props`: The props that will be extracted and merged with the original props passed into the component.

- This API allows a parent to modify and/or add properties to children and/or extend functionality of a child.

- Another top-level API useful for children manipulation is `React.Children`, which provides utilities for dealing with the `props.children` data structure.
  - The most important is `map` function which performs transformation and returns a new React element.
    ```jsx
    React.Children.map(children, callback)
    ```

- Spread operator (`...`) can be applied to objects, arrays, and even strings.

- To copy an object we can do:
  ```jsx
  const copy = {...original}
  ```
- See Lab / Example Code [Here](./src/labs/lab7/Radio.jsx)


### 3.2 Reusing Behaviour

- Cross-cutting concerns is some generic functionality that is not related to the application business logic and that is needed in many places. For example, managing permissions, handling errors, logging, etc.

- A **higher-order component (HOC)** is an advanced pattern that emerges from React's compositional nature. Specifically, HOC is a function that takes a component and returns a new component.

- HOC enhances or extends the capabilities of the component provided.

- For HOCs, don't mutate the original component, use composition and turn the HOC into a pure function that doesn't alter the arguments it receives, always returning a new component.

- HOC should spread and pass-through all the props, helping ensure that HOCs are as flexible and reusable as possible.
```jsx
return <Wrapped newProp={newProps} {...originalProps} />
```

- We should also maximize composability by leveraging the "Component => Component" structure, i.e.:
  ```jsx
  compose(f, g, h) is same as (...args) => f(g(h(...args)))
  ```

- Conventional "with" is preferred to the name of HOCs, i.e. `withHOC`. It expresses the enhancing nature of the technique.

- Render props is also a powerful technique we can leverage to reuse common code. It is about using a prop called "render" with a particular attribute that it has to be a function. More precisely, a component with a render prop takes a function that returns a React element and calls that function instead of its render logic.
```jsx
<DataFetcher
  url='https://.....'
  render = {data => <h3>{data.length} {items}</h3>}  
>
</DataFetcher>
```
- See Lab / Example Code [Here](./src/labs/lab8/MousePositionTracker.jsx)

### 3.3 Integration Tests with React Testing Library

- Testing is done to guarantee that the app created works as intended. We have two types of testing:
  1. **Manual Testing**: Manually interacting with different parts of an application, ensuring the app is fully functional. It is tedious, error-prone, and time-consuming.
  2. **Automation Testing**: Done by writing test suites to test functionality of a component. It is effective in discovering bugs or defects before delivery to clients. Ensures quality of software.

- Some best practices for writing tests are:
  - Avoid including implementation details
  - Work with DOM nodes
  - Resemble software usage
  - Maintainability

- **Jest** is a test runner that lets us access an artificial DOM called JSDOM, which is only an approximation of how the browser works.

- **Mocking** refers to something made as an imitation, and enables you to replace complex functions from your code with others that are simpler and simulate the same behavior.

- **React Testing Library** is a set of utilities that lets us test React components without relying on their implementation details. It also follows the best practices highlighted before.

- The `render` function is used to render the component you would like to test and perform assertions against.
- See Lab / Example Code [Here](./src/labs/lab9/Feedback.jsx)

## Week 4th: Final Project
- See Lab / Example Code [Here](./src/labs/final-project/Portfolio.jsx)

