## Testing

Testing is a process of executing a program with the intent of finding errors. It is done to demonstrate that the required features work correctly and that existing features do not break when new code is added.

### Manual Testing

Manual testing involves the manual execution of test cases without the use of automated tools. It is performed by individuals who are not involved in the development of the software.

### Automated Testing

Automated testing involves the use of automated tools to execute test cases. It is faster, more accurate, reusable, and less expensive than manual testing. Automated testing can be categorized into three types:

1. **Unit Testing**: Tests a unit of an application without its external dependencies. It is fast, cheap to write, and is used to validate that a section of an application performs as designed.
   
2. **Integration Testing**: Tests the application with its external dependencies. It ensures that the application is working as a whole.
   
3. **End-to-End Testing**: Drives the application as a whole through its UI. It gives the most confidence that the application is working as expected but is slow and brittle.

### Test Pyramid

The test pyramid is a guideline that suggests having a large number of unit tests, followed by a smaller number of integration tests, and an even smaller number of end-to-end tests. The actual ratio depends on the complexity of the application being tested.

### Tooling

To write tests, we need a testing framework and a test runner. Popular testing frameworks and test runners include:

- **Jest**: A testing framework by Facebook, commonly used for testing React applications.
- **Mocha**: A feature-rich JavaScript test framework running on Node.js and in the browser.
- **Jasmine**: A behavior-driven development framework for testing JavaScript code.
- **Cypress**: A JavaScript end-to-end testing framework.

### Using Jest

We will use Jest to write our tests. Jest is fast, easy to use, and has excellent documentation.

#### Installing Jest

```bash
npm install jest --save-dev
```

#### Running Jest

Add the following script to your `package.json` file:

```json
"scripts": {
    "test": "jest"
}
```

Run Jest using:

```bash
npm run test
```

#### Continuously Running Jest

To continuously run Jest, add the following script to your `package.json` file:

```json
"scripts": {
    "test": "jest --watchAll"
}
```

Run Jest in watch mode using:

```bash
npm run test
```

```javascript
// absolute.test.js

const absolute = require('./absolute');

test('absolute - should return a positive number if input is positive', () => {
    const result = absolute(1);
    expect(result).toBe(1);
});

test('absolute - should return a positive number if input is negative', () => {
    const result = absolute(-1);
    expect(result).toBe(1);
});

test('absolute - should return 0 if input is 0', () => {
    const result = absolute(0);
    expect(result).toBe(0);
});
```

Matchers are used to test values in different ways. Here are some commonly used matchers:

- `toBe`: Tests if a value is equal to another value.
- `toEqual`: Tests if a value is equal to another value, useful for testing objects and arrays.
- `toBeGreaterThan`: Tests if a value is greater than another value.
- `toBeGreaterThanOrEqual`: Tests if a value is greater than or equal to another value.
- `toBeLessThan`: Tests if a value is less than another value.
- `toBeLessThanOrEqual`: Tests if a value is less than or equal to another value.
- `toBeNull`: Tests if a value is null.
- `toBeUndefined`: Tests if a value is undefined.
- `toBeDefined`: Tests if a value is defined.
- `toBeTruthy`: Tests if a value is true.
- `toBeFalsy`: Tests if a value is false.
- `toBeNaN`: Tests if a value is NaN.
- `toBeInstanceOf`: Tests if a value is an instance of a class.
- `toContain`: Tests if an array contains a value.
- `toHaveLength`: Tests if an array has a certain length.
- `toMatch`: Tests if a string matches a regular expression.
- `toThrow`: Tests if a function throws an error.
- `toThrowError`: Tests if a function throws a specific error.
- `toHaveBeenCalled`: Tests if a function has been called.
- `toHaveBeenCalledWith`: Tests if a function has been called with specific arguments.
- `toHaveBeenCalledTimes`: Tests if a function has been called a specific number of times.
- `toHaveBeenLastCalledWith`: Tests if a function has been called with specific arguments the last time it was called.
- `toHaveProperty`: Tests if an object has a property.
- `toMatchObject`: Tests if an object matches another object.

## Grouping Tests:
We can group tests to make our tests more organized. Test are first class citizens in our source code and are as important as any other code. We can group tests using "describe" function. This is used to group tests in both Jest and Jasmine. It has two parameters. The first parameter is the description of the group. The second parameter is a function that contains the tests. replace "test" with "it". It syntax is:
```js
describe('description', () => {
    // tests
});
```
```javascript
// absolute.test.js

const absolute = require('./absolute');

describe('absolute', () => {
    it('should return a positive number if input is positive', () => {
        const result = absolute(1);
        expect(result).toBe(1);
    });

    it('should return a positive number if input is negative', () => {
        const result = absolute(-1);
        expect(result).toBe(1);
    });

    it('should return 0 if input is 0', () => {
        const result = absolute(0);
        expect(result).toBe(0);
    });
});
```

When testing strings, arrays, objects, and exceptions, it's important to follow a balanced approach between specificity and generality. Here are some guidelines:

- **Testing Strings:** Use matchers like `toContain`, `toMatch`, or regular expressions to test strings. Avoid being overly specific or too general in your tests.
- **Testing Arrays:** Use matchers like `toContain`, `toHaveLength`, or `toEqual(expect.arrayContaining([...]))` to test arrays. The last approach is preferred for testing arrays.
- **Testing Objects:** Use matchers like `toHaveProperty`, `toMatchObject`, or `toEqual` to test objects. Again, aim for a balance between specificity and generality.
- **Testing Exceptions:** Use `toThrow`, `toThrowError`, or variations with specific error messages or types to test exceptions. Ensure that your tests cover both expected and unexpected error scenarios.

Here's an example of testing a user registration function:

```javascript
describe('register', () => {
    it('should throw if username is falsy', () => {
        const args = [null, undefined, NaN, '', 0, false];
        args.forEach(a => {
            expect(() => { register(a) }).toThrow();
        });
    });

    it('should return a user object if valid username is passed', () => {
        const result = register('Aimal');
        expect(result).toMatchObject({ username: 'Aimal' });
        expect(result.id).toBeGreaterThan(0);
    });
});
```

## Simple Mock Functions:

In unit testing, functions should be tested in isolation, without relying on other functions. To achieve this, we can mock (fake) the functions that our unit depends on. Jest provides `jest.fn()` for mocking functions.

### Example:
```javascript
describe('applyDiscount', () => {
    it('should apply 10% discount if customer has more than 10 points', () => {
        // Mocking db.getCustomerSync function
        db.getCustomerSync = function(customerId) {
            console.log('Fake reading customer...');
            return { id: customerId, points: 20 };
        };

        const order = { customerId: 1, totalPrice: 10 };
        applyDiscount(order);
        expect(order.totalPrice).toBe(9);
    });
});
```

### Explanation:
- We mock `db.getCustomerSync` to simulate its behavior without calling the actual function.
- This ensures that our test is isolated from the actual database function and only focuses on `applyDiscount`.

## Interaction Testing:

Interaction testing verifies the interaction between functions. Jest's `jest.fn()` helps in simulating and tracking function calls during interaction testing.

### Example:
```javascript
describe('notifyCustomer', () => {
    it('should send an email to the customer', () => {
        // Mocking db.getCustomerSync and mail.send functions
        db.getCustomerSync = jest.fn().mockReturnValue({ email: 'a' });
        mail.send = jest.fn();

        notifyCustomer({ customerId: 1 });

        // Verifying that mail.send was called
        expect(mail.send).toHaveBeenCalled();
        // expect(mail.send).toHaveBeenCalledWith('a', '...');
        expect(mail.send.mock.calls[0][0]).toBe('a');
        expect(mail.send.mock.calls[0][1]).toMatch(/order/);
    });
});
```

### Explanation:
- We mock both `db.getCustomerSync` and `mail.send` to track their calls and simulate their behavior.
- This allows us to test `notifyCustomer` function's interaction with other functions without actually invoking them.


## Integration Testing:

Integration testing involves testing an application as a whole, ensuring that different modules work together seamlessly.

### Setting Up Test Database:
To prevent interference with the production database, it's essential to set up a separate test database. The test database typically follows a naming convention like `<database_name>_test`. We can use the `config` module to configure the test database. Here's an example setup:

```javascript
const config = require('config');
const mongoose = require('mongoose');

module.exports = function() {
    const db = config.get('db');
    mongoose.connect(db)
        .then(() => console.log(`Connected to ${db}...`));
}
```

### A Simple Integration Test:
Integration tests can be written to test APIs using tools like `supertest`, which allows testing HTTP requests. Here's an example of an integration test for an API endpoint:

```javascript
const request = require('supertest');
const { Genre } = require('../../models/genre');
let server;

describe('/api/genres', () => {
    beforeEach(() => { server = require('../../index'); });
    afterEach(async () => {
        server.close();
        await Genre.remove({});
    });

    describe('GET /', () => {
        it('should return all genres', async () => {
            // Insert test data
            await Genre.collection.insertMany([
                { name: 'genre1' },
                { name: 'genre2' }
            ]);

            // Send request and validate response
            const res = await request(server).get('/api/genres');
            expect(res.status).toBe(200);
            expect(res.body.length).toBe(2);
            expect(res.body.some(g => g.name === 'genre1')).toBeTruthy();
            expect(res.body.some(g => g.name === 'genre2')).toBeTruthy();
        });
    });
});
```

### Testing Object IDs:
Integration testing can also involve testing object IDs. Here's an example:

```javascript
describe('GET /:id', () => {
    it('should return a genre if a valid ID is passed', async () => {
        const genre = new Genre({ name: 'genre1' });
        await genre.save();

        const res = await request(server).get('/api/genres/' + genre._id);
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('name', genre.name);
    });

    // Additional test cases for invalid IDs
});
```

### Testing Authorization, Input, and More:
Integration tests can cover various aspects such as authorization, input validation, and more. Here's an example:

```javascript
describe('POST /', () => {
    it('should return 401 if the client is not logged in', async () => {
        // Test logic
    });

    it('should return 400 if the genre is less than 5 characters', async () => {
        // Test logic
    });

    it('should save the genre if it is valid', async () => {
        // Test logic
    });

    // Additional test cases for various scenarios
});
```

Note: Replace placeholders like `// Test logic` with actual test code.

## Testing the PUT Request:

Integration testing allows us to test the PUT request along with various scenarios.

```javascript
describe('PUT /:id', () => {
    it('should return 401 if the client is not logged in', async () => {
        // Test logic
    });

    // Additional test cases for various scenarios
});
```

## Testing the DELETE Request:

Integration testing also covers the DELETE request and its different scenarios.

```javascript
describe('DELETE /:id', () => {
    it('should return 401 if the client is not logged in', async () => {
        // Test logic
    });

    // Additional test cases for various scenarios
});
```

## Testing the Auth Middleware:

### Integration Testing:

Integration testing ensures that the auth middleware functions correctly in the context of the application.

```javascript
const { Genre } = require('../../models/genre');
const { User } = require('../../models/user');
let server;

describe('auth middleware', () => {
    beforeEach(() => { 
        server = require('../../index');
        token = new User().generateAuthToken();
    });

    afterEach(async () => {
        await Genre.remove({});
        await server.close();
    });

    let token;
    beforeEach(() => { 
        token = new User().generateAuthToken();
    });

    const exec = () => {
        return request(server)
            .post('/api/genres')
            .set('x-auth-token', token)
            .send({ name: 'genre1' });
    };

    it('should return 401 if no token is provided', async () => {
        token = '';
        const res = await exec();
        expect(res.status).toBe(401);
    });

    it("Should return 400 if token is invalid", async () => {
        token = 'a';
        const res = await exec();
        expect(res.status).toBe(400);
    });
});
```

### Unit Testing:

Unit testing provides detailed examination of the auth middleware's behavior in isolation.

```javascript
const auth = require('../../../middleware/auth');
const mongoose = require('mongoose');

describe('auth middleware', () => {
    it('should populate req.user with the payload of a valid JWT', () => {
        const user = { 
            _id: mongoose.Types.ObjectId().toHexString(), 
            isAdmin: true 
        };
        const token = new User(user).generateAuthToken();
        const req = {
            header: jest.fn().mockReturnValue(token)
        };
        const res = {};
        const next = jest.fn();
        auth(req, res, next);
        expect(req.user).toMatchObject(user);
    });
});
```

## Writing Clean Integration Tests:

To write clean integration tests, we can follow a technique similar to what Mosh suggests:

```javascript
describe('POST /', () => {
    let token;
    let name;

    const exec = async () => {
        return await request(server)
            .post('/api/genres')
            .set('x-auth-token', token)
            .send({ name: name });
    }

    beforeEach(() => {
        token = new User().generateAuthToken();
        name = 'genre1';
    });

    it('should return 401 if client is not logged in', async () => {
        token = '';
        const res = await exec();
        expect(res.status).toBe(401);
    });

    it('should return 400 if genre is less than 5 characters', async () => {
        name = '1234';
        const res = await exec();
        expect(res.status).toBe(400);
    });

    it('should return 400 if genre is more than 50 characters', async () => {
        name = new Array(52).join('a');
        const res = await exec();
        expect(res.status).toBe(400);
    });

    it('should save the genre if it is valid', async () => {
        await exec();
        const genre = await Genre.find({ name: 'genre1' });
        expect(genre).not.toBeNull();
    });

    it('should return the genre if it is valid', async () => {
        const res = await exec();
        expect(res.body).toHaveProperty('_id');
        expect(res.body).toHaveProperty('name', 'genre1');
    });
});
```

## Code Coverage:

With Jest, we can determine how much of our code is covered by our tests using the coverage command.

```bash
npm test -- --coverage
```

This generates a coverage report in the project's `coverage` folder. Ensure to ignore this folder in `.gitignore`.

```json
"scripts": {
    "test": "set NODE_ENV=test && jest --coverage --watchAll --verbose --detectOpenHandles"
}
```

The above script in `package.json` sets up Jest with coverage reporting.

```markdown
## Test-driven Development (TDD):

TDD is a software development process that relies on the repetition of a very short development cycle, in which tests are written before any production code. This is opposed to software development that allows production code to be written first. Test-driven development is related to but not the same as test-first development, which is a similar technique that may be used for procedural programming. TDD is a design technique aimed at reducing the time required for project development and new code integration while increasing the overall code quality. The cycle is:

1. Add a test.
2. Run all tests and see if any new test fails.
3. Write some simple not over-engineered production code to pass the tests.
4. Run tests.
5. Refactor code if necessary.
6. Repeat.

Benefits of TDD are:

1. Testable source code.
2. Fully coverage by tests.
3. Clean, simple not over-engineered code.
4. Better design.
5. Better documentation.

Test first is better than code first. But sometimes it is more complex and time-consuming to write test first. So we can write the test after writing the code and can switch to code-first development.

## Test Cases:

Test cases are the scenarios that we want to test. In TDD, we should write test cases first and then write the code to pass the test cases. We can write test cases in the form of user stories. Like:

- User must be logged in to access the route.
- User must provide valid customer id.
- User must provide valid book id.
- If rental already processed, return 400.
- If rental doesn't exist, return 404.
- If request is valid, return 200.
- If request is valid, set the return date.
- If request is valid, calculate the rental fee.
- If request is valid, increase the stock.
- If request is valid, return the rental.

## Populating the Database:

First, we should set up a test file as:

```javascript
const { Rental } = require('../../../models/rental');
const mongoose = require('mongoose');

jest.setTimeout(30000);

describe("/api/returns/", ()=>{
    let server;
    let customerId;
    let bookId;
    let rental;

    beforeEach(async () => {
        server = require('../../../index');
        customerId = mongoose.Types.ObjectId();
        bookId = mongoose.Types.ObjectId();
        rental = new Rental({
            customer: {
                _id: customerId,
                name: '12345',
                phone: '1234567'
            },
            book: {
                _id: bookId,
                bookName: '12345',
                dailyRentalRate: 2
            }
        });
        await rental.save();
    });

    afterEach(async () => {
        await Rental.remove({});
        await server.close();
    });

    it('should work', async () => {
        const result = await Rental.findById(rental._id)
        expect(result).not.toBeNull();
    });
});
```

## Testing the Authorization:

First, we must write the test for Authorization. Like:

```javascript
it('should return 401 if client is not logged in', async () => {
    const res = await request(server)
        .post('/api/returns')
        .send({ customerId, bookId });

    expect(res.status).toBe(401);
});
```

Then we should write the simple code to pass the test. Like:

```javascript
const router = express.Router();

router.post('/', async (req, res) => {
    res.status(401).send('Unauthorized');
});

module.exports = router;
```

## Testing the Inputs:

First, we must write the test for inputs. Like:

```javascript
it('should return 400 if customerId is not provided', async () => {
    customerId = '';
    const res = await exec();
    expect(res.status).toBe(400);
});
it('should return 400 if bookId is not provided', async () => {
    bookId = '';
    const res = await exec();
    expect(res.status).toBe(400);
});
```

Then we should write the simple code to pass the test. Like:

```javascript
router.post('/', auth, async (req, res) => {
    if (!req.body.customerId) return res.status(400).send('customerId not provided.');
    if (!req.body.bookId) return res.status(400).send('bookId not provided.');
    res.status(401).send('Unauthorized');
});
```

## Refactoring Code:

Look at the above codes where we have some repetition. So using Mosh's technique to modify the test code:

```javascript
const request = require('supertest');
const { Rental } = require('../../../models/rental');
const mongoose = require('mongoose');
const { User } = require('../../../models/user');

jest.setTimeout(30000);

describe("POST /api/returns/", ()=>{
    let server;
    let customerId;
    let bookId;
    let rental;
    let token;
   

 let user;

    const exec = () => {
        return request(server)
            .post('/api/returns')
            .set('x-auth-token', token)
            .send({ customerId, bookId });
    }

    beforeEach(async () => {
        server = require('../../../index');
        customerId = mongoose.Types.ObjectId();
        bookId = mongoose.Types.ObjectId();
        token = new User().generateAuthToken();
        rental = new Rental({
            customer: {
                _id: customerId,
                name: '12345',
                phone: '1234567'
            },
            book: {
                _id: bookId,
                bookName: '12345',
                dailyRentalRate: 2
            }
        });
        await rental.save();
    });

    afterEach(async () => {
        await Rental.remove({});
        await server.close();
    });

    it('Should return 401 if client is not logged in', async () => {
        token = '';
        const res = await exec();
        expect(res.status).toBe(401);
    });
    it("Should return 400 if customerId is not provided", async () => {
        customerId = '';
        const res = await exec();
        expect(res.status).toBe(400);
    });
    it("Should return 400 if bookId is not provided", async () => {
        bookId = '';
        const res = await exec();
        expect(res.status).toBe(400);
    });
});
```

## Looking up an Objects:

We can look for an object; like looking for a rental of requested book and customer.

```javascript
it('should return 404 if no rental found for this customer/book', async () => {
    await Rental.remove({});
    const res = await exec();
    expect(res.status).toBe(404);
});
```

Then we should write the simple code to pass the test. Like:

```javascript
router.post('/', auth, async (req, res) => {
    const rental = await Rental.findOne({
        'customer._id': req.body.customerId,
        'book._id': req.body.bookId
    });
    if (!rental) return res.status(404).send('Rental not found.');
});
```

## Testing the Rental Process:

First, we must write the test for rental process. Like:

```javascript
it('should return 400 if rental already processed', async () => {
    rental.dateReturned = new Date();
    await rental.save();
    const res = await exec();
    expect(res.status).toBe(400);
});
```

Then we should write the simple code to pass the test. Like:

```javascript
router.post('/', auth, async (req, res) => {
    if (rental.dateReturned) return res.status(400).send('Rental already processed.');
});
```

## Testing the valid request:

First, we must write the test for a valid request. Like:

```javascript
it('should return 200 if we have a valid request', async () => {
    const res = await exec();
    expect(res.status).toBe(200);
});
```

Then we should write the simple code to pass the test. Like:

```javascript
router.post('/', auth, async (req, res) => {
    res.status(200).send('OK');
});
```

## Testing the returned Date:

First, we must write the test for the returned date. Like:

```javascript
it('should set the returnDate if input is valid', async () => {
    await exec();
    const rentalInDb = await Rental.findById(rental._id);
    const diff = new Date() - rentalInDb.dateReturned;
    expect(diff).toBeLessThan(10 * 1000);
});
```

Then we should write the simple code to pass the test. Like:

```javascript
router.post('/', auth, async (req, res) => {
    rental.dateReturned = new Date();
    await rental.save();
    res.status(200).send('OK');
});
```

## Testing the Rental Fee:

Here we are going to use moment.js to calculate the rental fee. It is a third-party library. So we have to install it using npm.

```bash
npm install moment
```

Moment has a lot of methods, some of them are:
- `moment()`: it will return the current date and time.
- `moment().add(number, 'days')`: it will add the number of days to the current date and time.
- `moment().parsezone()`: it will return the current date and time in the local time zone.
- `moment().toDate()`: it will convert the moment object to the date object.
- `moment().format('YYYY-MM-DD')`: it will convert the moment object to the string in the given format.
- `moment.duration(number, 'days')`: it will return the duration object.
- `moment.duration().asDays()`: it will return the number of days in the duration object.
- `moment.duration().asHours()`: it will return the number of hours in the duration object.

Now, first, we must write the test for the rental fee. Like:

```javascript
it('should set the rentalFee if input is valid', async () => {
    rental.dateOut = moment().add(-7, 'days').toDate();
    await rental.save();
    await exec();
    const rentalInDb = await Rental.findById(rental._id);
    expect(rentalInDb.rentalFee).toBe(14);
});
```

Then we should write the simple code to pass the test. Like:

```javascript
router.post('/', auth, async (req, res) => {
    rental.dateReturned = new Date();
    const rentedForDays = moment().diff(rental.dateOut, "days");
    rental.rentalFee =  rentedForDays * rental.book.dailyRentalRate ;
    await rental.save();
    res.status(200).send('OK');
});
```

## Testing the book stock:

Here we are going to increase the book stock after the book is returned. So we have to write the test for that. Like:

```javascript
it('should increase the book stock if input is valid', async () => {
    await exec();
    const bookInDb = await Book.findById(bookId);
    expect(bookInDb.numberInStock).toBe(book.numberInStock + 1);
});
```

Then we should write the simple code to pass the test. Like:

```javascript
router.post('/', auth, async (req, res) => {
    await Book.update({ _id: rental.book._id }, {
        $inc: { numberInStock: 1 }
    });
    
    res.status(200).send('OK');
});
```

But here also remember to import the Book model. Like:

```javascript
const { Book } = require('../models/book');
```

and in beforeEach, we have to create a book object. Like:

```javascript
let book;
beforeEach(async () => {
    book = new Book({ title: '12345', dailyRentalRate: 2, genre: { name: '12345' }, numberInStock: 10 });
    await book.save();
});
```

## Testing the response:

Here we are going to return the rental object in the response. So we have to write the test for that. Like:

```javascript
it('should return the rental if input is valid', async () => {
    const res = await exec();
    expect(Object.keys(res.body)).toEqual(
        expect.arrayContaining(['dateOut', 'dateReturned', 'rentalFee', 'customer', 'book'])
    );
});
```

Then we should write the simple code to pass the test. Like:

```javascript
router.post('/', auth, async (req, res) => {
    res.status(200).send(rental);
});
```

## Cleaning The source code after all tests are Passing:

After we have written all the tests and the source code which is passing all the tests, now it's time to clean and customize the source code to make it more readable and understandable. 

For example, we can make a separate middleware for the first two validation lines which are repetitive in many routes. Then, we can look if all tests are passing.

We can create a middleware like this:

```javascript
module.exports = (validator) => {
    return (req, res, next) => {
        const { error } = validator(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        next();
    }
}
```

Then, we can use it like this:

```javascript
const validate = require('../middleware/validate');
const { Rental, validate } = require('../models/rental');

router.post('/', [auth, validate(validateReturn)], async (req, res) => {
    // Code for handling the route logic
});
```

In the above code, the `validateReturn` function is a function which is returning a Joi object. 

```javascript
function validateReturn(req) {
    const schema = {
        customerId: Joi.objectId().required(),
        bookId: Joi.objectId().required()
    };
    return Joi.validate(req, schema);
}
```

By using this approach, we can remove the first two validation lines from the source code and make it more maintainable.


## Mongoose Static and Instance methods:

In OOP, we have two types of methods:

### Static Methods:

Static methods are methods which are directly called on the class. They have benefits like:
- They can access the properties of the class.

Example:
```javascript
class Person {
    static walk() {
        console.log('walk');
    }
}

Person.walk();
```

### Instance Methods:

Instance methods are methods which are called on the object of the class. They have benefits like:
- They can access the properties of the object.
- They can access the properties of the class.

Example:
```javascript
class Person {
    walk() {
        console.log('walk');
    }
}

const person = new Person();
person.walk();
```

In Mongoose, we have two types of methods:

### Static Methods:

Static methods are methods which are directly called on the class. They have benefits like:
- They can access the properties of the class.

Example:
```javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const simpleSchema = new Schema({
    name: String,
    age: Number,
    isPublished: Boolean
});

simpleSchema.statics.functionName = function(name) {
    return this.find({ name: name });
}

const Simple = mongoose.model('Simple', simpleSchema);
Simple.functionName('name');
```

### Instance Methods:

Instance methods are methods which are called on the object of the class. They have benefits like:
- They can access the properties of the object.
- They can access the properties of the class.

Example:
```javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const simpleSchema = new Schema({
    name: String,
    age: Number,
    isPublished: Boolean
});

simpleSchema.methods.functionName = function() {
    return this.name;
}

const Simple = mongoose.model('Simple', simpleSchema);
const simple = new Simple({ name: 'name' });
simple.functionName();
```

## Refactoring the domain logic:

Now we are going to refactor the domain logic using instance methods.

For example:
```javascript
router.post('/', [auth, validate(validateReturn)], async (req, res) => {
    const rental = await Rental.lookup(req.body.customerId, req.body.bookId);
    if (!rental) return res.status(404).send('Rental not found.');
    if (rental.dateReturned) return res.status(400).send('Rental already processed.');
    rental.return();
    await rental.save();
    await Book.update({ _id: rental.book._id }, {
        $inc: { numberInStock: 1 }
    });
    res.status(200).send('OK');
});
```

We need to create an instance method in the Rental class like:
```javascript
simpleSchema.methods.return = function() {
    this.dateReturned = new Date();
    const rentalDays = moment().diff(this.dateOut, 'days');
    this.rentalFee = rentalDays * this.book.dailyRentalRate;
}
```

And then we call this method in the route:
```javascript
rental.return();
```

Lastly, we remove the `dateReturned` and `rentalFee` from the request body.