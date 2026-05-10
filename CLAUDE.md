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
- **Section labels:** Small caps/muted text label above h2 headings
- **Italic emphasis in headings:** Key words italicized for punch
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
- **Core tagline:** "Anyone. Anything. Anytime."

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
- **Single HTML file** — `index.html` only. All styling and functionality self-contained.

### Content Structure
- **Title:** "BGMC Phone Book"
- **Table columns:** Last Name | First Name | Phone | Specialty | Type
- **Audience:** BGMC ED staff (internal use only)

### Key Phone Numbers (Do Not Remove)
- BGMC Emergency Main Line: (480) 543-2485
- Charge RN: (480) 543-3333
- MRI Tech: (480) 543-5360
- Red Zone (RN): (480) 543-2349
- Triage (RN): (480) 543-5184
- Physician IT Hotline 24/7: (602) 747-7828

### Update Instructions
1. Maintain alphabetical order within each specialty group
2. Table format: `<tr><td>Last</td><td>First</td><td>Phone</td><td>Specialty</td><td>Type</td></tr>`
3. Cell = "Cell" for mobile numbers, "Office" for office lines
4. Specialty strings must match existing entries exactly (e.g., "Hematology/Oncology" not "Hem/Onc")

---

## 3. myervisit.com/portal — Patient Portal

- Sub-path of `myervisit.com` (same repo and Vercel project)
- Routing handled via `vercel.json`
- Related file: `inpatient-criteria-pdf.html`

---

## 🎨 DESIGN SYSTEM (myervisit.com)

### Fonts
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap');
```
| Role | Font |
|------|------|
| Headings (h1–h4) | **Playfair Display**, Georgia, serif |
| Body / UI | **DM Sans**, sans-serif |

### Color Palette (CSS Variables)
```css
--navy:        #1E3A5F
--navy-light:  #2A4E7A
--gold:        #C9973A
--gold-light:  #E0B35A
--teal:        #3D7A8A
--teal-light:  #4E8E9E
--cream:       #F7F3EE
--cream-dark:  #EDE8E0
--charcoal:    #2D2D2D
--warm-white:  #FEFCF9
--muted:       #6B7280
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
--radius:    12px
--radius-sm:  8px
--max-w:   1200px
--transition: 0.3s ease
```

### Responsive Breakpoints
| Breakpoint | Behavior |
|-----------|---------|
| ≤ 960px | 3-col grids → 2-col; hero stacks vertically |
| ≤ 600px | All grids → 1-col; hamburger menu shown |

---

## ⚙️ DEPLOYMENT WORKFLOW

```
Edit file → Commit & push to main branch → Vercel auto-deploys (~2 min)
```

---

## ✅ QUICK CHANGE CHECKLIST

- [ ] Which site/file is being modified?
- [ ] For new blog posts: create new .html at root, add to `blog.html` index
- [ ] For directory changes: edit `index.html` in bgmc-directory repo only
- [ ] Preserve all external CDN links (zyrosite.com assets)
- [ ] Keep footer disclaimer on all myervisit.com pages

---

---

# 📊 ED MONTHLY OPERATING REPORT (MOR) — FULL PIPELINE

> **One-sentence start prompt for a new month:**
> *"Here's [Month].xlsx — run the full MOR pipeline and push to the site."*

---

## 🔑 CREDENTIALS & IDs

| Item | Value |
|---|---|
| GitHub Repo | `AZEMDoc33/myervisit.com` |
| GitHub Token | `[GITHUB_TOKEN — store in Claude Project instructions, not in this file]` |
| Vercel Team ID | `team_KFSPAFbGtf3qi3lA1WzW96lS` |
| Vercel Project ID | `prj_cHSm7Skhr9h6BoDC1xvNBKqydlbq` |
| Live URL | `myervisit.com/ed-metrics` |
| MOR file path pattern | `ed-metrics/2026/[month].html` |
| Index hub file | `ed-metrics/index.html` |

---

## 📁 FILE STRUCTURE FOR ED METRICS

```
ed-metrics/
  index.html              ← Month selector hub + Sophias Served ticker
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

**Color coding in the group productivity card:**
- At or above goal → green (`#6ee7a0`) with ✅ ABOVE GOAL badge
- Below goal → amber (`#fdba74`) with ⚠️ BELOW GOAL badge

**Always ask for MD hours and APC hours** if not provided. Use prior month as provisional and mark with †.

---

## 🏥 HOURS REFERENCE (updated each month)

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

**Discharge:** `Home (routine)`, `Acute Care Facility (Banner)`, `Acute Care Facility (non-Banne)`, `Assisted Living/Group Home`, `Home with Hospice Care`, `Home with Home Health`, `Skilled nursing facility (non-)`, `Federal /VA Hospital`, `Rehabilitation Facility`, `Long Term Care Facility`, `Pediatric facility`, `Skilled nursing facility (Bann)`, `Routine Discharge`

**Admission:** `Admit to Inpatient`
**Observation:** `Place in Observation`
**LWOT:** `Left without Treatment (LWOT)`, `Eloped (left unannounced)`, `LWOT`

---

## 🧮 CALCULATION RULES

- **LOS:** `(CHECKOUT_DATE − CHECKIN_DATE).total_seconds() / 60`
- **Cap LOS at 1,440 min (24h)** — anything over is a registration error
- **D2D:** Parse `HH:MM` string → `hours×60 + minutes`
- **Median** (not mean) for LOS and D2D metrics
- **Arrivals normalized** by distinct calendar dates, not total rows
- **DOW order:** Sunday → Saturday (dayofweek: 6,0,1,2,3,4,5)
- **Provider format:** LASTNAME FI — uppercase last name, first initial only
- **Minimum provider sample:** 15 encounters for LOS chart; no minimum for PPH

---

## 📈 STANDARD MOR SECTIONS (exact order — do not deviate)

1. **Header** — KPI strip: Total Visits + AVG Daily sub-label, Avg Daily Volume, Admission Rate, ESI 2 <25 min, Median DC LOS (h+m format), Median D2D, LWOT Rate
2. **Month navigation** — ← prev · current · next →
3. **Provider Productivity — Pt/Hr by Clinician** — individual PPH chart (highest → lowest)
4. **Provider Discharge LOS — ESI 3/4/5** — individual LOS chart (lowest → highest)
5. **Provider Productivity** — group Pt/Hr and aPPH card (dark navy gradient)
6. **Admissions & Disposition Breakdown** — table
7. **Patient Arrival Volume by Hour** — light teal bars
8. **Patient Arrival Volume by Day of Week** — green bars + gold ★ busiest day
9. **LWOT Analysis by Hour** — purple bars, total count not average
10. **ESI 2 Door-to-Doc Time by Arrival Hour** — bars + red dashed 25-min target line + ESI 2 D2D Summary card

**Pages end after ESI 2 D2D Summary. Nothing follows it.**

### ❌ PERMANENTLY REMOVED — NEVER ADD BACK
- ~~Director zone / PIN lock system~~ — caused chart rendering failures; banned permanently
- ~~Operational Insights section~~ — director eyes only, not published
- ~~Recommended Actions section~~ — director eyes only, not published
- ~~Data Quality Notes section~~ — director eyes only, not published
- ~~Predictive Staffing Trigger Analysis~~ — director eyes only, not published
- ~~Q1/YTD Trend Summary table~~ — removed for simplicity
- ~~Core Volume & Throughput Metrics section~~ — redundant with header KPIs
- ~~Volume Summary sidebar card~~ — redundant with DOW chart
- ~~ESI Distribution card~~ — removed for simplicity
- ~~D2D >120 min metric~~ — removed
- ~~Mobile leaderboard cards~~ ("Patients per Hour — Ranked Best → Lowest") — removed; ⭐ goes in chart labels instead
- ~~View toggle button~~ — removed with leaderboard

---

## 🎨 CHART COLOR REFERENCE

| Chart | Bar Color | Border |
|---|---|---|
| Hourly arrivals | `rgba(90,143,160,0.6)` light teal | `rgba(42,100,120,0.9)` |
| Day of week | `rgba(102,187,106,0.82)` green | `rgba(56,142,60,0.9)` |
| LWOT by hour | `rgba(159,122,234,0.75)` purple | `rgba(107,70,193,1)` |
| Provider LOS (≤240 min ⭐) | `rgba(45,106,79,0.82)` dark green | `rgba(27,76,56,1)` |
| Provider LOS (>240 min) | `rgba(45,106,79,0.35)` light green | `rgba(45,106,79,0.6)` |
| PPH (≥1.88 pt/hr ⭐) | `rgba(36,59,85,0.88)` dark navy | `rgba(36,59,85,1)` |
| PPH (<1.88 pt/hr) | `rgba(100,130,170,0.38)` light navy | `rgba(100,130,170,0.6)` |
| ESI 2 D2D (within 25 min) | `rgba(90,143,160,0.7)` | `rgba(42,100,120,0.9)` |
| ESI 2 D2D (above 25 min) | `rgba(192,57,43,0.75)` red | `rgba(155,44,44,1)` |

**MOR design palette (CSS vars):**
`--cream: #f2e8da` · `--header: #243b55` · `--gold: #c9a94b` · `--teal: #5a8fa0`
Fonts: Nunito (body) + Playfair Display (title)

---

## 👨‍⚕️ PROVIDER PPH CHART STANDARDS

- **Data source:** TeamHealth screenshot — always ask for this separately from the Excel file
- **Sort order:** **Highest → lowest** (best provider at TOP of chart)
- **Star threshold `PPH_STAR = 1.88`:** Providers at or above 1.88 get ⭐ appended directly to their name in the y-axis label (e.g., `"WRIGHT E ⭐"`)
- **Below 1.88:** Name only, no emoji, no negative indicators
- **Colors:** Dark navy (`rgba(36,59,85,0.88)`) for ≥1.88 · Light navy (`rgba(100,130,170,0.38)`) for <1.88
- **Reference line:** Dept cohort avg ONLY — **no goal line** (avoids making clinicians feel bad)
- **Subtitle text:** `⬛ ≥1.88 pt/hr (⭐) · 🔷 <1.88 pt/hr · Sorted highest → lowest · Dashed = dept cohort avg (X.XX pt/hr)`
- **Pill below subtitle:** Single navy pill: `📊 Dept Cohort Avg: X.XX pt/hr · ⭐ = ≥1.88 pt/hr`
- **No separate leaderboard section** — the ⭐ in the chart label IS the indicator

```javascript
const PPH_STAR = 1.88;
// Sort highest→lowest, add ⭐ to names at/above threshold
const pairs = [...].sort((a,b) => b.val - a.val);
pphNames = pairs.map(([v,n]) => v >= PPH_STAR ? `${n} ⭐` : n);
pphVals  = pairs.map(([v]) => v);
const pphBg  = pphVals.map(v => v >= PPH_STAR ? 'rgba(36,59,85,0.88)'  : 'rgba(100,130,170,0.38)');
const pphBdr = pphVals.map(v => v >= PPH_STAR ? 'rgba(36,59,85,1)'     : 'rgba(100,130,170,0.6)');
```

**pphGoalPlugin — dept avg line only:**
```javascript
const pphGoalPlugin = {id:'pphGoalLines', afterDraw(chart) {
  const ctx=chart.ctx, xScale=chart.scales.x, top=chart.chartArea.top, bottom=chart.chartArea.bottom;
  const xAvg = xScale.getPixelForValue(DEPT_AVG);
  ctx.save(); ctx.strokeStyle='rgba(42,100,120,0.7)'; ctx.lineWidth=2; ctx.setLineDash([7,5]);
  ctx.beginPath(); ctx.moveTo(xAvg,top); ctx.lineTo(xAvg,bottom); ctx.stroke();
  ctx.fillStyle='rgba(42,100,120,0.85)'; ctx.font='bold 10px Nunito,sans-serif';
  ctx.textAlign='left'; ctx.textBaseline='top';
  ctx.fillText('Avg '+DEPT_AVG, xAvg+3, top+8);
  ctx.setLineDash([]); ctx.restore();
}};
```

---

## 👨‍⚕️ PROVIDER LOS CHART STANDARDS

- **Data source:** Computed from Excel (ESI 3/4/5 discharges only, min 15 encounters)
- **Sort order:** Lowest → highest (best LOS at top)
- **Star threshold `LOS_STAR = 240`:** Providers at or below 240 min get ⭐ and dark green color
- **Above 240 min:** Light green, no emoji
- **Reference line:** 300-min goal line (red dashed)
- **Chart subtitle:** `🟢 ≤240 min · 🔵 >240 min · 300-min reference line`
- **LOS display format:** `Xh Ym` in main value (e.g., `3h 40m`), raw minutes in sub-label

```javascript
const LOS_STAR = 240;
const provBg  = provLOS.map(v => v <= LOS_STAR ? 'rgba(45,106,79,0.82)'  : 'rgba(45,106,79,0.35)');
const provBdr = provLOS.map(v => v <= LOS_STAR ? 'rgba(27,76,56,1)'      : 'rgba(45,106,79,0.6)');
```

---

## 🌐 ED METRICS INDEX PAGE (myervisit.com/ed-metrics)

### Sophias Served Ticker
- "Sophias Served" = Banner Health terminology for patients served
- Animated counter 0 → YTD total on scroll-in
- **Current total:** 17,594 (Jan 4,345 + Feb 4,318 + Mar 4,620 + Apr 4,311)
- Update the `TARGET` constant and month breakdown pills when publishing a new month
- Desktop: sticky sidebar (190px); Mobile (≤600px): compact horizontal strip

### Month Card Flip (Coming Soon → Published)
```html
<!-- Before -->
<a href="/ed-metrics/2026/[month]" class="month-card coming-soon">
  <div class="month-emoji">[emoji]</div>
  <div class="month-name">[Month]</div>
  <div class="month-tag tag-soon">Coming Soon</div>
</a>

<!-- After -->
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

## 🏷️ HEADER ATTRIBUTION

Every MOR page header includes:
```html
<div class="meta-val" style="font-size:15px;font-weight:800;color:white;">Eric Cummins, MD</div>
<div class="meta-val" style="font-size:11px;color:rgba(255,255,255,0.5);font-weight:600;">ED Medical Director</div>
```

---

## 🚀 DEPLOYMENT PIPELINE

```bash
# Step 1: Clone repo (first session only)
git clone "https://[TOKEN]@github.com/AZEMDoc33/myervisit.com.git" site

# Step 2: Build MOR HTML file
# Output: site/ed-metrics/2026/[month].html

# Step 3: Update index hub
# Flip month card + move NEW badge + update Sophias Served ticker total

# Step 4: Commit and push
cd site
git config user.email "ed-metrics@myervisit.com"
git config user.name "Eric Cummins MD"
git add ed-metrics/2026/[month].html ed-metrics/index.html
git commit -m "Add [Month] 2026 MOR + activate [month] card"
git push "https://[TOKEN]@github.com/AZEMDoc33/myervisit.com.git" main
```

**To verify:** Use `Vercel:list_deployments` — look for `state: READY` on the latest entry.

---

## ✅ NEW MONTH CHECKLIST

### Inputs needed before starting:
- [ ] Raw Excel file (.xlsx) for the month
- [ ] MD hours and APC hours for the month
- [ ] PPH screenshot from TeamHealth (horizontal bar chart with "Mean PPH")

### Build steps:
- [ ] Run full data analysis from Excel
- [ ] Build `ed-metrics/2026/[month].html` using a prior published month as template
- [ ] **PPH chart:** Sort highest→lowest · ⭐ appended to names ≥1.88 · dark/light navy · dept avg line only · no goal line
- [ ] **LOS chart:** Sort lowest→highest · ⭐ color for ≤240 min · 300-min red dashed goal line
- [ ] **LOS values:** Show as `Xh Ym` in mc-val, minutes in mc-sub
- [ ] **Total Visits sub:** Show `AVG Daily: X.X pts`
- [ ] **Group productivity card:** Color green ✅ or amber ⚠️ per goal
- [ ] **ESI 2 D2D Summary card:** Include Banner System-Wide Initiative note
- [ ] **Page ends after ESI 2 D2D Summary** — nothing after it
- [ ] **No director zone, no PIN system, no leaderboard sections, no toggle button, no insights, no actions, no predictive staffing, no Q1 trend table, no ESI distribution**
- [ ] Push `ed-metrics/2026/[month].html` to GitHub
- [ ] Update `ed-metrics/index.html`: flip card, move NEW badge, update Sophias Served total and month pill
- [ ] Verify Vercel deployment `state: READY`
- [ ] Confirm live at `myervisit.com/ed-metrics/2026/[month]`

---

## ⚠️ CRITICAL LESSONS LEARNED — READ BEFORE EDITING ANY MOR FILE

### 1. Never remove JS blocks with greedy `.*` + `re.DOTALL`
```python
# DANGEROUS — eats everything to end of file including </script></body></html>
re.sub(r'\n// MOBILE VIEW SYSTEM.*', '', h, flags=re.DOTALL)

# SAFE — anchor to a known end boundary
re.sub(r'\n// MOBILE VIEW SYSTEM.*?(?=\n</script>)', '', h, flags=re.DOTALL)
```
**After any JS removal, always verify:**
```bash
grep -c 'new Chart(' filename.html    # must be ≥ 5
grep -c '</body>' filename.html       # must be 1
grep -c '</html>' filename.html       # must be 1
```

### 2. Never use greedy HTML removal regex across chart sections
A regex like `<div class="section">.*?Operational Insights.*?</div></div>` with `re.DOTALL`
can match from the **first** section div in the document all the way to the target string,
wiping every chart section in between. Always remove unwanted sections by cutting between
known anchor strings (e.g., `</div><!-- end report-body -->` and `<div class="report-footer">`).

### 3. After any Python edit to an MOR file, run this integrity check before pushing:
```python
checks = {
    'canvases': h.count('<canvas '),          # expect 6
    'chart calls': h.count('new Chart('),     # expect 6+
    'body close': '</body>' in h,             # expect True
    'html close': '</html>' in h,             # expect True
    'no director': 'director-zone' not in h,  # expect True
    'no pin': 'pinOverlay' not in h,          # expect True
}
```

### 4. Director zone / PIN system is permanently abolished
It caused chart rendering failures multiple times. Never add it back in any form.
Any `#director-zone`, `.lock-btn`, `.pin-overlay`, `DIRECTOR_PIN`, `openPinModal`,
`unlockDirector`, or `lockDirector` found in any file should be deleted immediately.

### 5. Always build new months as complete standalone files
Never build incrementally by patching a template with Python restructuring scripts.
Each month's HTML should be fully written from scratch using a prior month as visual reference.
If edits to existing months are needed, use targeted `str_replace` on specific lines only.

