# Detailed Technical Implementation Plan: Vibecoding Landing Page

This document outlines the granular engineering steps to build and maintain the Vibecoding Landing Page, ensuring it meets the performance, aesthetics, and functional requirements defined in the PRD.

## 1. Project Architecture
The project follows a "No-Framework" architecture for maximum speed (Lighthouse scores 95+), using a single-page application (SPA) pattern for localization.

- **Stack:** HTML5, CSS3, Vanilla JavaScript.
- **Backend:** Firebase Firestore (Compat SDK).
- **Localization:** Client-side dictionary-based routing via Query Parameters.

---

## 2. Phase 1: Design System & CSS Foundation
Implement the "Master-Slide" design system to ensure visual consistency across all device sizes.

### 2.1 CSS Variables (Design Tokens)
Defined in `:root` to allow instant theme adjustments.
- **Colors:**
    - `--primary`: `#B45309` (Warm Amber)
    - `--bg`: `#0F172A` (Slate 900)
    - `--text`: `#F8FAFC` (Slate 50)
- **Glassmorphism:** `rgba(30, 41, 59, 0.7)` with `backdrop-filter: blur(12px)`.

### 2.2 Breakpoints
- **Desktop:** 1200px+
- **Tablet:** 768px - 1024px (Switch from 3-column to 1-column for Pains section).
- **Mobile:** <767px (Center-align hero text, shrink H1 to 3rem).

---

## 3. Phase 2: Functional Modules

### 3.1 Localization Engine (`applyTranslations()`)
- **Logic:**
    1. Parse `window.location.search` for `lang`.
    2. Default to `en` if `lang` is missing or dictionary is empty.
    3. Iterate through `ID`s in `translations.js` and update DOM nodes.
    4. **Handle special cases:** 
        - Update `placeholder` for email inputs.
        - Use `innerHTML` for elements containing `<span>` or `<strong>` tags.

### 3.2 Dynamic Pricing & Countdown (`initCountdown()`)
- **Deadline:** March 1, 2026, 00:00:00.
- **Behavior:**
    1. Calculate `distance` between `now` and `deadline`.
    2. Every 1 second: Update the `#countdown` span.
    3. **The Flip:** If `distance < 0`:
        - Update UI price from `$5` to `$20`.
        - Change banner text to "Current Price: $20".
        - Change banner color to highlight the urgency has passed.

### 3.3 Lead Collection (`initLeadForm()`)
- **Firebase Initialization:** Verify `apiKey` is not the placeholder before initializing.
- **Submission Flow:**
    1. Intercept `submit` event.
    2. Disable button + show loading state (`...`).
    3. Push `{ email, timestamp, lang }` to Firestore `leads` collection.
    4. On success: Show localized `form-success` message + Reset form.
    5. On error: Show localized `form-error` message + Re-enable button.

---

## 4. Phase 3: Content & SEO
- **No-Obscenity Check:** Final proofread of `translations.js` for all 12+ languages.
- **Meta Tags:**
    - `og:image`: High-quality preview of the book mockup.
    - `twitter:card`: summary_large_image.
    - `viewport`: `width=device-width, initial-scale=1.0, maximum-scale=1.0`.

---

## 5. Verification Checklist (Testing)
1. **i18n Test:** Does `?lang=te` hide the Hero Title in English and show Telugu?
2. **Persistence Test:** Does the sticky banner stay visible during scrolling?
3. **Conversion Test:** Does the email input prevent invalid emails (HTML5 validation)?
4. **Firebase Test:** Do leads appear in Firestore with the correct server timestamp?
5. **Mobile Test:** Is the "Buy" button easily tappable (min 44px height) on mobile?

---

## 6. Implementation Timeline
- **Setup & CSS Foundation:** 2 hours.
- **HTML Structure & Assets:** 2 hours.
- **JS Logic (i18n & Pricing):** 3 hours.
- **Firebase Integration:** 1 hour.
- **Multi-language Review:** 2 hours.
