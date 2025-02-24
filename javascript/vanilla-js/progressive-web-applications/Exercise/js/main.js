// Adjusts the scroll position when the URL hash changes (e.g., navigating to a section).
// This accounts for a fixed header by scrolling up slightly to reveal content properly.
window.onhashchange = function () {
    setTimeout(() => window.scrollBy(0, -110), 10);
};

// Variable to track whether the navigation menu is hidden or visible.
let isNavHidden = true;

/**
 * Toggles the navigation menu visibility.
 */
function toggleNav() {
    const navElement = document.querySelector('nav'); // Use querySelector for better performance

    if (navElement) {
        // Toggle between showing and hiding the navigation
        navElement.style.display = isNavHidden ? 'block' : 'none';
        isNavHidden = !isNavHidden; // Flip the state
    }
}

// Variable to track PWA support
let pwaSupport = false;

// Check if the browser supports Service Workers
if ('serviceWorker' in navigator) {
    console.log('✅ Service Worker Supported');
    pwaSupport = true;

    // Register the Service Worker
    navigator.serviceWorker.register('./js/service-worker.js')
        .then(registration => {
            console.log('✅ Service Worker Registered');
            console.log('📌 Scope:', registration.scope);

            // Check if Notifications are supported
            if ("Notification" in window) {
                console.log("✅ Notifications Supported");

                // Request user permission for notifications
                Notification.requestPermission(status => {
                    console.log("🔔 Notification Permission Status:", status);
                });

                // Send a test notification only if permission is granted
                var options = {
                    body: "See What's New.",  // Extra text in the notification
                    icon: "../favicon/web-app-manifest-192x192.png",  // Image for the notification
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

                notify('NCC Computer Systems', options);
            }
        })
        .catch(error => {
            console.error('❌ Service Worker Registration Failed:', error);
        });

} else {
    console.warn('⚠️ Service Workers Not Supported in this Browser');
}

/**
 * Function to send a notification
 */
function notify(title, options) {
    // Ensure notification permission is granted
    if (Notification.permission === "granted") {
        // Wait until the service worker is ready
        navigator.serviceWorker.ready.then(reg => {
            reg.showNotification(title, options);
            console.log('🔔 Notification Sent:', title);
        }).catch(error => console.error("❌ Service Worker Not Ready:", error));
    } else {
        console.warn("⚠️ Notification Permission Not Granted:", Notification.permission);
    }
}



let installEvent;

window.addEventListener('beforeinstallprompt', event => {
    console.log('Before Install Prompt event fired');
    event.preventDefault(); // Prevent automatic prompt (for Chrome 67 and earlier)
    installEvent = event; // Store the event for later use
    document.getElementById('addToHomeScreen').style.display = 'block'; // Show the install banner
});

function hidePrompt() {
    document.getElementById('addToHomeScreen').style.display = 'none';
}

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

window.addEventListener('appinstalled', event => {
    console.log('App Installed Event');
});

window.onload = function () {
    if (!pwaSupport) return; // Exit if PWAs are not supported

    let p = navigator.platform; // Get the platform name
    // console.log(navigator.userAgentData.platform);

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

function hideInstructions() {
    document.getElementById("instructions").style.display = "none";
}

