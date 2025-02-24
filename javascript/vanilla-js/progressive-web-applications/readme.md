# JavaScript: Progressive Web Applications
Progressive Web Applications (PWAs) bridge the gap between traditional websites and native mobile apps, offering a fast, reliable, and engaging user experience. In this **LinkedIn Learning** course, [**Tom Duffy**](https://www.linkedin.com/learning/instructors/tom-duffy) guides developers through the process of transforming an existing website into a full-fledged PWA using Vanilla JavaScript. By implementing key PWA features—such as offline functionality, automated installation prompts, and notifications—you can enhance user engagement without the complexity of native app development. Whether you're an experienced developer or just getting started, this course provides hands-on guidance to help you create web apps that feel and perform like native applications.  

Throughout the **3-hour 45-minute** course, you'll learn essential PWA concepts, including adding a web app manifest, creating icons, registering service workers, and handling push notifications. You'll also discover how to work around iOS limitations and ensure your PWA provides a seamless user experience across different platforms. By the end, you'll have the skills to build modern, high-performing web applications that meet users’ expectations for speed and responsiveness. **[Check out the course here](https://www.linkedin.com/learning/javascript-progressive-web-applications/)**.

### Contents
- [JavaScript: Progressive Web Applications](#javascript-progressive-web-applications)
    - [Contents](#contents)
  - [01. Introduction](#01-introduction)
    - [1.1 Leverage your web skills for mobile development](#11-leverage-your-web-skills-for-mobile-development)
    - [1.2 What you should know](#12-what-you-should-know)
    - [1.3 Using the exercise files](#13-using-the-exercise-files)
  - [02. What is Progressive Web App](#02-what-is-progressive-web-app)
    - [2.1 A little history](#21-a-little-history)
      - [The challenge of native apps](#the-challenge-of-native-apps)
      - [The evolution of web apps](#the-evolution-of-web-apps)
      - [Problems with app stores](#problems-with-app-stores)
    - [2.2 Introduction to Progressive Web Apps](#22-introduction-to-progressive-web-apps)
      - [What is a Progressive Web App (PWA)?](#what-is-a-progressive-web-app-pwa)
      - [Benefits of PWAs](#benefits-of-pwas)
      - [Challenges of PWAs](#challenges-of-pwas)
    - [2.3 Choosing an editor](#23-choosing-an-editor)
      - [Editors for Cross-Platform Web Development](#editors-for-cross-platform-web-development)
      - [Why NetBeans?](#why-netbeans)
      - [Installing NetBeans](#installing-netbeans)
  - [03. Getting Started](#03-getting-started)
    - [3.1 Creating a web app in NetBeans](#31-creating-a-web-app-in-netbeans)
      - [Creating a New Site in NetBeans](#creating-a-new-site-in-netbeans)
      - [Using an Existing Website in NetBeans](#using-an-existing-website-in-netbeans)
      - [Using the Starting Point Files](#using-the-starting-point-files)
    - [3.2 Demo of the web app](#32-demo-of-the-web-app)
      - [Setting up the project in NetBeans](#setting-up-the-project-in-netbeans)
      - [Installing the NetBeans Chrome Connector](#installing-the-netbeans-chrome-connector)
      - [Troubleshooting on macOS](#troubleshooting-on-macos)
      - [About the example site](#about-the-example-site)
    - [3.3 Creating the app icon](#33-creating-the-app-icon)
      - [Requirements for the PWA Icon](#requirements-for-the-pwa-icon)
      - [Generating App Icons](#generating-app-icons)
      - [Downloading and Adding Icons to Your Project](#downloading-and-adding-icons-to-your-project)
      - [Adding Favicon Code to index.html](#adding-favicon-code-to-indexhtml)
      - [Testing the Icon](#testing-the-icon)
    - [3.4 Using the Android Emulator](#34-using-the-android-emulator)
      - [Setting Up the Android Emulator](#setting-up-the-android-emulator)
      - [Creating a Virtual Device](#creating-a-virtual-device)
      - [Running Chrome on the Emulator](#running-chrome-on-the-emulator)
  - [04. The Web App Manifest](#04-the-web-app-manifest)
    - [4.1 What is the web app manifest?](#41-what-is-the-web-app-manifest)
      - [What does the web app manifest do?](#what-does-the-web-app-manifest-do)
      - [Web app manifest format](#web-app-manifest-format)
    - [4.2 Set a Start URL and Basic Styling](#42-set-a-start-url-and-basic-styling)
      - [Renaming the Manifest File](#renaming-the-manifest-file)
      - [Editing the Manifest File](#editing-the-manifest-file)
      - [Updating the Theme Color in index.html](#updating-the-theme-color-in-indexhtml)
      - [Understanding the Start URL and Display Property](#understanding-the-start-url-and-display-property)
      - [Testing in the Emulator](#testing-in-the-emulator)
      - [Orientation Property (Optional)](#orientation-property-optional)
    - [4.3 Test the PWA in the Android Emulator](#43-test-the-pwa-in-the-android-emulator)
      - [Adding the PWA to the Home Screen](#adding-the-pwa-to-the-home-screen)
      - [Launching the PWA](#launching-the-pwa)
      - [What to Expect](#what-to-expect)
      - [Note About the Chrome Logo on the Icon](#note-about-the-chrome-logo-on-the-icon)
    - [4.4 Test the PWA in the iOS Simulator](#44-test-the-pwa-in-the-ios-simulator)
      - [**Prerequisites**](#prerequisites)
      - [**Making the PWA iOS Compatible**](#making-the-pwa-ios-compatible)
        - [**Enable Web App Mode for iOS**](#enable-web-app-mode-for-ios)
        - [**Add the Apple Touch Icon**](#add-the-apple-touch-icon)
        - [**Ensure the Viewport Meta Tag Exists**](#ensure-the-viewport-meta-tag-exists)
      - [**Starting the iOS Simulator**](#starting-the-ios-simulator)
      - [**Choosing a Device in the iOS Simulator**](#choosing-a-device-in-the-ios-simulator)
      - [**Running the PWA in the iOS Simulator**](#running-the-pwa-in-the-ios-simulator)
      - [**Adding the PWA to the Home Screen**](#adding-the-pwa-to-the-home-screen-1)
      - [**Launching the PWA from the Home Screen**](#launching-the-pwa-from-the-home-screen)
      - [**Important iOS Considerations**](#important-ios-considerations)
      - [**Final Check**](#final-check)
  - [05. Getting Ready For Service Worker](#05-getting-ready-for-service-worker)
    - [5.1 Moving away from emulators](#51-moving-away-from-emulators)
      - [**Why We Can’t Rely on Emulators for PWAs**](#why-we-cant-rely-on-emulators-for-pwas)
        - [**Android Emulator Limitations**](#android-emulator-limitations)
        - [**iOS Simulator Limitations**](#ios-simulator-limitations)
      - [**Switching to Chrome for PWA Testing**](#switching-to-chrome-for-pwa-testing)
    - [5.2 Intro to service workers](#52-intro-to-service-workers)
      - [**What is a Service Worker?**](#what-is-a-service-worker)
      - [**Web App Install Banners**](#web-app-install-banners)
      - [**Installation Criteria \& Changing Standards**](#installation-criteria--changing-standards)
      - [**Service Workers and Offline Support**](#service-workers-and-offline-support)
      - [**Testing Service Workers on iOS**](#testing-service-workers-on-ios)
    - [5.3 Service worker lifecycle](#53-service-worker-lifecycle)
      - [**Overview of the Service Worker Lifecycle**](#overview-of-the-service-worker-lifecycle)
      - [**Registering a Service Worker**](#registering-a-service-worker)
      - [**Install Event**](#install-event)
      - [**Activate Event**](#activate-event)
      - [**Fetch Event**](#fetch-event)
      - [**Handling Install Prompts**](#handling-install-prompts)
      - [**Updating the Service Worker**](#updating-the-service-worker)
      - [**Offline Support with Service Workers**](#offline-support-with-service-workers)
      - [**Push Notifications in PWAs**](#push-notifications-in-pwas)
      - [**Testing Browser Support**](#testing-browser-support)
    - [5.4 Getting started with ES6 promises](#54-getting-started-with-es6-promises)
      - [**What are JavaScript Promises?**](#what-are-javascript-promises)
      - [**Promises in Service Workers**](#promises-in-service-workers)
      - [**Creating a Promise**](#creating-a-promise)
      - [**Using `.then()` to Handle Promises**](#using-then-to-handle-promises)
      - [**Using `.catch()` for Error Handling**](#using-catch-for-error-handling)
      - [**Chaining Promises**](#chaining-promises)
      - [**Difference Between Promises and Events**](#difference-between-promises-and-events)
      - [**More Resources on Promises**](#more-resources-on-promises)
    - [5.5 PWAs and Chrome DevTools](#55-pwas-and-chrome-devtools)
      - [**Checking PWA Progress in Chrome DevTools**](#checking-pwa-progress-in-chrome-devtools)
      - [**Running an Audit**](#running-an-audit)
      - [**What is Lighthouse?**](#what-is-lighthouse)
      - [**Interpreting the Audit Results**](#interpreting-the-audit-results)
  - [06. Service Workers](#06-service-workers)
    - [6.1 Registering a service worker](#61-registering-a-service-worker)
      - [**Adding a Service Worker Check in `main.js`**](#adding-a-service-worker-check-in-mainjs)
      - [**Registering the Service Worker**](#registering-the-service-worker)
      - [**Creating the `sw.js` File**](#creating-the-swjs-file)
      - [**Testing the Service Worker in Chrome**](#testing-the-service-worker-in-chrome)
      - [**Understanding the Service Worker Scope**](#understanding-the-service-worker-scope)
      - [**Running a New PWA Audit**](#running-a-new-pwa-audit)
    - [6.2 The install event and caches](#62-the-install-event-and-caches)
      - [**Caching Files for Offline Use**](#caching-files-for-offline-use)
      - [**Setting Up Cache Variables**](#setting-up-cache-variables)
      - [**Listening for the Install Event**](#listening-for-the-install-event)
      - [**Testing in Chrome DevTools**](#testing-in-chrome-devtools)
      - [**Why Versioning the Cache?**](#why-versioning-the-cache)
    - [6.3 Activating the service worker](#63-activating-the-service-worker)
      - [**Listening for the Activate Event**](#listening-for-the-activate-event)
      - [**Updating the Cache Version**](#updating-the-cache-version)
      - [**Testing the Activate Event in Chrome**](#testing-the-activate-event-in-chrome)
    - [6.4 Intercepting requests using Fetch](#64-intercepting-requests-using-fetch)
      - [**Listening for Fetch Events**](#listening-for-fetch-events)
      - [**Testing in Chrome**](#testing-in-chrome)
      - [**Cache-Only vs. Cache-Then-Network**](#cache-only-vs-cache-then-network)
      - [**Optimizing Network Requests**](#optimizing-network-requests)
      - [**Final Thoughts**](#final-thoughts)
    - [6.5 Install banner behavior](#65-install-banner-behavior)
      - [**Chrome 67 and Earlier (Automatic Install Prompt)**](#chrome-67-and-earlier-automatic-install-prompt)
      - [**Chrome 68 and Later (User-Controlled Install Prompt)**](#chrome-68-and-later-user-controlled-install-prompt)
      - [**Handling the Install Banner with `BeforeInstallPromptEvent`**](#handling-the-install-banner-with-beforeinstallpromptevent)
      - [**Backward Compatibility with Older Chrome Versions**](#backward-compatibility-with-older-chrome-versions)
    - [6.6 Designing the install banner](#66-designing-the-install-banner)
      - [**Adding the Install Banner UI in `index.html`**](#adding-the-install-banner-ui-in-indexhtml)
      - [**Styling the Install Banner in `main.css`**](#styling-the-install-banner-in-maincss)
    - [6.7 Implementing the install banner](#67-implementing-the-install-banner)
      - [**Handling the `beforeinstallprompt` Event**](#handling-the-beforeinstallprompt-event)
      - [**Hiding the Install Banner (`hidePrompt` Function)**](#hiding-the-install-banner-hideprompt-function)
      - [**Installing the App (`installApp` Function)**](#installing-the-app-installapp-function)
      - [**Listening for the `appinstalled` Event**](#listening-for-the-appinstalled-event)
      - [**Final Steps**](#final-steps)
    - [6.8 Debugging with Chrome DevTools](#68-debugging-with-chrome-devtools)
      - [**Performing a PWA Audit**](#performing-a-pwa-audit)
      - [**Fixing Common Audit Issues**](#fixing-common-audit-issues)
        - [**1. HTTPS Requirement (Expected Failure on Localhost)**](#1-https-requirement-expected-failure-on-localhost)
        - [**2. HTTP/2 Server Requirement**](#2-http2-server-requirement)
        - [**3. Adding `rel="noopener"` to External Links**](#3-adding-relnoopener-to-external-links)
        - [**4. Adding `lang` Attribute for Accessibility**](#4-adding-lang-attribute-for-accessibility)
      - [**Re-running the Audit**](#re-running-the-audit)
      - [**Final Results**](#final-results)
    - [6.9 More Chrome DevTools](#69-more-chrome-devtools)
      - [**Exploring the Application Tab**](#exploring-the-application-tab)
        - [**Checking the Manifest**](#checking-the-manifest)
        - [**Inspecting Service Workers**](#inspecting-service-workers)
        - [**Checking Cache Storage**](#checking-cache-storage)
        - [**Clearing Stored Data**](#clearing-stored-data)
      - [**Using These Tools for Debugging**](#using-these-tools-for-debugging)
    - [6.10 Debugging with Safari and the iOS Simulator](#610-debugging-with-safari-and-the-ios-simulator)
      - [**Setting Up the iOS Simulator**](#setting-up-the-ios-simulator)
      - [**Opening Safari for Debugging**](#opening-safari-for-debugging)
      - [**Connecting to the Simulator via Web Inspector**](#connecting-to-the-simulator-via-web-inspector)
      - [**Testing the PWA on the iOS Simulator**](#testing-the-pwa-on-the-ios-simulator)
      - [**Adding the PWA to the Home Screen**](#adding-the-pwa-to-the-home-screen-2)
      - [**Closing Safari \& Running the PWA**](#closing-safari--running-the-pwa)
      - [**Inspecting Service Worker \& Cache**](#inspecting-service-worker--cache)
      - [**Testing Offline Mode**](#testing-offline-mode)
      - [**More Debugging Resources**](#more-debugging-resources)
  - [07. Cleaning Up iOS Limitations](#07-cleaning-up-ios-limitations)
    - [7.1 What's Missing in the iOS Implementation](#71-whats-missing-in-the-ios-implementation)
      - [**Limitations of PWAs on iOS (As of August 2018)**](#limitations-of-pwas-on-ios-as-of-august-2018)
        - [**1. Limited Storage for Cached Files**](#1-limited-storage-for-cached-files)
        - [**2. No Background Execution**](#2-no-background-execution)
        - [**3. No Access to Certain Device Features**](#3-no-access-to-certain-device-features)
        - [**4. Multiple Instances of the PWA**](#4-multiple-instances-of-the-pwa)
        - [**5. No State Persistence**](#5-no-state-persistence)
        - [**6. No Support for Key PWA Features**](#6-no-support-for-key-pwa-features)
      - [**What iOS PWAs Can Do That Android PWAs Can’t?**](#what-ios-pwas-can-do-that-android-pwas-cant)
    - [7.2  Web App Install Banner: HTML and CSS](#72--web-app-install-banner-html-and-css)
      - [**Adding the Install Instructions UI (`index.html`)**](#adding-the-install-instructions-ui-indexhtml)
      - [**Styling the Install Instructions (`main.css`)**](#styling-the-install-instructions-maincss)
    - [7.3 Web App Install Banner: Update the Cache](#73-web-app-install-banner-update-the-cache)
      - [**Temporarily Removing `display: none` for Testing**](#temporarily-removing-display-none-for-testing)
      - [**Clearing the Cache in Chrome DevTools**](#clearing-the-cache-in-chrome-devtools)
      - [**Updating the Service Worker to Cache New Images**](#updating-the-service-worker-to-cache-new-images)
      - [**Testing the New Cache Update**](#testing-the-new-cache-update)
      - [**Restoring `display: none;` for iOS-Specific Behavior**](#restoring-display-none-for-ios-specific-behavior)
    - [7.4  Web app install banner: The `window.onload` event](#74--web-app-install-banner-the-windowonload-event)
      - [**Criteria for Displaying the Install Instructions**](#criteria-for-displaying-the-install-instructions)
      - [**Checking for PWA Support**](#checking-for-pwa-support)
      - [**Handling the `window.onload` Event**](#handling-the-windowonload-event)
      - [**Adding the `hideInstructions()` Function**](#adding-the-hideinstructions-function)
      - [**How This Works**](#how-this-works)
      - [**Final Steps for Testing**](#final-steps-for-testing)
    - [7.5 Demonstrating the Web App Install Banner](#75-demonstrating-the-web-app-install-banner)
      - [**Resetting the Simulator and Loading the PWA**](#resetting-the-simulator-and-loading-the-pwa)
      - [**Inspecting the Service Worker in Safari**](#inspecting-the-service-worker-in-safari)
      - [**Checking Local Storage for Install Banner Timing**](#checking-local-storage-for-install-banner-timing)
      - [**Testing the Install Banner Dismissal**](#testing-the-install-banner-dismissal)
      - [**Testing Installation from the Home Screen**](#testing-installation-from-the-home-screen)
      - [**Verifying the Install Banner Logic**](#verifying-the-install-banner-logic)
    - [7.6 Launch Images and Splash Screens](#76-launch-images-and-splash-screens)
      - [**iOS and Splash Screens**](#ios-and-splash-screens)
      - [**Image Requirements**](#image-requirements)
      - [**Adding the Splash Screen Images**](#adding-the-splash-screen-images)
      - [**Adding Media Queries for Splash Screens**](#adding-media-queries-for-splash-screens)
      - [**Inserting the Media Queries in `index.html`**](#inserting-the-media-queries-in-indexhtml)
      - [**Understanding a Sample Media Query**](#understanding-a-sample-media-query)
      - [**Supporting Landscape Mode**](#supporting-landscape-mode)
    - [7.7 Demonstrating Launch Images](#77-demonstrating-launch-images)
      - [**Testing the Launch Images in the iOS Simulator**](#testing-the-launch-images-in-the-ios-simulator)
      - [**Verifying the Splash Screen**](#verifying-the-splash-screen)
      - [**Issue: Multiple Instances of the PWA**](#issue-multiple-instances-of-the-pwa)
      - [**Impact of Multiple Instances**](#impact-of-multiple-instances)
      - [**Conclusion**](#conclusion)
  - [08. Notifications and Push APIs](#08-notifications-and-push-apis)
    - [8.1 Introduction to Notifications](#81-introduction-to-notifications)
      - [**What Are Push Notifications?**](#what-are-push-notifications)
      - [**Web Push Notifications vs. Native Notifications**](#web-push-notifications-vs-native-notifications)
      - [**iOS Limitations**](#ios-limitations)
      - [**Key Terminology**](#key-terminology)
      - [**Steps to Implement Push Notifications in a PWA**](#steps-to-implement-push-notifications-in-a-pwa)
    - [8.2 Requesting Permission to Show Notifications](#82-requesting-permission-to-show-notifications)
      - [**Why Do We Need Permission?**](#why-do-we-need-permission)
      - [**Where to Add the Permission Request Code**](#where-to-add-the-permission-request-code)
      - [**Checking Notification Support**](#checking-notification-support)
      - [**Testing in Chrome**](#testing-in-chrome-1)
      - [**Verifying the User's Choice**](#verifying-the-users-choice)
      - [**Changing Notification Settings in Chrome**](#changing-notification-settings-in-chrome)
    - [8.3 Displaying a Notification](#83-displaying-a-notification)
      - [**Adding the `notify` Function**](#adding-the-notify-function)
      - [**Creating the `notify` Function**](#creating-the-notify-function)
      - [**Calling `notify` When Permission is Granted**](#calling-notify-when-permission-is-granted)
      - [**Testing in Chrome**](#testing-in-chrome-2)
      - [**Confirming in the Console**](#confirming-in-the-console)
      - [**Modifying `main.js` to Test Background Notifications**](#modifying-mainjs-to-test-background-notifications)
      - [**Key Takeaways**](#key-takeaways)
    - [8.4 **Adding Data to a Notification**](#84-adding-data-to-a-notification)
      - [**Updating the Notification Request**](#updating-the-notification-request)
      - [**Creating an `options` Object**](#creating-an-options-object)
      - [**Passing the Options to `notify()`**](#passing-the-options-to-notify)
      - [**Modifying the `notify` Function**](#modifying-the-notify-function)
      - [**Testing in Chrome**](#testing-in-chrome-3)
    - [8.5 **Closing a Notification**](#85-closing-a-notification)
      - [**Handling Notification Close in the Service Worker**](#handling-notification-close-in-the-service-worker)
      - [**Adding a Function to Handle Notification Close**](#adding-a-function-to-handle-notification-close)
      - [**Listening for the `notificationclose` Event**](#listening-for-the-notificationclose-event)
      - [**Testing in Chrome**](#testing-in-chrome-4)
    - [8.6 **Handling the Notification Click Event**](#86-handling-the-notification-click-event)
      - [**Setting Up the Click Event Listener**](#setting-up-the-click-event-listener)
      - [**Adding the `notificationclick` Event Listener**](#adding-the-notificationclick-event-listener)
      - [**How It Works**](#how-it-works)
      - [**Adding New Content for Testing**](#adding-new-content-for-testing)
      - [**Modifying `index.html`**](#modifying-indexhtml)
      - [**Forcing the Service Worker to Refresh Cache**](#forcing-the-service-worker-to-refresh-cache)
    - [8.7 **Push Messaging Overview**](#87-push-messaging-overview)
      - [**Why Push Messaging Matters**](#why-push-messaging-matters)
      - [**How Push Notifications Work**](#how-push-notifications-work)
    - [8.8 **Adding Firebase Cloud Messaging to the Project**](#88-adding-firebase-cloud-messaging-to-the-project)
      - [**Setting Up Firebase Cloud Messaging (FCM)**](#setting-up-firebase-cloud-messaging-fcm)
      - [**Updating the Web App Manifest**](#updating-the-web-app-manifest)
    - [8.9 **Subscribing to Push Messaging**](#89-subscribing-to-push-messaging)
      - [**Modifying `main.js` to Subscribe Users**](#modifying-mainjs-to-subscribe-users)
      - [**Testing in Chrome**](#testing-in-chrome-5)
    - [8.10 **Handling Push Notifications**](#810-handling-push-notifications)
      - [**Adding a Push Event Listener in `sw.js`**](#adding-a-push-event-listener-in-swjs)
      - [**Explanation of the Code**](#explanation-of-the-code)
      - [**Testing the Push Notification**](#testing-the-push-notification)
    - [8.11 **Sending a Tickle Using cURL**](#811-sending-a-tickle-using-curl)
      - [**Understanding the Process**](#understanding-the-process)
      - [**Step 1: Get the Subscription Endpoint**](#step-1-get-the-subscription-endpoint)
      - [**Step 2: Get the Firebase Server Key**](#step-2-get-the-firebase-server-key)
      - [**Step 3: Construct the cURL Command**](#step-3-construct-the-curl-command)
        - [**Example cURL Command for Chrome**](#example-curl-command-for-chrome)
      - [**Step 4: Send the Push Notification**](#step-4-send-the-push-notification)
      - [**Step 5: Verify the Notification in Chrome**](#step-5-verify-the-notification-in-chrome)
      - [**Sending a Push Notification to Firefox**](#sending-a-push-notification-to-firefox)
        - [**Example cURL Command for Firefox**](#example-curl-command-for-firefox)
      - [**Steps for Firefox**](#steps-for-firefox)
    - [8.12 **Sending Data in a Push Message**](#812-sending-data-in-a-push-message)
      - [**Understanding Push Message Payloads**](#understanding-push-message-payloads)
      - [**Step 1: Update the Service Worker**](#step-1-update-the-service-worker)
        - [**Modify `sw.js` to Extract and Display the Payload**](#modify-swjs-to-extract-and-display-the-payload)
        - [**Updated `sw.js` Code**](#updated-swjs-code)
    - [8.13 **Installing Mozilla's Web Push Library**](#813-installing-mozillas-web-push-library)
      - [**Step 1: Install Node.js**](#step-1-install-nodejs)
      - [**Step 2: Install Mozilla’s Web Push Library**](#step-2-install-mozillas-web-push-library)
      - [**Step 3: Install Locally (Optional)**](#step-3-install-locally-optional)
    - [8.14 **Modifying the Push Event Handler**](#814-modifying-the-push-event-handler)
      - [**Step 1: Retrieve Data from the Push Event**](#step-1-retrieve-data-from-the-push-event)
      - [**Step 2: Implement the Push Event Listener**](#step-2-implement-the-push-event-listener)
      - [**Step 3: Explanation of Code Changes**](#step-3-explanation-of-code-changes)
    - [8.15 **Modifying the Notification Click Event**](#815-modifying-the-notification-click-event)
      - [**Handling the Notification Click Event**](#handling-the-notification-click-event)
      - [**Updating the Notification Click Event Handler**](#updating-the-notification-click-event-handler)
      - [**How It Works**](#how-it-works-1)
      - [**Expected Behavior**](#expected-behavior)
    - [8.16 **Creating the Web Push Script**](#816-creating-the-web-push-script)
      - [**Setting Up the Push Script**](#setting-up-the-push-script)
      - [**Step 1: Create a JavaScript File**](#step-1-create-a-javascript-file)
      - [**Step 2: Retrieve Push Subscription Data**](#step-2-retrieve-push-subscription-data)
      - [**Step 3: Running the Push Script**](#step-3-running-the-push-script)
      - [**Testing in Firefox**](#testing-in-firefox)
    - [8.17 **Creating the Web Push Script**](#817-creating-the-web-push-script)
      - [**Setting Up the Push Script**](#setting-up-the-push-script-1)
      - [**Step 1: Create a JavaScript File**](#step-1-create-a-javascript-file-1)
      - [**Step 2: Retrieve Push Subscription Data**](#step-2-retrieve-push-subscription-data-1)
      - [**Step 3: Running the Push Script**](#step-3-running-the-push-script-1)
      - [**Testing in Firefox**](#testing-in-firefox-1)
    - [8.18 **Testing the Hosted App**](#818-testing-the-hosted-app)
      - [**Setting Up the Emulator**](#setting-up-the-emulator)
      - [**Launching the PWA in Chrome**](#launching-the-pwa-in-chrome)
      - [**Remote Debugging the PWA**](#remote-debugging-the-pwa)
      - [**Sending a Push Notification**](#sending-a-push-notification)
      - [**Testing Push Notifications When the App is Closed**](#testing-push-notifications-when-the-app-is-closed)
      - [**Verifying in DevTools**](#verifying-in-devtools)
      - [**Testing on a Physical Android Device**](#testing-on-a-physical-android-device)
  - [09. Resources](#09-resources)
    - [9.1 **What's Left?**](#91-whats-left)
      - [**Exception Handling**](#exception-handling)
      - [**Storing the Subscription Object**](#storing-the-subscription-object)
      - [**Security Considerations**](#security-considerations)
    - [9.2 **Browser and Device Support**](#92-browser-and-device-support)
      - [**Android and Google’s PWA Push**](#android-and-googles-pwa-push)
      - [**iOS and Apple’s Limited Support**](#ios-and-apples-limited-support)
      - [**Microsoft’s Unique Approach**](#microsofts-unique-approach)
      - [**Why PWAs Matter**](#why-pwas-matter)
      - [**The Future of PWAs**](#the-future-of-pwas)
    - [9.3 **PWA Tools and Resources**](#93-pwa-tools-and-resources)
      - [**Tools for HTTPS**](#tools-for-https)
      - [**Web Manifest Generation**](#web-manifest-generation)
      - [**Offline and Sync Capabilities**](#offline-and-sync-capabilities)
      - [**JavaScript Frameworks for PWAs**](#javascript-frameworks-for-pwas)
      - [**Why Vanilla JavaScript Still Works**](#why-vanilla-javascript-still-works)
  - [10. Conclusion](#10-conclusion)
    - [10.1 **Next Steps**](#101-next-steps)
      - [**Building on What You've Learned**](#building-on-what-youve-learned)
      - [**Staying Updated**](#staying-updated)
      - [**Keep Improving Your PWA**](#keep-improving-your-pwa)
      - [**Final Thoughts**](#final-thoughts-1)
    - [10.2 Course Completion Certificate](#102-course-completion-certificate)

## 01. Introduction
### 1.1 Leverage your web skills for mobile development  

- Progressive Web Apps (PWAs) help web apps behave like native mobile apps.  
- You don’t need to publish PWAs in an App Store for users to install them.  
- This course focuses on implementing PWAs using plain JavaScript.  
- PWAs provide features like:  
  - Offline capabilities  
  - Automated installation prompts  
  - Notifications  
- The course will convert a simple one-page website into a PWA.  
- It will also cover iOS limitations and how to handle missing features.  
- Push notifications will be implemented to improve user engagement.

### 1.2 What you should know  

- You should have basic web development knowledge, including **HTML and CSS**.  
- This course uses **plain Vanilla JavaScript**, so you should understand:  
  - JavaScript syntax  
  - JavaScript Object Notation (JSON)  
  - Writing functions and event handlers  
- You **don’t need experience** with JavaScript frameworks like React, Vue, or jQuery.  
- The course will show how much can be done without frameworks, making the app **lightweight and fast**.  
- Testing will be done on **Android and iOS emulators** (experience with them is helpful but not required).  
- Additional courses are available if you want to explore topics in more depth.

### 1.3 Using the exercise files  

- If you have access to the **exercise files**, you can follow along using **My Files**.  
- Files are organized **by chapter and video** for easy navigation.  
- Inside each folder, you'll find all the necessary files to start working.  
- You can open the **PWA project** directly in **NetBeans** by:  
  - Using the **Open Project** command from the **File** menu.  
  - Clicking the **Open Project** icon on the toolbar.  
- To start:  
  - Locate the **starting point** folder.  
  - Double-click on it to open **NccCsPwa**.  
  - Click **Open Project**, and NetBeans will load everything.  
- Expanding the **site root** will show all included resources in the startup files.


## 02. What is Progressive Web App
### 2.1 A little history  

- **Web apps on mobile** have existed since **2007**, starting with the original iPhone.  
- **Steve Jobs** originally promoted web apps as the **iPhone SDK**, before native apps existed.  
- Early iPhones **had no App Store** or native SDK, so third-party apps were web-based.  
- **Native apps** became popular because they:  
  - Provided better performance  
  - Worked more smoothly  
  - Had access to hardware features like sensors and cameras  
- **App stores** made it easier for users to discover, purchase, and install apps.  

#### The challenge of native apps  
- Developers had to create separate apps for different platforms:  
  - **iOS, Android, BlackBerry, Windows Phone, Tizen, Firefox OS, etc.**  
  - Each platform required learning different programming languages, tools, and architectures.  
- This made **cross-platform development difficult** and time-consuming.  

#### The evolution of web apps  
- **Modern devices** are powerful enough to run web apps **at near-native speeds**.  
- **Hybrid frameworks** like **Cordova and Ionic** allow web apps to run inside a **native web-view** component.  
- **Native frameworks** like **React Native and Xamarin** let developers use a **single codebase** to generate native apps.  

#### Problems with app stores  
- Apps **must be submitted** to an app store for approval, which is **not always easy**.  
- App stores **take a cut** from app sales, reducing developers' profits.  
- PWAs **solve many of these issues** by offering app-like experiences **without app store restrictions**.

### 2.2 Introduction to Progressive Web Apps  

- Modern browsers now support features that address **native app shortcomings**.  
- PWAs provide an **app-like experience** by leveraging web technologies.  

#### What is a Progressive Web App (PWA)?  
- A **PWA is a website** that can be stored on a mobile device.  
- Uses **web app manifests** and **service workers** for advanced functionality.  
- Works across multiple **platforms and screen sizes** (fully responsive).  
- Must be **served over HTTPS** for security.  
- **Can work offline** by caching resources on the device.  
- **Installable on a device** (users can add it to the home screen).  
- **Cross-browser compatible**, supported in browsers implementing the PWA spec.  

#### Benefits of PWAs  
**For users:**  
- **Data-friendly** – much smaller than native apps.  
- **No mandatory install** – users can try before deciding to install.  
- **Automatic updates** – no need to download large updates like native apps.  

**For developers:**  
- **Easy updates** – simply update files on the server.  
- **Easy sharing** – just a **URL**, no app store submission required.  
- **Supports push notifications** for better user engagement.  

#### Challenges of PWAs  
- The **PWA spec is still evolving**, so browser support varies.  
- **Heavily supported on Android** (Chrome, Firefox, and Opera).  
- **Microsoft** has started adopting PWA technologies.  
- **iOS support is limited** – Apple has pledged support but implements PWA features differently.  
- **Best practice:** Implement as much of the standard as possible to future-proof your PWA.

### 2.3 Choosing an editor  

- Choosing a **code editor** is a personal decision, but some platforms have **limited choices**:  
  - **Android development** → Requires **Android Studio**  
  - **iOS development** → Requires **Xcode**  
  - **Windows development** → Uses **Visual Studio**  

#### Editors for Cross-Platform Web Development  
- Web development offers **many options** since files are simple text-based.  
- Options range from:  
  - **Drag-and-drop tools** (e.g., **Adobe Dreamweaver**) – for design-heavy development.  
  - **Basic text editors** (e.g., **VI and Emacs**) – minimal but lack modern features.  
  - **Modern code editors** with syntax highlighting and file management tools.  

#### Why NetBeans?  
- **Free and open source** – no cost for students or institutions.  
- **Cross-platform** – runs on **Windows, macOS, and Linux**.  
- **Supports multiple file types** – HTML, CSS, JavaScript, SQL, PHP, XML, and more.  
- **Project-based structure** – keeps work organized into logical sections.  
- **IDE features** – includes **code completion, syntax highlighting, and real-time debugging**.  
- **Requires Java** – NetBeans is a **Java-based** application and needs a **JDK** installed.  

#### Installing NetBeans  
- Download from the **NetBeans download page**.  
- Recommended package: **HTML5/JavaScript package** (or "All" package for broader use).  
- NetBeans currently works best with **JDK 8** (not the latest JDK 10) due to its transition to an **Apache project**.

## 03. Getting Started
### 3.1 Creating a web app in NetBeans  

To start working on a **Progressive Web App (PWA)**, you need a website. You have three options:  
1. **Create a new site**  
2. **Use an existing site**  
3. **Use the starting point files** from the **exercise files**  

#### Creating a New Site in NetBeans  
1. Click the **New Project** button (yellow rectangle with a plus sign) or go to **File → New Project**.  
2. Choose **HTML5/JS Application** as the project type and click **Next**.  
3. Name your application and choose where to save it, then click **Next**.  
4. Select a **site template** or start from scratch:  
   - If using a template, download an online template (e.g., **Initializer Classic**).  
   - Otherwise, select **No Site Template** and click **Next**.  
5. Choose any additional tools you need (can be left unchecked).  
6. Click **Finish** – NetBeans will set up the project.  

#### Using an Existing Website in NetBeans  
1. Start a new project as before, but choose **HTML5/JS Application with Existing Sources**.  
2. Click **Next** and browse to the **site root or source folder** where your website files are stored.  
3. Name the project and click **Finish**.  
4. **Important**: NetBeans does **not** copy files; changes made in NetBeans will modify your actual files.  

#### Using the Starting Point Files  
1. **Unzip** the starting point files to your desktop.  
2. Click the **Open Project** icon or go to **File → Open Project**.  
3. Navigate to the **StartingPoint** folder.  
4. Inside, find **NccCsPwa**, double-click it, and NetBeans will open the project for you.

### 3.2 Demo of the web app  
- **Google Chrome** will be used for debugging and testing.  
- Ensure you have **Chrome version 66 or higher** installed.  
- **Service workers** will be used, and you can check browser support on **caniuse.com** by searching for “service workers.”  

#### Setting up the project in NetBeans  
1. **Right-click your project** and choose **Properties**.  
2. Click on the **Run** tab and choose a browser to deploy to.  
   - Change **Android Emulator (Default Browser)** to **Chrome with NetBeans Connector**.  
3. Make sure **index.html** is set as the start file.  
4. Change the **Web Root property** to just a **forward slash ("/")** to better reflect a real-world website structure.  
5. **Enable Auto-refresh**, then click **OK**.  
6. **Run the project**:  
   - Right-click **index.html** → Select **Run File**.  

#### Installing the NetBeans Chrome Connector  
- When prompted, click **Go to Chrome Web Store**.  
- Click **Add to Chrome** → **Add Extension**.  
- Go back to NetBeans and click **Re-Run Project**.  

#### Troubleshooting on macOS  
- If the project does **not** appear in Chrome:  
  - Set the browser to **Chrome (without NetBeans Connector)** in **Project Properties → Run**.  
  - Right-click **index.html** and select **Run File**.  
- If Chrome loads using the **file:// protocol** instead of **http://**, update the browser settings as above.  

#### About the example site  
- The web app is based on an **unfinished project** for the **Norwalk Community College Computer Science Department**.  
- The site includes:  
  - **Tabs for faculty**  
  - **Program information**  
  - **Course details**  
  - **Informational sections** (useful for PWA notifications).  
- Though incomplete, it is **sufficient for demonstrating PWA concepts**.

### 3.3 Creating the app icon  

- **PWAs** mimic native apps by having **home screen icons** and a **splash screen** during launch.  
- You need an **app icon** for your PWA, which can be:  
  - Created manually  
  - Taken from the **exercise files** (provided as **Photoshop (PSD) and PNG files**).  

#### Requirements for the PWA Icon  
- The icon should be **square**.  
- Minimum size: **260x260 pixels**.  

#### Generating App Icons  
1. **Go to** [RealFaviconGenerator.net](https://realfavicongenerator.net/).  
2. Click **"Select your Favicon Picture"** and upload your icon file (**PNG format recommended**).  
3. Adjust settings for different platforms:  

   **iOS settings:**  
   - Click **"Add a Solid Plain Background"**.  
   - Choose a background color (**FFC40D** in this example).  

   **Android settings:**  
   - Add a **solid background color** (**FFC40D**).  
   - Set the **app name** (e.g., "NCCCS").  
   - Keep the **theme color** the same as the background.  

   **Windows Metro settings:**  
   - Select the same **FFC40D** color.  
   - Keep **"Use the Original Favicon"** enabled.  

   **Safari settings:**  
   - Set the **theme color** to **#264DE4** (the blue color in the original icon).  

4. **Choose "Place the files in the root of your website"**.  
5. Click **"Generate Icons and HTML"**.  

#### Downloading and Adding Icons to Your Project  
1. **Download the Favicon package** from the generated page.  
2. Locate the file in your **Downloads folder** and unzip it.  
3. **Copy all icon files** from the extracted folder.  
4. **Paste them into the NetBeans project**:  
   - Right-click **Site Root** in NetBeans.  
   - Choose **Paste**.  
   - If copying manually, place the files **in the same folder as index.html**.  

#### Adding Favicon Code to index.html  
1. **Go back to the Favicon Generator**.  
2. **Copy the generated HTML code**.  
3. In **NetBeans**, open **index.html**.  
4. Paste the code inside the `<head>` section (preferably at the end).  
5. **Format the code** for readability (indent properly).  
6. **Save the file**.  

#### Testing the Icon  
1. **Right-click index.html** → Choose **Run File**.  
2. Open **Chrome** and check if the **favicon appears in the browser tab**.

### 3.4 Using the Android Emulator  

- **Testing the PWA on an Android emulator** helps simulate real-world behavior before adding PWA features.  
- The easiest way to set up an emulator is by installing **Android Studio** from **[developer.android.com](https://developer.android.com/)**.  

#### Setting Up the Android Emulator  
1. **Download and install Android Studio** from the official website.  
2. Open Android Studio and **create a dummy app** (if it's your first time running it).  
   - The dummy app doesn't need activities, just a shell project.  
3. **Open the AVD (Android Virtual Device) Manager**:  
   - Click on **Tools → AVD Manager** in the menu.  
   - Or click the **AVD Manager** icon in the toolbar.  

#### Creating a Virtual Device  
1. Click **Create Virtual Device**.  
2. Choose a **device definition** (e.g., **Pixel 2 XL**).  
3. Click **Next**.  
4. Select a **system image**:  
   - Choose the **latest named release** (e.g., **Oreo, API level 27**).  
   - If not installed, Android Studio provides a **download link** to install it.  
5. Click **Next**, name the AVD (e.g., **PWA Test**), and click **Finish**.  
6. The **created emulator** will now appear in the **Virtual Device list**.  
7. Click the **Start button** in the **Actions** column to launch it.  

#### Running Chrome on the Emulator  
1. **Launch Chrome** on the emulator.  
2. Choose **"Help make Chrome better" → Accept and Continue**.  
3. **Skip signing in** to keep the session anonymous.  
4. **Navigate to your web app**:  
   - Assuming you’re using **NetBeans Chrome Connector** with the **lightweight web server**, enter:  
     ```
     10.0.2.2:8383
     ```
   - This points the emulator to the **local development server**.  
5. Press **Enter** and check how your **PWA's color scheme** and layout look on Android.


## 04. The Web App Manifest
### 4.1 What is the web app manifest?  

- A **manifest** is a list of contents, historically used in **shipping** to describe cargo.  
- **Web app manifests** serve a similar purpose by **providing metadata** about a web application to the **browser**.  

#### What does the web app manifest do?  
- It allows developers to define **key properties** of a **PWA**, such as:  
  - **App name**  
  - **Icons**  
  - **Color scheme**  
  - **Start URL**  
  - Other settings  

#### Web app manifest format  
- The **manifest file** is written in **JSON (JavaScript Object Notation)**.  
- JSON is a lightweight format for storing and exchanging data.  
- For more information:  
  - Visit **[json.org](https://www.json.org/)** for details on JSON.  
  - Check **Mozilla Web Docs** for the **complete web app manifest specification**.

### 4.2 Set a Start URL and Basic Styling  
#### Renaming the Manifest File  
1. In **NetBeans**, right-click on **site.webmanifest** and choose **Rename**.  
2. Rename the file to **manifest.json**.  
   - This enables **syntax highlighting** in the editor.  
3. Update the reference in **index.html**:  
   - Locate the link to the manifest file.  
   - Change it to **manifest.json** to match the new name.  

#### Editing the Manifest File  
1. **Open `manifest.json`** in NetBeans.  
2. Update the **name property**:  
   ```json
   "name": "NCC Computer Science"
   ```
3. Set the **theme color** to blue (`#264DE4`):  
   ```json
   "theme_color": "#264DE4"
   ```
4. Add the **start URL property**:  
   ```json
   "start_url": "index.html"
   ```
5. **Save the file**.  

#### Updating the Theme Color in index.html  
1. **Find the `<meta>` tag** for the theme color.  
2. Change its value to **blue (`#264DE4`)**:  
   ```html
   <meta name="theme-color" content="#264DE4">
   ```
3. **Save the file**.  

#### Understanding the Start URL and Display Property  
- **`start_url`**:  
  - Defines which page loads **when the PWA starts**.  
  - Since this is a **single-page site**, `index.html` is used.  
  - For multi-page apps, choose the most relevant page (e.g., a login page for authentication-based apps).  

- **`display` property**:  
  - Determines how the PWA appears when launched.  
  - Setting to **"standalone"** hides the browser UI, making it look like a native app:  
    ```json
    "display": "standalone"
    ```
  - Other options:  
    - `"browser"` → Opens like a normal website inside a browser.  

#### Testing in the Emulator  
1. **Refresh the page** in the **Android Emulator**.  
2. The **yellow theme color** should now be replaced with **blue**.  
3. If the **name, background color, and icons** are properly set, Android will generate a **splash screen** when launching from the home screen.  

#### Orientation Property (Optional)  
- You can set **orientation** if your app works best in **portrait or landscape mode**:  
  ```json
  "orientation": "portrait"
  ```
- **Be cautious**—users typically **prefer to control orientation themselves**.  

For more details, refer to the **Google Developer Docs**: [developers.google.com](https://developers.google.com).

### 4.3 Test the PWA in the Android Emulator  

#### Adding the PWA to the Home Screen  
1. Open **Chrome** inside the **Android Emulator**.  
2. Click the **Menu icon** (three dots on the right of the address bar).  
3. Select **"Add to Home screen"**.  
4. Chrome will display the **name and icon** as specified in `manifest.json`.  
5. Click **"Add"**, and Chrome will automatically place the app on the **Home screen**.  
6. You’ll receive a notification that the **app was added successfully**.  

#### Launching the PWA  
1. Press the **Home button** on the emulator.  
2. Locate your **PWA icon** on the Home screen.  
3. Tap the icon to **open the PWA**.  

#### What to Expect  
- A **splash screen** appears before the app fully loads.  
  - The splash screen’s **background color** is based on the **theme color set in `manifest.json`**.  
- The **app launches in standalone mode**, meaning:  
  - **No browser address bar** is visible.  
  - The app looks and feels like a **native mobile app**.  

#### Note About the Chrome Logo on the Icon  
- In some **older Chrome versions**, the **Chrome logo** may still appear on the PWA icon.  
- In **newer versions**, the Chrome logo is removed, and the PWA appears like a **regular installed app**.  

This confirms that your **PWA is installable and functioning properly on Android!** 🎉

### 4.4 Test the PWA in the iOS Simulator  

#### **Prerequisites**  
- You must install **Xcode** to access the **iOS Simulator**.  
- Download Xcode from the **Mac App Store** (search for "Xcode").  
- Install **Xcode version 9.3 or higher** and **iOS SDK 11.3 or greater**.  
- You must be running **macOS High Sierra** or later.  

#### **Making the PWA iOS Compatible**  
Before testing on the **iOS Simulator**, add the following **meta and link tags** to **index.html** inside the `<head>` section:

##### **Enable Web App Mode for iOS**  
```html
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
```
- The first tag **enables standalone mode** (removes Safari UI).  
- The second tag **controls the status bar appearance** (default, black, or black-translucent).  

##### **Add the Apple Touch Icon**  
```html
<link rel="apple-touch-startup-image" href="/apple-touch-icon.png">
```
- This sets the **startup splash screen icon** using the **Apple Touch icon** generated earlier.  

##### **Ensure the Viewport Meta Tag Exists**  
```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```
- This ensures **proper scaling and responsiveness** on mobile devices.  
- If your template already includes this, **no need to add it again**.  

#### **Starting the iOS Simulator**  
1. Open **Finder** → Navigate to **Applications**.  
2. Scroll to **Xcode** → **Right-click Xcode** → Select **Show Package Contents**.  
3. Go to **Contents** → **Developer** → **Applications**.  
4. Locate and open **Simulator**.  
   - You can **drag it to the Dock** for quick access.  

#### **Choosing a Device in the iOS Simulator**  
1. By default, the simulator may open **iPhone X**.  
2. To change:  
   - Go to **Hardware** → **Device** → Choose **iOS 11.4 → iPhone 8**.  
   - (Any device works, but iPhone 8 has a home button for easier navigation.)  

#### **Running the PWA in the iOS Simulator**  
1. Open **Safari** in the simulator.  
2. Enter the local web server URL:  
   ```
   localhost:8383
   ```
   - **Note:** The iOS simulator uses **localhost** instead of `10.0.2.2` like Android.  
3. Press **Enter** and the **Computer Science Department webpage** should load.  

#### **Adding the PWA to the Home Screen**  
1. Click the **Share button** (bottom toolbar).  
2. Scroll and find **"Add to Home Screen"**.  
3. Click **Add**, and iOS will place the app on the **Home Screen**.  

#### **Launching the PWA from the Home Screen**  
1. Tap the **app icon** to open the PWA.  
2. The app should **launch in standalone mode** (no Safari browser UI).  
3. The **splash screen** should display (using the theme color from `manifest.json`).  

#### **Important iOS Considerations**  
- **No back button**: Unlike Android, **iOS lacks a native back button**.  
  - If navigation is required, add a **back button inside your app**.  
- **PWA support in iOS is limited**:  
  - Some features (e.g., push notifications, background sync) **are not fully supported**.  
  - Apple has **partial support** for PWAs but may handle them differently than Chrome on Android.  

#### **Final Check**  
✅ **Splash screen appears**  
✅ **No browser UI** (Standalone mode works)  
✅ **App runs from the Home Screen**  

Your **PWA is now working on iOS!** 🎉

## 05. Getting Ready For Service Worker
### 5.1 Moving away from emulators  

- You’re making great progress on turning your **web app into a PWA**, but **emulators have limitations**.  
- Now, it’s time to **shift to real browser testing** using **Chrome DevTools**.  

#### **Why We Can’t Rely on Emulators for PWAs**  

##### **Android Emulator Limitations**  
- **PWAs require HTTPS** for deployment (except when testing on localhost).  
- The **Android emulator does not provide direct access to localhost**.  
- Instead, we used `10.0.2.2` as the IP address for testing.  
- **Testing on an Android emulator requires an HTTPS-enabled local web server**, which is beyond this course.  

##### **iOS Simulator Limitations**  
- On **iOS 11.3 and later**, PWAs **don’t support auto-install prompts**.  
- Users must manually **go to Safari → Share → Add to Home Screen**.  
- Since most users **won’t dig through menus**, this isn’t an ideal solution.  

#### **Switching to Chrome for PWA Testing**  
- **Chrome DevTools** provides **all the necessary features** for testing and debugging PWAs.  
- It allows us to **simulate different devices** without needing an emulator.  
- We’ll now **focus on using Chrome’s built-in tools** to complete our PWA.

### 5.2 Intro to service workers  
#### **What is a Service Worker?**  
- A **service worker** is a **JavaScript script** that runs in the **background**, separate from a webpage.  
- It enables **features that don’t need a webpage or user interaction**.  
- Examples of features powered by service workers:  
  - **Push notifications**  
  - **Background sync**  
  - **Intercepting and handling network requests**  
  - **Managing app cache for offline use**  

#### **Web App Install Banners**  
- The process of prompting users to **add a PWA to their home screen** is called **web app install banners**.  
- This requires:  
  - A **web app manifest**  
  - A **service worker**  
- Supported in:  
  - **Chrome, Firefox, Opera (on Android)**  
  - **Edge (with restrictions—Microsoft requires PWAs to be listed in their store)**  
  - **iOS does not support install prompts** (regardless of browser).  

#### **Installation Criteria & Changing Standards**  
- Browsers **do not automatically show install banners** unless **certain criteria are met**.  
- **Chrome 68 (July 2018)** removed automatic install banners:  
  - **Now requires developers to programmatically trigger the prompt.**  
- PWAs are **still evolving**, so developers need to **stay updated** with changing browser requirements.  
- The **Web Fundamentals Developer site** provides up-to-date **installation criteria**.  

#### **Service Workers and Offline Support**  
- **Service workers cache resources**, allowing users to **interact with the app offline**.  
- They **intercept network requests** and serve cached responses when needed.  
- For **iOS users**, service workers **only** provide offline capabilities, **not install prompts**.  
- **To check browser support** for service workers, visit **caniuse.com**.  
  - Note: **Safari listings mostly refer to the desktop version, not iOS Safari.**  

#### **Testing Service Workers on iOS**  
- **iOS 11.3+** supports service worker debugging in the **iOS simulator**.  
- **Safari 11.1+ or Safari Technology Preview** allows inspection of service workers using **Web Inspector**.  
- We will explore **debugging service workers in Safari** later in the course.

### 5.3 Service worker lifecycle  

#### **Overview of the Service Worker Lifecycle**  
- Service workers have a **lifecycle** that includes several key events.  
- The general workflow includes:  
  1. **Register the service worker** with the browser.  
  2. **Listen for and handle the install event**.  
  3. **Listen for and handle the activate event**.  
  4. **Listen for and handle fetch events**.  
  5. **Listen for the beforeinstallprompt event** (to allow users to install the app).  
  6. **Listen for push events** (for notifications).  

#### **Registering a Service Worker**  
- A **service worker** is a **separate JavaScript file** containing the app’s background functionality.  
- You **register** the service worker in the browser using:  
  ```javascript
  if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
          .then(() => console.log('Service Worker registered'))
          .catch(err => console.log('Service Worker registration failed', err));
  }
  ```
- Registration should be done **in the home page script**, **not in the service worker itself**.  
- If registered in the **public root**, the service worker controls the entire site.  

#### **Install Event**  
- The **install event** fires **once**, and it is the first opportunity to **cache resources** for offline use.  
- The `waitUntil` method ensures the install completes successfully:  
  ```javascript
  self.addEventListener('install', event => {
      event.waitUntil(
          caches.open('pwa-cache').then(cache => {
              return cache.addAll([
                  '/',
                  '/index.html',
                  '/styles.css',
                  '/script.js'
              ]);
          })
      );
  });
  ```
- Cached files allow the PWA to work offline.  

#### **Activate Event**  
- The **activate event** fires when the service worker **takes control**.  
- It is useful for **cleaning up old cache files**:  
  ```javascript
  self.addEventListener('activate', event => {
      event.waitUntil(
          caches.keys().then(keys => {
              return Promise.all(
                  keys.filter(key => key !== 'pwa-cache')
                      .map(key => caches.delete(key))
              );
          })
      );
  });
  ```
- Until activation, **old service workers** handle requests.  
- To **immediately activate** the new service worker, use:  
  ```javascript
  self.skipWaiting();
  ```

#### **Fetch Event**  
- The **fetch event** allows service workers to **intercept network requests** and **serve cached responses**.  
- Example of serving cached files:  
  ```javascript
  self.addEventListener('fetch', event => {
      event.respondWith(
          caches.match(event.request).then(response => {
              return response || fetch(event.request);
          })
      );
  });
  ```
- If the file exists in the cache, it is **served from cache** instead of making a network request.  

#### **Handling Install Prompts**  
- As of **Chrome 68**, automatic install banners were **removed**.  
- PWAs must **prompt users manually** using `beforeinstallprompt`:  
  ```javascript
  let installPromptEvent;
  window.addEventListener('beforeinstallprompt', event => {
      event.preventDefault();
      installPromptEvent = event;
      showInstallButton();
  });

  installButton.addEventListener('click', () => {
      installPromptEvent.prompt();
  });
  ```
- The install banner will **only appear if**:  
  - The app **isn’t already installed**.  
  - The user has **interacted** with the site for at least **30 seconds**.  
  - The app is **served over HTTPS**.  
  - A **service worker with a fetch event handler is registered**.  
  - The **manifest includes**:  
    - A **name or short_name**  
    - At least **two icons** (192px and 512px)  
    - A **start_url**  
    - A **display property** (`standalone`, `fullscreen`, or `minimal-ui`)  

#### **Updating the Service Worker**  
- **Service workers update with each page load**.  
- If an update is found, the new worker:  
  - **Installs in the background**  
  - **Waits until old pages are closed** before activating  
- To **force activation immediately**, use:  
  ```javascript
  self.skipWaiting();
  ```
- For users, a **simple page refresh** often activates the new service worker.  

#### **Offline Support with Service Workers**  
- **When offline**, the service worker **serves cached files** instead of making network requests.  
- This ensures that users can **interact with the app without a connection**.  
- This behavior makes PWAs function **more like native apps**.  

#### **Push Notifications in PWAs**  
- Push notifications use the **Web Push API** to re-engage users.  
- Example use case: **messaging apps** that send notifications when a message arrives.  
- **Web push notifications on Chrome mimic native notifications**, providing:  
  - A **sound or vibration**  
  - A **badge, pop-up, or dialog**  
  - A **clickable action to open the app**  
- **iOS does not support push notifications for PWAs**.  

#### **Testing Browser Support**  
- Check **caniuse.com** to see **which browsers support service workers and push notifications**.  
- While **Chrome on Android** doesn’t directly support the **Notifications API**, it does support **Web Push API notifications**.  

We will cover **notifications and push in detail** later in the course.

### 5.4 Getting started with ES6 promises  
#### **What are JavaScript Promises?**  
- **Promises** are **placeholders** for something that may or may not be fulfilled in the future.  
- A promise can have **four states**:  
  - **Pending** → The outcome is not yet determined.  
  - **Fulfilled** → The operation was successful.  
  - **Rejected** → The operation failed.  
  - **Settled** → The operation is complete (either fulfilled or rejected).  

#### **Promises in Service Workers**  
- The **Service Worker API heavily relies on promises**.  
- Many **methods in the service worker API return promise objects**.  

#### **Creating a Promise**  
- The `Promise` constructor takes a **callback function** with two parameters:  
  - `resolve` (called if the operation is successful)  
  - `reject` (called if the operation fails)  
- Example:  
  ```javascript
  let myPromise = new Promise((resolve, reject) => {
      let success = true; // Simulating success condition
      if (success) {
          resolve("Operation successful");
      } else {
          reject("Operation failed");
      }
  });
  ```

#### **Using `.then()` to Handle Promises**  
- The `.then()` method allows handling the **success and failure** of a promise.  
- It takes **two callback functions**:  
  - The **first function** runs if the promise is **fulfilled**.  
  - The **second function** runs if the promise is **rejected**.  
- Example:  
  ```javascript
  myPromise.then(
      result => console.log(result),  // Success handler
      error => console.log(error)     // Error handler
  );
  ```

#### **Using `.catch()` for Error Handling**  
- Instead of passing a second function to `.then()`, you can use `.catch()`:  
  ```javascript
  myPromise
      .then(result => console.log(result))
      .catch(error => console.log(error));
  ```
- **Benefit**: Keeps the code **cleaner and easier to read**.  

#### **Chaining Promises**  
- `.then()` can return another promise, allowing you to **chain multiple operations in sequence**.  
- Example:  
  ```javascript
  fetch('/data.json')
      .then(response => response.json())  // Convert response to JSON
      .then(data => console.log(data))    // Handle the data
      .catch(error => console.log("Error:", error)); // Handle errors
  ```
- **How it works**:  
  - The first `.then()` **processes the response** (converting it to JSON).  
  - The second `.then()` **handles the JSON data**.  
  - If **any error occurs**, `.catch()` handles it.  

#### **Difference Between Promises and Events**  
- **Events**:  
  - Can **fire multiple times**.  
- **Promises**:  
  - **Settle only once**.  
  - If a callback is added **after settlement**, it will still execute based on the original resolution.  

#### **More Resources on Promises**  
- **Google Developer Docs**: [developer.google.com](https://developer.google.com)  
- **Promise Implementation Guide**: [JakeArchibald.github.io](https://jakearchibald.github.io)  

Promises are a **core part of modern JavaScript** and essential for **handling asynchronous tasks**, especially in PWAs! 🚀

### 5.5 PWAs and Chrome DevTools  

#### **Checking PWA Progress in Chrome DevTools**  
1. Open **Chrome** and go to the **Developer Tools**:  
   - Click the **menu icon** (three dots on the right of the address bar).  
   - Select **More tools → Developer tools**.  
2. Expand the DevTools window for better visibility.  
3. Click on the **Audits** tab (now called **Lighthouse** in newer versions).  

#### **Running an Audit**  
1. Choose a **device type**:  
   - **Mobile** (recommended)  
   - **Desktop**  
2. Select which **audits to run**:  
   - Make sure **all audits** are checked.  
3. Set **Throttling** to **Simulated Fast 3G**.  
4. Click **"Clear storage"** to remove any cached data.  
5. Click **Run audits** to start the test.  

#### **What is Lighthouse?**  
- The **Audits tab** in Chrome uses **Lighthouse**, an open-source tool for analyzing web performance.  
- Lighthouse evaluates:  
  - **Performance**  
  - **Accessibility**  
  - **SEO**  
  - **PWA compliance**  
- More details can be found at [Google Developers](https://developers.google.com).  

#### **Interpreting the Audit Results**  
- The **Progressive Web App (PWA) score** shows how well your app follows PWA best practices.  
- Scroll through the results to see **what needs improvement**.  
- **Common issues:**  
  - **"Does not register a service worker"** → A key requirement for offline support.  
  - **Missing manifest properties** (e.g., start URL, icons, or theme color).  
  - **Slow performance due to large resources or inefficient loading**.  

## 06. Service Workers
### 6.1 Registering a service worker  
#### **Adding a Service Worker Check in `main.js`**  
1. Open **`main.js`** (located in the **`js`** folder inside the Site Root).  
2. Add a **conditional statement** to check if service workers are supported:  
   ```javascript
   if ('serviceWorker' in navigator) {
       console.log('Service Worker Supported');
   } else {
       console.log('Service Workers Not Supported');
   }
   ```
3. If service workers are **not supported**, a message will be logged in the console.  

#### **Registering the Service Worker**  
1. Inside the `if` block, call the `register` method:  
   ```javascript
   navigator.serviceWorker.register('/sw.js')
       .then(result => {
           console.log('Service Worker Registered');
           console.log('Scope:', result.scope);
       })
       .catch(error => {
           console.log('Service Worker Registration Failed');
           console.log(error);
       });
   ```
2. This registers the **service worker file** (`sw.js`).  
3. The **`register` method returns a promise**, so:  
   - If successful, it logs **"Service Worker Registered"** and the **scope**.  
   - If it fails, it logs **"Service Worker Registration Failed"** and prints the error.  

#### **Creating the `sw.js` File**  
1. **Right-click the Site Root** → Choose **New → JavaScript File**.  
2. Name it **`sw`** (NetBeans will automatically add `.js`).  
3. Click **Finish**, and `sw.js` will be created.  
4. Make sure the filename **matches** what was used in `main.js`.  

#### **Testing the Service Worker in Chrome**  
1. Open **Chrome** and go to **Developer Tools** (`F12` or `Ctrl + Shift + I`).  
2. Open the **Console tab** and **clear it**.  
3. **Refresh the page**.  
4. You should see:  
   ```
   Service Worker Registered
   Scope: /
   ```
5. If there was an earlier error, it was because Chrome tried to load `sw.js` **before it was created**.  
   - A **refresh** will fix this, and the service worker should now be registered.  

#### **Understanding the Service Worker Scope**  
- **Service worker scope** determines which files it can control.  
- If the service worker is **in the root (`/`)**, it can **intercept all requests**.  
- If stored in a subfolder (e.g., `/js/sw.js`), it **can only control files inside `/js/`**.  
- **Best practice**: Keep the service worker **in the root** to manage the entire site.  

#### **Running a New PWA Audit**  
1. Open **Chrome DevTools** → Click the **Audits (Lighthouse) tab**.  
2. Click the **plus (+) sign** to start a new audit.  
3. Keep the **same settings** as before.  
4. Click **Run audits**.  
5. The **PWA score should increase**, even though the service worker doesn’t do anything yet.  

Now the service worker is **registered and running**. In the next step, we’ll **add functionality to it!** 🚀

### 6.2 The install event and caches  

#### **Caching Files for Offline Use**  
- **Service workers** allow PWAs to function **offline** by storing files in a cache.  
- The **install event** is used to **preload resources** that the app needs to work without a network connection.  

#### **Setting Up Cache Variables**  
1. Open **`sw.js`**.  
2. Define a **cache name** and an **array of files** to store:  
   ```javascript
   const cacheName = 'CSv1'; // Versioning the cache
   const cachedFiles = [
       '/',
       '/index.html',
       '/manifest.json',
       '/js/main.js',
       '/css/main.css',
       '/css/normalize.min.css',
       '/img/cassidy.jpg',
       '/img/cramer.jpg',
       '/img/duffy.jpg',
       '/img/gabor.jpg'
   ];
   ```

#### **Listening for the Install Event**  
1. Use `self.addEventListener` to listen for the **install event**:  
   ```javascript
   self.addEventListener('install', event => {
       console.log('Service Worker Install Event');
       event.waitUntil(
           caches.open(cacheName)
               .then(cache => {
                   console.log('Caching Files');
                   return cache.addAll(cachedFiles);
               })
               .then(() => self.skipWaiting())
               .catch(error => console.log('Cache Failed', error))
       );
   });
   ```
2. **What happens here?**  
   - The service worker **opens a cache** with the name `CSv1`.  
   - It **adds all the files** listed in `cachedFiles`.  
   - Once caching is done, it **immediately activates** using `self.skipWaiting()`.  
   - If an error occurs, it **logs "Cache Failed"**.  

#### **Testing in Chrome DevTools**  
1. Open **Chrome** and go to **Developer Tools (F12)**.  
2. Click on the **Console tab** → Clear logs.  
3. **Refresh the page** and check for:  
   ```
   Service Worker Install Event
   Caching Files
   ```
4. If an error occurs, check the **Network tab** to find **missing or incorrect filenames**.  
   - Example: A typo in `normalize.min.css` was causing an error.  
   - **Fix it in `cachedFiles`**, save `sw.js`, and refresh.  
5. Once corrected, **all files should be cached properly**.  

#### **Why Versioning the Cache?**  
- **Using cache names like `CSv1`, `CSv2`, etc.** allows easy updates.  
- Later, when updating files, we will **delete old cache versions** in the **activate event**.  

Now, our PWA **stores necessary files for offline use**, and the **next step** is handling **fetch events** to serve cached content! 🚀

### 6.3 Activating the service worker  

#### **Listening for the Activate Event**  
1. Open **`sw.js`** and scroll to the bottom.  
2. Add an event listener for the **activate event**:  
   ```javascript
   self.addEventListener('activate', event => {
       console.log('Service Worker Activated');
       event.waitUntil(
           caches.keys().then(keyList => {
               return Promise.all(
                   keyList.map(key => {
                       if (key !== cacheName) {
                           console.log('Removing Old Cache:', key);
                           return caches.delete(key);
                       }
                   })
               );
           })
       );
       return self.clients.claim();
   });
   ```
3. **What happens here?**  
   - Logs **"Service Worker Activated"** to the console.  
   - **Retrieves all stored cache keys** using `caches.keys()`.  
   - **Loops through caches** with `.map()` and **deletes old caches**.  
   - Calls `self.clients.claim()` to ensure the **new service worker takes control**.  

#### **Updating the Cache Version**  
1. Change the `cacheName` variable at the top of `sw.js`:  
   ```javascript
   const cacheName = 'CSv2'; // Updating from 'CSv1'
   ```
2. **Why change the cache name?**  
   - A new cache name forces the **activate event to remove old caches**.  
   - Prevents outdated files from being served.  

#### **Testing the Activate Event in Chrome**  
1. **Save** `sw.js`.  
2. **Refresh the page** in **Chrome DevTools**.  
3. If there are errors, check for typos (e.g., `Promise` instead of `Promis`).  
4. Clear the console and refresh again.  
5. Expected output:  
   ```
   Service Worker Installed
   Caching Files
   Service Worker Activated
   Removing Old Cache: CSv1
   ```
6. If the old cache (`CSv1`) was removed, the **activate event is working correctly**!  

Now, the service worker **keeps the cache updated**, ensuring only the latest version of the app is stored. 🚀

### 6.4 Intercepting requests using Fetch  
#### **Listening for Fetch Events**  
1. Open **`sw.js`** and add an event listener for the **fetch event**:  
   ```javascript
   self.addEventListener('fetch', event => {
       console.log('Fetch event occurred:', event.request.url);
       event.respondWith(
           caches.match(event.request)
               .then(response => response || fetch(event.request))
       );
   });
   ```
2. **What happens here?**  
   - **Logs fetch requests** in the console.  
   - **Tries to return the cached response** using `caches.match(event.request)`.  
   - **If the resource isn’t cached**, it **fetches from the network**.  

#### **Testing in Chrome**  
1. Save **`sw.js`** and refresh the page in **Chrome DevTools**.  
2. In the **Console tab**, you should see logs like:  
   ```
   Fetch event occurred: http://localhost:8383/index.html
   Fetch event occurred: http://localhost:8383/css/main.css
   ```
3. This means the **service worker is now intercepting fetch requests**.  

#### **Cache-Only vs. Cache-Then-Network**  
- The current strategy is **cache-then-network**:  
  - **If a file is in the cache**, it is served instantly.  
  - **If it’s not cached**, the browser fetches it from the network.  
- **Cache-only strategy:**  
  - Only serves **cached resources**.  
  - If a file **isn’t cached**, the request **fails**, even if the network is available.  
- **Network-then-cache strategy:**  
  - Always tries the **network first**.  
  - If the network fails, it **serves cached content**.  
  - Slower but ensures **fresh content**.  

#### **Optimizing Network Requests**  
- To make network-then-cache more efficient, you can **set a timeout for fetch**:  
  ```javascript
  event.respondWith(
      new Promise((resolve, reject) => {
          const networkFetch = fetch(event.request)
              .then(response => {
                  caches.open(cacheName).then(cache => cache.put(event.request, response.clone()));
                  resolve(response);
              })
              .catch(() => caches.match(event.request));
  
          setTimeout(() => caches.match(event.request).then(resolve), 3000);
      })
  );
  ```
- **How this works:**  
  - **Attempts to fetch from the network.**  
  - **Caches the new response.**  
  - **If the network doesn’t respond in 3 seconds, serves the cached version.**  

#### **Final Thoughts**  
- A **cache-then-network strategy** balances **speed** and **freshness**.  
- A **network-then-cache strategy** ensures **updated content** but can be **slower**.  
- Choose a **caching strategy** based on **app needs**.  
- More caching strategies can be found at **[Service Worker Cookbook](https://serviceworke.rs/)**. 🚀

### 6.5 Install banner behavior  

#### **Chrome 67 and Earlier (Automatic Install Prompt)**  
- The **install banner** appears **automatically** when the following criteria are met:  
  - The **PWA is not already installed**.  
  - The user has **interacted with the domain for at least 30 seconds**.  
  - The app is **served over HTTPS** (required for service workers).  
  - A **service worker is registered** with a fetch event handler.  
  - The **web app manifest** includes:  
    - A **name or short name**.  
    - At least **two icons** (192x192 and 512x512 pixels).  
    - A **start URL**.  
    - A **display mode** (`fullscreen`, `standalone`, or `minimal-ui`).  

#### **Chrome 68 and Later (User-Controlled Install Prompt)**  
- The install banner is **no longer shown automatically**.  
- Instead, Chrome displays a **mini-info bar** when criteria are met.  
- Users can **dismiss the info bar**, and it won’t appear again for **three months**.  
- Chrome now fires the **BeforeInstallPromptEvent**, allowing developers to:  
  - **Handle the event manually**.  
  - **Present a UI element** (like a button) for users to **trigger installation**.  
  - **Call `prompt()` on the event** to show the install dialog.  

#### **Handling the Install Banner with `BeforeInstallPromptEvent`**  
1. **Listen for the event and store it** for later use:  
   ```javascript
   let installPromptEvent;

   window.addEventListener('beforeinstallprompt', event => {
       event.preventDefault(); // Prevents automatic prompt
       installPromptEvent = event;
       showInstallButton(); // Display UI for manual install
   });
   ```
2. **Provide a button to manually trigger installation**:  
   ```javascript
   document.getElementById('install-btn').addEventListener('click', () => {
       if (installPromptEvent) {
           installPromptEvent.prompt();
           installPromptEvent.userChoice.then(choice => {
               console.log(choice.outcome);
               installPromptEvent = null; // Reset event after use
           });
       }
   });
   ```
3. **This allows users to install the app when they are ready**, making the experience **less intrusive**.  

#### **Backward Compatibility with Older Chrome Versions**  
- **This method works in Chrome 67 and earlier**.  
- Developers can **override the automatic install behavior** and **display a UI instead**.  
- If targeting **older browsers**, extensive testing is recommended.  

By implementing this approach, **users have more control over PWA installation**, improving engagement while maintaining **backward compatibility**. 🚀

### 6.6 Designing the install banner  
#### **Adding the Install Banner UI in `index.html`**  
1. Open **`index.html`** and locate the **Welcome section**.  
2. Add a **section for the install banner**:  
   ```html
   <section id="addToHomeScreen">
       <h1>Install App</h1>
       <img src="android-chrome-192x192.png" alt="NCC CS">
       <p>Add our app to your home screen?</p>
       <a href="javascript:void(0);" onclick="hidePrompt();" style="text-decoration: none;">No, Thanks</a>
       <button onclick="installApp();">Yes, Please!</button>
   </section>
   ```
3. **How this works**:  
   - A **heading (`h1`)** with the text **"Install App"**.  
   - An **image (`img`)** using the **192x192 icon** from the favicon generator.  
   - A **prompt (`p`)** asking users if they want to install the app.  
   - A **"No, Thanks"** link (`a` tag) that runs a **`hidePrompt()`** function.  
   - A **"Yes, Please!"** button (`button`) that runs **`installApp()`** when clicked.  

#### **Styling the Install Banner in `main.css`**  
1. Open **`main.css`** and scroll to the **custom styles section**.  
2. Add styles for the install banner container:  
   ```css
   #addToHomeScreen {
       display: none;
       margin-top: 20px;
       padding: 0;
   }
   ```
   - The **banner is hidden initially** (`display: none;`).  
   - It only appears **when criteria are met** in the `beforeinstallprompt` event.  

3. **Style the image inside the banner**:  
   ```css
   #addToHomeScreen img {
       max-width: 57px;
       margin: 10px;
       float: left;
   }
   ```
   - The image will be **57px wide** while maintaining its aspect ratio.  
   - It **floats to the left** with **10px margins**.  

4. **Style the install button**:  
   ```css
   #addToHomeScreen button {
       background-color: #264de4;
       color: white;
       border: 1px solid #2965f1;
       margin: 5px 10px;
   }
   ```
   - The button has a **blue background (`#264de4`)**.  
   - The text is **white** for contrast.  
   - The border uses a **brighter blue (`#2965f1`)**.  
   - Margins are **5px top/bottom and 10px left/right**.  

Now, the install banner is in place. Next, we’ll implement the **JavaScript logic** to handle the `beforeinstallprompt` event and trigger the banner when criteria are met! 🚀

### 6.7 Implementing the install banner  
#### **Handling the `beforeinstallprompt` Event**  
1. Open **`main.js`** and add a variable to store the install event:  
   ```javascript
   let installEvent;
   ```
2. **Listen for the `beforeinstallprompt` event**:  
   ```javascript
   window.addEventListener('beforeinstallprompt', event => {
       console.log('Before Install Prompt event fired');
       event.preventDefault(); // Prevent automatic prompt (for Chrome 67 and earlier)
       installEvent = event; // Store the event for later use
       document.getElementById('addToHomeScreen').style.display = 'block'; // Show the install banner
   });
   ```
3. **What happens here?**  
   - The **install prompt event fires** when criteria are met.  
   - The event is **stored** in `installEvent` for later use.  
   - The **install banner is displayed** by changing its `display` property to `block`.  

#### **Hiding the Install Banner (`hidePrompt` Function)**  
1. Add a function to **hide the install UI**:  
   ```javascript
   function hidePrompt() {
       document.getElementById('addToHomeScreen').style.display = 'none';
   }
   ```
2. This is triggered when the user clicks **"No, Thanks"**.  

#### **Installing the App (`installApp` Function)**  
1. Add a function to **trigger the install prompt** when the user clicks **"Yes, Please!"**:  
   ```javascript
   function installApp() {
       hidePrompt(); // Hide the banner after user interaction
       if (installEvent) {
           installEvent.prompt(); // Show the install prompt
           installEvent.userChoice.then(result => {
               if (result.outcome === 'accepted') {
                   console.log('App Installed');
               } else {
                   console.log('App Not Installed');
               }
               installEvent = null; // Reset event after use
           });
       }
   }
   ```
2. **How this works**:  
   - The install UI is **hidden**.  
   - If `installEvent` exists, it calls `installEvent.prompt()` to **display the install prompt**.  
   - The `userChoice` promise resolves to an **object with an `outcome` property**:  
     - `"accepted"` → User installed the app.  
     - `"dismissed"` → User chose not to install.  

#### **Listening for the `appinstalled` Event**  
1. Add an event listener to detect if the app was installed:  
   ```javascript
   window.addEventListener('appinstalled', event => {
       console.log('App Installed Event');
   });
   ```
2. **This event fires when the app is successfully installed**, even if the prompt wasn't manually triggered.  

#### **Final Steps**  
- **Save `main.js`**, then **refresh the page** in Chrome DevTools.  
- The install banner should now **appear only when criteria are met**.  
- Clicking **"Yes, Please!"** will trigger the install prompt, and the result is **logged in the console**.  

This approach makes the **install prompt less intrusive**, allowing users to **install the app when they are ready**! 🚀

### 6.8 Debugging with Chrome DevTools  
#### **Performing a PWA Audit**  
1. **Open Chrome DevTools (`F12` or `Ctrl + Shift + I`)**.  
2. Click on the **Audits (Lighthouse) tab**.  
3. Click the **plus (+) sign** to start a new audit.  
4. Click **Run audits** to analyze the site.  
5. The PWA score should improve—**aiming for 90+**.  

#### **Fixing Common Audit Issues**  

##### **1. HTTPS Requirement (Expected Failure on Localhost)**  
- **Issue:** The audit fails because PWAs must be served over **HTTPS**.  
- **Solution:**  
  - For **testing**, localhost is allowed.  
  - For deployment, use a **secure server (HTTPS)**.  

##### **2. HTTP/2 Server Requirement**  
- **Issue:** The PWA **isn’t using HTTP/2**, affecting performance.  
- **Cause:** The **NetBeans embedded web server** only supports **HTTP/1.1**.  
- **Solution:**  
  - Deploy the site on a server that supports **HTTP/2**.  
  - Common solutions: **Apache, Nginx, Firebase Hosting, Vercel, Netlify**.  

##### **3. Adding `rel="noopener"` to External Links**  
- **Issue:** The audit flags **security concerns** for links opening external pages.  
- **Solution:** Add `rel="noopener"` to **all external links**:  
  ```html
  <a href="https://example.com" rel="noopener">External Link</a>
  ```
- **Steps:**  
  1. Open **`index.html`**.  
  2. Find **all external links** and add `rel="noopener"`.  
  3. **Save and re-run the audit**.  

##### **4. Adding `lang` Attribute for Accessibility**  
- **Issue:** The page **lacks a `lang` attribute**, affecting accessibility.  
- **Solution:** Define the **language of the page** inside the `<html>` tag:  
  ```html
  <html lang="en">
  ```
- **Steps:**  
  1. Open **`index.html`**.  
  2. Locate the `<html>` tag at the top.  
  3. Add `lang="en"` (or the appropriate language).  
  4. **Save and re-run the audit**.  

#### **Re-running the Audit**  
1. Click the **Audits tab** again.  
2. Click **Run audits**.  
3. The **Best Practices score should increase** (likely above 90).  
4. Accessibility improvements should now be **reflected in the score**.  

#### **Final Results**  
- The **PWA score should be excellent** (~90+).  
- Remaining issues (**HTTPS & HTTP/2**) **require deployment** to a production server.  

At this point, the **PWA is optimized**, and **all necessary fixes are in place!** 🚀

### 6.9 More Chrome DevTools  
#### **Exploring the Application Tab**  
1. **Open Chrome DevTools (`F12` or `Ctrl + Shift + I`)**.  
2. Click on the **Application tab** to access PWA-related tools.  

##### **Checking the Manifest**  
1. Click on the **Manifest tab** in DevTools.  
2. Click **"Add to Home Screen"**.  
   - If the UI appears, it confirms that the **install banner is working**.  
   - Since Chrome **doesn’t have a home screen**, clicking **"Yes, Please"** simulates installation.  
   - If you see the **installation prompt**, your PWA is correctly configured.  

##### **Inspecting Service Workers**  
1. Click on the **Service Workers tab**.  
2. **What you can do here:**  
   - **Check if the service worker is running.**  
   - **Manually unregister the service worker** (useful for debugging).  
   - **Enable "Update on reload"**: Forces the service worker to update on every page refresh.  
   - **Stop and restart the service worker** for testing different scenarios.  
3. If the **BeforeInstallPrompt** event fired, it means Chrome detected a valid PWA installation flow.  

##### **Checking Cache Storage**  
1. Click on the **Cache Storage node** in the left panel.  
2. Scroll to the bottom to see **cached files**.  
3. **Refresh the page** to see if updates were stored in cache.  

##### **Clearing Stored Data**  
1. Click on the **Clear Storage tab**.  
2. View details about **site data stored by the PWA**.  
3. Click **"Clear site data"** to **reset all stored cache, service workers, and IndexedDB entries**.  

#### **Using These Tools for Debugging**  
- **Manifest Tab:** Verifies that the PWA metadata (name, icons, theme, etc.) is correct.  
- **Service Workers Tab:** Helps test **installation, activation, and caching behaviors**.  
- **Cache Storage:** Confirms whether static assets are correctly cached.  
- **Clear Storage:** Allows for a **clean slate** when debugging caching issues.  

By using these tools, you can **fine-tune** your PWA and ensure it works seamlessly! 🚀

### 6.10 Debugging with Safari and the iOS Simulator  
#### **Setting Up the iOS Simulator**  
1. **Run the PWA in NetBeans** (if it’s not running already).  
   - This ensures **localhost:8383** is available.  
2. **Open the iOS Simulator** from the Dock.  
   - Let it **boot up** completely.  
3. From the **Hardware menu**, choose **Erase All Content and Settings**.  
   - This **resets the simulator**, giving you a **fresh instance** to test.  

#### **Opening Safari for Debugging**  
1. **Start Safari on the iOS Simulator**.  
2. **Start Safari on your Mac Desktop**.  
3. Resize both windows so you can see them **side by side**.  
4. **Enable the Develop Menu** in Safari on the Mac:  
   - Click **Safari → Preferences**.  
   - Go to the **Advanced tab**.  
   - Check **"Show Develop menu in the menu bar"**.  
   - Close **Preferences**.  

#### **Connecting to the Simulator via Web Inspector**  
1. Click on the **Develop menu** in **Safari (Mac)**.  
2. Locate the **Simulator** device listed.  
3. Choose the **current web address** (e.g., `about:blank`).  
   - This opens **Web Inspector** for the Simulator.  
4. Resize **Web Inspector** so you can view it along with the Simulator.  

#### **Testing the PWA on the iOS Simulator**  
1. In **Safari on the Simulator**, navigate to:  
   ```
   localhost:8383
   ```
2. **Look at Web Inspector** (bottom section).  
   - You should see that the **service worker was registered**.  
   - The **scope should be the entire site**.  

#### **Adding the PWA to the Home Screen**  
1. **Tap the Share button** on the Simulator.  
2. Scroll and **find "Add to Home Screen"**.  
3. Click **Add**.  
4. Safari moves to the background, and the **PWA icon appears on the home screen**.  

#### **Closing Safari & Running the PWA**  
1. **Double-click the Home button** on the Simulator.  
2. Swipe up on Safari to **remove it from the history list**.  
   - This **closes Web Inspector** (don’t worry, we’ll reopen it).  
3. **Tap the PWA icon** on the home screen to launch it.  
4. **Reopen Web Inspector**:  
   - Go to **Develop → iPhone Simulator → localhost** in Safari (Mac).  
   - Click on the **Console tab** to view logs from the service worker.  

#### **Inspecting Service Worker & Cache**  
1. In **Web Inspector**, type `this` in the console and press **Enter**.  
2. Expand **Service Worker Global Scope** to see:  
   - **Cache Name** (e.g., `CSv2`).  
   - **List of Cached Files**.  
3. Expand **Cached Files** to verify all **stored assets**.  

#### **Testing Offline Mode**  
1. **Close the NetBeans Chrome tab** (this **shuts down the localhost server**).  
2. **Remove the PWA from the history list**:  
   - **Double-click Home** → Swipe up to remove the PWA from history.  
3. **Reopen the PWA** from the home screen.  
4. **Check Web Inspector (Safari Mac)**:  
   - The app **loads correctly, even without a network connection**.  
   - This confirms that the **service worker is serving cached files**.  

#### **More Debugging Resources**  
- **Apple’s Web Inspector Tutorial** → [developer.apple.com](https://developer.apple.com)  

This process ensures that your **PWA works on iOS devices**, even when **offline**! 🚀


## 07. Cleaning Up iOS Limitations
### 7.1 What's Missing in the iOS Implementation  

#### **Limitations of PWAs on iOS (As of August 2018)**  

##### **1. Limited Storage for Cached Files**  
- **iOS restricts PWA storage to 50MB** for cached resources.  
- If the **app isn’t used for a few weeks**, iOS **deletes the cache** automatically.  
- The **PWA icon remains**, but resources must be **re-downloaded** when reopened.  

##### **2. No Background Execution**  
- PWAs **cannot run in the background** on iOS.  
- Example:  
  - If a PWA **plays music**, it **stops playing** when it loses focus.  
  - **Push notifications don’t work** because they require background processing.  

##### **3. No Access to Certain Device Features**  
- **Unavailable APIs on iOS:**  
  - **Bluetooth**  
  - **Touch ID / Face ID**  
  - **ARKit** (Augmented Reality)  
  - **Battery information**  
  - **Access to Siri**  
  - **In-app payments (Apple Pay)**  

##### **4. Multiple Instances of the PWA**  
- If a **user installs the PWA from different browsers (e.g., Safari, Chrome, Firefox)**:  
  - Each **creates a separate instance** of the PWA.  
  - **Safari and home screen versions share the Service Worker registration**, but **not the instance**.  
  - **Chrome & Firefox on iOS do not support Service Workers**, so files **won’t be cached**.  

##### **5. No State Persistence**  
- When a **PWA loses focus, all state is lost**.  
- Users **must restart from scratch** when they return.  
- **Workaround:** Developers must manually **store and restore the app state**, which is **not trivial**.  

##### **6. No Support for Key PWA Features**  
- **No install banners** (`beforeinstallprompt` doesn’t fire).  
- **No icon badges** for notifications.  
- **No splash screens or launch images**.  

#### **What iOS PWAs Can Do That Android PWAs Can’t?**  
- **Configuration Profiles for Web Clips**  
  - PWAs can be encapsulated into a **Web Clip Profile**.  
  - Businesses can **send PWAs to employees** as a **configuration profile**.  
  - This allows the **PWA to be installed automatically on the home screen**.  
  - (Requires manual setup; not covered in this course).  

- **User-Defined App Name**  
  - Unlike Android (which takes the `short_name` from the manifest), iOS **allows users to rename** the PWA during installation.  

### 7.2  Web App Install Banner: HTML and CSS  

#### **Adding the Install Instructions UI (`index.html`)**  
1. Open **`index.html`**.  
2. Scroll to the **bottom of the page**, just **below the footer**.  
3. Add the **instructions div** for iOS users:  
   ```html
   <div id="instructions">
       <button onclick="hideInstructions();">X</button>
       <p><img src="apple-touch-icon.png" alt="App Icon"></p>
       <p>Install our app on your Home Screen for Quick Access.</p>
       <p>
           Tap <img src="img/share.png" alt="Share"> then 
           <img src="img/aths.png" alt="Add to Home Screen">
       </p>
   </div>
   ```
4. **How this works:**  
   - **A `div` (`#instructions`)** wraps all elements.  
   - **A close button (`X`)** allows users to dismiss the banner.  
   - **An image (`apple-touch-icon.png`)** displays the app icon.  
   - **A message prompts users to install the PWA**.  
   - **Two images (`share.png`, `aths.png`)** represent the steps (tap Share → Add to Home Screen).  

#### **Styling the Install Instructions (`main.css`)**  
1. Open **`main.css`**.  
2. Add styles for the **instructions container**:  
   ```css
   #instructions {
       text-align: center;
       background-color: #f2f4f4;
       position: fixed;
       bottom: 0;
       right: 20px;
       left: 20px;
       width: calc(100% - 40px);
       padding: 0 10px 10px 10px;
       display: none;
   }
   ```
   - The banner **stays at the bottom** (`position: fixed; bottom: 0;`).  
   - It is **centered with padding** and has a **light gray background (`#f2f4f4`)**.  
   - **`display: none;`** ensures it **only appears on iOS** when conditions are met.  

3. **Style the images (`share` & `add to home screen` icons)**:  
   ```css
   #instructions img {
       max-width: 64px;
   }
   ```
   - Ensures all images are **uniform in size (64px width max)**.  

4. **Style the close button (`X`)**:  
   ```css
   #instructions button {
       position: absolute;
       top: 0;
       right: 0;
       background-color: #264de4;
       color: white;
       border: 1px solid #2965f1;
   }
   ```
   - The button is **positioned in the top-right corner**.  
   - The background color **matches the app’s theme (`#264de4`)**.  
   - Text color is **white**, and the border uses a **lighter blue (`#2965f1`)**.  

### 7.3 Web App Install Banner: Update the Cache  

#### **Temporarily Removing `display: none` for Testing**  
1. Open **`main.css`**.  
2. **Remove `display: none;`** from the `#instructions` div:  
   ```css
   #instructions {
       /* display: none; */ /* Temporarily remove */
   }
   ```
3. **Save the file and refresh the page in Chrome**.  
4. If the **iOS install banner doesn’t appear**, it’s because **the page is cached**.  

#### **Clearing the Cache in Chrome DevTools**  
1. Open **Chrome DevTools (`F12` or `Ctrl + Shift + I`)**.  
2. Go to the **Application tab**.  
3. Click on **Clear Storage** in the left panel.  
4. Click **Clear site data**.  
5. Refresh the page, and the **iOS install banner should now appear**.  

#### **Updating the Service Worker to Cache New Images**  
1. Open **`sw.js`**.  
2. Locate the `cachedFiles` array and **add new image files**:  
   ```javascript
   const cachedFiles = [
       "/img/aths.png",   // Add to Home Screen icon
       "/img/share.png",  // Share button icon
       "/apple-touch-icon.png", // Apple Touch icon
       "/android-chrome-192x192.png" // Android install icon
   ];
   ```
3. **Update the cache name** from `"CSv2"` to `"CSv3"`:  
   ```javascript
   const cacheName = "CSv3";
   ```
   - This **removes the old cache** and forces **installation of the new cache**.  

#### **Testing the New Cache Update**  
1. **Save `sw.js`** and **refresh Chrome DevTools (`F12`)**.  
2. Go to the **Application tab → Clear Storage**.  
3. Click **Clear site data**.  
4. Click on the **Console tab** and clear it.  
5. **Refresh the page twice** to ensure the new cache is being used.  
6. You should now see **fetch requests for the new images**:  
   ```
   Fetching: /apple-touch-icon.png
   Fetching: /img/share.png
   Fetching: /img/aths.png
   Fetching: /android-chrome-192x192.png
   ```

#### **Restoring `display: none;` for iOS-Specific Behavior**  
1. Open **`main.css`**.  
2. **Re-add `display: none;`** to `#instructions`:  
   ```css
   #instructions {
       display: none;
   }
   ```
3. **Save and refresh**.  

### 7.4  Web app install banner: The `window.onload` event  

#### **Criteria for Displaying the Install Instructions**  
We will show the install instructions only if:  

1. **PWAs are supported**.  
2. **The device is running iOS** (`iPhone`, `iPad`, or `iPod`).  
3. **The user hasn’t added the app to the home screen**.  
4. **The instructions haven’t been shown in the last week** (if the user ignored them).  

#### **Checking for PWA Support**  
- Open **`main.js`**.  
- Add a variable to check if PWAs are supported:  
   ```javascript
   let pwaSupport = false;
   ```
- Inside the **service worker registration**, set `pwaSupport` to `true`:  
   ```javascript
   if ("serviceWorker" in navigator) {
       pwaSupport = true;
   }
   ```

#### **Handling the `window.onload` Event**  
- Scroll to the **bottom** of `main.js` and add the following:  
   ```javascript
   window.onload = function () {
       if (!pwaSupport) return; // Exit if PWAs are not supported

       let p = navigator.platform; // Get the platform name
       
       // Check if the device is an iPhone, iPad, or iPod
       if (p === "iPhone" || p === "iPad" || p === "iPod") {

           // Check if the app is already running in standalone mode
           if (!navigator.standalone) {

               // Retrieve the last time the instructions were shown
               let lastShown = parseInt(localStorage.getItem("lastShown"), 10);
               let now = new Date().getTime(); // Get current timestamp

               // If instructions have never been shown OR it's been over a week, show them
               if (isNaN(lastShown) || (lastShown + (1000 * 60 * 60 * 24 * 7)) <= now) {
                   document.getElementById("instructions").style.display = "block";

                   // Store the current timestamp to track when instructions were last shown
                   localStorage.setItem("lastShown", now);
               }
           }
       }
   };
   ```

#### **Adding the `hideInstructions()` Function**  
- Add this function to **hide the instructions when the user clicks "X"**:  
   ```javascript
   function hideInstructions() {
       document.getElementById("instructions").style.display = "none";
   }
   ```

#### **How This Works**  
- ✔️ Checks if the browser **supports PWAs**.  
- ✔️ Detects if the **device is iOS**.  
- ✔️ Ensures the app **is not already added to the home screen**.  
- ✔️ **Prevents annoying users** by showing the instructions **only once per week**.  
- ✔️ Allows users to **dismiss the banner**, hiding it instantly.  

#### **Final Steps for Testing**  
1. Save **`main.js`** and refresh the page.  
2. If testing in **Chrome**, temporarily remove `display: none;` from **`#instructions`** in `main.css`.  
3. If testing in **iOS Safari**, open DevTools via Safari’s **Develop menu**.  
4. Try **ignoring the banner** and reloading after a week (or temporarily change `7` to `0.01` days for quicker testing).  

Now, the **install banner is working exactly as expected!** 🚀

### 7.5 Demonstrating the Web App Install Banner  

#### **Resetting the Simulator and Loading the PWA**  
1. **Start the iOS Simulator** from the desktop.  
2. From the **Hardware menu**, choose **Erase All Contents and Settings**.  
3. Click **Erase** to ensure we get a **non-cached version** of the app.  
4. Start **Safari** in the simulator.  
5. Load the PWA by navigating to:  
   ```
   localhost:8383
   ```
6. You should now see the **install instructions** appear at the bottom of the simulator.  

#### **Inspecting the Service Worker in Safari**  
1. Start **Safari on the desktop**.  
2. From the **Develop menu**, open the **Service Worker Web Inspector**.  
3. Locate the **Simulator entry**, then select **Localhost for the Service Worker**.  
4. In the **input field**, type:  
   ```
   this
   ```
   - Expand the **Service Worker node**.  
   - Scroll down to verify the **cache has been updated to version 3**.  
   - Ensure that all **new files** added to `cachedFiles` are properly cached.  

#### **Checking Local Storage for Install Banner Timing**  
1. From the **Develop menu**, open the **Simulator Webpage Web Inspector**.  
2. Click on the **Storage tab**.  
3. Select **Local Storage**.  
4. Verify that there is a **value for `lastShown`**, which controls how often the instructions are displayed.  

#### **Testing the Install Banner Dismissal**  
1. Close both **Web Inspectors**.  
2. Go back to the **Simulator** and click the **"X"** to dismiss the install instructions.  
3. **Reload the page**.  
4. The **install instructions should NOT reappear** because they are only shown **once per week**.  

#### **Testing Installation from the Home Screen**  
1. Add the **app to the home screen**:  
   - Tap the **Share button**.  
   - Select **Add to Home Screen**.  
   - Click **Add**.  
   - The **Safari browser will close**, and the **app icon will appear on the home screen**.  
2. Click the **Home button**.  
3. Double-click the **Home button** to access the **history list** (this step may require multiple attempts).  
4. Swipe back to the page where the app was added.  
5. Tap the **app icon to launch it**.  

#### **Verifying the Install Banner Logic**  
- The **install instructions should NOT appear** when launching from the home screen.  
- This confirms that the **standalone mode check worked correctly**.  
- The condition in our code that **prevents displaying instructions if the app is already installed** was successfully met.  

Now, the **install banner logic is fully functional!** 🚀

### 7.6 Launch Images and Splash Screens  
#### **iOS and Splash Screens**  
- Unlike **Android**, which generates a splash screen using the **icon and theme color** from the manifest, **iOS requires specific images** for different devices.  
- iOS **does not** generate splash screens automatically from the manifest.  

#### **Image Requirements**  
- iOS requires **static launch images** for different screen sizes.  
- You can find the required image sizes on **Apple’s Human Interface Guidelines**.  
- These images must match **predetermined device dimensions**.  
- Landscape mode requires **swapping the width and height** for a separate set of images.  

#### **Adding the Splash Screen Images**  
1. **Download and unzip the `iOS_splash.zip` file** (from the exercise files).  
2. **Copy all images**:  
   - Open the unzipped folder.  
   - Select all images (`Shift + Select`).  
   - Right-click and choose **Copy**.  
3. **Paste them into the site root** in **NetBeans**.  

#### **Adding Media Queries for Splash Screens**  
- iOS uses **media queries** to target specific devices.  
- Instead of manually typing them (which is error-prone), use a **pre-prepared file** for efficiency.  
- This method was documented by **Chris Coyier (CSS-Tricks) and Dave Hudson (Medium.com)**.  

#### **Inserting the Media Queries in `index.html`**  
1. **Open `iOS_splash.txt`** in a text editor.  
2. **Copy all the media query `<link>` elements**:  
   - Use `Cmd + A` (Mac) or `Ctrl + A` (Windows) to select all.  
   - Use `Cmd + C` or `Ctrl + C` to copy.  
3. **Paste them into `index.html`**:  
   - Open `index.html` in **NetBeans**.  
   - Paste the media queries **just before the closing `</head>` tag**.  
   - Save the file.  

#### **Understanding a Sample Media Query**  
```html
<link rel="apple-touch-startup-image" 
      href="splash-640x1136.png" 
      media="(device-width: 320px) 
             and (device-height: 568px) 
             and (-webkit-device-pixel-ratio: 2)">
```
- `rel="apple-touch-startup-image"` → Defines an **iOS startup image**.  
- `href="splash-640x1136.png"` → Points to the **specific splash image**.  
- `media="..."` → **Targets a specific device screen size and resolution**.  

#### **Supporting Landscape Mode**  
- Create **separate images** with **swapped width and height**.  
- Update the media queries to **specify `orientation: landscape`**.  

Now, **iOS splash screens are fully configured**! 🚀

### 7.7 Demonstrating Launch Images  
#### **Testing the Launch Images in the iOS Simulator**  
1. **Reset the Simulator**:  
   - Open the **iOS Simulator**.  
   - Go to **Hardware → Erase All Content and Settings**.  
   - Click **Erase** and wait for the reset to complete.  

2. **Launch Safari and Open the PWA**:  
   - Start **Safari** in the simulator.  
   - Navigate to the PWA:  
     ```
     localhost:8383
     ```
   - **Dismiss the install instructions** (if shown).  

3. **Add the PWA to the Home Screen**:  
   - Tap the **Share** button.  
   - Select **Add to Home Screen**.  
   - Click **Add** to install the app on the home screen.  

4. **Launch the App from the Home Screen**:  
   - Press the **Home button**.  
   - **Double-tap** the Home button to access the history list.  
   - **Close Safari** to simulate a fresh app launch.  
   - Swipe back to the home screen where the **PWA icon is located**.  
   - **Tap the icon** to launch the app.  

#### **Verifying the Splash Screen**  
- The **splash screen should appear** before loading the app. 🎉  
- This confirms that **iOS is using the pre-defined splash images** from `index.html`.  
- The **app now has a proper startup experience**, making it feel more like a native app.  

#### **Issue: Multiple Instances of the PWA**  
1. **Try adding the PWA again**:  
   - Open **Safari**.  
   - Navigate to the PWA.  
   - Tap **Share → Add to Home Screen**.  
   - Click **Add**.  

2. **Problem: Two Identical PWA Icons Appear**  
   - iOS **does not recognize** that the PWA is already installed.  
   - This results in **duplicate instances** of the app on the home screen.  
   - Each instance **shares the service worker registration** but **runs separately**.  

#### **Impact of Multiple Instances**  
- **User Confusion**:  
  - Users may not realize they are launching a **new instance** instead of the existing one.  
- **Caching Issues**:  
  - Since service workers are shared, **each instance may use outdated cached files**.  
- **No Push Notifications**:  
  - iOS **does not support push notifications** for PWAs, so instance conflicts matter less.  

#### **Conclusion**  
- The **launch images work perfectly** on iOS! 🚀  
- However, **Apple has not addressed the duplicate instance issue**.  
- Until iOS **provides better PWA support**, users may accidentally **install multiple copies** of the same PWA.

## 08. Notifications and Push APIs
### 8.1 Introduction to Notifications  

#### **What Are Push Notifications?**  
- **Push notifications** have been a core feature of **native mobile apps** for years.  
- They **reengage users** by delivering messages **outside the app’s UI**.  
- Common **notification types**:  
  - **Sound, beep, or vibration**.  
  - **Badge or icon updates**.  
  - **Pop-up notification dialogues**.  
  - **Clickable messages** that open the app.  

#### **Web Push Notifications vs. Native Notifications**  
- **Web push notifications** aim to **replicate** this functionality in **Progressive Web Apps (PWAs)**.  
- They are delivered **even if the PWA is not currently open**.  
- **Major APIs used**:  
  - **Notifications API** – Displays messages.  
  - **Push API** – Handles push messaging from a server.  

#### **iOS Limitations**  
- **No support for push notifications** in **PWAs on iOS**.  
- This discussion will focus **only on Chrome and Android**.  
- Chrome on Android **does not support the Notifications API directly** but does **support push via the Push API**.  

#### **Key Terminology**  
1. **Notification** – A message displayed outside the app's UI.  
2. **Push Message** – A message sent from a **server** to **registered clients**.  
3. **Push Notification** – A **notification triggered** by a received push message.  

#### **Steps to Implement Push Notifications in a PWA**  
1. **Create and display notifications** using the **Notifications API**.  
2. **Set up a push messaging service** (Google **Firebase** will be used).  
3. **Write a script** to send push messages to clients (using **Node.js** and the Mozilla **Web Push library**).  
4. **Listen for push messages** and display notifications when a message arrives.  

Sounds good? **Let’s get started!** 🚀

### 8.2 Requesting Permission to Show Notifications  

#### **Why Do We Need Permission?**  
- Before a **PWA** can show notifications, **users must grant permission**.  
- This step ensures **user privacy** and prevents **unwanted notifications**.  
- **Three possible responses** from the user:  
  - ✅ **Granted** – Notifications are **allowed**.  
  - ❌ **Denied** – Notifications are **blocked**.  
  - ❓ **Default** – User dismissed the prompt (no choice made).  

#### **Where to Add the Permission Request Code**  
1. **Open `main.js`** in NetBeans.  
2. Find the line where we **log the service worker scope** in the console.  
3. **Add the following code below it** to check if notifications are supported.  

#### **Checking Notification Support**  
```javascript
if ("Notification" in window) {
    console.log("Notifications supported");

    // Request permission from the user
    Notification.requestPermission().then(status => {
        console.log("Notification Status: " + status);
    });
}
```
- **`"Notification" in window`** → Ensures that the **Notifications API** is available.  
- **`requestPermission()`** → Asks the user for notification permission.  
- **`then(status => {...})`** → Handles the response (`granted`, `default`, or `denied`).  

#### **Testing in Chrome**  
1. **Save `main.js`** and open **Chrome**.  
2. **Clear cached files**:  
   - Go to **Application tab** in DevTools.  
   - Click **Clear Storage** → **Clear Site Data**.  
3. **Open the Console** and refresh the page.  
4. **A notification prompt appears** with three options:  
   - 🟢 **Allow** → Notifications are enabled.  
   - 🔴 **Block** → Notifications are disabled.  
   - ❌ **Dismiss (X)** → No choice is made (default).  

#### **Verifying the User's Choice**  
- If you **click Allow**, the console logs:  
  ```
  Notifications supported
  Notification Status: granted
  ```
- If you **click Block**, the console logs:  
  ```
  Notifications supported
  Notification Status: denied
  ```
- If you **dismiss (X)** without choosing, the console logs:  
  ```
  Notifications supported
  Notification Status: default
  ```

#### **Changing Notification Settings in Chrome**  
- To **reset permissions**:  
  1. Click the **Info (🔵) icon** in the address bar.  
  2. Find **Notifications** settings.  
  3. Change it to **Ask (Default)** and reload the page.  
  4. Chrome **re-prompts** for permission.  
  5. Choose **Allow** so we can proceed with sending notifications.  

### 8.3 Displaying a Notification  

#### **Adding the `notify` Function**  
1. **Open `main.js`** in NetBeans.  
2. **Add a `notify` function** below the service worker registration.  

#### **Creating the `notify` Function**  
```javascript
function notify(title) {
    // Ensure notification permission is granted
    if (Notification.permission === "granted") {
        // Wait until the service worker is ready
        navigator.serviceWorker.ready.then(reg => {
            reg.showNotification(title);
        });
    }
}
```
- **`Notification.permission === "granted"`** → Ensures the user has allowed notifications.  
- **`navigator.serviceWorker.ready.then(reg => {...})`** → Waits for the service worker to be ready.  
- **`reg.showNotification(title)`** → Displays a **basic notification** with the given `title`.  

#### **Calling `notify` When Permission is Granted**  
1. **Find the section in `main.js`** where notification permission is requested.  
2. **Add a call to `notify()` after permission is granted**:  

```javascript
Notification.requestPermission().then(status => {
    console.log("Notification Status: " + status);
    
    if (status === "granted") {
        notify("NCC Computer Science");
    }
});
```

#### **Testing in Chrome**  
1. **Save `main.js`**.  
2. **Clear cached files**:  
   - Open **DevTools** → **Application tab** → **Clear Storage** → **Clear Site Data**.  
3. **Enable Service Worker auto-update**:  
   - In the **Service Workers tab**, check ✅ **Update on Reload**.  
4. **Refresh the page** → A notification should pop up!  

#### **Confirming in the Console**  
- Open **Chrome DevTools** → **Console**  
- You should see messages:  
  ```
  Notifications supported
  Notification Status: granted
  ```

#### **Modifying `main.js` to Test Background Notifications**  
- **Make a small change** (e.g., add a comment or extra semicolon).  
- **Save the file** → **Notification should appear even if Chrome is in the background**.  

#### **Key Takeaways**  
✅ **Notifications appear even when the PWA is inactive**.  
✅ **`showNotification()` works through the service worker**.  
✅ **NetBeans auto-reloads changes, making testing easy**.  

🔥 **Next step: Adding more details to notifications!** 🚀

### 8.4 **Adding Data to a Notification**  
#### **Updating the Notification Request**  
1. **Open `main.js`** in NetBeans.  
2. **Modify the conditional where notification permission is granted** by creating an `options` object before calling `notify()`.  

#### **Creating an `options` Object**  
```javascript
var options = {
    body: "See What's New.",  // Extra text in the notification
    icon: "android-chrome-192x192.png",  // Image for the notification
    data: { 
        timestamp: Date.now(),  // Stores when the notification was triggered
        loc: "index.html#info"  // Directs the user to the news section
    },
    actions: [ 
        { 
            action: "go",  
            title: "Go Now"  // Button text in the notification
        } 
    ]
};
```
- **`body`** → Displays extra text.  
- **`icon`** → Displays a relevant image.  
- **`data`** → Stores metadata (timestamp & navigation target).  
- **`actions`** → Creates an interactive button labeled **"Go Now"**.  

#### **Passing the Options to `notify()`**  
Modify the existing `notify()` call:  
```javascript
notify("NCC Computer Science", options);
```

#### **Modifying the `notify` Function**  
Update `notify()` to accept `options` as a parameter:  
```javascript
function notify(title, options) {
    if (Notification.permission === "granted") {
        navigator.serviceWorker.ready.then(reg => {
            reg.showNotification(title, options);
        });
    }
}
```
- **`showNotification(title, options)`** → Now accepts both the title and options.  

#### **Testing in Chrome**  
1. **Save `main.js`**.  
2. **Clear Cache:**  
   - **DevTools → Application tab → Clear Storage → Clear Site Data**.  
3. **Enable Service Worker Auto-update:**  
   - **DevTools → Application tab → Service Workers → Check ✅ "Update on Reload"**.  
4. **Refresh the Page** → The notification should now include:  
   ✅ Title  
   ✅ Icon  
   ✅ "See What's New" message  
   ✅ Interactive **"Go Now"** button  

### 8.5 **Closing a Notification**  

#### **Handling Notification Close in the Service Worker**  
- Service workers run separately from the web app.  
- Notifications appear even when the app is inactive, so events should be handled inside `sw.js`.  
- The `notificationclose` event fires when a user dismisses/swipes away a notification.

#### **Adding a Function to Handle Notification Close**  
Modify `sw.js` to include a function that logs user interaction and closes the notification:  
```javascript
function closeNotification(message, event) {
    console.log(message, event.notification.data);
    event.notification.close();  // Closes the notification
}
```
- Logs when the notification is closed.  
- Accesses `event.notification.data` to track stored info.  
- Calls `.close()` to remove the notification.

#### **Listening for the `notificationclose` Event**  
Add an event listener inside `sw.js`:  
```javascript
self.addEventListener("notificationclose", (event) => {
    closeNotification("Notification closed:", event);
});
```
- Listens for the `notificationclose` event.  
- Calls `closeNotification()` when a notification is dismissed.

#### **Testing in Chrome**  
1. **Save `sw.js`.**  
2. **Clear Cache:**  
   - Open **DevTools → Application → Clear Storage → Click "Clear Site Data".**  
3. **Enable Service Worker Auto-update:**  
   - Open **DevTools → Application → Service Workers → Check "Update on Reload".**  
4. **Refresh the Page** and then close a notification.  
5. **Open Console (DevTools → Console)** → You should see:  
   ```
   Notification closed: {timestamp: 1700000000000, loc: "index.html#info"}
   ```

### 8.6 **Handling the Notification Click Event**  

#### **Setting Up the Click Event Listener**  
- Users may interact with a notification in different ways.  
- Clicking an action button is platform-dependent, so all clicks should be handled the same way (except closing).  
- The **goal** is to navigate the PWA to the `loc` (location) stored in the notification data.

#### **Adding the `notificationclick` Event Listener**  
Inside `sw.js`, add an event listener:  
```javascript
self.addEventListener("notificationclick", (event) => {
    if (event.action !== "close") {
        event.waitUntil(
            self.clients.matchAll({ type: "window", includeUncontrolled: true })
                .then((allClients) => {
                    console.log("Matching clients:", allClients);
                    for (let i = 0; i < allClients.length; i++) {
                        if (allClients[i].visibilityState === "visible") {
                            console.log("Navigating to:", event.notification.data.loc);
                            allClients[i].navigate(event.notification.data.loc);
                            break; // Stop after finding the first visible client
                        }
                    }
                })
        );
    }
    closeNotification("Notification clicked:", event);
});
```

#### **How It Works**  
- **Checks if the action is NOT "close".**  
- **Uses `self.clients.matchAll()`** to find all service worker-controlled windows.  
- **Filters for visible clients** and calls `navigate()` to update the page.  
- **Calls `closeNotification()`** to close the notification.

####  **Adding New Content for Testing**
Since our PWA is **a single-page app**, cached content will not update unless the service worker is refreshed.  
To test, add new content to `index.html` inside the metadata section:

#### **Modifying `index.html`**
```html
<h3>Metadata</h3>
<h4>&nbsp;&nbsp;<a href="https://insights.stackoverflow.com/survey/2018#technology" target="_blank" rel="noopener">Most Popular Languages</a></h4>
```

#### **Forcing the Service Worker to Refresh Cache**  
- Change the **cache name** in `sw.js` (e.g., `"CSv4"` instead of `"CSv3"`):  
```javascript
var cacheName = "CSv4";
```
- Save `sw.js`, reload the PWA, and clear storage if needed (`Application → Clear Site Data` in DevTools).

### 8.7 **Push Messaging Overview**  

#### **Why Push Messaging Matters**  
- So far, **notifications** only work when the user **is actively using the PWA**.  
- The **Push API** allows sending notifications **even when the app is closed**.  

#### **How Push Notifications Work**  
1. **User Accesses the PWA**  
   - The PWA **requests notification permissions** using the **Push Manager’s `subscribe()` method**.  
2. **User Grants Permission**  
   - A **subscription object** is created and stored.  
3. **A Push Message is Sent**  
   - A **POST request** is made (from an app server or another service) to a **push messaging service**.  
4. **The Push Message is Delivered**  
   - The **push messaging service** forwards the message to the **user's device** using the stored subscription data.  
5. **The Service Worker Handles the Push Event**  
   - The **PWA wakes up (if needed)** and routes the push event to the **service worker**.  
6. **User Clicks the Notification**  
   - If the user **clicks**, the `notificationclick` event fires, opening the app and navigating to the correct page.  

### 8.8 **Adding Firebase Cloud Messaging to the Project**  

#### **Setting Up Firebase Cloud Messaging (FCM)**
1. **Go to the Firebase Console:**  
   - Visit **[console.firebase.google.com](https://console.firebase.google.com/)**  
   - Click **"Add Project"**  

2. **Create a New Firebase Project:**  
   - Give your project a name (**e.g., LinkedInLearning PWA**)  
   - Accept the **Terms & Conditions**  
   - Click **"Create Project"**  

3. **Access Cloud Messaging Settings:**  
   - Once created, click **"Continue"** to open the Firebase Console  
   - Click the **Settings (gear icon) → Project Settings**  
   - Select the **Cloud Messaging** tab  

4. **Copy the Sender ID:**  
   - Locate the **Sender ID**  
   - Click the **Copy icon**  

#### **Updating the Web App Manifest**  
1. **Open `manifest.json` in NetBeans**  
2. **Add the `GCM Sender ID` field**  
   - Place it **after the `start_url` property**  
   - Use the **copied sender ID**  

```json
{
  "start_url": "index.html",
  "gcm_sender_id": "YOUR_SENDER_ID"
}
```

3. **Save the file**  

### 8.9 **Subscribing to Push Messaging**

#### **Modifying `main.js` to Subscribe Users**
1. **Disable the old notification permission request**  
   - Open **`main.js`**  
   - Locate the **notification object detection conditional** inside the service worker registration  
   - **Comment out** the block of code  

2. **Call `subscribeToPush` Function**
   - Just **above** the commented-out code, call the new function:  
   ```javascript
   subscribeToPush();
   ```

3. **Write the `subscribeToPush` Function**
   - Scroll to the bottom of `main.js` and define the function:
   ```javascript
   function subscribeToPush() {
       navigator.serviceWorker.ready.then(function(registration) {
           // Reference PushManager and subscribe user
           return registration.pushManager.subscribe({
               userVisibleOnly: true  // Ensures only visible notifications
           });
       }).then(function(subscription) {
           // Log subscription data
           console.log("User Subscribed:", JSON.stringify(subscription));
           console.log("Endpoint:", subscription.endpoint);
       }).catch(function(error) {
           console.log("Subscription failed:", error);
       });
   }
   ```

#### **Testing in Chrome**
1. **Reset Notification Permissions:**
   - Click the **info icon** (🔍) in the address bar  
   - Change **Notifications** permission to **"Ask"**  
   - Close the window  

2. **Refresh and Allow Push:**
   - Reload the PWA  
   - Click **"Allow"** on the push notification prompt  
   - Open **DevTools → Console**  
   - You should see the **subscription JSON object** logged  

### 8.10 **Handling Push Notifications**

#### **Adding a Push Event Listener in `sw.js`**
1. **Open `sw.js`** in your editor
2. **Add the push event listener** at the bottom of the file:
   ```javascript
   self.addEventListener("push", function(event) {
       console.log("Push message received");

       // Define the notification options
       const options = {
           body: "See What's New!",
           icon: "android-chrome-192x192.png",
           data: {
               timestamp: Date.now(),
               loc: "index.html#info"
           },
           actions: [
               { action: "go", title: "Go Now" }
           ]
       };

       // Display the notification
       event.waitUntil(
           self.registration.showNotification("NCC Computer Science", options)
       );
   });
   ```

#### **Explanation of the Code**
- **`self.addEventListener("push", function(event) {...})`**  
  - Listens for **push events** sent to the service worker
- **Logging the received push event**  
  - `console.log("Push message received");`
- **Setting up the notification options**  
  - `body`: The message inside the notification  
  - `icon`: Uses a 192x192 PNG image for the notification  
  - `data`: Stores extra details like a timestamp and target location  
  - `actions`: Adds a "Go Now" button for user interaction  
- **Using `event.waitUntil`**  
  - Ensures the push notification appears even if the PWA is closed  
  - Uses `self.registration.showNotification(title, options)`

#### **Testing the Push Notification**
1. **Save `sw.js`**
2. **Refresh your PWA**
3. **Use DevTools → Application → Service Workers**
   - Click **"Push"** under the **"Push"** section  
   - A notification should appear  
4. **Try clicking the notification**
   - If no redirection happens, ensure your `notificationclick` handler is set up correctly (covered next)

### 8.11 **Sending a Tickle Using cURL**

#### **Understanding the Process**
A **tickle** is a **push notification** that re-engages users by sending a **silent push message** to their browser. We’ll use **cURL** to send a **POST request** to the Firebase endpoint with the required headers.

#### **Step 1: Get the Subscription Endpoint**
- Open **Chrome DevTools** (`F12` or `Ctrl + Shift + I`).
- Go to **Console** and find the **Subscription Object** printed when the user subscribed to push notifications.
- **Copy the `endpoint` URL** from the `subscription` object:
  - Right-click on the **endpoint URL**.
  - Select **Copy Link Address**.

#### **Step 2: Get the Firebase Server Key**
- Open **Firebase Console**: [Firebase Console](https://console.firebase.google.com/)
- Navigate to **Project Settings** (`⚙` icon at the top left).
- Click on **Cloud Messaging**.
- Copy the **Server Key**.

#### **Step 3: Construct the cURL Command**
For **Chrome**, the **cURL** command should include:
- **The endpoint URL** from the subscription.
- **The Firebase Server Key** in the `Authorization` header.
- **A `POST` request** with required headers.

##### **Example cURL Command for Chrome**
```sh
curl -X POST "<SUBSCRIPTION_ENDPOINT>" \
  --header "TTL: 60" \
  --header "Content-Length: 0" \
  --header "Authorization: key=<YOUR_FIREBASE_SERVER_KEY>"
```
- Replace `<SUBSCRIPTION_ENDPOINT>` with the copied endpoint.
- Replace `<YOUR_FIREBASE_SERVER_KEY>` with the server key from Firebase.

#### **Step 4: Send the Push Notification**
- **Open a Terminal** (`Command Prompt` on Windows or `Terminal` on Mac/Linux).
- **Paste the cURL Command** (`Ctrl + V` or `Command + V`).
- **Press `Enter`** to send the push notification.

#### **Step 5: Verify the Notification in Chrome**
- The notification should **appear on the screen**.
- Open **DevTools** (`F12` → Console) and check the logs.
- If successful, you’ll see:
  ```
  Push message received
  ```

#### **Sending a Push Notification to Firefox**
For **Firefox**, **omit the `Authorization` header**, as Mozilla uses a different push service.

##### **Example cURL Command for Firefox**
```sh
curl -X POST "<FIREFOX_SUBSCRIPTION_ENDPOINT>" \
  --header "TTL: 60" \
  --header "Content-Length: 0"
```
- **Firefox’s endpoints** start with:
  ```
  https://updates.push.services.mozilla.com
  ```

#### **Steps for Firefox**
- Open **Firefox** and navigate to `localhost:8383` to load the PWA.
- **Allow Notifications** when prompted.
- Open **Web Console** (`Ctrl + Shift + K` or `Cmd + Shift + K`).
- **Copy the `endpoint` URL** from the subscription.
- Paste it into the cURL command **without** the Firebase Server Key.
- Run the cURL command in **Terminal**.
- The push notification should appear in Firefox.

### 8.12 **Sending Data in a Push Message**  

#### **Understanding Push Message Payloads**  
Push notifications can include **additional data** in the form of a **payload**. This allows us to send:  

- **Personalized messages** (e.g., "You have a new email from John")  
- **Dynamic content updates** (e.g., "New blog post available!")  
- **Targeted actions** (e.g., "Check out the latest course in your program")  

However, **sending data in push messages requires encryption** for security. Instead of manually handling encryption, we can use **Mozilla’s Web Push library**, which simplifies the process.  

#### **Step 1: Update the Service Worker**  

We need to modify our **push event handler** inside `sw.js` to handle incoming **push message data**.  

##### **Modify `sw.js` to Extract and Display the Payload**  

1. **Open** `sw.js` in your editor.  
2. **Locate** the `self.addEventListener("push", ... )` function.  
3. **Update it** to extract the payload from the event.  

##### **Updated `sw.js` Code**  
```javascript
self.addEventListener("push", function (event) {
    console.log("Push message received");

    let data = {};
    if (event.data) {
        data = event.data.json(); // Parse incoming JSON data
    }

    const options = {
        body: data.body || "Default message body",
        icon: "android-chrome-192x192.png",
        data: {
            url: data.url || "index.html"
        },
        actions: [
            { action: "open", title: "View" }
        ]
    };

    event.waitUntil(
        self.registration.showNotification(data.title || "New Notification", options)
    );
});
```

### 8.13 **Installing Mozilla's Web Push Library**  

#### **Step 1: Install Node.js**  
Before installing Mozilla's **Web Push Library**, you need **Node.js**. Node allows JavaScript to run outside the browser, making it possible to send push messages from a **server or terminal**.  

1. **Download Node.js (LTS Version)**  
   - Visit [**nodejs.org**](https://nodejs.org/)  
   - Click on the **LTS (Long-Term Support) version** for your operating system.  
   - Run the installer and follow the on-screen instructions.  

2. **Verify Node.js Installation**  
   - Open a **terminal (Mac/Linux) or command prompt (Windows)**.  
   - Run the following command to check the installed version:  
     ```sh
     node -v
     ```
   - Expected output (your version may differ):  
     ```
     v16.13.0
     ```

3. **Verify NPM Installation**  
   - Node.js comes with **NPM (Node Package Manager)**. Check the version by running:  
     ```sh
     npm -v
     ```
   - Expected output:  
     ```
     8.1.0
     ```

#### **Step 2: Install Mozilla’s Web Push Library**  

1. **Open a terminal or command prompt**.  
2. **Run the following command** to install the library globally:  
   ```sh
   npm install -g web-push
   ```
   _(On Mac/Linux, you may need to prepend `sudo` to run as administrator)_  
   ```sh
   sudo npm install -g web-push
   ```
3. **Verify the installation**:  
   ```sh
   web-push --help
   ```
   If the installation was successful, you will see help documentation for **web-push commands**.

#### **Step 3: Install Locally (Optional)**  
If you want to install the **Web Push Library** inside a specific project instead of globally:  

1. **Navigate to your project folder**:  
   ```sh
   cd /path/to/your/project
   ```
2. **Run the local install command**:  
   ```sh
   npm install web-push --save
   ```
   This will create a **node_modules** folder and add `web-push` as a dependency inside **package.json**.


### 8.14 **Modifying the Push Event Handler**  

#### **Step 1: Retrieve Data from the Push Event**  
The **push event listener** should be modified to **extract data** from the event object when a push message is received. The **data payload** contains a **loc (location)** parameter, indicating where the new content is displayed in the PWA.  

1. **Open `sw.js` (Service Worker file)**.  
2. **Modify the push event listener** to check for data and store it in a variable.  

#### **Step 2: Implement the Push Event Listener**  
Add the following code inside `sw.js`:  

```javascript
self.addEventListener("push", function (evt) {
    console.log("Push message received");

    // Step 1: Create a variable to store the location data
    var loc;

    // Step 2: Check if there is data in the event
    if (evt.data) {
        console.log("Data received:", evt.data.text());  // Log received data
        loc = evt.data.text();  // Assign received data to loc variable
    } else {
        // Step 3: Default location if no data is received
        loc = "index.html#info";
    }

    // Step 4: Configure Notification Options
    const options = {
        body: "New content is available!",
        icon: "android-chrome-192x192.png",
        data: { loc: loc },  // Store loc in notification data
        actions: [{ action: "go", title: "Go Now" }]
    };

    // Step 5: Show Notification
    evt.waitUntil(
        self.registration.showNotification("PWA Update", options)
    );
});
```

#### **Step 3: Explanation of Code Changes**  
- **Check if `evt.data` exists**  
  - `evt.data.text()` extracts the **plain text payload** from the push message.  
  - If **data is present**, store it in `loc`.  
  - If **no data is received**, set `loc` to a default section (`index.html#info`).  

- **Store the `loc` value in the notification options**  
  - The **data property** inside `options` stores `loc`.  
  - This will allow the **click event** to access it when the user interacts with the notification.  

### 8.15 **Modifying the Notification Click Event**  

#### **Handling the Notification Click Event**  
- The **notification click event** should wake up the app if it’s not active.  
- If the app is open, it should **navigate to the correct location** in the PWA.  
- If the app is **not open**, a **new window** should open to display the content.  

#### **Updating the Notification Click Event Handler**  
Modify the **notification click event** inside `sw.js` (Service Worker file):

```javascript
self.addEventListener("notificationclick", function (evt) {
    console.log("Notification clicked");

    // Extract the location from the notification data
    const loc = evt.notification.data.loc;

    // Retrieve all open clients (browser windows/tabs)
    evt.waitUntil(
        self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(function (allClients) {
            console.log("All clients:", allClients);

            let matchingClient = null;

            // Check if any open client (tab) is already visible
            for (let i = 0; i < allClients.length; i++) {
                if (allClients[i].visibilityState === "visible") {
                    matchingClient = allClients[i];
                    console.log("Navigating to:", loc);
                    matchingClient.navigate(loc);
                    break;
                }
            }

            // If no open tab was found, open a new window
            if (!matchingClient) {
                console.log("Opening new window:", loc);
                return self.clients.openWindow(loc);
            }
        })
    );

    // Close the notification after click
    evt.notification.close();
});
```

#### **How It Works**  
- **Step 1:** Extract `loc` (target location) from the notification payload.  
- **Step 2:** Check for open browser tabs using `clients.matchAll()`.  
- **Step 3:** If an **active tab** is found, navigate to the location.  
- **Step 4:** If **no open tab exists**, open a **new browser window**.  
- **Step 5:** Ensure the notification **closes after clicking**.  

#### **Expected Behavior**  
✅ **If the PWA is already open:** Navigate to the correct page.  
✅ **If the PWA is NOT open:** Open a new window and load the content.  

### 8.16 **Creating the Web Push Script**  

#### **Setting Up the Push Script**  
To send **push notifications**, we need to create a **Node.js script** that will:  
1. **Use the Web Push Library** to send notifications.  
2. **Retrieve the Push Subscription Data** from the browser.  
3. **Send a Notification** with a **payload** (custom message or URL).  

#### **Step 1: Create a JavaScript File**  
- Create a new file called **`push.js`** in the **root** directory of the project.  
- Open the file and add the following code:  

```javascript
// Import the web-push library
const webPush = require("web-push");

// Store the subscription data from the browser
const pushSub = {
    endpoint: "PASTE_YOUR_ENDPOINT_HERE",
    keys: {
        p256dh: "PASTE_YOUR_P256DH_KEY_HERE",
        auth: "PASTE_YOUR_AUTH_KEY_HERE"
    }
};

// Define push message options
const options = {
    TTL: 60, // Time to live (TTL) in seconds
    vapidDetails: {
        subject: "mailto:your-email@example.com",
        publicKey: "PASTE_YOUR_VAPID_PUBLIC_KEY_HERE",
        privateKey: "PASTE_YOUR_VAPID_PRIVATE_KEY_HERE"
    }
};

// Define the payload message
const payload = "index.html#programs";

// Send the push notification
webPush.sendNotification(pushSub, payload, options)
    .then(() => console.log("Push Notification Sent!"))
    .catch(err => console.error("Error sending push notification", err));
```

#### **Step 2: Retrieve Push Subscription Data**  
1. **Get the `endpoint`, `p256dh`, and `auth` keys** from the browser console:  
   - Open **Chrome DevTools** (`F12` or `Ctrl + Shift + I`).  
   - Run `JSON.stringify(subscription)` in the console after subscribing.  
   - Copy and paste the values into `push.js`.  

2. **Get Firebase VAPID Keys** (for Chrome push messages):  
   - Go to **Firebase Console** → **Project Settings** → **Cloud Messaging**.  
   - Copy the **VAPID Public and Private Keys** and paste them into `push.js`.  

#### **Step 3: Running the Push Script**  
1. Open a **terminal** and navigate to the project folder.  
2. Run the push script using **Node.js**:  
   ```bash
   node push.js
   ```
3. If successful, you should see **"Push Notification Sent!"** in the terminal.  
4. If your PWA is **open and visible**, the notification will **navigate** to the `#programs` section.  
5. If the PWA is **not visible**, the notification will **open a new window** to display the content.  

#### **Testing in Firefox**  
- Open the PWA in **Firefox** and get the **Firefox push endpoint**.  
- Paste the **Firefox push subscription data** into `push.js`.  
- Run `node push.js` again.  
- Firefox should receive the push message and navigate accordingly.  



### 8.17 **Creating the Web Push Script**  

#### **Setting Up the Push Script**  
To send **push notifications**, we need to create a **Node.js script** that will:  
1. **Use the Web Push Library** to send notifications.  
2. **Retrieve the Push Subscription Data** from the browser.  
3. **Send a Notification** with a **payload** (custom message or URL).  

#### **Step 1: Create a JavaScript File**  
- Create a new file called **`push.js`** in the **root** directory of the project.  
- Open the file and add the following code:  

```javascript
// Import the web-push library
const webPush = require("web-push");

// Store the subscription data from the browser
const pushSub = {
    endpoint: "PASTE_YOUR_ENDPOINT_HERE",
    keys: {
        p256dh: "PASTE_YOUR_P256DH_KEY_HERE",
        auth: "PASTE_YOUR_AUTH_KEY_HERE"
    }
};

// Define push message options
const options = {
    TTL: 60, // Time to live (TTL) in seconds
    vapidDetails: {
        subject: "mailto:your-email@example.com",
        publicKey: "PASTE_YOUR_VAPID_PUBLIC_KEY_HERE",
        privateKey: "PASTE_YOUR_VAPID_PRIVATE_KEY_HERE"
    }
};

// Define the payload message
const payload = "index.html#programs";

// Send the push notification
webPush.sendNotification(pushSub, payload, options)
    .then(() => console.log("Push Notification Sent!"))
    .catch(err => console.error("Error sending push notification", err));
```

#### **Step 2: Retrieve Push Subscription Data**  
1. **Get the `endpoint`, `p256dh`, and `auth` keys** from the browser console:  
   - Open **Chrome DevTools** (`F12` or `Ctrl + Shift + I`).  
   - Run `JSON.stringify(subscription)` in the console after subscribing.  
   - Copy and paste the values into `push.js`.  

2. **Get Firebase VAPID Keys** (for Chrome push messages):  
   - Go to **Firebase Console** → **Project Settings** → **Cloud Messaging**.  
   - Copy the **VAPID Public and Private Keys** and paste them into `push.js`.  

#### **Step 3: Running the Push Script**  
1. Open a **terminal** and navigate to the project folder.  
2. Run the push script using **Node.js**:  
   ```bash
   node push.js
   ```
3. If successful, you should see **"Push Notification Sent!"** in the terminal.  
4. If your PWA is **open and visible**, the notification will **navigate** to the `#programs` section.  
5. If the PWA is **not visible**, the notification will **open a new window** to display the content.  

#### **Testing in Firefox**  
- Open the PWA in **Firefox** and get the **Firefox push endpoint**.  
- Paste the **Firefox push subscription data** into `push.js`.  
- Run `node push.js` again.  
- Firefox should receive the push message and navigate accordingly.  

### 8.18 **Testing the Hosted App**  

#### **Setting Up the Emulator**
1. **Close the emulator** if it is still running.  
2. Open **AVD Manager**, select the emulator, and choose **Wipe Data**.  
3. Restart the emulator by clicking the **triangle** (Play button).  

#### **Launching the PWA in Chrome**
1. **Start Chrome** on the emulator.  
2. **Navigate to**:  
   ```plaintext
   https://pwa.bright-moments.com
   ```
3. Click **Allow** to enable notifications.  
4. Click **Yes, Please** on the install banner.  
5. In the **Add to Home Screen** dialog, click **Add**.  
6. **Dismiss Chrome** from the history list by touching the **square icon** and swiping it away.  
7. Find the **PWA icon** on the home screen and tap to open.  
8. The **splash screen** appears, followed by the **PWA in standalone mode**.  

#### **Remote Debugging the PWA**
1. **Open DevTools** in Chrome.  
2. Click the **menu (three dots)** → **More Tools** → **Remote Devices**.  
3. The emulator should show **Android SDK Build for X86 (connected)**.  
4. Click on it, then click **Inspect** on the PWA instance.  
5. **Copy the subscription object** from the console.  
6. **Paste it into** the `pushSub` variable in `push.js` inside NetBeans.  
7. **Update the Firebase API key** in `push.js` to match the one used for the hosted app.  

#### **Sending a Push Notification**
1. Save `push.js`.  
2. Open a **terminal** and run:  
   ```bash
   node push.js
   ```
3. A **push notification** appears in the top notification bar.  
4. Swipe down to **view notifications** in the emulator.  
5. Click the notification – it should navigate to the **Programs section** in the PWA.  

#### **Testing Push Notifications When the App is Closed**
1. **Dismiss the PWA** from the history list (touch the **square icon** and swipe it away).  
2. Run the push script again:  
   ```bash
   node push.js
   ```
3. The notification **still appears**, even though the PWA is closed.  
4. Clicking the notification **launches the PWA** and navigates to the **Programs section**.  

#### **Verifying in DevTools**
- Open **DevTools for the PWA instance** and check the console messages.  
- It should log that the app **was opened instead of navigating** (since it was not running).  

#### **Testing on a Physical Android Device**
1. Connect an **Android device** to your computer.  
2. Follow **Chrome’s Remote Debugging Instructions**.  
3. Get the **subscription endpoint** of the device.  
4. Run `node push.js` to send a notification **directly to the device**.  

## 09. Resources
### 9.1 **What's Left?**  

#### **Exception Handling**  
- Currently, the **PWA lacks exception handling**.  
- We assume that everything will work smoothly, which is a **bad practice**.  
- At a minimum, we should **implement handlers** to catch and **gracefully manage errors**.  
- This includes handling:  
  - **Network failures**  
  - **Push subscription errors**  
  - **Service worker registration failures**  

#### **Storing the Subscription Object**  
- Right now, the **subscription object is just logged to the console**.  
- For **deployment**, we must **send the subscription object to a backend server**.  
- The backend server will:  
  - **Store user subscriptions** in a **database**.  
  - **Automate push notifications** by iterating through all subscriptions.  
  - Use a **Web Push library** to send messages to each subscription.  

#### **Security Considerations**  
- Currently, **any server with access to an endpoint** can send push notifications.  
- This is a **security risk**.  
- **Solution**: Implement **VAPID (Voluntary Application Server Identification for Web Push)**.  
  - **VAPID ensures** that only authorized servers can send push notifications.  
  - More details can be found on the **Mozilla blog**.  
  - **Implementation involves**:  
    - Generating **VAPID keys**.  
    - Including the **VAPID public key** in the push subscription.  
    - Sending notifications **signed with the VAPID private key**.  

By **handling exceptions, storing subscriptions properly, and improving security with VAPID**, the **PWA will be more robust and production-ready**. 🚀

### 9.2 **Browser and Device Support**  

#### **Android and Google’s PWA Push**  
- **PWAs are primarily an Android-driven technology**.  
- **Google treats PWAs as first-class citizens**, making them function **like native apps**.  
- **Multiple browsers support PWAs on Android**, including:  
  - **Chrome**  
  - **Firefox**  
  - **Opera**  

#### **iOS and Apple’s Limited Support**  
- **Apple has started supporting PWAs**, but **only partially**.  
- **The service worker API is implemented**, but features like:  
  - **Push messaging**  
  - **Background sync**  
  - **Advanced offline capabilities**  
  **…are still missing.**  
- **Apple’s business model** revolves around the **App Store** (which made **$38.5 billion in 2017**).  
- **Full PWA adoption is unlikely** unless **user demand** affects App Store revenue.  

#### **Microsoft’s Unique Approach**  
- **Microsoft is a wildcard in the PWA ecosystem**.  
- **Since they were late to the app store model**, they see PWAs as a way to:  
  - **Fill gaps in their app store**.  
  - **Compete with Apple and Google**.  
  - **Unify the desktop and mobile experience**.  
- **Currently, Microsoft is the only app store that offers PWAs**.  

#### **Why PWAs Matter**  
- **PWAs offer a better experience for websites**:  
  - **Offline access** improves reliability.  
  - **Push notifications** help with user engagement.  
  - **No need for an app store** makes deployment easier.  
- **PWAs bridge the gap between web apps and native apps**.  
- **User experience is enhanced**, as most people are **accustomed to native app behaviors**.  
- **For developers**, PWAs provide:  
  - **Discoverability without an app store**.  
  - **Continuous user engagement via notifications**.  
  - **A more cost-effective way to distribute apps**.  

#### **The Future of PWAs**  
- **PWAs are only going to grow in popularity**.  
- **They provide a compelling alternative to native apps**, with:  
  - **Easier development**  
  - **Lower costs**  
  - **Wider accessibility**  
- **For any website, implementing PWA features makes sense**.  
- **PWAs are one of the most promising technologies for content delivery today**. 🚀


### 9.3 **PWA Tools and Resources**  

#### **Tools for HTTPS**  
- **Let's Encrypt** – Free SSL/TLS certificates for secure websites.  
- **AWS Certificate Manager** – Manage and deploy SSL certificates on AWS services.  

#### **Web Manifest Generation**  
- **Favicon Generator** – Helps create app icons and web manifests.  
- **PWA Builder** – Automates PWA manifest and service worker creation.  

#### **Offline and Sync Capabilities**  
- **IndexedDB**  
  - Stores and caches resources for offline use.  
  - Useful for handling complex data structures.  
  - More information available on **MDN Web Docs**.  
- **PouchDB**  
  - Cross-browser, lightweight, open-source database.  
  - Provides both **caching and syncing**.  
- **Background Sync API**  
  - Ensures updates happen when a connection is available.  
  - Helps **keep resources fresh** for users.  

#### **JavaScript Frameworks for PWAs**  
- **Angular** – Built-in service worker support for PWAs.  
- **React** – Works with Workbox to handle offline caching.  
- **Vue** – PWA plugin available for easy integration.  

#### **Why Vanilla JavaScript Still Works**  
- While frameworks **offer convenience**, this course has shown how **easy it is to build a PWA with plain JavaScript**.  
- **No dependencies** = **better performance and control** over PWA behavior.  
- **PWAs can be lightweight, efficient, and fully functional without a framework**. 🚀


## 10. Conclusion
### 10.1 **Next Steps**  

#### **Building on What You've Learned**  
- This **PWA was a starting point** – now it’s time to develop your own!  
- Hopefully, you’re **excited to apply what you’ve learned** and build something great.  

#### **Staying Updated**  
- **The PWA spec is evolving quickly** – keep an eye on new features.  
- Google has already **indicated changes to the Add to Home Screen process**.  
- **Best practice:** Set up a **Google News alert for PWAs** to stay informed.  

#### **Keep Improving Your PWA**  
- PWAs are **progressive** – add new features **as they become available**.  
- **Adapt your app** to the latest browser and platform capabilities.  

#### **Final Thoughts**  
- **Happy coding! 🚀**  
- Now, **go build that great Progressive Web App!**


### 10.2 Course Completion Certificate
You can view my certificate here: [LinkedIn Learning Certificate](https://www.linkedin.com/learning/certificates/3684e385ddf7fbd76ef079e480ae6018fd5373eb83421d7b985f396d28160926?trk=share_certificate).