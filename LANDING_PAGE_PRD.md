# PRD: Vibecoding Book Landing Page

## 1. Problem Statement (The Pains)
The target audience (Rapid Validators & Non-tech Founders) is tired of:
- **"The Low-Code Trap":** Distrust in black-box platforms (Lovable, etc.) where they don't own the "foundation" and fear having to rewrite everything.
- **"The Education Scam":** Overpriced courses ($1,000+) run by "charlatans" vs. long, boring academic content that doesn't ship anything.
- **"Infrastructure Friction":** Constant battles with VPNs, GitHub setup, Vercel deploys, and general technical chaos.
- **"Context Loss":** LLMs losing track of code or design consistency (missing a "Master-Slide") as complexity grows.
- **"Conceptual Loneliness":** Needing a mentor who understands the *strategy*, not just the syntax.

## 2. Target Audience
- **The Rapid Validator:** Needs a live MVP yesterday to test a business hypothesis.
- **The Non-Tech Founder:** Tired of being held hostage by expensive dev agencies ($15k/month).
- **The Frustrated Learner:** Has tried "Learning Python" and quit; needs to *use* AI, not learn syntax.

## 3. The "Vibecoding" Value Proposition
- **Real Stack, Real Ownership:** You build on React, Firebase, and Vercel. You own the code. It's not a black box.
- **The Weekend Method:** From idea to PRD to live URL in 48 hours.
- **Emotional Mentorship:** A guide written by someone who "gets it" — validating fears before solving them.
- **Zero-Jargon Analogies:** Technical concepts explained for 12-year-olds (Node.js = engine, GitHub = Google Docs).
- **Fixed Foundation:** Using `.cursorrules` to act as your project's "Master-Slide," ensuring consistency.

## 4. Landing Page Structure (MVP)

### Section 1: Hero (The Reframe)
- **Headline:** Build your MVP this weekend. No team, no black boxes, no $10k bootcamp.
- **Sub-headline:** The first guide for non-technical founders that teaches you a *system*, not just a recipe. Build QuoteSnap (a real-time quote builder) from scratch in 48 hours.
- **Primary CTA:** Get the Book for $5 (Instant Access).
- **Visual:** A premium screenshot of the final QuoteSnap app running on mobile and desktop.

### Section 2: Pain Validation (Mirroring)
- **Content:** "You've been here before..." 
- Bullet points mirroring the user's input:
    - *“I don't trust the foundation. Will I have to rewrite everything?”*
    - *“Hiring a developer is a $50,000 lottery.”*
    - *“I'm tired of technical 'жопа' and setup friction.”*
- **The Turn:** "It’s not your fault. The tools changed, but the instruction manuals didn't."

### Section 3: The Method (How it Works)
- **The Equation:** Idea → PRD → Cursor AI → Vercel = Live Product.
- **The "Real Stack" Promise:** We use the industry-standard stack. If you ever hire a developer, they’ll thank you for the clean React/Firebase foundation, not tell you to delete it.

### Section 4: What You Build (QuoteSnap)
- Walkthrough of the sample project.
- **Features:** Auth, Firestore, Shareable Links, Dashboard.
- **The "Master-Slide" logic:** How `.cursorrules` keeps your architecture consistent.

### Section 5: The "No-Chaff" Promise
- No 40-hour video courses.
- No $1,000 price tags.
- Practical, granular, and emotionally honest.

### Section 6: Lead Generation & Pricing CTA
- **Lead Capture Form:** An email signup form to collect potential leads (e.g., "Notify me of the launch" or "Get a free sample chapter").
- **Database Integration:** Emails must be collected and stored in a database (Firebase Firestore).
- **Price:** $5 (The "Tripwire").
- **Pricing Deadline:** Until March 1st, the price is $5. From March 1st onwards, the price increases to $20.
- **Countdown Timer/Banner:** A prominent counter or notice showing the remaining time or stating the price increase date.
- **Guarantee:** Build a live app or we haven't done our job.

## 5. Technical Specifications: Localization & Database
- **Default Language:** English.
- **Data Collection:** Email addresses from lead forms must be saved to Firebase Firestore in a `leads` collection.
- **Dynamic Localization:** The site must dynamically switch all text content based on the `?lang=` query parameter (e.g., `?lang=vi`, `?lang=id`, `?lang=ru`).
- **Ad Compliance:** This allows Meta/FB ads to drive traffic to the same landing page while serving the correct language.

## 6. Aesthetics & Design System
- **Tone:** Professional, encouraging, and radically honest. **Zero obscene words or unprofessional slang.**
- **Style:** "Glassmorphism" / Modern SaaS. Dark background with vibrant sunset gradients (representing the "Weekend" vibe).
- **Typography:** *Playfair Display* for headers (premium/trust), *Outfit* for body (modern/fast).
- **Micro-animations:** Hover effects on the "Tools" icons (React, Firebase, GitHub).
- **Master-Slide Consistency:** Perfectly aligned grid layout mirroring the project's focus on logic consistency.

## 6. Tech Stack for Landing Page
- **Frontend:** Next.js (for SEO) or Vanilla HTML/CSS/JS (for maximum control).
- **Styling:** Vanilla CSS with custom design tokens.
- **Hosting:** Vercel.
