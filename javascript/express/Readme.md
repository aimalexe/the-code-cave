## Backend

Backend is the part of the application that is not visible to the user. It is responsible for storing and retrieving data from the database, as well as processing data and sending it to the frontend.

### Backend Frameworks

Backend frameworks are software frameworks designed to support the development of web applications, including web services, web resources, and web APIs. These frameworks are typically written in high-level programming languages such as Java, Python, PHP, and Ruby.

## Express.js

Express.js is a web application framework for Node.js. It is used to build web applications and APIs. It provides a robust set of features for web and mobile applications. Express.js is minimal and flexible, allowing developers to create single-page, multi-page, and hybrid web applications.

## REST API

REST stands for Representational State Transfer. It is an architectural style for designing networked applications, consisting of a set of constraints that developers follow when creating web services.

### HTTP Methods

HTTP methods are used to perform different operations on resources. Some common HTTP methods include:

- GET: Retrieve data from the server.
- POST: Send data to the server.
- PUT: Update data on the server.
- DELETE: Delete data from the server.
- PATCH: Partially update data on the server.
- HEAD: Retrieve metadata from the server.
- OPTIONS: Retrieve supported HTTP methods from the server.

## Getting Started with Express.js

To start using Express.js:

1. Initialize the project with `npm init -y`.
2. Install Express.js with `npm install express`.
3. Create a file named `index.js` and write the following code:

   ```javascript
   const express = require('express');
   const PORT = process.env.PORT || 3000;
   const app = express();

   app.listen(PORT, () => {
       console.log(`Server is running on port ${PORT}`);
   });
   ```

4. Run the server with `node index.js`.
5. Open a browser and navigate to `localhost:3000`.

## Handling Requests with Express.js

Express.js provides methods for handling different types of HTTP requests:

- `app.get()`: Handle GET requests.
- `app.post()`: Handle POST requests.
- `app.put()`: Handle PUT requests.
- `app.delete()`: Handle DELETE requests.
- `app.patch()`: Handle PATCH requests.

These methods take two parameters: the route or path, and a callback function with `req` (request) and `res` (response) parameters.

### Request Object (`req`)

The `req` object contains information about the request, including:

- `req.body`: Data sent by the client.
- `req.params`: Parameters sent by the client.
- `req.query`: Query string sent by the client.
- `req.headers`: Headers sent by the client.
- `req.cookies`: Cookies sent by the client.
- `req.ip`: IP address of the client.
- `req.method`: HTTP method used by the client.
- `req.path`: Path of the request.
- `req.protocol`: Protocol used by the client.
- `req.subdomains`: Subdomains of the client.
- `req.xhr`: Boolean value indicating whether the request is an AJAX request.

### Response Object (`res`)

The `res` object is used to send responses to the client, with methods such as:

- `res.send()`: Send a response to the client.
- `res.json()`: Send a JSON response to the client.
- `res.status()`: Set the status code of the response.
- `res.cookie()`: Set a cookie in the response.
- `res.redirect()`: Redirect the client to another page.
- `res.download()`: Download a file to the client.
- `res.sendFile()`: Send a file to the client.
- `res.render()`: Render an HTML file to the client.
- `res.set()`: Set a header in the response.
- `res.type()`: Set the content type of the response.
- `res.append()`: Append a value to the header in the response.
- `res.end()`: End the response.
- `res.format()`: Send the response in different formats.
- `res.get()`: Get the value of a header in the response.
- `res.links()`: Set links in the response.
- `res.location()`: Set the location in the response.
- `res.vary()`: Set the vary in the response.
- `res.write()`: Write data to the response.
- `res.writeContinue()`: Write continue to the response.
- `res.writeHead()`: Write the header to the response.
- `res.writeProcessing()`: Write processing to the response.

This covers the basics of handling requests and responses with Express.js.


## Environment Variables

Environment variables are used to store information about the environment, such as sensitive data like database credentials and API keys. They help manage configuration differences between environments like development, testing, and production, as well as variations between users and machines.

### Common Environment Variables

- `PORT`: The port number on which the server will run.
- `NODE_ENV`: The environment in which the server will run.
- `DATABASE_URL`: The URL of the database.
- `DATABASE_USERNAME`: The username for database access.
- `DATABASE_PASSWORD`: The password for database access.
- `DATABASE_NAME`: The name of the database.
- `DATABASE_HOST`: The host of the database.
- `DATABASE_PORT`: The port number of the database.

### Using Environment Variables

1. Create a file named `.env` and define variables:

    ```plaintext
    PORT=3000
    NODE_ENV=development
    DATABASE_URL=postgres://localhost:5432
    DATABASE_USERNAME=postgres
    DATABASE_PASSWORD=postgres
    DATABASE_NAME=postgres
    DATABASE_HOST=localhost
    DATABASE_PORT=5432
    ```

2. Install `dotenv` with `npm install dotenv`.
3. Require `dotenv` in `index.js`:

    ```javascript
    require('dotenv').config();
    ```

    or

    ```javascript
    require('dotenv/config');
    ```

4. Access variables with `process.env.VARIABLE_NAME`.

### Environment Configuration

- **Environment**: Represents the runtime environment of the application (e.g., development, production).
  - Set with `NODE_ENV`.
  - Accessed with `process.env.NODE_ENV`.
- **Configuration**: Used to set application-specific settings.
  - Packages like `config`, `dotenv`, and `rc` are commonly used.

## Route Parameters and Query String

### Route Parameters

- Used to send data to the server.
- Syntax: `/:parameter_name`.
- Access with `req.params.parameter_name`.

Example:

```javascript
app.get('/users/:id', (req, res) => {
    res.send(req.params.id);
});
```

### Query String

- Part of the URL after `?`.
- Syntax: `?parameter_name1=parameter_value1&parameter_name2=parameter_value2`.
- Access with `req.query.parameter_name`.

Example:

```javascript
app.get('/users', (req, res) => {
    res.send(req.query.id);
});
```

## Middleware

Middleware functions in Express have access to the request and response objects and can manipulate them as well as terminate the request-response cycle or pass control to the next middleware function. They are essential for executing code before the final response is sent back to the client.

### Types of Middleware

1. **Built-in Middleware**:
   - Included with Express.
   - Examples:
     - `express.json()`: Parses JSON data in the request body.
     - `express.urlencoded()`: Parses URL-encoded data in the request body.
     - `express.raw()`: Parses raw data in the request body.
     - `express.text()`: Parses text data in the request body.
     - `express.static()`: Serves static files.
     - `express.Router()`: Creates a router.

2. **Custom Middleware**:
   - Developed by the user for specific tasks.
   - Syntax:
     ```javascript
     app.use((req, res, next) => {
         // Code
         next();
     });
     ```
   - Must call `next()` to pass control to the next middleware.

3. **Third-party Middleware**:
   - Created by third-party developers.
   - Usage:
     ```javascript
     app.use(middleware);
     ```
   - Examples:
     - `morgan`: Logging requests.
     - `compression`: Compressing responses.
     - `helmet`: Enhancing security.
     - `cors`: Enabling CORS.
     - `body-parser`: Parsing request bodies.
     - `cookie-parser`: Parsing cookies.
     - `debug`: Debugging applications.
     - `errorhandler`: Handling errors.
     - `method-override`: Overriding HTTP methods.
     - `serve-favicon`: Serving favicons.
     - `serve-static`: Serving static files.
     - `winston`: Logging requests.
     - `express-validator`: Validating request bodies.
     - `express-jwt`: Validating JWT.
     - `express-session`: Managing sessions.
     - `express-fileupload`: Uploading files.
     - `express-flash`: Flashing messages.
     - `express-mongo-sanitize`: Sanitizing data.

## Template Engines

Template engines facilitate dynamic generation of HTML pages on the server. Express supports various template engines, including Pug, Mustache, EJS, Handlebars, and Nunjucks.

### Pug

Pug (formerly known as Jade) is a popular template engine for Express. To use Pug:

1. Install Pug:

   ```bash
   npm install pug
   ```

2. Set the view engine:

   ```javascript
   app.set('view engine', 'pug');
   ```

3. Optionally, set the views directory:

   ```javascript
   app.set('views', './views');
   ```

4. Render Pug templates:

   ```javascript
   app.get('/', (req, res) => {
       res.render('index', { title: 'My Express App', message: 'Hello' });
   });
   ```

5. Create a Pug file (e.g., `index.pug`) in the `views` directory:

   ```pug
   html
       head
           title= title
       body
           h1= message
   ```
  
## Sending Data to the Server

Data can be sent to the server from the frontend using various methods, including through the body, headers, and query.

### Body

#### JSON
In this method, data is sent in JSON format using the `res.json()` method. This method is used to send a JSON response to the server.

**How to Use `res.json()` Method:**
```javascript
const express = require('express');
const app = express();

app.use(express.json());

app.post('/user', (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
```

#### URL
In this method, data is sent in URL-encoded format using the `res.send()` method. This method is used to send a string response to the server.

**How to Use `res.send()` Method:**
```javascript
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post('/user', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
```

### Headers

Data can also be sent in the headers of the request using the `res.set()` method. This method is used to set an HTTP response header field.

**How to Use `res.set()` Method:**
```javascript
const express = require('express');
const app = express();

app.post('/user', (req, res) => {
    console.log(req.headers);
    res.set('Content-Type', 'application/json');
    res.send(req.headers);
});

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
```

### Query

Data can be sent in the query of the request using the `res.send()` method. This method is used to send a string response to the server.

**How to Use `res.send()` Method:**
```javascript
const express = require('express');
const app = express();

app.get('/user', (req, res) => {
    console.log(req.query);
    res.send(req.query);
});

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
```

These methods provide flexibility in sending data to the server, allowing for various formats and locations of the data within the request.

## Routes

Routes are the endpoints of the application responsible for handling requests from the frontend and sending responses back. They define the paths to which requests can be made and the actions to be taken when requests are received.

### Creating Routes

To create routes, follow these steps:

1. **Create a folder named "routes"**: This folder will contain route files.

2. **Write code in a file inside the "routes" folder**: Define routes using Express's Router object.

    ```javascript
    const express = require('express');
    const user = express.Router();

    user.get('/user', (req, res) => {
        res.send('Hello User!');
    });

    module.exports = user;
    ```

3. **Import the route in the "index.js" file**: Import the route file in the main entry point file of your application.

    ```javascript
    const user = require('./routes/user');
    ```

4. **Use the route in the "index.js" file**: Mount the route to a specific path in the application.

    ```javascript
    app.use('/api', user);
    ```

## Security

Security is crucial for any application to protect against various threats. It encompasses different layers of the application, including frontend, backend/API, and database.

### Frontend Security

#### Cross-Site Scripting (XSS)

Cross-Site Scripting (XSS) is a security vulnerability that allows attackers to inject malicious scripts into web applications.

#### Cross-Site Request Forgery (CSRF)

Cross-Site Request Forgery (CSRF) is a security vulnerability that allows attackers to trick users into performing unintended actions on web applications.

### Backend/API Security

#### Validation

For validating data received from the frontend, Joi package is commonly used. It helps ensure that the data meets certain criteria before processing it further.

```javascript
const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string().min(3).required(),
    age: Joi.number().min(18).required(),
    password: Joi.string().min(8).required(),
    email: Joi.string().email().required()
});

const result = schema.validate(req.body);

if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
}
```

#### Password Security

To enhance password security, it's essential to hash passwords before storing them in the database. The bcrypt package is commonly used for this purpose.

```javascript
const bcrypt = require('bcrypt');

const salt = await bcrypt.genSalt(10);
const hash = await bcrypt.hash(req.body.password, salt);

const valid = await bcrypt.compare(req.body.password, user.password);
```

### Database Security

Ensure database security by implementing measures such as proper access controls, encryption, and regular updates to address vulnerabilities. It's crucial to follow security best practices to protect sensitive data stored in the database.

## Authentication

Authentication is the process of verifying the identity of a user. It ensures that the user is who they claim to be.

### Registering a User

To register a user, you can validate the request body and then create a new user instance in your application. You can use packages like Joi for validation and bcrypt for password hashing.

```javascript
const { error } = validate(req.body);
if (error) return res.status(400).send(error.details[0].message);

let user = await User.findOne({ email: req.body.email });
if (user) return res.status(400).send('User already registered.');

user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
}); 
await user.save(); 
res.send(user);
```

### Using Lodash Package

You can simplify code using the Lodash package, which provides utility functions for common tasks. This can help streamline operations such as picking specific properties from objects.

```javascript
const _ = require('lodash');

user = new User(_.pick(req.body, ['name', 'email', 'password']));
await user.save();
res.send(_.pick(user, ['_id', 'name', 'email']));
```

### Using Joi Password Complexity

For password validation and complexity, you can use the Joi password complexity package. It helps enforce strong password requirements.

```javascript
const passwordComplexity = require('joi-password-complexity');

const schema = Joi.object({
    name: Joi.string().min(3).required(),
    age: Joi.number().min(18).required(),
    password: passwordComplexity().required(),
    email: Joi.email().required()
});

const result = schema.validate(req.body);

if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
}
```

### Authorization

Authorization is the process of verifying what actions a user is allowed to perform. JSON Web Tokens (JWT) are commonly used for user authentication and authorization.

#### Generating a JWT Token

```javascript
const jwt = require('jsonwebtoken');

const token = jwt.sign({ _id: user._id }, config.get('jwtPrivateKey'));
res.send(token);
```

#### Using Middleware for Authorization

You can use middleware functions to authenticate and authorize users before granting access to protected routes.

```javascript
const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).send('Access denied. No token provided.');

    try {
        const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
        req.user = decoded;
        next();
    } catch (ex) {
        res.status(400).send('Invalid token.');
    }
};
```

#### Role-Based Authorization

Role-based authorization allows certain actions to be performed only by users with specific roles.

```javascript
module.exports = function (req, res, next) {
    if (!req.user.isAdmin) return res.status(403).send('Access denied.');

    next();
};
```

### Getting the Current User

You can retrieve information about the current user using the JWT token and the authorization middleware.

```javascript
router.get('/me', auth, async (req, res) => {
    const user = await User.findById(req.user._id).select('-password');
    res.send(user);
});
```

### Logging Out a User

Logging out a user typically involves removing the JWT token from the client side.

```javascript
router.post('/logout', auth, async (req, res) => {
    const user = await User.findById(req.user._id);
    user.token = null;
    await user.save();
    res.send('Logged out successfully.');
});
```

Handling and logging errors in a Node.js application is crucial for maintaining its stability and reliability. Here's a breakdown of various techniques and best practices for handling and logging errors:

### Handling Promise Rejection

To handle promise rejections, you can use try-catch blocks or the `.catch()` method on promises. For example:

```javascript
try {
    const book = await Book.findByIdAndRemove(req.body.id);
    if (!book) return res.status(404).send('The book with the given ID was not found.');

    res.send(book);
} catch (ex) {
    res.status(500).send('Something failed.');
}
```

### Express Error Middleware

Express error middleware allows you to centralize error handling in your application. You can define a middleware function to handle errors and pass it to `app.use()` after all route handlers.

```javascript
module.exports = function (err, req, res, next) {
    res.status(500).send('Something failed.');
};
```

### Removing Try-Catch Blocks

You can remove repetitive try-catch blocks by creating an async middleware function that wraps asynchronous route handlers.

```javascript
function asyncMiddleware(handler) {
    return async (req, res, next) => {
        try {
            await handler(req, res);
        } catch (ex) {
            next(ex);
        }
    };
}

router.get('/', asyncMiddleware(async (req, res) => {
    const book = await Book.findByIdAndRemove(req.body.id);
    if (!book) return res.status(404).send('The book with the given ID was not found.');

    res.send(book);
}));
```

### Express Async Errors

The `express-async-errors` package allows you to avoid writing custom async middleware for error handling. It automatically catches errors from asynchronous route handlers.

```javascript
require('express-async-errors');

router.get('/', async (req, res) => {
    const book = await Book.findByIdAndRemove(req.body.id);
    if (!book) return res.status(404).send('The book with the given ID was not found.');

    res.send(book);
});
```

### Logging Errors

Logging errors helps in debugging and troubleshooting issues in your application. You can use the `winston` package for logging errors to various transports such as console, file, MongoDB, etc.

```javascript
const winston = require('winston');

winston.add(new winston.transports.File({ filename: 'logfile.log' }));
winston.add(new winston.transports.MongoDB({ db: 'mongodb://localhost/vidly' }));

winston.error(err.message, err);
```

### Uncaught Exception and Unhandled Promise Rejection

It's important to handle uncaught exceptions and unhandled promise rejections to prevent your application from crashing unexpectedly.

```javascript
process.on('uncaughtException', (ex) => {
    console.log('We got an uncaught exception.');
    winston.error(ex.message, ex);
    process.exit(1);
});

process.on('unhandledRejection', (ex) => {
    console.log('We got an unhandled rejection.');
    winston.error(ex.message, ex);
    process.exit(1);
});
```

By implementing these error handling and logging techniques, you can improve the reliability and stability of your Node.js application.

### Deployment

Deploying a Node.js application involves preparing the application for production and selecting a platform for deployment. Here's a guide on how to prepare your application and deploy it to Heroku:

#### Preparing the App for Deployment

1. **Install Required Packages**:
    - **Helmet**: Helps secure Express apps by setting various HTTP headers.
        ```bash
        npm i helmet
        ```
    - **Compression**: Middleware for compressing responses.
        ```bash
        npm i compression
        ```
2. **Usage**:
    In your `index.js` file:
    ```javascript
    const helmet = require('helmet');
    const compression = require('compression');
    
    app.use(helmet());
    app.use(compression());
    ```

#### Deploying to Heroku

1. **Create a Heroku Account**:
    Sign up for an account on the [Heroku website](https://www.heroku.com/).

2. **Install Heroku CLI**:
    Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) and verify the installation:
    ```bash
    heroku --version
    ```

3. **Login to Heroku CLI**:
    Login to the Heroku CLI using your credentials:
    ```bash
    heroku login
    ```

4. **Configure `package.json`**:
    Update your `package.json` file to include the necessary scripts and specify the Node.js version:
    ```json
    "scripts": {
        "start": "node index.js",
        "heroku-postbuild": "npm install --only=dev && npm run build"
    },
    "engines": {
        "node": "12.16.1"
    }
    ```

5. **Add to Git Repository**:
    Initialize a Git repository, add files, commit changes, and add a `.gitignore` file:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```
    Example `.gitignore` content:
    ```
    node_modules/
    config/keys.js
    coverage/
    ```

6. **Create Heroku App**:
    Create a new Heroku app:
    ```bash
    heroku create <app-name>
    ```

7. **Deploy to Heroku**:
    Deploy your application to Heroku:
    ```bash
    git push heroku master
    ```

8. **Open the App**:
    Open the deployed application in your default web browser:
    ```bash
    heroku open
    ```

By following these steps, you can successfully deploy your Node.js application to Heroku. Remember to adjust configurations and settings according to your specific project requirements.

## Next Steps:
Here's a list of topics related to web development and software engineering that are not covered in the context of Express:

1. **Web Servers**:
    - Nginx
    - Apache HTTP Server
    - Microsoft IIS

2. **DevOps and Deployment**:
    - Docker
    - Kubernetes
    - Continuous Integration/Continuous Deployment (CI/CD)
    - AWS (Amazon Web Services)
    - Azure
    - Google Cloud Platform (GCP)
    - DigitalOcean

3. **Testing**:
    - Unit Testing
    - Integration Testing
    - End-to-End Testing
    - Test-Driven Development (TDD)
    - Behavior-Driven Development (BDD)
    - Testing Frameworks: Jest, Mocha, Jasmine, PHPUnit, pytest, etc.

4. **Security**:
    - OWASP Top 10
    - HTTPS
    - CORS (Cross-Origin Resource Sharing)
    - SQL Injection Prevention
    - CSRF (Cross-Site Request Forgery) Protection
    - Content Security Policy (CSP)
    - Secure Socket Layer (SSL) / Transport Layer Security (TLS)

5. **Performance Optimization**:
    - Caching
    - Load Balancing
    - Content Delivery Networks (CDNs)
    - Minification and Compression
    - Database Indexing
    - Profiling and Performance Monitoring

6.  **RESTful APIs**:
    - API Design Principles
    - API Versioning
    - GraphQL

7.  **Design Patterns and Architectural Styles**:
    - MVC (Model-View-Controller)
    - MVVM (Model-View-ViewModel)
    - Microservices
    - Serverless Architecture
    - Event-Driven Architecture

8.  **Web Development Concepts**:
    - Progressive Web Apps (PWAs)
    - Single Page Applications (SPAs)
    - Responsive Web Design
    - Accessibility (a11y)
    - Internationalization (i18n) and Localization (l10n)
