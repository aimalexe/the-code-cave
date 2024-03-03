## MongoDB:

MongoDB is a NoSQL database. It is a document-based, non-relational, cross-platform database. It is free and open-source, schema-less, document-oriented, distributed, JSON-like, and hierarchical. MongoDB stores data in collections, databases, clusters, nodes, shards, and replicas.

- **Mongo Atlas:**
  Mongo Atlas is a cloud database service, fully managed as a service.

- **MongoDB Compass:**
  MongoDB Compass is a GUI for MongoDB, available cross-platform.

- **MongoDB Shell:**
  MongoDB Shell is a command-line interface for MongoDB.

- **Mongoose:**
  Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages data relationships, provides schema validation, and translates between objects in code and their representation in MongoDB.

  Its syntax is:
  ```
  npm i mongoose
  ```
  To use Mongoose, import it and connect to the database:
  ```javascript
  const mongoose = require('mongoose');
  mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.wtymn9i.mongodb.net/?retryWrites=true&w=majority`)
      .then(() => console.log('Connected to MongoDB...'))
      .catch(err => console.error('Could not connect to MongoDB...', err));
  ```
  The `connect()` method connects to the database with a URL (connection string) and a callback function for successful connection.

- **MVC (Model-View-Controller):**
  - **Model (M):**
    Responsible for managing application data, interacting with the database, and performing business logic, including data validation, authentication, authorization, encryption, decryption, hashing, unhashing, sanitization, and desanitization.

  - **View (V):**
    Responsible for displaying data to users in HTML or JSON format.

  - **Controller (C):**
    Handles requests, responses, routes, and application logic.

  MVC is a software design pattern that separates an application into three main logical components: Model, View, and Controller.

## Schema:

A schema is a blueprint of the data to be stored in the database. It describes the structure and properties of the data.

Supported schema types:
- String
- Number (integers and floats)
- Date
- Buffer (for binary data)
- Boolean
- Mixed (mixed data types)
- ObjectId (references to other documents)
- Array

Each type has its own sub-properties for validation and customization.

## Model:

A model is a class used to construct documents and collections in MongoDB.

Example model schema for a user:
```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 50
    },
    email: {
        type: String,
        required: true,
        min: 5,
        max: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 5,
        max: 24
    },
    isAdmin: Boolean,
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('User', userSchema);
```

## Querying Documents:

Querying documents involves retrieving data from the database using methods like `find()`, `findOne()`, `findById()`, etc. These methods support filtering, sorting, limiting, and selecting specific fields of documents.

Example methods:
- `find()`: Retrieve all documents matching a query.
- `findOne()`: Retrieve one document matching a query.
- `findById()`: Retrieve one document by its ID.
- `count()`: Count documents matching a query.
- `limit()`, `sort()`, `select()`: Limit, sort, and select fields of retrieved documents.

These methods can be chained and combined for more complex queries and operations.

## Comparison Query Operators:

Comparison Query Operators are used to compare the values of two documents. Some common comparison query operators include:

- **eq (equal):**
  Used to find documents where a field is equal to a specified value.
  ```javascript
  .find({ name: { $eq: 'John' } })
  ```

- **ne (not equal):**
  Used to find documents where a field is not equal to a specified value.
  ```javascript
  .find({ name: { $ne: 'John' } })
  ```

- **gt (greater than):**
  Used to find documents where a field is greater than a specified value.
  ```javascript
  .find({ age: { $gt: 20 } })
  ```

- **gte (greater than or equal to):**
  Used to find documents where a field is greater than or equal to a specified value.
  ```javascript
  .find({ age: { $gte: 20 } })
  ```

- **lt (less than):**
  Used to find documents where a field is less than a specified value.
  ```javascript
  .find({ age: { $lt: 20 } })
  ```

- **lte (less than or equal to):**
  Used to find documents where a field is less than or equal to a specified value.
  ```javascript
  .find({ age: { $lte: 20, $gte: 5 } })
  ```

- **in:**
  Used to find documents where a field's value matches any value in a specified array.
  ```javascript
  .find({ age: { $in: [20, 30, 40] } })
  ```

- **nin (not in):**
  Used to find documents where a field's value does not match any value in a specified array.
  ```javascript
  .find({ age: { $nin: [20, 30, 40] } })
  ```

## Logical Query Operators:

Logical Query Operators are used to combine multiple queries. Some common logical query operators include:

- **or:**
  Used to combine multiple queries with a logical OR.
  ```javascript
  .find().or([{ name: 'John' }, { age: 20 }])
  ```

- **and:**
  Used to combine multiple queries with a logical AND.
  ```javascript
  .find().and([{ name: 'John' }, { age: 20 }])
  ```

- **nor:**
  Used to combine multiple queries with a logical NOR.
  ```javascript
  .find().nor([{ name: 'John' }, { age: 20 }])
  ```

- **not:**
  Used to negate a query.
  ```javascript
  .find().not([{ name: 'John' }, { age: 20 }])
  ```

## Regular Expressions:

Regular Expressions are used to match documents based on a pattern. Some common regular expressions include:

- **Starts with:**
  Matches documents where a field starts with a specific pattern.
  ```javascript
  .find({ name: /^John/ })
  ```

- **Ends with:**
  Matches documents where a field ends with a specific pattern.
  ```javascript
  .find({ name: /John$/ })
  ```

- **Contains:**
  Matches documents where a field contains a specific pattern.
  ```javascript
  .find({ name: /John/ })
  ```

- **Case insensitive:**
  Matches documents case insensitively.
  ```javascript
  .find({ name: /john/i })
  ```

- **Multiple conditions:**
  Matches documents that satisfy multiple conditions.
  ```javascript
  .find({ name: /john/i, age: 20 })
  ```

- **Multiple patterns:**
  Matches documents that satisfy multiple patterns.
  ```javascript
  .find({ name: { $in: [/john/i, /jane/i] } })
  ```

## Updating Documents:

We can update documents in MongoDB using different methods. Here are two common approaches:

### 1. Query First:

In this approach, we first query the document that needs to be updated, make the necessary changes, and then save it back to the database. Some methods for this approach include:

- **findByIdAndUpdate():**
  Used to update a document by its ID and returns the updated document.
  ```javascript
  .findByIdAndUpdate('id', { $set: { name: 'Jane' } }, { new: true })
  ```

### 2. Update First:

In this approach, we directly update the document without querying it first. Some methods for this approach include:

- **updateOne():**
  Used to update a single document.
  ```javascript
  .updateOne({ name: 'John' }, { $set: { name: 'Jane' } })
  ```

- **updateMany():**
  Used to update multiple documents.
  ```javascript
  .updateMany({ name: 'John' }, { $set: { name: 'Jane' } })
  ```

- **findByIdAndUpdate():**
  Used to update a document by its ID and returns the updated document.
  ```javascript
  .findByIdAndUpdate('id', { $set: { name: 'Jane' } }, { new: true })
  ```

### Update Operators:

Update operators are used to modify the properties of a document. Some common update operators include:

- **$set:**
  Sets the value of a field.
  ```javascript
  { $set: { name: 'Jane' } }
  ```

- **$unset:**
  Removes a field.
  ```javascript
  { $unset: { name: '' } }
  ```

- **$inc:**
  Increments the value of a field.
  ```javascript
  { $inc: { age: 1 } }
  ```

- **$min:**
  Updates the value of a field if the new value is less than the current value.
  ```javascript
  { $min: { age: 1 } }
  ```

- **$max:**
  Updates the value of a field if the new value is greater than the current value.
  ```javascript
  { $max: { age: 1 } }
  ```

- **$mul:**
  Multiplies the value of a field.
  ```javascript
  { $mul: { age: 2 } }
  ```

- **$rename:**
  Renames a field.
  ```javascript
  { $rename: { name: 'firstName' } }
  ```

- **$setOnInsert:**
  Sets a field value if the document is inserted.
  ```javascript
  { $setOnInsert: { name: 'Jane' } }
  ```

- **$currentDate:**
  Sets the value of a field to the current date.
  ```javascript
  { $currentDate: { createdAt: true } }
  ```

- **$addToSet:**
  Adds a value to an array if it doesn't already exist.
  ```javascript
  { $addToSet: { tags: 'frontend' } }
  ```

## Removing Documents:

Documents in MongoDB can be deleted using various methods. Here are some common methods:

- **deleteOne():**
  Used to delete a single document.
  ```javascript
  .deleteOne({ name: 'John' })
  ```

- **deleteMany():**
  Used to delete multiple documents.
  ```javascript
  .deleteMany({ name: 'John' })
  ```

- **findByIdAndRemove():**
  Used to delete a document by its ID.
  ```javascript
  .findByIdAndRemove('id')
  ```

- **remove():**
  Used to delete a document.
  ```javascript
  .remove({ name: 'John' })
  ```

- **findOneAndRemove():**
  Used to delete a document.
  ```javascript
  .findOneAndRemove({ name: 'John' })
  ```

- **findOneAndDelete():**
  Used to delete a document.
  ```javascript
  .findOneAndDelete({ name: 'John' })
  ```

- **findByIdAndDelete():**
  Used to delete a document by its ID.
  ```javascript
  .findByIdAndDelete('id')
  ```

- **drop():**
  Used to delete all documents in a collection.
  ```javascript
  .drop()
  ```

- **dropCollection():**
  Used to delete a collection.
  ```javascript
  .dropCollection()
  ```

- **dropDatabase():**
  Used to delete a database.
  ```javascript
  .dropDatabase()
  ```

### Function Example:

Here's an example function to delete a document:
```javascript
async function removeCourse(id) {
    const course = await Course.findByIdAndRemove(id);
    console.log(course);
}
```

## Validation

In MongoDB, data validation ensures that the data meets certain requirements before it's inserted or updated in the database. Here are the methods and techniques for validation in MongoDB:

### Schema-based Validation

We use Mongoose schemas to define the structure and validation rules for our data:

```javascript
const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, min: 5, max: 255 },
    password: { type: String, required: true, min: 5, max: 1024 },
    price: { type: Number, required: function() { return this.isPublished; } }
});
```

### Built-in Validation

Mongoose provides various built-in validators such as `required`, `minlength`, `maxlength`, `min`, `max`, `match`, `enum`, `lowercase`, `uppercase`, `trim`, `get`, and `set`:

```javascript
const courseSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 5, maxlength: 255 },
    price: { type: Number, required: true, min: 5, max: 255 },
    category: { type: String, enum: ['web', 'mobile', 'network'] },
});
```

### Custom Validation

We can define custom validators using the `validate` and `custom` methods:

```javascript
const courseSchema = new mongoose.Schema({
    tags: {
        type: Array,
        validate: {
            validator: function(v) {
                return v && v.length > 0;
            },
            message: 'A course should have at least one tag.'
        }
    },
});
```

### Async Validation

Async validation can be achieved using the `validate` method with `isAsync: true` or the `custom` method with asynchronous logic:

```javascript
const courseSchema = new mongoose.Schema({
    tags: {
        type: Array,
        validate: {
            isAsync: true,
            validator: function(v, callback) {
                setTimeout(() => {
                    const result = v && v.length > 0;
                    callback(result);
                }, 4000);
            },
            message: 'A course should have at least one tag.'
        }
    },
});
```

### Validation Errors

To handle validation errors, we catch exceptions thrown during save operations and iterate over the `errors` object:

```javascript
try {
    const result = await course.save();
    console.log(result);
} catch(ex) {
    for (field in ex.errors)
        console.log(ex.errors[field].message);
}
```

## Modeling Relationships in MongoDB

In MongoDB, we have several methods to model relationships between collections: normalization, denormalization, referencing documents, and embedding documents.

### Referencing Documents

Referencing documents involves storing the ObjectId of one document in another document to establish a relationship. This method is useful when we want to query related documents.

Example Schema:
```javascript
const authorSchema = new mongoose.Schema({
    name: String,
    bio: String,
    website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
    name: String,
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    }
}));
```

### Population

To query related documents, we use the `populate()` method. It retrieves and populates documents from another collection based on the specified path and model.

Example:
```javascript
const courses = await Course.find().populate('author', 'name -_id');
```

### Embedding Documents

Embedding documents involves storing one document inside another document. This method is suitable for one-to-one and one-to-many relationships.

Example Schema:
```javascript
const authorSchema = new mongoose.Schema({
    name: String,
    bio: String,
    website: String
});

const Course = mongoose.model('Course', new mongoose.Schema({
    name: String,
    author: {
        type: authorSchema,
        required: true
    }
}));
```

### Transaction

Transactions ensure that a group of operations either all succeed or all fail. We can implement transactions using the `fawn` library, which uses two-phase commits.

Example:
```javascript
const Fawn = require('fawn');
Fawn.init(mongoose);

try {
    new Fawn.Task()
        .save('courses', course)
        .update('authors', { _id: author._id }, {
            $inc: { numberOfCourses: 1 }
        })
        .run();
} catch (ex) {
    res.status(500).send('Something failed.');
}
```

### Object ID

The ObjectID is a unique identifier assigned to each document. We can extract its parts such as timestamp, machine identifier, process identifier, and counter.

Validating Object IDs:
- We can use `mongoose.Types.ObjectId.isValid()` or the `joi-objectid` package for validation.

```javascript
const isValid = mongoose.Types.ObjectId.isValid('1234');

// Using joi-objectid package
const Joi = require('joi');
const objectId = require('joi-objectid')(Joi);

const schema = {
    customerId: objectId().required()
};
```

```javascript
const schema = {
    customerId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
};
```
