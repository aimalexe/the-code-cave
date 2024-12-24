# Introduction to [Next.js](https://nextjs.org/docs)
## [Course](https://www.coursera.org/learn/introduction-to-next-js/) from Coursera Taught by [Karlis Zars](https://www.coursera.org/instructor/~149442492)
This course introduces you to Next.js, a powerful framework for building fast, dynamic web apps with React. Ideal for beginners, React enthusiasts, and IT professionals, it covers foundational concepts like routing, data fetching, and styling. A basic understanding of HTML, CSS, and JavaScript is helpful, while React knowledge is optional. By the end, you’ll be equipped to create scalable, feature-rich applications and integrate advanced features, setting you up for success in modern web development.

## Content
- [Introduction to Next.js](#introduction-to-nextjs)
  - [Course from Coursera Taught by Karlis Zars](#course-from-coursera-taught-by-karlis-zars)
  - [Content](#content)
  - [Lesson 1: Getting Started with Next.js](#lesson-1-getting-started-with-nextjs)
    - [Introduction and Welcome](#introduction-and-welcome)
    - [Why Choose Next.js?](#why-choose-nextjs)
    - [Installing Next.js and Initial Setup](#installing-nextjs-and-initial-setup)
    - [First Look at a Next.js Page](#first-look-at-a-nextjs-page)
  - [Lesson 2: Core Concepts of Next.js](#lesson-2-core-concepts-of-nextjs)
    - [Pages and Routing in Next.js](#pages-and-routing-in-nextjs)
    - [Fetching Data in Next.js](#fetching-data-in-nextjs)
    - [Styling Components in Next.js](#styling-components-in-nextjs)
    - [Router in your Next Apps](#router-in-your-next-apps)
  - [Lesson 3: Enhancing Your Next.js App](#lesson-3-enhancing-your-nextjs-app)
    - [Adding Navigation with Next.js](#adding-navigation-with-nextjs)
    - [Using Environment Variables in Next.js](#using-environment-variables-in-nextjs)
    - [Course Summary and Next Steps](#course-summary-and-next-steps)
      - [**Course Recap**:](#course-recap)
      - [**Next Steps**:](#next-steps)
      - [**Final Thought**:](#final-thought)
    - [Congratulations and Continuous Learning Journey](#congratulations-and-continuous-learning-journey)
      - [**Achievements**:](#achievements)
      - [**Next Steps**:](#next-steps-1)
      - [**Final Message**:](#final-message)
  - [Course Completion](#course-completion)


## Lesson 1: Getting Started with Next.js
### Introduction and Welcome
- Slow load times hurt user experience, SEO, and mobile performance, where 60% of traffic originates.  
- Next.js improves web app performance and SEO with features like server-side rendering and static site generation.  
- The course teaches building scalable, high-performance web apps with optimized performance.  
- Ideal for React developers or beginners looking to enhance their web development skills.  

### Why Choose Next.js?
- **Why Next.js?**  
  - Offers speed, scalability, and flexibility with features like **server-side rendering (SSR)** and **static site generation (SSG)**.  
  - Trusted by top companies like Twitch, Netflix, and Hulu.  

- **Key Features**:  
  - **Server-Side Rendering (SSR)**: Renders content on the server for faster load times, better SEO, and improved performance.  
  - **Static Site Generation (SSG)**: Ideal for static content (e.g., blogs, portfolios), generating fast-loading HTML pages.  
  - **Simple Routing**: Create new routes by adding files to the pages folder—no complex configurations needed.  
  - **Automatic Code Splitting**: Loads only necessary JavaScript for each page, ensuring faster websites and better user experience.  
  - **Built-In API Routes**: Quickly create backend APIs without setting up separate servers or configurations.

- **SEO Benefits**:  
  - SSR makes pages easily crawlable by search engines, improving rankings.  

- **Next.js Advantage**:  
  - Makes React development faster, simpler, and more efficient.  
  - Perfect for personal projects or large-scale applications.  

### Installing Next.js and Initial Setup

1. **Install Node.js**:  
   - Go to [nodejs.org](https://nodejs.org).  
   - Download and install the latest stable version.  
   - Verify installation: `node -v`.

2. **Set Up Next.js**:  
   - Use Visual Studio Code or your preferred code editor.  
   - Create an empty folder and open it in the editor.  
   - Open the terminal and run:  
     ```bash
     npx create-next-app@latest
     ```
   - Follow prompts (e.g., project name, TypeScript, ESLint, Tailwind CSS).  

3. **Verify Next.js Version**:  
   - Check the installed version:  
     ```bash
     npx next -v
     ```

4. **Run the Project**:  
   - Navigate to the project folder:  
     ```bash
     cd project-name
     ```  
   - Start the development server:  
     ```bash
     npm run dev
     ```  
   - Open the app at `localhost:3000` (or another port if already in use).

5. **Modify the App**:  
   - Locate `page.js` in the `app` folder.  
   - Replace existing code with:  
     ```jsx
     export default function Home() {
       return (
         <main>
           <h1>Hello World</h1>
         </main>
       );
     }
     ```  
   - Save changes and refresh the browser to see the updated app.  

Now you're ready to explore and build with Next.js!


### First Look at a Next.js Page
1. **Creating a New Page**:
   - Add a new folder, e.g., `about`, under the `app` directory.
   - Inside the folder, create a `page.js` file with the following code:
     ```jsx
     export default function About() {
       return <h1>About Us</h1>;
     }
     ```
   - This automatically generates a new route at `/about`.

2. **Testing the Page**:
   - Open the browser and navigate to `/about`. The new page is instantly available without extra configuration.

3. **Adding Navigation**:
   - Use the `Link` component in the main `page.js` file to link to the new page:
     ```jsx
     import Link from 'next/link';

     export default function Home() {
       return (
         <main>
           <h1>Home Page</h1>
           <Link href="/about">Go to About Page</Link>
         </main>
       );
     }
     ```
   - This enables seamless, fast client-side navigation between pages.

4. **Client-Side Navigation**:
   - Clicking a link transitions between pages without a full reload.
   - Next.js fetches only the necessary data, ensuring fast and smooth user experience.

Your first functional Next.js page is live, showcasing the simplicity and power of the framework.

## Lesson 2: Core Concepts of Next.js
### Pages and Routing in Next.js
1. **Dynamic Routes**:
   - Create a folder with square brackets (e.g., `[id]`) under the `app/posts` directory.
   - Add a `page.js` file inside it with the following code:
     ```jsx
     export default function Post({ params }) {
       return <h1>Post ID: {params.id}</h1>;
     }
     ```
   - The `[id]` folder creates a dynamic route, allowing pages to change based on the URL (e.g., `/posts/1` or `/posts/2`).

2. **Testing Dynamic Routes**:
   - Navigate to `/posts/<id>` in the browser.
   - The page dynamically updates based on the `<id>` in the URL.

3. **Practical Uses**:
   - Useful for pages like blog posts, user profiles, or product pages where content depends on a unique parameter.

4. **File-Based Routing**:
   - No need for extra configurations; Next.js handles routing automatically.

Dynamic routes simplify building apps with variable data, making it easy to scale and fetch real-time information.

### Fetching Data in Next.js
1. **Set Up Mock Data**:
   - Create a `data` folder under the `app` directory.  
   - Add a `posts.js` file with mock data:
     ```javascript
     const posts = [
       { id: "1", title: "First Post", content: "This is the content of the first post." },
       { id: "2", title: "Second Post", content: "This is the content of the second post." },
     ];
     export default posts;
     ```
2. **Update Dynamic Route**:
   - Modify the `page.js` file in the `[id]` folder to fetch and display post data:
     ```javascript
     import posts from '../../data/posts';

     export default function Post({ params }) {
       const post = posts.find((p) => p.id === params.id);
       if (!post) return <h1>Post not found</h1>;

       return (
         <div>
           <h1>{post.title}</h1>
           <p>{post.content}</p>
         </div>
       );
     }
     ```
3. **Test Dynamic Data**:
   - Navigate to `/posts/1` or `/posts/2` to see post details.
   - Enter a non-existing ID like `/posts/3` to trigger the "Post not found" error.

4. **Error Handling**:
   - Implement simple error messages for invalid IDs to enhance user experience.

This setup simulates fetching dynamic data locally and can be easily extended to connect to a real API or database for more complex applications.


### Styling Components in Next.js
1. **CSS Modules**:
   - Create a CSS module file (`post.module.css`) in the `[id]` folder for scoped styles:
     ```css
     .container {
       padding: 20px;
       background-color: #f9f9f9;
     }
     .title {
       font-size: 24px;
       color: #333;
     }
     .content {
       font-size: 18px;
       color: #666;
     }
     ```
   - Import the CSS module in `page.js`:
     ```javascript
     import styles from './post.module.css';

     export default function Post({ params }) {
       const post = posts.find((p) => p.id === params.id);
       if (!post) return <h1>Post not found</h1>;

       return (
         <div className={styles.container}>
           <h1 className={styles.title}>{post.title}</h1>
           <p className={styles.content}>{post.content}</p>
         </div>
       );
     }
     ```
2. **Tailwind CSS**:
   - Tailwind is preconfigured if chosen during setup. Ensure `globals.css` includes:
     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```
   - Add utility classes directly in components:
     ```jsx
     <h1 className="text-4xl font-bold my-4">Welcome to our Homepage</h1>
     ```

3. **Styling Benefits**:
   - **CSS Modules**: Scoped styles prevent global conflicts and provide detailed control.  
   - **Tailwind CSS**: Utility-first approach enables rapid styling without writing custom CSS.

This combination allows flexibility in styling Next.js apps, balancing precision and speed.

### Router in your Next Apps
Next.js offers two primary routing systems: the traditional Pages Directory and the newer App Router, each facilitating navigation within applications.

**Pages Directory:**
- **Setup:** During project initialization, selecting "No" for the App Router option creates a `pages` directory.

- **Route Creation:** Adding a folder (e.g., `about`) with an `index.js` file inside the `pages` directory automatically generates a corresponding route (`/about`). Navigation between pages utilizes the Next.js `Link` component.

- **Limitations:** This system has constraints, including challenges with static exports, Edge Runtime configurations, internationalization routing, complex serverless functions, and distribution of statically generated pages.

**App Router:**
- **Setup:** Opting for "Yes" during setup creates an `app` directory.

- **Route Creation:** Similar to the Pages Directory, but with a different convention, it involves creating folders within the `app` directory and nesting a `page.js` file to define routes.

- **Features:** The App Router introduces enhancements such as:

  - **Layout Components:** These define the structure of pages, including elements like headers and footers, and facilitate shared functions like navigation. Layout components remain active during route changes, preserving state and ensuring consistent layouts.

  - **Nested Layouts:** Allow defining multiple levels of layout components, each enclosing the content of its child components, providing a flexible and modular UI structure.

  - **Template Components:** Similar to layouts but create a new instance for each child upon navigation, resulting in recreated DOM elements and reset states and effects with each route change.

Understanding these routing mechanisms enables developers to choose the most suitable approach for their project's needs, balancing ease of use with advanced features.

For a comprehensive exploration of routing in Next.js, refer to the article "[Routing in Next.js – How to Use App Router in your Next Apps](https://www.freecodecamp.org/news/routing-in-nextjs/)" on freeCodeCamp.org.  

## Lesson 3: Enhancing Your Next.js App
### Adding Navigation with Next.js
1. **Purpose**:
   - Enhance user experience by creating a global navigation bar accessible on all pages.
   - Ensure consistent layout and seamless navigation across the app.

2. **Create Navigation Component**:
   - Add a `navigation.js` file under the `app` folder:
     ```jsx
     import Link from 'next/link';
     import './globals.css';

     export default function Layout({ children }) {
       return (
         <div>
           <nav>
             <ul>
               <li><Link href="/">Home</Link></li>
               <li><Link href="/about">About</Link></li>
               <li><Link href="/posts/1">Post 1</Link></li>
               <li><Link href="/posts/2">Post 2</Link></li>
             </ul>
           </nav>
           {children}
         </div>
       );
     }
     ```

3. **Integrate Navigation into Pages**:
   - Import and wrap `Layout` around existing content in each page:
     ```jsx
     import Layout from './navigation';

     export default function Page() {
       return (
         <Layout>
           <h1>Page Content</h1>
         </Layout>
       );
     }
     ```

4. **Styling**:
   - Use CSS or Tailwind CSS for styling. Example with Tailwind:
     ```jsx
     <nav className="bg-purple-500 text-white p-4">
       <ul className="flex space-x-4">
         <li><Link href="/">Home</Link></li>
         <li><Link href="/about">About</Link></li>
         <li><Link href="/posts/1">Post 1</Link></li>
         <li><Link href="/posts/2">Post 2</Link></li>
       </ul>
     </nav>
     ```

5. **Debugging Path Issues**:
   - Ensure correct relative or absolute import paths based on the folder structure.
   - Example: Adjust paths to navigate the folder hierarchy as needed.

6. **Benefits**:
   - Reusable `Layout` component ensures consistent navigation across all pages.
   - App Router in Next.js simplifies the process, avoiding repetitive code.

The global navigation bar is now integrated and functional across all pages, providing a seamless and consistent user experience.

### Using Environment Variables in Next.js
1. **Purpose of Environment Variables**:
   - Securely manage sensitive information like API keys, database URLs, and configuration settings.
   - Prevent exposure of critical data while maintaining adaptability across environments.

2. **Setup**:
   - Create a `.env.local` file in the root directory of the project (outside the `app` folder).
     Example content:
     ```env
     NEXT_PUBLIC_API_KEY=your-dummy-api-key
     ```
   - Variables prefixed with `NEXT_PUBLIC_` are accessible on both the server and client sides.

3. **Accessing Variables**:
   - Use `process.env.VARIABLE_NAME` in your code.
     Example in a component:
     ```jsx
     export default function Home() {
       return (
         <div>
           <p>API Key: {process.env.NEXT_PUBLIC_API_KEY}</p>
         </div>
       );
     }
     ```

4. **Best Practices**:
   - Keep sensitive variables (not prefixed with `NEXT_PUBLIC_`) for server-side use only.
   - Do not commit `.env.local` to version control to avoid exposing sensitive data.

5. **Use Cases**:
   - Secure API calls, manage environment-specific settings, and configure app behavior without hardcoding values.

6. **Recap of Mini Project**:
   - **Dynamic Routes**: Built pages with dynamic URL parameters.  
   - **Data Fetching**: Displayed posts based on their IDs.  
   - **Styling**: Combined CSS Modules and Tailwind CSS for responsive design.  
   - **Global Navigation**: Used reusable layout components for consistent navigation.  
   - **Environment Variables**: Managed sensitive data securely and efficiently.

With these techniques, you can build secure, adaptable, and feature-rich Next.js applications.


### Course Summary and Next Steps
#### **Course Recap**:
1. **Getting Started**:
   - Installed and configured a Next.js project.
   - Explored the efficient development environment for React-based applications.

2. **Core Features**:
   - **File-Based Routing**: Learned to set up pages and routes effortlessly.
   - **Data Fetching**: Implemented dynamic and efficient data-fetching methods.
   - **Styling**: Used CSS modules and styled components for flexible app design.
   - **Navigation**: Built a global navigation bar with the `Link` component.
   - **Environment Variables**: Managed sensitive data securely for scalable apps.

#### **Next Steps**:
1. **Advanced Features**:
   - Learn **dynamic routes** for content like user profiles and blog posts.
   - Build **API routes** and back-end logic within your app.
   - Explore **serverless functions** for real-time data processing.

2. **Deepen React Skills**:
   - Master React hooks, context API, and state management for advanced development.

3. **Practical Application**:
   - Create projects like a personal portfolio, blog, or small e-commerce store.
   - Gain real-world experience by applying your skills to practical challenges.

4. **Stay Updated**:
   - Follow Next.js updates, community resources, and new features.

#### **Final Thought**:
Keep building, stay curious, and continue exploring the fast-paced world of web development. The journey doesn’t end here—it’s just the beginning!

### Congratulations and Continuous Learning Journey
#### **Achievements**:
- Completed the Intro to Next.js course, gaining a solid foundation in one of the most powerful web development frameworks.
- Mastered essential concepts like project setup, routing, data fetching, component styling, and managing environment variables.
- Built hands-on projects, showcasing commitment and understanding of Next.js.

#### **Next Steps**:
1. **Revisit Materials**:
   - Review course content when needed to reinforce concepts.
2. **Experiment with Projects**:
   - Build a blog, portfolio, or small app using Next.js to practice and explore.
3. **Engage with the Community**:
   - Join the Next.js community to stay updated, share ideas, and grow with fellow developers.

#### **Final Message**:
This course is the start of an exciting journey. Keep building, experimenting, and learning as you expand your skills and explore the endless possibilities in web development. Congratulations on this milestone! 🎉


## Course Completion

I have successfully completed the **Intro to Next.js** course on Coursera. The course covered key topics such as project setup, file-based routing, data fetching, styling with CSS modules and Tailwind CSS, navigation, and secure management of environment variables. It provided a solid foundation for building scalable and dynamic web applications with Next.js.  

Here’s the certificate of completion:  
[View Certificate](https://www.coursera.org/account/accomplishments/certificate/ZRIWC6ED8SIZ)  