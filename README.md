
# The Code Cave

Welcome to "The Code Cave", a comprehensive repository designed for developers, tech enthusiasts, and learners at various stages of their programming journey. This repository is a culmination of extensive notes, code snippets, and project examples collected from a wide array of courses covering a multitude of programming languages and technologies. Whether you're delving into the hardware specifics with Verilog, manipulating databases with SQL, or building dynamic applications with TypeScript, "The Code Cave" has something for you.

## What's Inside?

"The Code Cave" is divided into several sections, each dedicated to a specific programming language or technology. Here's a snapshot of what you can expect to find:

- **Verilog**: Detailed notes on hardware description language (HDL) concepts, code snippets for various modules, and project examples showcasing real-world applications.
- **SQL**: Comprehensive syntax guides, query examples, and database design projects to enhance your data manipulation and management skills.
- **TypeScript**: From basic syntax notes to advanced project implementations, explore how TypeScript can be used to develop robust web applications.

## How to Use This Repository

- **Browse by Language/Technology**: Each section is organized by language or technology, making it easy to find the resources you're interested in.
- **Project Examples**: Dive into real-world projects to see how the concepts and syntaxes are applied in actual development scenarios.
- **Contribute**: Contributions are welcome! If you have notes, code snippets, or project ideas that you believe would enrich this repository, please feel free to contribute.

## Contributing

Your contributions can help make "The Code Cave" a richer resource for everyone. If you'd like to contribute, please follow these steps:

1. **Fork the Repository**: Start by forking the repository to your GitHub account.
2. **Add Your Contributions**: Whether it's adding new notes, code snippets, or improving existing content, your input is valuable.
3. **Submit a Pull Request**: Once you've made your additions, submit a pull request for review.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.

## Acknowledgements

A huge thank you to all the courses and educators whose teachings have contributed to the creation of "The Code Cave". Your knowledge and expertise have been instrumental in building this repository.

---

Dive into "The Code Cave" and embark on your journey of discovery and learning in the vast world of programming and technology. Whether you're here to learn something new or to contribute your knowledge, we're excited to have you!


## other repo
# HTML 5
    - HTML 5
        - HTML, Head, Body
        - Semantic Markup
        - Tags and Attributes
        - Tables
        - Lists
        - Headings
        - Paragraphs
        - Links
        - Images
        - Forms
        - inline vs block elements
        - SVG
        - iframe
        - Audio/Video
# CSS 3
    - CSS 3
        - CSS Selectors (id, class, tag, universal, attribute, pseudo-class, pseudo-element)
        - CSS Properties
        - CSS Values
        - CSS Units
        - CSS Color
        - CSS Fonts
        - CSS Text
        - CSS Positioning
        - CSS Floats
        - CSS Margin
        - CSS Padding
        - CSS Borders
        - CSS Backgrounds
        - CSS Shadows
        - CSS Animations
        - CSS Flexbox
        - CSS Grid
        - CSS Responsive Design
        - CSS Media Queries
        - CSS Pseudo Classes
        - CSS Box Model

# Bootstrap 5
    - Bootstrap 
        - Containers
            .container (fixed width)
            .container-fluid (full width)
            .container-sm|md|lg|xl
        - Grids
            12 column layout
            .col- < 576
            .col-sm- >= 576
            .col-md- >= 768
            .col-lg- >= 992
            .col-xl- >= 1200
            .row
            .col-sm-4 and .col-sm-8
        - Text/Typography
            default H1 to H6
            .display-1 to 4
            .blockquote for blockquote tag
            definition list (dl > dt > dd)
            code
            kbd
            pre
            .text-lowercase
            .text-uppercase
            .text-capitalize
            .lead
            .font-weight-bold
            .font-weight-bolder
            .font-italic
            .text-left | right | center
        - Table
            .table
            .table-striped
            .table-bordered
            .table-hover
            .table-dark
            .table-borderless
            .table-primary | success | danger | info | active | secondary | dark
            .thead-dark
            .table-sm
            .table-responsive
            .table-responsive-sm|md|lg|xl

        - Images
            .img-fluid (responsive)
            .rounded
            .rounded-circle
            .img-thumbnail
            .float-right|left
            .d-block (display as block)

        - Jumbotron
            .jumbotron
            .jumbotron-fluid

        - Alerts
            .alert
            .alert-success | danger | info | primary | secondary
            .alert-dismissible
            .alert alert-danger alert-dismissible fade show (animated alerts)

        - Buttons
            .btn
            .btn-info|primary|secondary|success|info|warning|danger|dark|light|link
            .btn-outline-info|primary|secondary|success|info|warning|danger|dark|light|link
            .btn-lg|sm
            .btn-block
            .disabled
            button > span.spinner-border spinner-border-sm
            button > span.spinner-grow spinner-grow-sm
            .btn-group btn-group-lg (all buttons will be large)
            .btn-group-vertical
            dropdown
                button.btn btn-primary dropdown-toggle and data-toggle="dropdown" immedietly after div.dropdown-menu > a.dropdown-item
            
        - Pagination
            ul.pagination               
            li.page-item > a.page-link
            .active
            li.disabled
            .pagination-lg
            .pagination-sm

        - List Groups
            ul.list-group
                    li.list-group-item
                    li.list-group-item active
                    li.list-group-item disabled
            ul.list-group-item-success|info|warning|danger
                li.list-group-item
                    span.badge
            h4.list-group-item-heading
                p.list-group-item-text

        - Dropdowns
            div.dropdown | dropright | dropleft | dropup
                button.dropdown-toggle data-toggle='dropdown'
                div.dropdown-menu
                    a.dropdown-item
                    div.dropdown-divider
                    h5.dropdown-header
                    active
                    disabled
            Grouped buttons
                div.btn-group | vertical
                    buttons (1 or 2)
                    div.btn-group
                        button.dropdown-toggle (split) data-toggle='dropdown'
                        div.dropdown-menu
                            a.dropdown-item
                            a.dropdown-item
        - Collapse
            button data-toggle='collapse' data-target='#test'
            div#test.collapse (show) > text
            Accordian
                div#accordian
                    div.card
                        div.card-header
                            a.card-link data-toggle="collapse" href="#one"
                        div#one .collapse show data-parent="#accordian"
                            div.card-body

        - Navigation Bar
            Basic Navbar
                nav.navbar navbar-expand-sm bg-light|dark|primary (remove expand-sm for vertical)
                    ul.navbar-nav
                        li.nav-item
                            a.nav-link
            Centered Navbar
                nav.navbar navbar-expand-sm bg-light justify-content-center
            Navbar with Logo/Text
                nav.navbar navbar-expand-sm bg-dark navbar-dark
                    a.navbar-brand
                        img
            Collapsing Navbar
                nav.navbar navbar-expand-md bg-dark navbar-dark
                    a.navbar-brand
                    button.navbar-toggler data-toggle="collapse" data-target="#test"
                        span.navbar-toggler-icon
                    div.collapse navbar-collapse id="test"
                        ul.navbar-nav
                            li.nav-item
                                a.nav-link    
            Navbar with Forms and buttons
                nav.navbar navbar-expand-sm bg-dark navbar-dark
                    form.form-inline
                        input.form-control mr-sm-2
                        button.btn btn-success
            Fixed Top Navbar
                nav.navbar navbar-expand-sm bg-dark navbar-dark fixed-top
        - Forms
            form
                div.form-group|form-inline.was-validated
                    label
                    input.form-control text
                    label
                    input.form-control passwd
                div.form-group form-check (for checkbox)
                    label.form-check-label
                        input.form-check-input type='checkbox'
            validation
                form.was-validated   
                    div.form-group (for username)
                        label
                        input.form-control required
                        div.valid-feedback
                        div.invalid-feedback
                    div.form-group (for password)
                        label
                        input.form-control required
                        div.valid-feedback
                        div.invalid-feedback
                    div.form-group form-check (for checkbox)
                        label.form-check-label
                            input.form-check-input required
                            div.valid-feedback
                            div.invalid-feedback
        - Carousel
            div#test .carousel slide data-ride='carousel'
                ul.carousel-indicators
                    li.active data-target='#test' data-slide-to="0"
                    li data-target='#test' data-slide-to="1"
                    li data-target='#test' data-slide-to="2"
                div.carousel-inner
                    div.carousel-item active
                        img
                    div.carousel-item
                        img
                    div.carouse-item
                        img
                a.carousel-control-prev href="#test" data-slide="prev"
                    span.carousel-control-prev-icon
                a.carousel-control-next href="#test" data-slide="next"
                    span.carousel-control-next-icon

        - Flex
            - Display
                d-flex
                d-inline-flex
                flex-row (default)
                flex-row-reverse
                flex-column
                flex-column-reverse
                flex-fill
                flex-grow-1
                flex-shrink-1


            - Content Alignment
                justify-content-start
                justify-content-end
                justify-content-center
                justify-content-between
                justify-content-around
                align-items-start
                align-items-end
                align-items-center
                align-items-baseline
                align-items-stretch
                align-content-start
                align-content-end
                align-content-center
                align-content-between
                align-content-around
                align-content-stretch

            - Order
                order-first
                order-last
                order-0
                order-1
                ms-auto (push to the right)
                me-auto (push to the left)

        - Utilities
            - Margin and padding
                bg-primary m5 p5
                my-5 mx-5 px-5 py-5
                mt-3 mb-3 mr-3 ms-5 me-5
                ps-3 pb-3 pr-3 pe-3
                w-25 (25%)
                w-auto
                mw-100 (100%)
                h-25
                mh-100 (100%)
                g-1
                g-2
            - border
                border (border-5)
                border-top
                border-end
                border-start
                border-success|danger|info|primary|secondary|success|warning|danger|dark|light|link
                rounded border
                rounded-pill border border-5
            - box shadow
                shadow-sm
                shadow-lg
                shadow-none
            - font weight
                fw-bold
                fw-bolder
                fw-normal
                fw-light
                fw-lighter
                fw-italic
            - Colors
                text-muted
                text-primary
                text-secondary
                text-success
                text-danger
                text-warning
                text-info
                text-dark
                text-light
                text-white
                bg-primary
                bg-secondary
                bg-success
                text-black-50
                text-white-50
            - Other
                visible
                invisible

        - Icons
        - Modal
        - Scrollspy
        - Progress
        - Popups
        - Tooltips
        - Toasts
        - *** Project with all this ***


# Javascript
##    - Basics
        - Variables
            - var, let, const
        - Popups
            - alert, confirm, prompt
        - Data Types
            - String
            - Number
            - Boolean
            - Array
            - Object
            - Function
        - Conditions
            - if
            - else
            - else if
            - switch
            - Ternary Operators
        - Loops
            - for
            - while
            - do while
            - for in (Iterate over an object with keys) 
            - for of (Iterate over Arrays, Strings, Maps, NodeLists etc.)
        - Functions
            - with arguments
            - without arguments
            - return
            - default parameters
            - rest parameters
            - arrow functions
            - function binding (will be discussed in React event handling)
##        - Data Serialization
            - JSON
                - Parse
                - Stringify
            - CSV
                - CSV is a delimited text file
                - Is common in data science, data scrapping, and data mining 
                - MySQL and MongoDB can be populated with CSV data
                - It is excellent for non-complex data
            - XML
                - XML is a markup language
                - It was industry standard
                - It is not so common now (2022)
            - YAML
                - YAML is a human readable data format
                - It is used in configuration files
                - It is used in data science and data mining
                - It is becoming common
##        - Strings
            - Concatenation
            - Escape Characters
            - Template Literals
            - String Methods
                - concat
                - indexOf
                - lastIndexOf
                - replace
                - slice
                - split
                - substring
                - toLowerCase
                - toUpperCase
                - trim
                - trimLeft
                - trimRight
                - valueOf
                - Regular Expressions
                    - example
                        /[A-Z]+/g
                    pattern
                        - Basics
                            - / hello\?\*\\/ escape special characters with backslashes
                            - () group with parentheses
                            - \ match the preceding character literally
                            - / match the preceding character as a regular expression
                            - | logical OR

                        - Character Classes
                            - \w word \d digit \s whitespace (tabs, line breaks)
                            - \W NOT word \D NOT digit \S NOT whitespace
                            - \t tabs, \n line breaks
                        - Brackets
                            - [xyz] match any x, y, z
                            - [J-Z] match any capital letters between J & Z.
                            - [^xyz] NOT x, y, z
                        - Quantification
                            - bob|alice match bob or alice
                            - z? match zero or one of the preceding characters
                            - z* match zero or more of the preceding characters
                            - z+ match one or more of the preceding characters
                            - z{n} match exactly n of the preceding characters
                            - z{n,} match n or more of the preceding characters
                            - z{n,m} match at least n and at most m of the preceding characters
                        - Anchors
                            - ^ match the beginning of the string
                            - $ match the end of the string
                            - \b word boundries
                            - \B NOT word boundries
                    - Modifiers
                        - i (case insensitive)
                        - g (global)
                        - m (multiline)              
                    - exec
                    - test
                    - match
                    - search
                        str.search(/test/i,text)
                    - replace
                    - Playground
                        - https://regexr.com/
                        - examples
                            - https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285
##        - Rest vs Spread
            - function test(firstName, lastName, ...otherInfo)
            - const test = ["test", ...more, "test"];
            - const name = "Mansoor";
                console.log([...myName]); will yield ["M", "a", "n", "s", "o", "o", "r"]
            - console.log(add(...numbers));
            - const myNames = ["Test1", "Test2"];
            - const test = { ...myNames, runs: "test" };
            - const myName = { firstName: "mansoor", lastName: "nasir" };
            - const bio = { ...myName, website: "mansoornasir.com" };
##        - Number Methods
            - toExponential
            - toFixed
            - toPrecision
            - toString
##        - Date Methods
            - getDate
            - getDay
            - getFullYear
            - getHours
            - getMilliseconds
            - getMinutes
            - getMonth
            - getSeconds
            - getTime
            - toDateString
            - toJSON
            - toLocaleDateString
            - toLocaleString
            - toLocaleTimeString
            - toTimeString
            - toUTCString

##        - Math Methods
            - abs
            - ceil
            - floor
            - max
            - min
            - pow
            - random
            - round
            - sqrt
            - trunc

##        - Array Methods
            - length*
            - forEach
            - map
            - filter
            - reduce
            - find
            - findIndex
            - some
            - every
            - sort
            - reverse
            - join
            - slice
            - push
                The push() adds elements to the end of an array and returns the new length of the array.
            - concat
               The concat() method is used to merge arrays. Concat does not change the existing arrays, but instead returns a new array.
            - pop
            - indexOf
            - lastIndexOf
            - fill
            - Destructuring
        - Sets
            - A JavaScript Set is a collection of unique values.
            - A Set is iterable, meaning that it can be looped over with a for..of loop or Array.from().
                const letters = new Set(["a","b","c"]);
                letters.forEach (function(value) {
                    text += value;
                })
##        - Classes and Objects
            - Objects
                - Private/Public Methods
                - Private/Public Properties
                - Destructoring
                - Keys
            - Constructor
            - this Keyword
            - Inheritance
            - Getters and Setters
            - Static Methods/Variables
            - Prototypes**
            - Built-in Classes
                - Array
                - Date
                - Error
                - Function
                - Map
                - Math
                - Object
                - RegExp
                - Set
                - String
                - JSON
                - Promise
            
##        - Modules
            - Line Export
            - Named Export
            - Default Export
            - Import/Require


## DOM
        - Document Methods
            - getElementById
            - getElementsByClassName
            - getElementsByTagName
            - querySelector
            - querySelectorAll
            - (There are several more, but we will not cover them here)    
        - CSS
            - https://www.w3schools.com/jsref/dom_obj_style.asp
        - Events
            - https://www.w3schools.com/jsref/dom_obj_event.asp

## AJAX
            - Understanding Request/Response Sequence
            - XMLHttpRequest
            - Response Status Codes/Text
            - Response Headers
            - Response Body

## Async Javascript
            - Callback (Hell)
            - Promise
            - Async/Await

## API
            - Fetch
                let response = await fetch(url);
            - Storage
                - Local Storage
                    - localStorage.setItem
                    - localStorage.getItem
                    - localStorage.removeItem
                    - localStorage.clear
            - Geo Location
                - navigator.geolocation.getCurrentPosition
            - History
                - history.back();
                - history.go(-2);
                - history.forward()
            - Drag/Drop (Will not be discussed)
            - Forms (Will not be discussed)
            - Web Worker (Will not be discussed)
            - Canvas/Plotly/Chart.js/Google Chart/D3.js (Will not be discussed)

## Sample Apps
            - Sample Apps
                - Weather Apps with Real Weather API
                - News App with Real API
                - Quiz App with Real API
# NodeJS
    - NodeJS
        - NPM vs Yarn
            - local
            - global
        - node_modules (git ignore)
        - command line args
        - common libraries/packages
            - core
                - fs
                - path
                - util
                - os
                - url
            - Important libraries for everyone
                - UUID
                - Nodemon / Pm2 / Forever
                - chalk
                - JSHint
                - Joi/Hapi
                - mongoose
                - Lodash
                - FakerJS
                - validator
                - MomentJS (depricated)
                - Axios
                - eslint
                - prettier
                - Dotenv
            - Important libraries for Frontend
                - React <-- Will be disussed in this course.
                - Vue
                - Angular
                - MeteorJS
                - EmberJS
                - PolymerJS
            - Important libraries for Backend
                - Express
                    - GET, POST, PUT/PATCH, DELETE
                    - Body Parser
                    - Cors
                    - Multer
                    - Pug
                    - EJS
                - jsonwebtoken
                - bcrypt
                - Nodemailer
                - NestJS
                - Database
                    - Mongoose
                    - MySQL
                - Socket.io (chat apps, may not be discussed)
                - GraphQL (alternate to express based RESTful APIs)
                - Testing
                    - Jest
                    - Cypress
                    - NightwatchJS
                    - Mocha
                    - Chai
                    - Puppeteer
                    - TestCafe
                - Scrapping
                    - Cheerio
                    - Puppeteer
                - Webpack
                - Babel

                - even more...
                    https://kinsta.com/blog/javascript-libraries/

# React JS
    - React JS
## Basics
            - JSX
            - State
            - Props
            - Lifecycle Methods
                - componentDidMount
                - componentDidUpdate
                - componentWillUnmount
            - Components
                - Class Components
                - Functional Components
            - Event Handling
            - Forms
            - Conditional Rendering
            - Lists
## Intermediate
            - Higher Order Components
            - Controlled vs Uncontrolled Components
            - Memo
            - Hooks
                - useState
                - useEffect
                - useRef
                - useHistory
                - Custom Hooks
            - React Routers
## Advanced
            - Redux
                - Thunk
            - Context API
            - Next JS

# React Native
    - React Native
        - Components
        - State
        - Lifecycle
        - Props
        - Events
        - Styles
        - Navigation
        - Push Notifications
        - Animations
        - Networking
        - Storage
        - WebSockets
        - WebRTC
        - WebGL
        - Geolocation
        - Camera
        - File System
        - Media
        - Permissions

# Devops
        - GitHub
        - Slack
        - Github Actions
        - CI/CD Pipeline
        - Jenkins
        - Docker
        - Kubernetes
        - Heroku
        - AWS
        - Azure
        - Google Cloud
        - Firebase
        - Bitbucket
        - Jira
        - Trello
        - Confluence
        - Vercel

# Videos
https://drive.google.com/drive/folders/1DvYL00UZO_kQDJ1f0aviqp3IsBgazj-L?usp=sharing
