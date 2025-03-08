# [React: Building Progressive Web Apps (PWAs)](https://www.linkedin.com/learning/react-building-progressive-web-apps) 

It is an intermediate-level course by [**Eve Porcello**](https://www.linkedin.com/in/eveporcello), a software developer and instructor. Updated in May 2024, this 49-minute course teaches developers how to build **Progressive Web Apps (PWAs)** using **React**. PWAs provide a seamless user experience by working offline and behaving like native apps. The course covers key topics such as creating a **PWA component**, fetching data with **React hooks**, running builds using **npm scripts**, and auditing apps with **Lighthouse**. Learners will also explore how to add **offline support**, install the PWA on **Chrome and Safari (iOS)**, and deploy it to a hosting provider. By completing this course, developers will gain skills in **React.js** and **PWA development**, enhancing their ability to build resilient and installable web applications.

### Contents
- [React: Building Progressive Web Apps (PWAs)](#react-building-progressive-web-apps-pwas)
    - [Contents](#contents)
  - [1. Introduction](#1-introduction)
    - [1.1 Build a Resilient Progressive Web App with React](#11-build-a-resilient-progressive-web-app-with-react)
    - [1.2 What You Should Know](#12-what-you-should-know)
  - [2. What are PWAs?](#2-what-are-pwas)
    - [2.1 What is a Progressive Web App?](#21-what-is-a-progressive-web-app)
    - [2.2 Why PWAs?](#22-why-pwas)
    - [2.3 Using the PWA Checklist](#23-using-the-pwa-checklist)
  - [3. Setup: React App](#3-setup-react-app)
    - [3.1 Setting Up a React Project with Vite](#31-setting-up-a-react-project-with-vite)
    - [3.2 Creating an App Component](#32-creating-an-app-component)
    - [3.3 Fetch Data with React Hooks](#33-fetch-data-with-react-hooks)
      - [Steps to Fetch Data](#steps-to-fetch-data)
      - [Fixing Warnings](#fixing-warnings)
    - [3.4 Install Serve](#34-install-serve)
      - [Steps to Install `serve`](#steps-to-install-serve)
    - [3.5 Run a Build](#35-run-a-build)
      - [Steps to Build and Serve](#steps-to-build-and-serve)
  - [4. PWA Tools](#4-pwa-tools)
    - [4.1 Using Lighthouse](#41-using-lighthouse)
      - [How to Use Lighthouse](#how-to-use-lighthouse)
      - [Key Lighthouse Metrics](#key-lighthouse-metrics)
    - [4.2 Lighthouse Metrics](#42-lighthouse-metrics)
      - [Running Lighthouse on Development Mode](#running-lighthouse-on-development-mode)
      - [Running Lighthouse on the Production Build](#running-lighthouse-on-the-production-build)
      - [Improvements After Running on Build Version](#improvements-after-running-on-build-version)
    - [4.3 Register the Service Worker](#43-register-the-service-worker)
      - [Steps to Register a Service Worker in a Vite + React PWA](#steps-to-register-a-service-worker-in-a-vite--react-pwa)
      - [**How Service Workers Cache Data**](#how-service-workers-cache-data)
    - [4.4 Going Offline](#44-going-offline)
      - [**Steps to Test Offline Mode**](#steps-to-test-offline-mode)
      - [**Making Offline Content Available**](#making-offline-content-available)
      - [**Key Takeaways**](#key-takeaways)
  - [5. Understanding PWA Features](#5-understanding-pwa-features)
    - [5.1 Understanding the PWA Manifest](#51-understanding-the-pwa-manifest)
      - [**How to View the Manifest in DevTools**](#how-to-view-the-manifest-in-devtools)
      - [**Key Manifest Properties**](#key-manifest-properties)
      - [**Checking the Manifest with Lighthouse**](#checking-the-manifest-with-lighthouse)
      - [**Improving the Manifest for PWA Compliance**](#improving-the-manifest-for-pwa-compliance)
    - [5.2 Add a Custom Icon](#52-add-a-custom-icon)
      - [**Steps to Add Icons**](#steps-to-add-icons)
    - [5.3 Change the Name of the App](#53-change-the-name-of-the-app)
      - [**Steps to Update the App Name**](#steps-to-update-the-app-name)
      - [**Why is this Important?**](#why-is-this-important)
    - [5.4 Add PWA to Chrome](#54-add-pwa-to-chrome)
      - [**Steps to Install the PWA in Chrome**](#steps-to-install-the-pwa-in-chrome)
      - [**Why This Matters?**](#why-this-matters)
    - [5.5 Add PWA to iOS](#55-add-pwa-to-ios)
      - [**Step 1: Add an Apple Touch Icon**](#step-1-add-an-apple-touch-icon)
      - [**Step 2: Build and Serve the PWA**](#step-2-build-and-serve-the-pwa)
      - [**Step 3: Open the App in Safari on iOS**](#step-3-open-the-app-in-safari-on-ios)
      - [**Step 4: Add to Home Screen**](#step-4-add-to-home-screen)
      - [**Step 5: Launch the PWA**](#step-5-launch-the-pwa)
      - [**Why This Matters?**](#why-this-matters-1)
    - [5.6 Deploy on Netlify](#56-deploy-on-netlify)
      - [**Step 1: Run a Final Lighthouse Audit Locally**](#step-1-run-a-final-lighthouse-audit-locally)
      - [**Step 2: Create a Netlify Account**](#step-2-create-a-netlify-account)
      - [**Step 3: Deploy the PWA**](#step-3-deploy-the-pwa)
      - [**Step 4: Run a Lighthouse Audit on the Deployed App**](#step-4-run-a-lighthouse-audit-on-the-deployed-app)
      - [**Final Results**](#final-results)
  - [6. Conclusion](#6-conclusion)
    - [6.1 Next Steps](#61-next-steps)
    - [6.2 Completion Certificate](#62-completion-certificate)


## 1. Introduction
### 1.1 Build a Resilient Progressive Web App with React  

Progressive Web Apps (PWAs) have become increasingly popular as they allow developers to build web applications that feel like native apps. Companies like **The Washington Post, Twitter, and Pinterest** are investing in PWAs because they improve **user engagement** and **reduce data usage**. As developers, the goal is always to create fast and high-performing applications, especially for mobile users.  

In this course, **Eve Porcello**, a JavaScript developer passionate about React, explains how **React's tooling** makes it easier to build PWAs. If you want to develop **fast, reliable, and high-performance** applications, this course will guide you through the process of building your own **Progressive Web App**.

### 1.2 What You Should Know  

Before starting, you should have a **basic understanding of JavaScript**. If you're new to it, check out **JavaScript Essential Training** by Morten Rand-Hendriksen.  

This course focuses on **building PWAs with React**, not learning React itself. Some **basic React knowledge** is helpful, especially if you plan to create new PWAs or convert existing React apps. If needed, refer to **React Essential Training** by Eve Porcello.  

You'll also use **npm (Node Package Manager)** to install dependencies, so **Node.js should be installed**. If you need a refresher, check out **Node.js Essential Training** by Alex Banks.  

Once you're comfortable with these, you're ready to build PWAs with React!


## 2. What are PWAs?
### 2.1 What is a Progressive Web App?  

A **Progressive Web App (PWA)** is a mix of a **mobile website** and a **mobile app**. It works even on **low-speed networks** and can be **installed** like a native app. This means users can access it through a web browser but also have an experience similar to using a regular mobile app, like **Twitter or Instagram**.

### 2.2 Why PWAs?  

PWAs help solve **speed and accessibility issues**. Research shows that **53% of users leave a site if it takes longer than three seconds to load**, and once loaded, it needs to be fast. With users on different networks and devices, **PWAs ensure a smooth experience for all**.  

You might choose a **PWA** if you want your app to:  
- Be **installed** on a user's home screen  
- **Work reliably** across different network speeds  
- **Improve conversions** for sales or data collection  

PWAs are **platform agnostic**, meaning they work on any device **without an app store** and require **less storage**. Plus, **no native development skills** are needed—just JavaScript, HTML, and CSS.

### 2.3 Using the PWA Checklist  

Google Developers provides a **PWA checklist** with key guidelines for building a **Progressive Web App**. Some important points include:  

- The site **must use HTTPS** for security.  
- Pages should be **responsive** on mobile and tablets.  
- **Metadata** should be provided for home screen installation.  
- The first load should be **fast, even on 3G** (ideally within 3 seconds).  
- The site should **work across different browsers** and every page should have a **unique URL**.  

There are also **testing tools** to ensure compliance with these guidelines. Exploring **PWA best practices** can improve not just PWAs but **all web projects**. Now, let's start building a **PWA with React**!

## 3. Setup: React App
### 3.1 Setting Up a React Project with Vite  

Instead of using **Create React App (CRA)**, which is now deprecated, we will use **Vite**, a faster and more efficient tool for setting up React projects.  

To generate a new React project with Vite, open your terminal and run:  

```sh
npm create vite@latest my-application --template react
```

Once the installation is complete, navigate into your project folder:  

```sh
cd my-application
```

Then, install dependencies:  

```sh
npm install
```

Now, you can start your development server:  

```sh
npm run dev
```

This setup provides a **lightweight, optimized, and fast** development experience compared to CRA. In the next step, we’ll start building our **Progressive Web App (PWA) using React**.

### 3.2 Creating an App Component  

First, ensure all dependencies are installed by navigating to your project folder and running:  

```sh
cd my-application
npm install
```

Then, start the development server:  

```sh
npm run dev
```

Now, open **Visual Studio Code** and navigate to the `App.jsx` file. Replace the default content with the following:  

```jsx
function App() {
  return (
    <div>
      <header>
        <h1>Videos</h1>
      </header>
    </div>
  );
}

export default App;
```

Next, update `App.css` to adjust styles. Remove `.app-header` and apply styles directly to `header`:  

```css
header {
  min-height: 20vh;
}
```

After saving the changes, check **localhost:5173** (default for Vite) to see the updated app with the **"Videos"** header.  

In the next steps, we will add more components below this section.

### 3.3 Fetch Data with React Hooks  
To fetch video data from an API, we'll use **React Hooks**: `useState` for managing state and `useEffect` for fetching data when the component mounts.  

#### Steps to Fetch Data  

1. **Import necessary hooks** in `App.jsx`:  
   ```jsx
   import { useState, useEffect } from "react";
   ```

2. **Create state for storing fetched data**:  
   ```jsx
   const [data, setData] = useState([]);
   ```

3. **Fetch data using `useEffect`**:  
   ```jsx
   useEffect(() => {
     const fetchData = async () => {
       const result = await fetch("https://orangevalleycaa.org/api/videos");
       const json = await result.json();
       setData(json);
     };
     fetchData();
   }, []); // Empty array ensures it runs only once when the component mounts
   ```

4. **Render the videos in JSX**:  
   ```jsx
   return (
     <div>
       <header>
         <h1>Videos</h1>
       </header>
       {data.map((video) => (
         <div key={video.id}>
           <h2>{video.name}</h2>
           <video height="200" controls>
             <source src={video.video_url} type="video/mp4" />
           </video>
         </div>
       ))}
     </div>
   );
   ```

#### Fixing Warnings  
- The **"Each child in a list must have a unique key"** warning is resolved by using `key={video.id}` for each item.  

Now, the app will **fetch and display video data** dynamically, loading videos only **once when the component mounts**.

### 3.4 Install Serve  

To test a **Progressive Web App (PWA)** in a **production-like environment**, we need to **build** the project and serve it using a simple server. The `serve` package helps us do this by hosting the built files locally.  

#### Steps to Install `serve`  

1. **Stop the running process** (if any) in the terminal by pressing:  
   ```
   Ctrl + C
   ```

2. **Install `serve` globally** using npm:  
   ```sh
   npm install -g serve
   ```

3. This package will allow us to serve the **build folder** on a local port, enabling us to test the app in a **production-like environment**.  

In the next step, we'll **run the build** and serve it using this package.

### 3.5 Run a Build  

Now that `serve` is installed, we can **build the project** and serve it locally to test the **production version** of our Progressive Web App (PWA).  

#### Steps to Build and Serve  

1. **Run the build command** to generate an optimized production build:  
   ```sh
   npm run build
   ```
   - This **bundles React in production mode**, minifies files, and optimizes performance.  
   - The output will be stored in the `build` folder, ready for deployment.  

2. **Serve the build locally**:  
   ```sh
   serve -s dist
   ```
   - This starts a local static server, typically running on **localhost:5000**.  
   - Open your browser and visit `http://localhost:5000` to see the **production version** of your app.  

This process ensures your **PWA is working as expected** before deployment.

## 4. PWA Tools
### 4.1 Using Lighthouse  

**Lighthouse** is a powerful **open-source tool by Google** that helps improve the **performance, accessibility, and PWA readiness** of web applications. It runs an audit and provides detailed reports with optimization tips.  

#### How to Use Lighthouse  

1. **Open Developer Tools** in **Google Chrome**  
   - Right-click on the page and select **Inspect**  
   - Go to the **Lighthouse** tab (or select **Audits** from the dropdown)  

2. **Run an Audit**  
   - Click **Generate Report**  
   - Lighthouse will analyze the page and provide scores for different metrics  

#### Key Lighthouse Metrics  

- **Performance**: Measures load speed, time to interactive, and other speed factors  
- **Opportunities**: Suggests optimizations to improve loading time  
- **Accessibility**: Checks if the app is usable for all users  
- **SEO**: Provides tips for better search visibility  
- **Progressive Web App**: Evaluates if the app meets **PWA standards**  

Lighthouse is a great tool for **testing and improving PWAs**, though performance scores may vary slightly on multiple runs. For best results, use **Lighthouse along with manual testing** to ensure a well-optimized web app.

### 4.2 Lighthouse Metrics  

To analyze our app's **performance, accessibility, SEO, and PWA readiness**, we run a **Lighthouse audit**. It's best to do this in **Guest Mode or Incognito Mode** to avoid interference from browser extensions.  

#### Running Lighthouse on Development Mode  

1. **Start the app**  
   ```sh
   npm run dev
   ```
2. **Open Developer Tools** in Chrome  
   - Go to the **Lighthouse** tab  
   - Click **Run Audit**  

3. **Review the Results**  
   - **Performance**: Shows speed and optimization opportunities  
   - **Accessibility, Best Practices, and SEO**: Evaluates usability and search-friendliness  
   - **PWA**: Highlights issues like missing offline support or HTTPS  

#### Running Lighthouse on the Production Build  

1. **Stop the server** and **build the project**  
   ```sh
   npm run build
   ```
2. **Serve the build folder**  
   ```sh
   serve -s dist
   ```
3. **Open `localhost:5000`** and run Lighthouse again  

#### Improvements After Running on Build Version  
- **Performance Score increases** due to JavaScript minification  
- **PWA Issues still exist** (e.g., no offline support, missing HTTPS)  

### 4.3 Register the Service Worker  

A **service worker** is a JavaScript file that runs in the background to **cache resources, handle network requests, and store content for offline use**. It enables key **PWA features like offline support**.  

#### Steps to Register a Service Worker in a Vite + React PWA  

1. **Install dependencies for PWA support**  
   ```sh
   npm install vite-plugin-pwa --save-dev
   ```

2. **Update `vite.config.js`** to register the service worker  
   ```js
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';
   import { VitePWA } from 'vite-plugin-pwa';

   export default defineConfig({
     plugins: [
       react(),
       VitePWA({
         registerType: 'autoUpdate',
         devOptions: {
           enabled: true,
         },
         workbox: {
           globPatterns: ['**/*.{js,css,html,png,svg}'],
         },
         manifest: {
           name: 'My PWA App',
           short_name: 'PWA App',
           start_url: '/',
           display: 'standalone',
           background_color: '#ffffff',
           theme_color: '#000000',
           icons: [
             {
               src: '/icon-192x192.png',
               sizes: '192x192',
               type: 'image/png',
             },
             {
               src: '/icon-512x512.png',
               sizes: '512x512',
               type: 'image/png',
             },
           ],
         },
       }),
     ],
   });
   ```

3. **Modify `main.jsx` to register the service worker**  
   ```js
   import React from 'react';
   import ReactDOM from 'react-dom/client';
   import App from './App';
   import { registerSW } from 'virtual:pwa-register';

   const updateSW = registerSW({
     onNeedRefresh() {
       if (confirm('New version available. Refresh?')) {
         updateSW(true);
       }
     },
   });

   ReactDOM.createRoot(document.getElementById('root')).render(<App />);
   ```

4. **Run a production build and serve the PWA**  
   ```sh
   npm run build
   serve -s dist
   ```

5. **Check the service worker** in Chrome DevTools  
   - Open **Application Tab**  
   - Click on **Service Workers**  
   - Ensure the **service worker is registered and activated**  

#### **How Service Workers Cache Data**  
- If the app doesn't update after changes, try:  
  - **Opening in a new tab** (`localhost:5000`)  
  - **Hard refresh** (`Ctrl+Shift+R` or `Cmd+Shift+R` on Mac)  

### 4.4 Going Offline  

To test how our **PWA behaves offline**, we need to check which resources are **cached by the service worker** and **which fail when offline**.  

#### **Steps to Test Offline Mode**  

1. **Build and Serve the App**  
   ```sh
   npm run build
   serve -s dist
   ```
   Open **localhost:5000** in the browser.  

2. **Open Developer Tools**  
   - Go to the **Network** tab  
   - Check **Disable Cache** (for testing only)  
   - Refresh the page to see all resources being loaded  

3. **Simulate Offline Mode**  
   - Click **Offline** checkbox in the **Network** tab  
   - Refresh the page  

   **Expected behavior:**  
   - Some resources load from the **service worker cache**  
   - **Network requests fail** for non-cached resources  

#### **Making Offline Content Available**  

To ensure **some resources are always available offline**, store them **locally instead of fetching from the network**.  

1. **Download and store a video locally**  
   - Move the file to `src/videos/sculpture.mp4`  

2. **Modify the App to Load the Local Video**  

   Update `App.jsx`:  
   ```jsx
   import sculpture from "./videos/sculpture.mp4";

   function App() {
     return (
       <div>
         <header>
           <h1>Art Videos</h1>
         </header>
         <video src={sculpture} controls height="200"></video>
       </div>
     );
   }

   export default App;
   ```

3. **Rebuild and Serve the App**  
   ```sh
   npm run build
   serve -s dist
   ```
   Open **localhost:5000**, go offline, and refresh. The **local video will still load** since it’s not fetched from the network.  

#### **Key Takeaways**  
- **Dynamically fetched content (like API data) won't load offline** unless cached by the service worker  
- **Storing essential assets locally** (like videos or images) ensures they load even when offline  
- **A well-configured service worker can cache key resources** for a better offline experience  

This technique is useful if your app needs **certain assets to always be available offline** while still allowing for dynamic content when online.

## 5. Understanding PWA Features
### 5.1 Understanding the PWA Manifest  

The **manifest.json** file, located in the **public** folder, is crucial for making a **Progressive Web App (PWA)**. It provides metadata about the app, enabling features like **installability**, **home screen icons**, and **custom display settings**.  

#### **How to View the Manifest in DevTools**  
1. **Build and serve the app**  
   ```sh
   npm run build
   serve -s dist
   ```
2. Open **localhost:5000** in Chrome  
3. Open **Developer Tools** → **Application** → **Manifest**  

#### **Key Manifest Properties**  
- **name**: Full app name  
- **short_name**: Displayed name when installed  
- **theme_color**: Defines UI color for the browser  
- **icons**: Specifies icons for different device sizes  

#### **Checking the Manifest with Lighthouse**  
- Run a **Lighthouse Audit**  
- Under **Progressive Web App**, check for **missing icons or metadata issues**  

#### **Improving the Manifest for PWA Compliance**  
To fix missing icons, update `manifest.json`:  

```json
{
  "name": "My PWA App",
  "short_name": "PWA App",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#000000",
  "icons": [
    {
      "src": "/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

This ensures that the app meets **PWA installability criteria** and **passes Lighthouse checks**. In the next steps, we’ll further tweak the manifest for full **PWA optimization**.

### 5.2 Add a Custom Icon  

A **Progressive Web App (PWA)** needs icons of various sizes for different devices (mobile, desktop, Android, iOS). These icons are referenced in the **manifest.json** file, making the app **installable** on different platforms.  

#### **Steps to Add Icons**  

1. **Create Multiple Icon Sizes**  
   - Resize your image to the following dimensions and save them in the **public** folder:  
     - `icon-120.png` (120x120)  
     - `icon-144.png` (144x144)  
     - `icon-152.png` (152x152)  
     - `icon-167.png` (167x167)  
     - `icon-180.png` (180x180)  
     - `icon-192.png` (192x192)  
     - `icon-512.png` (512x512, for Chrome desktop)  

2. **Update `manifest.json`**  
   Add the following icon references in **public/manifest.json**:  

   ```json
   {
     "name": "My PWA App",
     "short_name": "PWA App",
     "start_url": "/",
     "display": "standalone",
     "background_color": "#ffffff",
     "theme_color": "#000000",
     "icons": [
       { "src": "/icon-120.png", "sizes": "120x120", "type": "image/png" },
       { "src": "/icon-144.png", "sizes": "144x144", "type": "image/png" },
       { "src": "/icon-152.png", "sizes": "152x152", "type": "image/png" },
       { "src": "/icon-167.png", "sizes": "167x167", "type": "image/png" },
       { "src": "/icon-180.png", "sizes": "180x180", "type": "image/png" },
       { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png" },
       { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png" }
     ]
   }
   ```

3. **Build and Serve the App**  
   ```sh
   npm run build
   serve -s dist
   ```

4. **Check Icons in Chrome DevTools**  
   - Open **localhost:5000**  
   - Go to **Developer Tools** → **Application** → **Manifest**  
   - Verify that all icons are displayed correctly  

5. **Run a Lighthouse Audit**  
   - If any **icon-related warnings** appear, ensure correct sizes and paths in **manifest.json**  
   - If everything is correct, the app will be **recognized as installable**  

### 5.3 Change the Name of the App  

The **app name** and **short name** are defined in the **manifest.json** file. These names appear when installing the **PWA** and in **browser settings**.  

#### **Steps to Update the App Name**  

1. **Open `manifest.json` in the `public` folder**  
2. **Modify the following properties**:  

   ```json
   {
     "name": "Art Videos for Fun and Learning",
     "short_name": "Art Videos",
     "description": "A collection of videos for art lovers",
     "start_url": "/",
     "display": "standalone",
     "background_color": "#ffffff",
     "theme_color": "#000000",
     "icons": [
       { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png" },
       { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png" }
     ]
   }
   ```

3. **Rebuild and Serve the App**  
   ```sh
   npm run build
   serve -s dist
   ```

4. **Check the Changes**  
   - Open **localhost:5000**  
   - Go to **Developer Tools** → **Application** → **Manifest**  
   - Verify that the **new name and short name appear correctly**  

#### **Why is this Important?**  
- The **name** appears in **install prompts** and **browser settings**  
- The **short_name** is used when space is limited (e.g., home screen icons)  
- The **description** helps users understand the app's purpose  

Now, when users **install the PWA**, they'll see **custom branding** instead of a default name!

### 5.4 Add PWA to Chrome  

A **Progressive Web App (PWA)** can be **installed directly from Chrome**, making it feel like a **native app**.  

#### **Steps to Install the PWA in Chrome**  

1. **Serve the App**  
   ```sh
   npm run build
   serve -s dist
   ```
   Open **localhost:5000** in **normal mode** (not incognito).  

2. **Check for Installability**  
   - Click the **three dots** in the top-right of Chrome  
   - Scroll down until you see **"Install Art Videos for Fun and Learning"**  
   - Click **Install**  

3. **Verify the Installation**  
   - Open a **new Chrome tab**  
   - Click the **Apps** button in the upper-left corner  
   - You should see your **PWA listed**  
   - Click the app, and it will open in its **own window**, like a standalone application  

#### **Why This Matters?**  
- PWAs provide a **native app experience** without requiring an app store  
- The app **runs in its own window**, separate from the browser  
- Users can **easily access** the app from their installed apps list  

Now, your **PWA is fully installable** and behaves like a **real application** on Chrome!


### 5.5 Add PWA to iOS  

On **iOS (Safari)**, Progressive Web Apps (**PWAs**) can be installed to the **home screen** like a native app.  

#### **Step 1: Add an Apple Touch Icon**  
Open **public/index.html** and add this line inside the `<head>` tag:  

```html
<link rel="apple-touch-icon" sizes="152x152" href="/icon-152.png">
```

This ensures that **iOS uses a proper app icon** when the PWA is added to the home screen.  

#### **Step 2: Build and Serve the PWA**  
```sh
npm run build
serve -s dist
```

#### **Step 3: Open the App in Safari on iOS**  
1. Open **Safari** on your iPhone/iPad  
2. Enter the **network URL** of your local server (e.g., `http://192.168.X.X:5000`)  
   - If testing locally, ensure your phone is on the **same network** as your computer  

#### **Step 4: Add to Home Screen**  
1. Tap the **Share** button (square with an arrow)  
2. Scroll down and tap **Add to Home Screen**  
3. Verify the app name and icon, then tap **Add**  

#### **Step 5: Launch the PWA**  
- The **PWA icon** appears on the home screen  
- Tapping it **opens the app in full-screen mode**, just like a native app  

#### **Why This Matters?**  
- iOS **does not show** an install prompt like Chrome, so users must **manually add it**  
- Adding the **apple-touch-icon** makes sure the PWA has a proper **app icon**  
- The PWA behaves **like an iOS app**, without requiring the App Store  

Now, your **PWA is installed on iOS** and works like a **real mobile app**!

### 5.6 Deploy on Netlify  

Netlify makes it **easy to deploy React applications**, including **Progressive Web Apps (PWAs)**. It automatically handles **HTTPS, caching, and performance optimizations**.  

#### **Step 1: Run a Final Lighthouse Audit Locally**  
1. **Build the App**  
   ```sh
   npm run build
   serve -s dist
   ```
2. Open **localhost:5000**  
3. Run a **Lighthouse audit** in **Incognito or Guest Mode**  
4. Note any **PWA-related errors** (e.g., missing HTTPS)  

#### **Step 2: Create a Netlify Account**  
- Go to **[Netlify](https://www.netlify.com/)**  
- Sign up with **GitHub, Google, or another provider**  

#### **Step 3: Deploy the PWA**  
1. Drag and drop the **build folder** into **Netlify's deployment area**  
2. Netlify will **automatically deploy the site**  
3. Once complete, **copy the deployed URL**  

#### **Step 4: Run a Lighthouse Audit on the Deployed App**  
1. Open the **deployed Netlify URL** in a **Guest Window**  
2. Open **Developer Tools** → **Lighthouse**  
3. Run an audit and verify:  
   - **Fast and Reliable:** ✅  
   - **Installable:** ✅  
   - **PWA Optimized:** ✅  
   - **No HTTPS errors**  

#### **Final Results**  
- The **PWA is now live on Netlify** with full **HTTPS support**  
- Users can **install it on desktops and mobile devices**  
- Netlify’s hosting makes it **fast, secure, and easy to update**  

Now, your **React PWA is fully deployed and ready for users!** 🚀


## 6. Conclusion
### 6.1 Next Steps  

Now that you understand the **basics of building a Progressive Web App (PWA)**, here are some ways to take it further:  

- **Customize the Service Worker**:  
  - Explore **Google Developers' resources** on service worker customization  
  - Optimize **caching strategies** for better offline performance  
  - Add **background sync** for updating data in the background  

- **Enhance the Install Experience**:  
  - Create **custom home screen prompts**  
  - Design **branded app banners** with custom **icons and colors**  

- **Experiment with Advanced PWA Features**:  
  - Implement **push notifications**  
  - Improve **offline support with IndexedDB**  
  - Optimize **performance for low-bandwidth users**  

This course is just the **starting point**—there’s **so much more** you can do with PWAs! 🚀 Start experimenting and see how PWAs can **enhance your own projects**.


### 6.2 Completion Certificate  

You have successfully completed the **React: Building Progressive Web Apps (PWAs)** course! 🎉  

📜 **Certificate of Completion:** [View Here](https://www.linkedin.com/learning/certificates/00d13b71e7c20b21f4c8605f9b9aff75b494f23806f18984d911338b02f1b12f?trk=share_certificate)  

This marks a great milestone—now you can build and deploy **fully functional PWAs** using React! 🚀