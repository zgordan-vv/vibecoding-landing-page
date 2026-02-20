// VIBECODING CORE LOGIC

// 0. FIREBASE CONFIG 
const firebaseConfig = {
    apiKey: "AIzaSyAIyXCIethJsZPksgcGswwiQt_7fZmY7O8",
    authDomain: "vibecoding-book.firebaseapp.com",
    projectId: "vibecoding-book",
    storageBucket: "vibecoding-book.firebasestorage.app",
    messagingSenderId: "772181533813",
    appId: "1:772181533813:web:a4e44f0a496a213854843c",
    measurementId: "G-JPJ5MM86JX"
};

// Initialize Firebase
let db;
try {
    if (firebaseConfig.apiKey && firebaseConfig.apiKey !== "YOUR_API_KEY") {
        firebase.initializeApp(firebaseConfig);
        db = firebase.firestore();
    }
} catch (e) {
    console.warn("Firebase not initialized. Check your config.");
}

// 1. LOCALIZATION ENGINE
function applyTranslations() {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'en';
    const dict = translations[lang] || translations['en'];

    // Map dictionary keys to element IDs
    Object.keys(dict).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            // Handle Placeholders (Special Case)
            if (id.includes('placeholder')) {
                element.placeholder = dict[id];
            }
            // Handle HTML Injection (for spans/strong)
            else if (dict[id].includes('<')) {
                element.innerHTML = dict[id];
            }
            // Default: Static Text
            else {
                element.textContent = dict[id];
            }
        }
    });

    // Special catch for lead-email if id doesn't match perfectly
    const emailInput = document.getElementById('lead-email');
    if (emailInput && dict['lead-email-placeholder']) {
        emailInput.placeholder = dict['lead-email-placeholder'];
    }

    document.documentElement.setAttribute('lang', lang);
}

// 2. PRICING ENGINE & COUNTDOWN
function initCountdown() {
    const deadline = new Date("March 1, 2026 00:00:00").getTime();
    const countdownEl = document.getElementById('countdown');
    const priceBanner = document.getElementById('price-banner');
    const bannerText = document.getElementById('banner-text');

    const updateTimer = () => {
        const now = new Date().getTime();
        const distance = deadline - now;

        // THE PRICE FLIP
        if (distance < 0) {
            clearInterval(x);
            if (priceBanner) priceBanner.style.background = "#450A0A"; // Darker warning red
            if (bannerText) bannerText.textContent = "Current Price: $20. Join the elite founders.";
            const ctaPrice = document.getElementById('cta-price');
            if (ctaPrice) ctaPrice.innerHTML = "$20<span>.00</span>";
            if (countdownEl) countdownEl.textContent = "";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (countdownEl) countdownEl.textContent = ` — ${days}d ${hours}h ${minutes}m ${seconds}s left`;
    };

    const x = setInterval(updateTimer, 1000);
    updateTimer(); // Initial call
}

// 3. LEAD COLLECTION LOGIC (FIREBASE)
function initLeadForm() {
    const form = document.getElementById('email-form');
    const msgEl = document.getElementById('form-msg');
    const lang = new URLSearchParams(window.location.search).get('lang') || 'en';
    const dict = translations[lang] || translations['en'];

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('lead-email').value;
        const submitBtn = document.getElementById('lead-submit-btn');

        // Loading State
        submitBtn.disabled = true;
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = '...';

        try {
            if (db) {
                await db.collection('leads').add({
                    email: email,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    lang: lang,
                    source: 'landing_page_gen'
                });
                msgEl.textContent = dict['form-success'] || "Success!";
                msgEl.className = "form-msg success";
                form.reset();
            } else {
                throw new Error("DB Connection Missing");
            }
        } catch (error) {
            console.error("Submission error:", error);
            msgEl.textContent = dict['form-error'] || "Error sending email.";
            msgEl.className = "form-msg error";
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        }
    });
}

// 4. UI INTERACTION & REVEAL
function initUI() {
    // Reveal Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal, .pain-card, .method-visual, .final-cta').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
        observer.observe(el);
    });

    const style = document.createElement('style');
    style.textContent = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

// BOOTSTRAP
window.addEventListener('DOMContentLoaded', () => {
    applyTranslations();
    initCountdown();
    initLeadForm();
    initUI();
});
