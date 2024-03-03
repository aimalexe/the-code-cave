# Vanilla JavaScript

## Declaring Variables

- `var`: Declares a variable globally.
- `let`: Declares a variable with block scope.
- `const`: Declares a variable with constant value that cannot be changed.

## Printing Variables

- `alert()`: Displays an alert box.
- `document.write()`: Writes into the HTML document.
- `console.log()`: Outputs a message to the console.

## Conditions Testing

### If-Else Statements:

```javascript
if (condition) {
    // Code to execute if this condition is true
} else if (condition) {
    // Code to execute if this condition is true
} else {
    // Code to execute if all conditions are false
}
```

### Ternary Operator:

```javascript
(condition ? true : false);
```

### Switch Statement:

```javascript
switch (variable) {
    case condition:
        // Code to execute if this case is true
        break;
    case condition:
        // Code to execute if this case is true
        break;
    default:
        // Code to execute if all cases are false
}
```

## Template Literals

```javascript
const firstName = "Aimal";
const lastName = "Khan";

console.log(`Hello ${firstName} ${lastName}`); // Outputs: Hello Aimal Khan
```

## Loops / Iterations

- Use `let` to declare variables for iteration.

### For Loop:

```javascript
for (initialization; condition; increment/decrement) {
    // Code to execute
}
```

### While Loop:

```javascript
while (condition) {
    // Code to execute
}
```

### Do-While Loop:

```javascript
do {
    // Code to execute
} while (condition);
```

## Objects

- Objects hold different types of data.
- They can be nested inside other objects.
- Objects are commonly used to structure data.

```javascript
const objectName = {
    key: value,
    key: value,
    key: value,
    nestedObject: {
        key: value,
        key: value,
        key: value,
    },
};
```

## Data Serialization

- **JSON (JavaScript Object Notation)**:
    - Parsing: `let jsonData = JSON.parse(jsonString);`
    - Stringifying: `let jsonString = JSON.stringify(objectName);`

- **XML (Extensible Markup Language)**:
    - Was industry standard for storing and exchanging data.

- **CSV (Comma Separated Values)**:
    - Delimited text file.
    - Common in data scraping, mining, and science.
    - Excellent for non-complex data.

- **YAML (Yet Another Markup Language)**.


# Array Methods

- **push()**:
  - Syntax: `arrayName.push(value);`
  - Description: Adds one or more elements to the end of an array.

- **pop()**:
  - Syntax: `arrayName.pop();`
  - Description: Removes the last element from an array and returns that element.

- **map()**:
  - Description: Creates a new array by performing a function on each array element.

- **filter()**:
  - Description: Creates a new array with elements that pass the test implemented by the provided function.

- **reduce()**:
  - Description: Applies a function to each element of the array to reduce it to a single value.
    - Syntax: 
      ```javascript
      array.reduce(function(accumulator, currentValue) {
          return accumulator + currentValue;
      }, initialValue);
      ```
    - Parameters:
      - `accumulator`: The accumulated value from previous iterations.
      - `currentValue`: The value of the current iteration.
      - `initialValue`: The initial value for the accumulator.

- **sort()**:
  - Description: Sorts the elements of an array in place and returns the sorted array.
    - Syntax: 
      ```javascript
      array.sort(function(a, b) {
          return a - b;
      });
      ```
    - Parameters:
      - `a`: The first value for comparison.
      - `b`: The second value for comparison.

- **forEach()**:
  - Description: Calls a function for each element in the array.
    - Syntax:
      ```javascript
      array.forEach(function(currentValue, index, array) {
          // Code to execute
      });
      ```
    - Parameters:
      - `currentValue`: The value of the current iteration.
      - `index`: The index of the current iteration.
      - `array`: The array being traversed.

- **indexOf()**:
  - Syntax: `arrayName.indexOf(value);`
  - Description: Returns the first index at which a given element can be found in the array, or -1 if it is not present.

- **concat()**:
  - Syntax: `arrayName.concat(arrayName);`
  - Description: Combines two or more arrays.

- **fill()**:
  - Syntax: `arrayName.fill(value, startIndex, endIndex);`
  - Description: Fills all the elements of an array with a static value from a start index to an end index.

- **some()**:
  - Syntax:
    ```javascript
    arrayName.some(function(currentValue, index, array) {
        return true;
    });
    ```
  - Description: Checks if at least one element in the array passes the test implemented by the provided function.

- **every()**:
  - Syntax:
    ```javascript
    arrayName.every(function(currentValue, index, array) {
        return true;
    });
    ```
  - Description: Checks if all elements in the array pass the test implemented by the provided function.

## Destructuring

### Array Destructuring

```javascript
let [firstName, lastName] = ['Aimal', 'Khan'];
```

- `firstName`: The first value of the array.
- `lastName`: The second value of the array.

### Object Destructuring

```javascript
let {firstName, lastName} = objectName;
```

- `firstName`: The value corresponding to the key 'firstName' in the object.
- `lastName`: The value corresponding to the key 'lastName' in the object.


# String Methods

- **concat()**:
  - Syntax: `string1Name.concat(string2Name);`
  - Description: Concatenates two strings.
    - Alternatively: `string1Name + string2Name;` or `${string1Name} ${string2Name}`;

- **indexOf()**:
  - Syntax: `stringName.indexOf(value);`
  - Description: Returns the index of a value in a string, or -1 if the value is not found.

- **replace()**:
  - Syntax: `stringName.replace(searchValue, replaceValue);`
  - Description: Replaces a value in a string with another value.
    - Can accept both strings and regular expressions as `searchValue`.

- **slice()**:
  - Syntax: `stringName.slice(startIndex, endIndex);`
  - Description: Extracts a section of a string and returns it as a new string.

- **split()**:
  - Syntax: `stringName.split(separator);`
  - Description: Splits a string into an array of substrings based on the specified separator.

- **trim()**, **trimLeft()**, **trimRight()**:
  - Syntax: `stringName.trim();`, `stringName.trimLeft();`, `stringName.trimRight();`
  - Description: Removes whitespace from the beginning and/or end of a string.


# Number Methods

- **typeof()**:
  - Syntax: `typeof(value);`
  - Description: Returns the data type of a value.

- **toString()**:
  - Syntax: `numberName.toString();`
  - Description: Converts a number to a string.

- **toFixed()**:
  - Syntax: `numberName.toFixed(decimalPlaces);`
  - Description: Formats a number using fixed-point notation.

- **toPrecision()**:
  - Syntax: `numberName.toPrecision(precision);`
  - Description: Formats a number to a specified precision in decimal notation.

- **ceil()**, **floor()**, **round()**:
  - Description: Rounds a number to the nearest integer.

- **random()**:
  - Syntax: `Math.random();`
  - Description: Generates a random floating-point number between 0 and 1.

- **min()**, **max()**:
  - Syntax: `Math.min(a, b, c, ...);`, `Math.max(a, b, c, ...);`
  - Description: Returns the minimum or maximum value from a set of numbers.

- **pow()**:
  - Syntax: `Math.pow(base, exponent);`
  - Description: Returns the base to the exponent power.

- **sqrt()**:
  - Syntax: `Math.sqrt(value);`
  - Description: Returns the square root of a number.

# Date Functions

- **getMilliseconds()**:
  - Syntax: `dateName.getMilliseconds();`
  - Description: Returns the milliseconds of a date since January 1, 1970.

- **getSeconds()**, **getMinutes()**, **getHours()**, **getDate()**, **getMonth()**, **getFullYear()**:
  - Description: Returns various components of a date.

- **getTime()**, **getTimezoneOffset()**, **getUTCDate()**, **getUTCMonth()**, **getUTCFullYear()**:
  - Description: Returns time-related information of a date.

- **getDay()**, **getUTCDay()**, **getUTCSeconds()**, **getUTCMinutes()**, **getUTCHours()**, **getUTCMilliseconds()**:
  - Description: Returns day-related information of a date.

- **getYear()**, **getUTCYear()**:
  - Description: Returns the year of a date.

# Regular Expressions

- **Introduction**:
  - Regular expressions are used for searching, verifying, or modifying patterns.
  - They are universal and can be used in any programming language.
  - Online tool: [Regexr](https://regexr.com/)

- **Syntax**:
  - `function-name(/pattern(group)/flags)`
    - `function-name`: Name of the function.
    - `pattern`: Pattern to search for.
    - `group`: Group in the pattern to search for.
    - `flags`: Flags or modifiers to use.

- **Basics**:
  - `/ /`: Delimiters used to define a pattern.
  - `()`: Grouping for a pattern.
  - `\`: Escape character for special characters.
  - `|`: Logical OR.

- **Character Classes**:
  - `\d`: Digit.
  - `\w`: Word.
  - `\s`: Space.
  - `\b`: Word boundary.
  - `\D`: Non-digit.
  - `\t`: Tab.
  - `\n`: New line.

- **Brackets**:
  - `[xyz]`: Match any of the characters inside.
  - `[J-Z]`: Match capital letters from J to Z.
  - `[^xyz]`: Match any character except xyz.
  - `[a-zA-Z]`: Match any letter.
  - `[a-z&&[^0-9]]`: Match any lowercase letter except 0 to 9.

- **Quantifiers**:
  - `bob|alice`: Match bob or alice.
  - `z?`: Match zero or one preceding character.
  - `z*`: Match zero or more preceding characters.
  - `z+`: Match one or more preceding characters.
  - `z{n}`: Match exactly n preceding characters.
  - `z{n,}`: Match n or more preceding characters.
  - `z{n,m}`: Match n to m preceding characters.

- **Anchors**:
  - `^`: Beginning of the string.
  - `$`: End of the string.
  - `\b`: Word boundary.
  - `\B`: Non-word boundary.

- **Flags / Modifiers**:
  - `g`: Global search.
  - `i`: Case insensitive.
  - `m`: Multiline.
  - `s`: Dot matches newline.
  - `u`: Unicode.
  - `y`: Sticky.
  - `x`: Free-spacing and line-breaking.
  - `A`: ASCII.
  - `D`: Debug.
  - `S`: Simple.
  - `U`: Unicode property.

# Rest and Spread Operators

- **Rest**:
  - `function(...args)`: Spreads the arguments.
    - `...`: Spread operator.
    - `args`: Array of arguments.

- **Spread**:
  - `function(array)`: Spreads the array.
    - `...`: Spread operator.
    - `array`: Array to spread.

- **Uses**:
  - Array concatenation.
  - Object concatenation.
  - During function calls.
  - As function arguments.

# Sets

- **Introduction**:
  - Sets are collections of unique values.
  - They are represented by curly braces.
  - They are iterable and have no order.

- **Syntax**:
  - `var setName = new Set({value1, value2, ..., valueN})`
    - `setName`: Name of the set.
    - `value1, value2, ..., valueN`: Values in the set.

# Event Handling

- **addEventListener()**:
  - Syntax: `element.addEventListener(eventName, functionName);`
  - Description: Attaches an event handler to the specified element.
    - `element`: Element to add the event to.
    - `eventName`: Name of the event.
    - `functionName`: Function to execute when the event occurs.

- **Event Types**:
  - `onclick`
  - `onmouseenter`
  - `onmouseleave`
  - `onmouseover`
  - `onkeypress`
  - `onkeydown`
  - `onkeyup`
  - `onfocus`

# DOM (Document Object Model)

- **Introduction**:
  - The Document Object Model represents the structure of a web page.
  - It is accessed through the `document` variable.
  - Used to manipulate and interact with elements on the page.

- **DOM Selectors**:
  - Methods to select elements on the page.
    - `querySelector()`: Selects the first matching element.
      - Argument: Selector string.
  - Selectors:
    - `id`: `getElementById()`, `querySelector("#id")`.
    - `class`: `getElementsByClassName()`, `querySelector(".class")`.
    - `tag`: `getElementsByTagName()`, `querySelector("tag")`.
    - `name`: `getElementsByName()`, `querySelector("[name]")`.
    - `attribute`: `getElementsByAttribute()`, `querySelector("[attribute]")`.

- **JS DOM HTML**:
  - `innerHTML`: Get or set the HTML content of an element.
  - `innerText`: Get or set the text content of an element.
  - `attribute`: Get or set the value of an attribute.
  - `style`: Get or set the style of an element.
  - `forms`: Get or set form values.
  - `createElement()`: Create a new element.
  - `appendChild()`: Add an element to the end of a parent element.
  - `insertBefore()`: Add an element before a reference element.
  - `setAttribute()`: Set the value of an attribute.
  - `removeAttribute()`: Remove an attribute.


# Asynchronous JavaScript

- **Advantages**:
  - Asynchronous programming allows code execution not to follow the same order as it is written.

- **setTimeout()**:
  - Used to set a timer.
  - Syntax: `setTimeout(callBackFunction, time)`
    - `callBackFunction`: Function to execute after the specified time.
    - `time`: Time in milliseconds.
  - JavaScript does not wait for the timer to finish and continues executing other code.

- **Callback Hell**:
  - A situation where multiple nested callbacks make code hard to read and maintain.
  - It can be mitigated by using Promises or Async/Await.

- **Promises**:
  - Introduced in ES6 to handle asynchronous operations.
  - Syntax: 
    ```javascript
    new Promise((resolve, reject) => {
        // Code
    })
    ```
  - It has two methods: `resolve` for success and `reject` for failure.

- **Using Promises**:
  - Syntax:
    ```javascript
    const func1 = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Code
                resolve();
            }, timeInMilliseconds);
        });
    }
    // Similar for func2, func3...

    func1().then(() => {
        func2().then(() => {
            func3().then(() => {
                // Do something
            });
        });
    });
    ```

- **Async/Await**:
  - A syntactic sugar for writing asynchronous code using Promises.
  - Syntax:
    ```javascript
    async function functionName() {
        await func1();
        await func2();
        await funcN();
    }

    functionName();
    ```

  - It makes asynchronous code look synchronous and easier to read.
  - Under the hood, it still relies on Promises.

# AJAX (Asynchronous JavaScript and XML)

- **Introduction**:
  - AJAX is a technique for performing asynchronous requests in web development.
  - It allows updating parts of a web page without reloading the entire page.
  - Developed in 1999, it is not a new technique.

- **Server**:
  - A computer that provides data to other computers upon request.

- **Database**:
  - Placeholder text provided. 

- **Sanity Test**:
  - A test to check if the code is functioning correctly.

- **readyState**:
  - Represents the current state of the XMLHttpRequest object.
  - Four steps: 
    1. Request created.
    2. Request sent.
    3. Server receives request.
    4. Data sent by server and received by the browser.

- **status**:
  - Represents the HTTP status code of the XMLHttpRequest object.

- **Methods of Retrieving Data**:
  - **GET**: Used to retrieve data.
    ```javascript
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "url", true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4) {
            if(xhr.status == 200) {
                // Handle successful response
            }
        }
    }
    ```

  - **POST**: Used to send data.
  - **PUT**: Used to update data.
  - **PATCH**: Used to update data.
  - **DELETE**: Used to delete data.

- **Syntax**:
  - Basic AJAX Syntax:
    ```javascript
    const xhr = new XMLHttpRequest();
    xhr.open("method", "url", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("name=value&name=value");
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4) {
            if(xhr.status == 200) {
                // Handle successful response
            }
        }
    }
    ```

  - Fetch Syntax using `then`:
    ```javascript
    fetch("url", {
        method: "method",
        headers: {
            "Content-type": "application/x-www-form-urlencoded"
        }
    })
    .then(response => response.json())
    .then(data => {
        // Handle data
    })
    ```

  - Fetch Syntax using `async/await`:
    ```javascript
    async function func() {
        const response = await fetch("url", {
            method: "method",
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            }
        });
        const data = await response.json();
        // Handle data
    }
    ```

- **API** (Application Programming Interface):
  - A set of functions that allows interaction with software applications or services.

- **Axios**:
  - A library for making HTTP requests.
  - Stands for Asynchronous XMLHttpRequest.
  

# Classes

- **Introduction**:
  - A way to create a new type of data.
  - `class` is a keyword used for this purpose.

- **Syntax**:
  ```javascript
  class ClassName {
      // Code
  }
  ```

- **Constructor**:
  - Initializes the data.
  - Syntax:
    ```javascript
    constructor(param1, param2) {
        this.param1 = param1;
        this.param2 = param2;
    }
    ```

- **Destructor**:
  - Destroys the data.
  - Syntax:
    ```javascript
    destructor() {
        delete this.param1;
        delete this.param2;
    }
    ```

- **Static**:
  - Keyword to create a static function.
  - Can be called without creating an object.
  - Syntax:
    ```javascript
    static functionName() {
        // Code
    }
    ```

- **Guard Clause**:
  - Checks the data validity.
  - Syntax:
    ```javascript
    if (param1) {
        // Code
    } else {
        // Code
    }
    ```

- **Getter**:
  - Gets the data.
  - Syntax:
    ```javascript
    get functionName() {
        return this.param1;
    }
    ```

- **Setter**:
  - Sets the data.
  - Syntax:
    ```javascript
    set functionName(param1) {
        this.param1 = param1;
    }
    ```

- **Inheritance**:
  - Creates a new type of data.
  - Syntax:
    ```javascript
    class ClassName extends ParentClassName {
        // Code
    }
    ```

- **Overriding**:
  - Creates a new type of function/data and replaces the existing one.
  - Syntax:
    ```javascript
    functionName() {
        // New code
    }
    ```

- **Super**:
  - Keyword to call the parent function.
  - Used to differentiate between the current and parent functions.
  - Correct only up to the first level of inheritance.
  - Syntax:
    ```javascript
    super.functionName();
    ```

## Next To Cover:
1. **Arrow Functions**:
   - A concise way to write functions in JavaScript.
   - Syntax:
     ```javascript
     const functionName = (param1, param2) => {
         // Code
     };
     ```

2. **Promises**:
   - A way to handle asynchronous operations in JavaScript.
   - Syntax:
     ```javascript
     new Promise((resolve, reject) => {
         // Code
     });
     ```


3. **Error Handling**:
   - Techniques for handling errors in JavaScript, such as `try...catch` blocks.
   - Syntax:
     ```javascript
     try {
         // Code
     } catch (error) {
         // Handle error
     }
     ```

4. **Module Import/Export**:
   - Allows you to split your code into multiple files and import/export functionality between them.
   - Syntax:
     ```javascript
     // Exporting
     export const functionName = () => {
         // Code
     };
     
     // Importing
     import { functionName } from './module.js';
     ```


6. **Local Storage**:
   - A browser feature for storing data locally on the user's device.
   - Syntax:
     ```javascript
     localStorage.setItem('key', 'value');
     localStorage.getItem('key');
     ```

7. **Cookies**:
   - Another way to store data on the client-side, with certain limitations compared to local storage.
   - Syntax:
     ```javascript
     document.cookie = 'key=value';
     ```
8.  **Type Coercion**:
    - The process of converting one data type to another implicitly or explicitly.
    - Examples include `String(123)`, `Number('456')`, etc.

9.  **Event Bubbling/Capturing**:
    - Mechanisms by which DOM events propagate through the DOM tree.
    - Understanding the differences between bubbling and capturing can be important for event handling.