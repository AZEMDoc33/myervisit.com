# CLAUDE.md — Eric Cummins Website Reference Guide
> Drop this file into any new conversation and say: "Use this CLAUDE.md as your reference before making any changes to my websites."

---

## 🗂 SITE OVERVIEW

| Site | URL | GitHub Repo | Vercel Project ID |
|------|-----|-------------|-------------------|
| Main Physician Site | myervisit.com | AZEMDoc33/myervisit.com | prj_cHSm7Skhr9h6BoDC1xvNBKqydlbq |
| Staff Directory | directory.myervisit.com | AZEMDoc33/bgmc-directory | prj_bf7MewblLHm8NReFF40x177oCflS |
| Patient Portal | myervisit.com/portal | same repo as myervisit.com | same project |

**Vercel Team:** ericcummins33-4061s-projects
**Vercel Team ID:** team_KFSPAFbGtf3qi3lA1WzW96lS
**Node Version:** 24.x
**Deployment:** Auto-deploys on push to `main` branch in each repo

---

## 1. myervisit.com — Main Physician Site

### Tech Stack
- **Pure static HTML/CSS/JS** — no React, no Next.js, no build step
- 86% HTML, 13% CSS, 0.9% JS
- `styles.css` — global stylesheet (single file for entire site)
- `script.js` — global JS (mobile menu toggle, interactions)
- `vercel.json` — handles routing/redirects

### File Structure
```
/
├── index.html              ← Homepage
├── about.html              ← About Dr. Cummins
├── blog.html               ← Blog index page
├── contact.html            ← Contact page
├── resources.html          ← Free resources (PDFs)
├── team.html               ← Team page
├── add-to-home-screen.html ← PWA install instructions
├── inpatient-criteria-pdf.html ← Portal-related page
├── styles.css              ← ALL global styles
├── script.js               ← ALL global JS
├── vercel.json             ← Routing config
├── pt_thumbs_up.png        ← Local image asset
└── [blog-post-slug].html   ← Individual blog post files (flat at root)
```

### Blog Post Files (current)
- `five-subtle-signs-of-sepsis-you-shouldnt-ignore-.html`
- `six-simple-ways-we-build-trust-during-your-er-visit.html`
- `what-patients-really-remember-the-swedish-bus-crash-that-changed-how-i-think-about-healthcare.html`
- `your-ai-chatbot-isnt-a-doctor-it-just-plays-one-on-the-internet.html`

**Blog post URL pattern:** `myervisit.com/[slug]` (no .html extension in URL, handled by vercel.json)

### Navigation Structure
```
Logo: "Eric Cummins, MD / Anyone. Anything. Anytime."
Links: Home | About | Blog | Resources | Share Your Experience (#reviews)
Mobile: Hamburger menu → overlay with ✕ close button
```

### Page Sections (Index Page)
1. **Hero** — Large headline with italic emphasis word, subtext, 2 CTA buttons, professional photo, stat badge ("15+ Years")
2. **Features** — 3 cards: Blog, Resources, About (each with emoji icon, title, description, arrow link)
3. **Most-Read Posts** — 3 featured blog cards with category badge, read time, title, excerpt, "Read More →"
4. **Reviews / Share Your Experience** — Privacy note, links to external review platforms

### Content Assets (External CDN)
All PDFs and the main professional photo are hosted on Zyrosite CDN:
- **Photo:** `https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=960,fit=crop/A3Q70Q8wK2taaqjP/cummins.professional.photo.8.14.2023-YZ9jy9WOVocq9xb6.jpg`
- **ER Visit Companion PDF:** `https://assets.zyrosite.com/A3Q70Q8wK2taaqjP/ed.visit.planner-A0xvxDB9kJUaa9oB.pdf`
- **Medication List PDF:** `https://assets.zyrosite.com/A3Q70Q8wK2taaqjP/simple-medication-log-sheet-planner-Yg242RrpxohG8BBl.pdf`
- **Medical History Form PDF:** `https://assets.zyrosite.com/A3Q70Q8wK2taaqjP/medical-history-planner-sheet-mp848RxRjeIjBKLe.pdf`

### Design Patterns to Preserve
- **Section labels:** Small caps/muted text label above h2 headings (e.g., "What You'll Find Here" above "Made for Patients.")
- **Italic emphasis in headings:** Key words italicized for punch (e.g., *Lost*, *connection*)
- **Emoji icons:** Used for feature cards and About page focus areas (📝 📄 🩺 🏥 ⚡ 💬 🤝)
- **✦ symbol:** Used in credentials/bullet lists on About page
- **CTA buttons:** Primary + secondary button pairing in hero sections
- **Arrow links:** "Read More →" and "Learn More →" style inline links
- **Quote block:** Italicized pullquote with em-dash attribution
- **Footer layout:** Brand name + tagline + Quick Links column + Free Resources column + legal disclaimer

### Content Voice & Tone
- **Audience:** Patients and families, not clinicians
- **Tone:** Warm, conversational, honest, approachable — not clinical or academic
- **POV:** First person ("I've been an emergency medicine physician for over 15 years...")
- **Jargon:** Minimal; plain language preferred
- **Reading level:** General public friendly
- **Core tagline:** "Anyone. Anything. Anytime."
- **Core message:** Reducing patient anxiety and bridging the gap between patients and the ED

### About Page Key Facts
- **Name:** Dr. Eric Cummins, MD
- **Title:** Emergency Medicine Physician / Facility Medical Director
- **Hospital:** Banner Gateway Medical Center (BGMC)
- **Also:** Vice Chief of Staff, BGMC
- **Med school:** University of Arizona College of Medicine, Tucson
- **Residency:** The Ohio State University Wexner Medical Center
- **Experience:** 15+ years
- **Hometown:** Youngstown, Ohio

### Standard Footer Disclaimer
```
This website is for informational purposes only and does not constitute medical advice.
If you are experiencing a medical emergency, call 911 or go to your nearest emergency
department immediately.

© 2025 Eric Cummins, MD
```

---

## 2. directory.myervisit.com — BGMC Staff Directory

### Tech Stack
- **Single HTML file** — `index.html` only
- No external CSS file, no separate JS file
- All styling and functionality is self-contained in `index.html`
- 100% HTML

### File Structure
```
/
├── index.html   ← Entire site in one file
└── README.md
```

### Content Structure
- **Title:** "BGMC Phone Book"
- **Table columns:** Last Name | First Name | Phone | Specialty | Type
- **Entry count:** ~150+ entries
- **Audience:** BGMC ED staff (internal use only)
- **Specialties included:** Emergency, Hematology/Oncology, Medical Oncology, Stem Cell Team, General Surgery, Hand Surgery, Hospitalist, Observation (OOU), Pediatric (multiple subspecialties), Gastroenterology, Urology, Podiatry, Pulmonology, Psychiatry, Dental, Family Medicine, ENT, Dermatology, Plastic Surgery, Addiction, and ED department numbers

### Key Phone Numbers (Do Not Remove)
- BGMC Emergency Main Line: (480) 543-2485
- Main ED Phone: (480) 543-2485
- Charge RN: (480) 543-3333
- MRI Tech: (480) 543-5360
- Red Zone (RN): (480) 543-2349
- Triage (RN): (480) 543-5184
- Physician IT Hotline 24/7: (602) 747-7828

### Update Instructions
When adding/editing directory entries:
1. Maintain alphabetical order within each specialty group
2. Table format: `<tr><td>Last</td><td>First</td><td>Phone</td><td>Specialty</td><td>Type</td></tr>`
3. Cell = "Cell" for mobile numbers, "Office" for office lines
4. Specialty strings must match existing entries exactly (e.g., "Hematology/Oncology" not "Hem/Onc")
5. For entries with no phone type, leave the Type cell empty

---

## 3. myervisit.com/portal — Patient Portal

### What it is
- A sub-path of `myervisit.com` (not a separate repo or Vercel project)
- Routing handled via `vercel.json` in the main myervisit.com repo
- Related file: `inpatient-criteria-pdf.html`
- **Note:** Full portal structure should be confirmed by reviewing `vercel.json` before making changes

---

## 🎨 DESIGN SYSTEM (myervisit.com)

> All values below come directly from `styles.css`. Do not deviate from these unless Eric explicitly requests a change.

### Fonts
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap');
```
| Role | Font | Usage |
|------|------|-------|
| Headings (h1–h4) | **Playfair Display**, Georgia, serif | All section headers, brand name, footer headings, pullquotes |
| Body / UI | **DM Sans**, sans-serif | Paragraphs, nav links, buttons, labels, form fields |

### Color Palette (CSS Variables)
```css
--navy:        #1E3A5F   /* Primary brand color — hero bg, navbar, footer, CTA sections */
--navy-light:  #2A4E7A   /* Hover states on navy elements */
--gold:        #C9973A   /* Accent — buttons, links, icons, highlights, brand name */
--gold-light:  #E0B35A   /* Hover states on gold elements */
--teal:        #3D7A8A   /* Section tags, category badges, filter buttons, teal accents */
--teal-light:  #4E8E9E   /* Hover/focus states on teal elements */
--cream:       #F7F3EE   /* Page background */
--cream-dark:  #EDE8E0   /* Slightly darker cream for card backgrounds */
--charcoal:    #2D2D2D   /* Default body text color */
--warm-white:  #FEFCF9   /* Card backgrounds, form backgrounds, CTA sections */
--muted:       #6B7280   /* Secondary text, descriptions, meta info */
```

### Shadows
```css
--shadow-sm:   0 2px 8px rgba(30,58,95,0.08)
--shadow-md:   0 6px 24px rgba(30,58,95,0.13)
--shadow-lg:   0 12px 48px rgba(30,58,95,0.18)
--shadow-gold: 0 4px 20px rgba(201,151,58,0.28)
```

### Spacing & Shape
```css
--radius:    12px   /* Standard card/container border radius */
--radius-sm:  8px   /* Smaller elements: buttons, inputs, badges */
--max-w:   1200px   /* Max container width */
--transition: 0.3s ease
```

### Typography Scale
| Element | Size | Weight | Font |
|---------|------|--------|------|
| h1 | clamp(2.2rem, 5vw, 3.6rem) | 700 | Playfair Display |
| h2 | clamp(1.8rem, 3.5vw, 2.6rem) | 700 | Playfair Display |
| h3 | clamp(1.2rem, 2.5vw, 1.6rem) | 600 | Playfair Display |
| h4 | 1.1rem | 600 | Playfair Display |
| Body | 1rem | 400 | DM Sans, line-height 1.75 |
| Section tag | 0.72rem | 600 | DM Sans, uppercase, letter-spacing 0.12em |
| Category tag | 0.68rem | 600 | DM Sans, uppercase, letter-spacing 0.08em |
| Muted/meta | 0.78–0.9rem | 400 | DM Sans |

### Button Variants
| Class | Background | Text | Border |
|-------|-----------|------|--------|
| `.btn-primary` | `--navy` | `--warm-white` | `--navy` |
| `.btn-gold` | `--gold` | `--warm-white` | `--gold` |
| `.btn-outline` | transparent | `--gold` | `--gold` → fills on hover |
| `.btn-outline-white` | transparent | white | rgba(255,255,255,0.7) |
| All buttons | padding: 13px 28px | font-size: 0.95rem | border-radius: `--radius-sm` |

### Key Component Patterns

**Section Tag** — small pill label above headings:
```html
<span class="section-tag">What You'll Find Here</span>
```
- Color: `--teal` on teal-tinted background (`rgba(61,122,138,0.1)`)
- On dark/navy backgrounds: use `--gold` on gold-tinted background

**Accent Line** — gold decorative underline below section tags:
```html
<div class="accent-line"></div>         <!-- left-aligned -->
<div class="accent-line center"></div>  <!-- centered -->
```
- 56px wide × 3px tall, `--gold`, border-radius 2px

**Feature/Care Cards** — hover lifts card up 5px with `--shadow-md`; border-left: 4px solid `--gold` on care cards

**Blog Card Image Gradients:**
```css
.bg-1 { background: linear-gradient(135deg, #1E3A5F, #3D7A8A); }
.bg-2 { background: linear-gradient(135deg, #2A4E7A, #C9973A); }
.bg-3 { background: linear-gradient(135deg, #3D7A8A, #1E3A5F); }
```

**Page Hero (inner pages)** — navy background with dot pattern + cream wave cutout at bottom:
```css
clip-path: ellipse(55% 100% at 50% 100%)
```

**Hero Image Frame** — gold dashed border offset `top: -18px; right: -18px` creates depth effect; on mobile collapses to circular crop

**Pullquote** — Playfair Display italic, large decorative `"` in gold (opacity 0.18), max-width 680px

**Floating Animation** — `.feature-icon`, `.pdf-icon`, `.res-icon`, `.care-icon` all use:
```css
@keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-9px); } }
```
Staggered with animation-delay (0s, 0.6s, 1.2s, etc.)

**Google Review Button** — white pill button with shimmer animation + pulse glow + sparkle elements. On hover: lifts, scales 1.04, gold border.

**Navbar behavior:**
- Transparent on load → `rgba(30,58,95,0.97)` with blur on scroll (`navbar.scrolled`)
- Brand name in `--gold` Playfair Display
- Nav links underline in gold on hover/active
- CTA link styled as gold pill button

### Responsive Breakpoints
| Breakpoint | Behavior |
|-----------|---------|
| ≤ 960px | 3-col grids → 2-col; hero stacks vertically; image becomes circular 200px; about/contact grids → 1-col |
| ≤ 600px | All grids → 1-col; hamburger menu shown; desktop nav hidden; hero padding reduces |

---

## ⚙️ DEPLOYMENT WORKFLOW

```
Edit file → Commit & push to main branch → Vercel auto-deploys (usually < 2 min)
```

- **No build step required** for myervisit.com or bgmc-directory
- **DNS:** Both domains are configured in Vercel dashboard; no DNS changes needed for content updates
- **Preview deployments:** Vercel creates preview URLs for non-main branches automatically

---

## ✅ QUICK CHANGE CHECKLIST

Before making any change, confirm:
- [ ] Which site/file is being modified?
- [ ] Does the change affect styles.css (global) or just one .html file?
- [ ] For new blog posts: create new .html file at root, add to `blog.html` index, use slugified filename
- [ ] For directory changes: edit `index.html` in bgmc-directory repo only
- [ ] Preserve all external CDN links (zyrosite.com assets)
- [ ] Keep footer disclaimer on all myervisit.com pages
- [ ] Test mobile navigation (hamburger menu) after any structural HTML changes

---

## 🎯 COMMON UPDATE SCENARIOS

| Task | File(s) to Edit | Repo |
|------|----------------|------|
| Add new blog post | New [slug].html + blog.html | myervisit.com |
| Update About page credentials | about.html | myervisit.com |
| Add/update a resource PDF link | resources.html | myervisit.com |
| Update navigation links | All .html files (nav is repeated) | myervisit.com |
| Change global colors/fonts | styles.css | myervisit.com |
| Add a provider to the directory | index.html | bgmc-directory |
| Update a phone number | index.html | bgmc-directory |
| Add a new directory specialty group | index.html (add rows + section header if used) | bgmc-directory |
