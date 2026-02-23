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

    // Sync Language Selector
    const langSelect = document.getElementById('lang-select');
    if (langSelect) langSelect.value = lang;

    // Localized Buy Buttons
    updateBuyButtons(lang);

    // Localized Cover Support
    const bookContent = document.querySelector('.book-content');
    const bookBg = document.querySelector('.book-bg-image');
    const localizedCovers = {
        'en': 'assets/cover-bg.png', // Fallback to mockup bg
        'vi': 'assets/cover-vi.png',
        'id': 'assets/cover-id.png',
        'ms': 'assets/cover-ms.png',
        'zh-CN': 'assets/cover-zh-cn.png',
        'zh-TW': 'assets/cover-zh-tw.png'
    };

    if (bookBg && localizedCovers[lang]) {
        if (lang !== 'en') {
            bookBg.style.backgroundImage = `url('${localizedCovers[lang]}')`;
            if (bookContent) bookContent.style.opacity = '0'; // Use the PNG text instead of CSS
        } else {
            bookBg.style.backgroundImage = `url('assets/cover-bg.png')`;
            if (bookContent) bookContent.style.opacity = '1';
        }
    }

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

// 3. CHECKOUT LOGIC (LOCALIZED REDIRECTS)
const lavaLinks = {
    en: "https://app.lava.top/products/dab88388-6e4d-4775-a490-328a01d15a40",
    ru: "https://app.lava.top/products/dab88388-6e4d-4775-a490-328a01d15a40",
    vi: "https://app.lava.top/products/4783af5f-f992-40f2-86d5-1a63a9555e93",
    ms: "https://app.lava.top/products/dab88388-6e4d-4775-a490-328a01d15a40",
    id: "https://app.lava.top/products/dab88388-6e4d-4775-a490-328a01d15a40",
    "zh-CN": "https://app.lava.top/products/dab88388-6e4d-4775-a490-328a01d15a40",
    "zh-TW": "https://app.lava.top/products/dab88388-6e4d-4775-a490-328a01d15a40"
};

function updateBuyButtons(lang) {
    const url = lavaLinks[lang] || lavaLinks['en'];
    document.querySelectorAll('.buy-btn').forEach(btn => {
        // Only update if it's an anchor tag leading to checkout (some buy-btns might be scroll anchors)
        if (btn.tagName === 'A' && (btn.id === 'lead-submit-btn' || btn.classList.contains('final-btn-link'))) {
            btn.href = url;
        }
    });

    // Specific fix for the main CTA button if it's not caught
    const mainBtn = document.getElementById('lead-submit-btn');
    if (mainBtn) mainBtn.href = url;
}

function initCheckout() {
    const lang = new URLSearchParams(window.location.search).get('lang') || 'en';
    updateBuyButtons(lang);

    // Track checkout clicks (Intent tracking)
    document.querySelectorAll('.buy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (db) {
                db.collection('analytics').add({
                    event: 'buy_button_click',
                    id: btn.id,
                    lang: lang,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                }).catch(() => { /* Silent fail */ });
            }
            // If it's the anchor in the pricing section, it will naturally navigate.
            // If it's an anchor pointing to #pricing (like the nav), it will also naturally navigate.
        });
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
    initCheckout();
    initUI();
});
