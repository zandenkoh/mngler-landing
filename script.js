  document.addEventListener("DOMContentLoaded", function () {
    const phoneContainer = document.querySelector(".phone-container");
    const features = document.querySelectorAll(".features");

    const images = {
      "feature-1":
        "https://cdn.prod.website-files.com/679c404529ee8648732e64f5/679c4f92ec2f4b60fba5e520_IMG_1807-p-500.png",
      "feature-2":
        "https://cdn.prod.website-files.com/679c404529ee8648732e64f5/679c4f9228d0cf7e150d9d84_IMG_1810-p-500.png",
      "feature-3":
        "https://cdn.prod.website-files.com/679c404529ee8648732e64f5/679c4f927d9046f26ebb8c52_IMG_1809-p-500.png",
      "feature-4":
        "https://cdn.prod.website-files.com/679c404529ee8648732e64f5/679c5406194800c92063e2e6_IMG_1811-p-500.png",
    };

    // Set initial background image
    phoneContainer.style.backgroundImage = `url(${images["feature-1"]})`;

    // Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const featureId = entry.target.id;
            phoneContainer.style.backgroundImage = `url(${images[featureId]})`;
            phoneContainer.style.backgroundSize = 'contain'
          }
        });
      },
      {
        root: null, // Use the viewport as the root
        threshold: 0.5, // Trigger when at least 50% of the element is visible
      }
    );

    // Observe each feature
    features.forEach((feature) => observer.observe(feature));
  });
  
  
  

  document.addEventListener("DOMContentLoaded", function () {
    const animatedItems = document.querySelectorAll(".animate-item");

    function onScroll() {
      animatedItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 50; // 50px threshold
        if (isVisible) {
          item.classList.add("visible");
        }
      });
    }

    window.addEventListener("scroll", onScroll);
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with the 'load-item' class
    const loadItems = document.querySelectorAll(".load-item");

    // When the page has finished loading, trigger the animation
    window.addEventListener("load", () => {
      loadItems.forEach(item => {
        item.classList.add("loaded"); // Add the 'loaded' class to start the animation
      });
    });
  });
  
document.querySelector('.cta-button.load-item').addEventListener('click', function () {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth' // Smooth scrolling effect
  });
});

    const button = document.getElementById('join-mngler-btn');
    const emailInput = document.querySelector('.email-input');
    const emailField = document.getElementById('email-field');

    button.addEventListener('click', () => {
      // Move the button down
      gsap.to(button, { y: 60, duration: 0.4 });

      // Change button text and disable it
      button.innerHTML = 'Save email';
      button.disabled = true;
      button.style.fontSize = '17px'

      // Fade in email input and focus
      emailInput.style.opacity = 1;
      emailInput.style.transform = 'translateY(0)';
      setTimeout(() => emailField.focus(), 500); // Focus after animation
    });

    // Enable button when a valid email is entered
    emailField.addEventListener('input', () => {
      const email = emailField.value.trim();
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      button.disabled = !isValidEmail;
    });

const menuButton = document.getElementById('menuButton');
const menuPopup = document.getElementById('menuPopup');
let isOpen = false;

menuButton.addEventListener('click', () => {
    if (!isOpen) {
      menuPopup.style.display = 'flex';
         // Show before transition
        setTimeout(() => {
            menuPopup.classList.add('show'); // Start expanding height
            
        }, 100); // Small delay to allow transition
    } else {
        menuPopup.classList.remove('show'); // Collapse height
        setTimeout(() => {
            menuPopup.style.display = 'none'; // Hide after transition
        }, 0); // Matches CSS transition duration (0.3s)
    }

    isOpen = !isOpen;

    menuButton.innerHTML = isOpen ? `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
    ` : `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
    `;
});



document.addEventListener("DOMContentLoaded", function () {
    const headerImage = document.querySelector(".header-image-container");
    let initialTop = 65; // Initial `top` percentage

    window.addEventListener("scroll", function () {
        let scrollY = window.scrollY;
        let parallaxAmount = scrollY * 0.25; // Adjust speed factor (smaller = slower)

        headerImage.style.top = `calc(${initialTop}% + ${parallaxAmount}px)`;
    });
    
    const headerContent = document.querySelector(".header-content");

    window.addEventListener("scroll", function () {
        let scrollY = window.scrollY;
        let parallaxAmount = scrollY * 0.4; // Adjust speed factor (smaller = slower)

        headerContent.style.top = `calc(${initialTop}% - ${parallaxAmount}px)`;
    });
});


if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js")
      .then((reg) => console.log("Service Worker registered", reg))
      .catch((err) => console.log("Service Worker failed", err));
  });
}

let deferredPrompt;
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event;

  document.getElementById("install-btn").style.display = "block";

  document.getElementById("install-btn").addEventListener("click", () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choice) => {
      if (choice.outcome === "accepted") {
        console.log("User installed PWA");
      }
      deferredPrompt = null;
    });
  });
});








