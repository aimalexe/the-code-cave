# Node JavaScript

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

Node.js is a software that runs continuously on the server. It requires Node.js to be installed on the server where it needs to run.

## Running JavaScript

To run JavaScript, we have two ways:

1. **Browser**:
   - Browsers have the V8 engine installed by default.

2. **Device**:
   - For devices, Node.js is required to run JavaScript.
   - Node.js acts as a JavaScript engine, a command-line tool, a server, and a client.

Through Node.js, we can:

- Format files.
- Serve responses to the frontend, similar to PHP.
- Node.js is primarily used as a server-side JavaScript engine.

## Package Management

A package is a collection of modules or libraries that are pre-written and can be used in applications. These packages are available on the server through npm or Yarn.

### npm (Node Package Manager)

npm is the package manager for the Node.js platform. It is used to install, manage, and publish packages. Some key points about npm:

- npm.org is the official repository for the npm package manager.
- npm should be installed along with Node.js.
- Dependencies can be installed using npm or Yarn.
- npm install command is used to install packages.
- npm init command creates a package.json file for the project.
- package.json file contains metadata and dependencies information for the project.
- Dependencies can be of two types: devDependencies and dependencies.
- npm start command runs scripts defined in package.json.

## Terminal (bash)

To set up a Node project, follow these steps:

1. Navigate to the project folder and run `npm init` to create a package.json file.
2. Edit package.json to add dependencies and scripts.
3. Use `npm install <packageName>` to install dependencies.
4. Use `npm start` to run the project.
5. Additional options like `--save-dev` or `-D` for devDependencies, `--save` for dependencies, and `-g` for global installation can be used with npm install.
6. If the npm_modules folder is deleted, use `npm install` to reinstall packages.

Example package.json scripts:

```json
"scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
}
```

To run these scripts:
- `npm start`: Runs the start script.
- `npm dev`: Runs the dev script using nodemon for automatic reloading.

# Common Libraries/Modules/Packages

In ES5, we imported a module and used it as:

```javascript
const uuid = require('uuid');
```

In ES6, we import a module and use it as:

```javascript
import uuid from 'uuid';
```

Node.js, by default, uses ES5. We can use Babel to convert ES6 to ES5.

## Core Modules

Some core modules do not need installation, while others need to be installed.

### File Server (fs)

```javascript
const fs = require('fs');
```

- **Reading a file**:
    ```javascript
    fs.readFile('fileName', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
    ```
- **Writing a file**:
    ```javascript
    fs.writeFile('fileName', 'data', (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
    ```
- **Renaming a file**:
    ```javascript
    fs.rename('test.txt', 'test2.txt', function (err) {
        if (err) throw err;
        console.log('Renamed!');
    });
    ```
- **Deleting a file**:
    ```javascript
    fs.unlink('test2.txt', function (err) {
        if (err) throw err;
        console.log('Deleted!');
    });
    ```
- **Creating a directory**:
    ```javascript
    fs.mkdir('test', function (err) {
        if (err) throw err;
        console.log('Folder created!');
    });
    ```
- **Deleting a directory**:
    ```javascript
    fs.rmdir('test', function (err) {
        if (err) throw err;
        console.log('Folder deleted!');
    });
    ```
- **Reading a directory**:
    ```javascript
    fs.readdir('test', function (err, files) {
        if (err) throw err;
        console.log(files);
    });
    ```
- **Checking if a file exists**:
    ```javascript
    fs.exists('test.txt', function (exists) {
        console.log(exists);
    });
    ```
- **Checking if a directory exists**:
    ```javascript
    fs.exists('test', function (exists) {
        console.log(exists);
    });
    ```

### Operating System (os)

```javascript
const os = require('os');
```

- **Getting OS information**:
    - `os.platform()`
    - `os.release()`
    - `os.type()`
    - `os.arch()`
    - `os.freemem()`
    - `os.totalmem()`
    - `os.uptime()`
    - `os.hostname()`
    - `os.userInfo().username`
    - `os.homedir()`
    - `os.tmpdir()`
    - `os.endianness()`
    - `os.EOL`
    - `os.cpus()`
    - `os.networkInterfaces()`
    - `os.loadavg()`

### Path Module (path)

```javascript
const path = require('path');
```

- **Path manipulation**:
    - `path.resolve(__filename)`
    - `path.resolve(__dirname)`
    - `path.join(__dirname, 'test.txt')`
    - `path.normalize(__dirname + '/test.txt')`
    - `path.basename(__filename)`
    - `path.dirname(__filename)`
    - `path.extname(__filename)`

### URL Module (url)

```javascript
const url = require('url');
```

- **URL parsing and formatting**:
    - `url.parse(address/url, true)`
    - `url.parse(address/url, true).hostname`
    - `url.parse(address/url, true).path`
    - `url.parse(address/url, true).query`
    - `url.parse(address/url, true).hash`
    - `url.parse(address/url, true).port`
    - `url.parse(address/url, true).protocol`
    - `url.parse(address/url, true).search`
    - `url.parse(address/url, true).slashes`
    - `url.parse(address/url, true).auth`
    - `url.format(urlObject)`
    - `url.resolve(from, to)`
    - `url.resolve(from, to, query)`

### HTTP Module (http)

```javascript
const http = require('http');
```

- **HTTP requests**:
    - `http.get(url, (res) => { ... })`
    - `http.get(url, (res) => { res.on('data', (chunk) => { ... }) })`

Here are the important libraries/modules/packages for various purposes:

### Helper:
- **UUID**: Generates unique identifiers.
- **Nodemon / Pm2 / Forever**: Tools for automatically restarting the server during development.
- **chalk**: Library for colorizing terminal output.
- **JSHint**: Static code analysis tool for detecting errors and potential problems in JavaScript code.
- **Joi/Hapi**: Libraries for data validation and schema definition.
- **mongoose**: MongoDB object modeling tool designed to work in an asynchronous environment.
- **Lodash**: Utility library providing functions for common programming tasks.
- **FakerJS**: Library for generating fake data.
- **validator**: Library for data validation and sanitization.
- **MomentJS (deprecated)**: Library for parsing, validating, manipulating, and formatting dates.
- **Axios**: Promise-based HTTP client for making requests.
- **eslint**: JavaScript linting utility.
- **prettier**: Opinionated code formatter.
- **Dotenv**: Module that loads environment variables from a .env file into process.env.
- **Keycode**: Library for converting keycodes to key names.

### Validation:
- **Joi**: Library for data validation and schema definition.
- **Hapi**: Framework for building applications and services in Node.js.
- **validator**: Library for data validation and sanitization.

### Code linting:
- **JSHint**: Static code analysis tool for detecting errors and potential problems in JavaScript code.
- **ESLint**: Pluggable linting utility for JavaScript.
- **prettier**: Opinionated code formatter.

### Frontend Libraries:
- **React**: JavaScript library for building user interfaces.
- **Vue**: Progressive JavaScript framework for building UIs.
- **Angular**: Platform for building mobile and desktop web applications.
- **MeteorJS**: Full-stack JavaScript platform for building web and mobile apps.
- **EmberJS**: Framework for building ambitious web applications.

### Backend Libraries:
- **Express**: Web application framework for Node.js.
- **GET, POST, PUT/PATCH, DELETE**: HTTP methods for CRUD operations.
- **Body Parser**: Middleware for parsing incoming request bodies.
- **Cors**: Middleware for enabling cross-origin resource sharing.
- **Multer**: Middleware for handling multipart/form-data.
- **Pug**: Template engine for Node.js.
- **EJS**: Templating language for generating HTML markup.

### Other Frameworks and Packages:
- **PHP**: Hypertext Preprocessor.
- **Composer**: Dependency manager for PHP.
- **Laravel**: PHP framework for web application development.
- **CodeIgniter**: Lightweight PHP framework.
- **Django**: High-level Python web framework.
- **Flask**: Lightweight Python web framework.
- **Springboot**: Framework for building Java-based applications.
- **Ruby on Rails**: Full-stack web application framework for Ruby.
- **ASP .NET**: Web application framework developed by Microsoft.
- **Symfony**: PHP framework for web applications.
- **Yii**: High-performance PHP framework.
- **Hibernate**: Object-relational mapping framework for Java.

### Database:
- **Mongoose**: MongoDB object modeling tool.
- **MySQL**: Relational database management system.
- **Socket.io**: Library for real-time, bidirectional, and event-based communication.
- **GraphQL**: Query language for APIs and runtime for executing queries.

### Testing:
- **Jest**: JavaScript testing framework.
- **Cypress**: End-to-end testing framework.
- **NightwatchJS**: Automated UI testing framework.
- **Mocha**: Feature-rich JavaScript test framework.
- **Chai**: BDD/TDD assertion library.
- **Puppeteer**: Headless Chrome Node.js API.
- **TestCafe**: Automated browser testing tool.

### Scraping:
- **Cheerio**: Fast, flexible, and lean implementation of core jQuery.
- **Puppeteer**: Headless Chrome Node.js API.

And many more libraries and packages are available for various purposes.

## Next Steps:
Here are the topics that need to be covered:

1. **Babel**: A JavaScript compiler that allows you to use the latest JavaScript syntax by transforming it into compatible versions.
2. **Middleware**: Functions that have access to the request and response objects, and the next middleware function in the application's request-response cycle.
3. **Template Engines**: Libraries or frameworks used to generate dynamic HTML content on the server-side.
4. **Routing**: Mechanism to define how an application responds to client requests to a particular endpoint.
5. **Authentication and Authorization**: Techniques for verifying the identity of a user and determining whether they have permission to access certain resources.
6. **Session Management**: Handling user sessions to maintain state across multiple requests from the same client.
7. **Error Handling**: Strategies for managing errors and exceptions that occur during the execution of an application.
8. **Security**: Best practices for securing Node.js applications, including data validation, input sanitization, and protection against common security vulnerabilities.
9. **WebSockets**: A communication protocol that provides full-duplex communication channels over a single TCP connection, commonly used for real-time applications.
10. **Event Emitters**: Objects that emit named events that cause functions ("listeners") to be called when the event is triggered.
11. **Streams**: Objects that represent an asynchronous sequence of data, used for reading or writing large amounts of data efficiently.
12. **RESTful APIs**: Architectural style for designing networked applications, typically using HTTP requests to perform CRUD operations on resources.
13. **GraphQL APIs**: Query language and runtime for executing queries against a GraphQL server, providing a more flexible and efficient alternative to REST APIs.
14. **Web Servers**: Software responsible for serving web pages and handling HTTP requests from clients.
15. **Microservices**: Architectural pattern for building applications as a collection of loosely coupled, independently deployable services.