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

---

---

# 📊 ED MONTHLY OPERATING REPORT (MOR) — FULL PIPELINE

> **One-sentence start prompt for future months:**
> *"Here's [Month].xlsx — run the full MOR pipeline and push to the site."*
> Claude will handle everything: data analysis → HTML build → GitHub push → Vercel deploy.

---

## 🔑 CREDENTIALS & IDs

| Item | Value |
|---|---|
| GitHub Repo | `AZEMDoc33/myervisit.com` |
| GitHub Token | `[YOUR_GITHUB_TOKEN — store in Claude Project instructions, not here]` |
| Vercel Team ID | `team_KFSPAFbGtf3qi3lA1WzW96lS` |
| Vercel Project ID | `prj_cHSm7Skhr9h6BoDC1xvNBKqydlbq` |
| Director PIN | `3227` |
| Live URL | `myervisit.com/ed-metrics` |
| MOR file path pattern | `ed-metrics/2026/[month].html` |
| Index hub file | `ed-metrics/index.html` |

---

## 📁 FILE STRUCTURE FOR ED METRICS

```
ed-metrics/
  index.html              ← Month selector hub (flip cards from "Coming Soon" to "Published")
  2026/
    january.html          ← ✅ Published
    february.html         ← ✅ Published
    march.html            ← ✅ Published
    april.html            ← ✅ Published
    may.html              ← Coming Soon
    june.html             ← Coming Soon
    ...
```

---

## ⚡ PRODUCTIVITY FORMULAS

```
Eligible Volume = Total Visits − LWOT patients
Pt/Hr  = Eligible Volume ÷ (MD Hours + APC Hours)
aPPH   = Eligible Volume ÷ (MD Hours + 0.5 × APC Hours)
```

**Goals:** Pt/Hr ≥ 1.85 · aPPH ≥ 2.45

**Color coding in the productivity card:**
- At or above goal → green (`#6ee7a0`) with ✅ ABOVE GOAL badge
- Below goal → amber (`#fdba74`) with ⚠️ BELOW GOAL badge

**Always ask for MD hours and APC hours** if not provided with the Excel file. If not provided, use the prior month's hours as a provisional estimate and clearly mark with † in the card.

---

## 🏥 Q1 2026 HOURS REFERENCE

| Month | MD Hours | APC Hours | Pt/Hr | aPPH |
|---|---|---|---|---|
| January | 1,201.00 | 1,055.33 | 1.91 ✅ | 2.49 ✅ |
| February | 1,095.00 | 962.00 | 2.07 ✅ | 2.70 ✅ |
| March | 1,286.00 | 997.75 | 1.99 ✅ | 2.55 ✅ |
| April | 1,268.25 | 985.25 | 1.89 ✅ | 2.41 ⚠️ |

---

## 📋 EXCEL COLUMN MAPPING

| Field | Column | Notes |
|---|---|---|
| Check-in timestamp | `CHECKIN_DATE` | Parse as datetime |
| Check-out timestamp | `CHECKOUT_DATE` | Parse as datetime |
| Disposition | `CHECKOUT_DISPOSITION` | Classify into discharge/admit/obs/LWOT |
| Acuity (ESI) | `ACUITY` | Float 1.0–5.0 |
| Primary provider | `PRIM_PHYSICIAN` | Format as LASTNAME FI |
| Door-to-doc | `DOOR_TO_DOC` | HH:MM string → parse to minutes |
| Encounter ID | `FIN_NUMBER` | Unique key |

---

## 📊 DISPOSITION DEFINITIONS

**Discharge** (include in discharge LOS & provider LOS):
`Home (routine)`, `Acute Care Facility (Banner)`, `Acute Care Facility (non-Banne)`, `Assisted Living/Group Home`, `Home with Hospice Care`, `Home with Home Health`, `Skilled nursing facility (non-)`, `Federal /VA Hospital`, `Rehabilitation Facility`, `Long Term Care Facility`, `Pediatric facility`, `Skilled nursing facility (Bann)`, `Routine Discharge`

**Admission:** `Admit to Inpatient`
**Observation:** `Place in Observation`
**LWOT:** `Left without Treatment (LWOT)`, `Eloped (left unannounced)`, `LWOT`

---

## 🧮 CALCULATION RULES

- **LOS:** `(CHECKOUT_DATE − CHECKIN_DATE).total_seconds() / 60`
- **Cap LOS at 1,440 min (24h)** — anything over is a registration error (admit checkout dates)
- **D2D:** Parse `HH:MM` string → `hours×60 + minutes`
- **Median** (not mean) for LOS and D2D metrics
- **Arrivals normalized** by distinct calendar dates, not total rows
- **DOW order:** Sunday → Saturday (dayofweek: 6,0,1,2,3,4,5)
- **Provider format:** LASTNAME FI — uppercase last name, first initial only, no credentials
- **Minimum provider sample:** 15 encounters for LOS chart; no minimum for PPH (use all providers shown in TeamHealth data)

---

## 📈 STANDARD MOR SECTIONS (in order)

1. Header with KPIs (7 metrics in header strip)
2. Month navigation (← prev · current · next →)
3. Core Volume & Throughput Metrics (2 rows of 4 metric cards)
4. Q1/YTD Trend Summary table (include when 2+ months exist)
5. Provider Productivity card (dark navy gradient)
6. Admissions & Disposition Breakdown table
7. Patient Arrival Volume by Hour (light blue bars)
8. Patient Arrival Volume by Day of Week (green bars + error bars + gold ★ on busiest day)
9. LWOT Analysis by Hour (purple bars, total count not average)
10. Provider Productivity — Pt/Hr by Clinician (real chart when PPH data available, blurred placeholder otherwise)
11. Provider Discharge LOS — ESI 3/4/5 (horizontal bar, sorted low→high, 300-min goal line)
12. ESI 2 Door-to-Doc by Hour (bars + red dashed 25-min target line)
13. Predictive Staffing Trigger Analysis (trigger boxes + validation table)
14. **[PIN LOCKED — Director Only]** Operational Insights
15. **[PIN LOCKED — Director Only]** Recommended Actions
16. **[PIN LOCKED — Director Only]** Data Quality Notes

---

## 🎨 CHART COLOR REFERENCE

| Chart | Bar Color | Border |
|---|---|---|
| Hourly arrivals | `rgba(90,143,160,0.6)` light teal | `rgba(42,100,120,0.9)` |
| Day of week | `rgba(102,187,106,0.82)` green | `rgba(56,142,60,0.9)` |
| LWOT by hour | `rgba(159,122,234,0.75)` purple | `rgba(107,70,193,1)` |
| Provider LOS (low tertile) | `rgba(58,138,90,0.72)` green | `rgba(39,103,73,1)` |
| Provider LOS (mid tertile) | `rgba(124,92,191,0.68)` purple | `rgba(85,60,154,1)` |
| Provider LOS (high tertile) | `rgba(192,57,43,0.68)` red | `rgba(155,44,44,1)` |
| PPH below goal (<1.85) | `rgba(217,119,6,0.72)` amber | `rgba(161,87,4,0.9)` |
| PPH below dept avg | `rgba(90,143,160,0.72)` teal | `rgba(42,100,120,0.9)` |
| PPH above dept avg | `rgba(58,138,90,0.72)` green | `rgba(39,103,73,0.9)` |
| ESI 2 D2D (within target) | `rgba(90,143,160,0.7)` | `rgba(42,100,120,0.9)` |
| ESI 2 D2D (above 25 min) | `rgba(192,57,43,0.75)` red | `rgba(155,44,44,1)` |

**Design palette (CSS vars):**
`--cream: #f2e8da` · `--header: #243b55` · `--gold: #c9a94b` · `--teal: #5a8fa0`
Fonts: Nunito (body) + Playfair Display (title)

---

## 🔐 DIRECTOR PIN SYSTEM

All MOR files have a `🔒` icon in the footer. Tapping it opens a PIN modal.

- **PIN:** `3227`
- Hidden sections: Operational Insights, Recommended Actions, Data Quality Notes
- These sections are wrapped in `<div id="director-zone">` which has `display:none` by default
- Correct PIN calls `unlockDirector()` which adds class `unlocked` to show the zone
- The PIN JS constant is: `const DIRECTOR_PIN = '3227';`
- To change the PIN: find `DIRECTOR_PIN` in the HTML file, update value, push to GitHub

---

## 🔮 PREDICTIVE STAFFING TRIGGER

**Thresholds:** Weekday >142 arrivals · Weekend >122 arrivals

**4-month validated noon trigger (use ≥50 as standing protocol):**

| Month | Threshold | Sensitivity | PPV |
|---|---|---|---|
| January | ≥51 by noon | 77% | 83% |
| February | ≥45 by noon | 94% | 100% |
| March | ≥54 by noon | 81% | 93% |
| April | ≥55 by noon | 71% | 91% |

**Recommendation:** If ≥50 patients arrive by noon on a weekday → alert charge RN → initiate supplemental coverage discussion.

---

## 🚀 DEPLOYMENT PIPELINE

```bash
# Step 1: Clone repo (first session only — will already be cloned in project)
git clone "https://[TOKEN]@github.com/AZEMDoc33/myervisit.com.git" site

# Step 2: Build MOR HTML file
# Output: site/ed-metrics/2026/[month].html

# Step 3: Update index hub
# site/ed-metrics/index.html — flip month card from coming-soon to live, move NEW badge

# Step 4: Commit and push
cd site
git config user.email "ed-metrics@myervisit.com"
git config user.name "Eric Cummins MD"
git add ed-metrics/2026/[month].html ed-metrics/index.html
git commit -m "Add [Month] 2026 MOR + activate [month] card"
git push "https://[TOKEN]@github.com/AZEMDoc33/myervisit.com.git" main

# Vercel auto-deploys in ~20-30 seconds after push
```

**To verify deployment:** Use `Vercel:list_deployments` with projectId `prj_cHSm7Skhr9h6BoDC1xvNBKqydlbq` and teamId `team_KFSPAFbGtf3qi3lA1WzW96lS` — look for `state: READY` on the latest entry.

---

## 📅 INDEX HUB — MONTH CARD FLIP INSTRUCTIONS

When publishing a new month, update `ed-metrics/index.html`:

**Coming Soon card (before):**
```html
<a href="/ed-metrics/2026/[month]" class="month-card coming-soon">
  <div class="month-emoji">[emoji]</div>
  <div class="month-name">[Month]</div>
  <div class="month-tag tag-soon">Coming Soon</div>
</a>
```

**Published card (after):**
```html
<a href="/ed-metrics/2026/[month]" class="month-card live">
  <div class="new-badge">NEW</div>
  <div class="month-emoji">[emoji]</div>
  <div class="month-name">[Month]</div>
  <div class="month-tag tag-live">Published</div>
</a>
```

Also **remove** the `NEW` badge from the previous month's card.

**Month emojis:** Jan ❄️ · Feb 💝 · Mar 🌱 · Apr 🌸 · May ☀️ · Jun 🏖️ · Jul 🎆 · Aug 🌻 · Sep 🍂 · Oct 🎃 · Nov 🍁 · Dec 🎄

---

## 📊 PROVIDER PPH CHART

PPH data comes from a TeamHealth screenshot (not from the Excel file).
- When screenshot is provided: build real bar chart with `canvas id="providerPPHChart"`
- When not provided: show blurred placeholder card with ghost bars underneath
- Chart is sorted **lowest → highest** (least productive at top, most at bottom)
- Two reference lines: dotted goal at 1.85 · dashed dept cohort average
- Color code: amber = below goal · teal = below avg · green = above avg

---

## 🏷️ HEADER / ATTRIBUTION

Every MOR page header should include:
```html
<div class="meta-val" style="font-size:15px;font-weight:800;color:white;">Eric Cummins, MD</div>
<div class="meta-val" style="font-size:11px;color:rgba(255,255,255,0.5);font-weight:600;">ED Medical Director</div>
```

---

## ✅ NEW MONTH CHECKLIST

- [ ] Upload raw Excel file
- [ ] Confirm MD hours and APC hours for the month
- [ ] Confirm PPH screenshot from TeamHealth (or note as placeholder)
- [ ] Run full data analysis (all 14 metrics)
- [ ] Build HTML file from template, update all data/JS
- [ ] Update productivity card with real hours (color-coded green/amber)
- [ ] Update Q1/YTD trend table
- [ ] Set director PIN to `3227`
- [ ] Push `ed-metrics/2026/[month].html` to GitHub
- [ ] Update `ed-metrics/index.html` — flip card, move NEW badge
- [ ] Verify Vercel deployment `state: READY`
- [ ] Confirm live at `myervisit.com/ed-metrics/2026/[month]`
