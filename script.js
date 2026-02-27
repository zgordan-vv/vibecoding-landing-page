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
function getSelectedLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    if (urlLang) {
        localStorage.setItem('vibecoding_lang', urlLang);
        return urlLang;
    }

    // Don't use savedLang by default to avoid getting "stuck" in a language
    // only use it if we want to implement a language switcher later.
    // For now, always default to English on pure root visits.
    return 'en';
}

function applyTranslations() {
    const lang = getSelectedLanguage();
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



    // Localized Buy Buttons
    updateBuyButtons(lang);

    // Localized Cover Support
    const bookContent = document.querySelector('.book-content');
    const bookBg = document.querySelector('.book-bg-image');
    const localizedCovers = {
        'vi': 'assets/cover-vi.webp',
        'id': 'assets/cover-id.webp',
        'ms': 'assets/cover-ms.webp',
        'zh-CN': 'assets/cover-zh-cn.webp',
        'zh-TW': 'assets/cover-zh-tw.webp',
        'en': 'assets/cover-en.webp' // Use WebP for English
    };

    console.log('Applying cover for lang:', lang);

    if (bookBg) {
        if (localizedCovers[lang]) {
            console.log('Using WebP cover:', localizedCovers[lang]);
            bookBg.style.backgroundImage = `url('${localizedCovers[lang]}')`;
            if (bookContent) {
                bookContent.style.setProperty('opacity', '0', 'important');
                bookContent.style.pointerEvents = 'none';
            }
        } else {
            console.log('Using HTML cover for:', lang);
            bookBg.style.backgroundImage = `url('assets/cover-bg.webp')`;
            if (bookContent) {
                bookContent.style.setProperty('opacity', '1', 'important');
                bookContent.style.pointerEvents = 'auto';
            }
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
        const lang = getSelectedLanguage();
        if (distance < 0) {
            clearInterval(x);
            if (priceBanner) priceBanner.style.background = "#450A0A"; // Darker warning red

            if (lang === 'en' || lang === 'ru') {
                if (bannerText) bannerText.textContent = "Current Price: $50. Join the elite founders.";
                const ctaPrice = document.getElementById('cta-price');
                if (ctaPrice) ctaPrice.innerHTML = "$50<span>.00</span>";
            } else {
                if (bannerText) bannerText.textContent = "Current Price: $20. Join the elite founders.";
                const ctaPrice = document.getElementById('cta-price');
                if (ctaPrice) ctaPrice.innerHTML = "$20<span>.00</span>";
            }
            if (countdownEl) countdownEl.textContent = "";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (countdownEl) {
            const daysTxt = days > 0 ? `${days}d ` : "";
            countdownEl.textContent = ` — ${daysTxt}${hours}h ${minutes}m ${seconds}s left`;
        }
    };

    const x = setInterval(updateTimer, 1000);
    updateTimer(); // Initial call
}

// 3. CHECKOUT LOGIC (LOCALIZED REDIRECTS)
const lavaLinks = {
    en: "https://app.lava.top/products/dab88388-6e4d-4775-a490-328a01d15a40",
    ru: "https://app.lava.top/products/ab3cf477-c4e6-4afb-a18e-e579eae438cd",
    vi: "https://app.lava.top/products/4783af5f-f992-40f2-86d5-1a63a9555e93",
    ms: "https://app.lava.top/products/dab88388-6e4d-4775-a490-328a01d15a40",
    id: "https://app.lava.top/products/95cc8149-1f7d-4184-b536-576d49d254bd",
    te: "https://app.lava.top/products/6b8e13cb-805d-48c9-98a8-028296f3a4e6",
    ta: "https://app.lava.top/products/96a68c17-9d15-41b7-9ca9-9cf6c99fb4dd",
    "zh-CN": "https://app.lava.top/products/dab88388-6e4d-4775-a490-328a01d15a40",
    "zh-TW": "https://app.lava.top/products/dab88388-6e4d-4775-a490-328a01d15a40"
};

function updateBuyButtons(lang) {
    const url = lavaLinks[lang] || lavaLinks['en'];
    // PREMIUM markets: English and Russian (Scroll to Pricing)
    // IMPULSE markets: All others (Direct to Checkout)
    const isImpulseMarket = (lang !== 'en' && lang !== 'ru');

    document.querySelectorAll('.buy-btn').forEach(btn => {
        if (btn.tagName === 'A') {
            // Bypass scroll for impulse markets only
            if (isImpulseMarket || btn.id === 'lead-submit-btn' || btn.classList.contains('final-btn-link')) {
                btn.href = url;
            }
        }
    });

    // Main CTA Link
    const mainBtn = document.getElementById('lead-submit-btn');
    if (mainBtn) mainBtn.href = url;
}

function initCheckout() {
    const lang = new URLSearchParams(window.location.search).get('lang') || 'en';
    updateBuyButtons(lang);

    // Track checkout clicks (Intent tracking)
    document.querySelectorAll('.buy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // 1. Meta Pixel Tracking
            if (window.fbq) {
                fbq('track', 'InitiateCheckout', {
                    content_name: 'Vibecoding Book',
                    content_category: 'Ebook',
                    value: 5.00,
                    currency: 'USD'
                });
            }

            // 2. Firebase Backup Tracking
            if (db) {
                db.collection('analytics').add({
                    event: 'buy_button_click',
                    id: btn.id,
                    lang: lang,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                }).catch(() => { /* Silent fail */ });
            }
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

    // Scroll Progress
    const scrollProgress = document.getElementById('scroll-progress');
    window.addEventListener('scroll', () => {
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / height) * 100;
        if (scrollProgress) scrollProgress.style.width = scrolled + '%';
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

function initFAQ() {
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const item = button.parentElement;
            const isActive = item.classList.contains('active');

            // Close all other items
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// BOOTSTRAP
// Run as early as possible to prevent flicker
(function () {
    applyTranslations();
})();

window.addEventListener('DOMContentLoaded', () => {
    applyTranslations(); // Sync again once DOM is ready
    initCountdown();
    initCheckout();
    initUI();
    initFAQ();
});
