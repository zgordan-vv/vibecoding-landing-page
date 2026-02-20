# Tech Plan: Vibecoding Landing Page (Vercel-Hosted)

## 1. Project Infrastructure
This landing page is designed for high conversion, minimal latency, and radical regional flexibility (10+ languages via a single codebase).

### 1.1 File Architecture
- `index.html`: Optimized DOM structure with semantic landmarks (`<header>`, `<main>`, `<section>`, `<footer>`).
- `style.css`: Unified Design System using CSS Custom Properties and BEM-lite naming convention.
- `translations.js`: Static JSON-like dictionary containing regionalized copies for all 10+ target markets.
- `script.js`: Core Application Logic (Localization Engine + Pricing Engine + Lead Collection).

---

## 2. Technical Stack & Dependencies
- **Frontend Core:** Vanilla HTML5 / CSS3 (No Frameworks).
- **Localization:** Client-side Query Param Engine (`window.location.search`).
- **Database:** Firebase Firestore (Compat SDK v10.7.1) for Lead Generation.
- **Typography:** Google Fonts (Playfair Display & Outfit) loaded via `preconnect` for LCP optimization.
- **Hosting:** Vercel (Edge-first deployment).

---

## 3. Design Engineering (The "Master-Slide")
Ensuring visual consistency across all languages and resolutions.

### 3.1 Design Tokens (CSS Variables)
- **Primary Branding:** `--primary: #B45309;` (Golden Amber).
- **Background Layering:**
    - `--bg-primary: #0F172A;`
    - `--bg-secondary: #1E293B;`
- **Premium Glass Effect:** 
    - `background: rgba(30, 41, 59, 0.7);`
    - `backdrop-filter: blur(12px);`
    - `border: 1px solid rgba(255, 255, 255, 0.1);`

### 3.2 Responsive Methodology
- **Fluid Layout:** Uses CSS Grid and Flexbox exclusively (no floats).
- **Typography Scaling:** `clamp(3rem, 6vw, 5rem)` for Hero H1 to ensure headline impact on both Fold 5 and Ultra Widescreen.
- **Mobile First:** Navigation collapses to a simplified layout `< 992px`.

---

## 4. Engineering logic

### 4.1 Localization Engine (`applyTranslations`)
- **Input:** `?lang=XX` from the URL.
- **Execution:**
    1. Scan DOM for `id` matches in `translations[lang]`.
    2. Dynamic injection:
        - `textContent` for safety.
        - `innerHTML` for elements requiring stylistic tags (`<span>`, `<strong>`).
        - `placeholder` attribute updates for lead input.
    3. **Resilience:** Fallback to `translations['en']` if the requested language dictionary fails to load.

### 4.2 Pricing Engine (`initCountdown`)
- **Business Logic:** Hard-coded deadline of `2026-03-01T00:00:00`.
- **UI State Management:**
    - Calculate time delta in MS.
    - If `distance > 0`: Continuously update the sticky banner countdown.
    - If `distance <= 0`: 
        - Swap price token from `$5` to `$20`.
        - Hide the countdown timer.
        - Update CTA button text and Banner alert text.

### 4.3 Lead Collection Engine (`initLeadForm`)
- **Data Schema (Firestore `leads` collection):**
    ```json
    {
      "email": "string",
      "lang": "string (source marker)",
      "timestamp": "serverTimestamp",
      "user_agent": "string (optional for debugging)"
    }
    ```
- **Frictionless Submission:**
    - AJAX-based submission (no page refresh).
    - Localized validation feedback (Success/Error messages).
    - Non-blocking error handling (If DB fails, CTA remains active for manual purchase).

---

## 5. Performance & SEO Configuration
- **Lighthouse Goals:** 90+ Score.
- **SEO Elements:**
    - Unique `<h1>` per page (dynamically localized).
    - Secure HTTPS enforcement via Vercel.
    - Professional tone check (Zero obscenity policy enforced in all 10 dictionaries).
    - Meta Viewport optimization for mobile tap targets.

---

---

## 7. Granular Step-by-Step Build Plan

### Phase 1: Foundation & Semantic Core (Hours 0-2)
1.  [x] **Project Shell**: Initialize `/landing-page` directory with `index.html`, `style.css`, `script.js`, and `translations.js`.
2.  [x] **HTML Boilerplate**: Configure `<head>` with UTF-8, responsive meta tags, SEO descriptions, and Google Fonts preconnects.
3.  [x] **Semantic Mapping**: Implement the DOM structure using `<nav>`, `<header>`, `<main>`, and `<section>`. Assign unique `id` tags to every translatable element (e.g., `hero-title`, `cta-price`).
4.  [x] **Design Tokens**: Define HSL-based CSS variables in `:root` for branding, elevation (shadows), and glassmorphism effects.
5.  [x] **Layout Engineering**: Build the responsive Hero and Pains sections using CSS Grid. Use `clamp()` for fluid typography that scales perfectly on mobile.

### Phase 2: Localization & Logic Engines (Hours 2-5)
6.  [x] **Dictionary Population**: Port the 12 regional translations into the `translations` object in `translations.js`.
7.  [x] **URL Param Logic**: In `script.js`, implement `URLSearchParams` to extract the `lang` key from the landing page URL.
8.  [x] **DOM Hydration Engine**: Write a loop that iterates through the translation dictionary and updates DOM nodes via `textContent` (safe) or `innerHTML` (for tags like `<span>`).
9.  [x] **Real-Time Pricing**: Implement `initCountdown()` using a `setInterval` loop to calculate the delta between `now` and `March 1, 2026`.
10. [x] **The Price Flip**: Code the conditional logic that automatically swaps all price instances from `$5` to `$20` once the deadline is reached.

### Phase 3: Firebase & Lead Generation (Hours 5-8)
11. [x] **Firebase Integration**: Register the project in Firebase Console, enable Firestore, and add the configuration to `script.js`.
12. [x] **Cloud Security Rules**: Deploy granular "Create-Only" rules to allow external lead submissions while preventing unauthorized data reads.
13. [x] **Form Interceptor**: Implement a submit-listener on the lead form that prevents default refresh behavior.
14. [x] **Lead Dispatcher**: Write the `db.collection('leads').add()` call to save `email`, `timestamp`, and `language_marker`.
15. [x] **User Feedback**: Implement localized success/error states to provide clear feedback after submission.

### Phase 4: Quality Assurance & Deployment (Hours 8-10)
16. [x] **Localization UAT**: Systematically test the page with all 10+ `?lang=` parameters to ensure no layout breaking or missing strings.
17. [x] **Obscenity Scrub**: Audit all 12 dictionaries one final time to ensure 100% professional tone.
18. [x] **Lighthouse Audit**: Optimize image loading and CSS delivery to ensure 95+ performance scores.
19. [x] **Vercel Config**: Finalize `vercel.json` with clean URLs and strict cache-control headers.
20. [x] **Live Deploy**: Connect GitHub/Vercel and verify production SSL and Firestore connectivity.
