

## Team section refresh + Zebcha logo

### What will change

**1. Extract the Zebcha logo from the AIP PDF**
- Parse `Zebcha_AIP_2023_v7_1.pdf` and pull the logo image (page 1 cover).
- Save as `src/assets/zebcha-logo.png` (plus a white/inverted copy for the dark footer if needed).

**2. Use the logo in header + footer**
- `SiteHeader.tsx`: replace the "Z" monogram square with the extracted logo image (h-9). Keep the "Zebcha / Infrastructure" wordmark next to it.
- `SiteFooter.tsx`: replace the ochre "Z" square with the logo on the dark forest background (use a white/inverted version for legibility).

**3. Import the three portraits**
- Copy uploads into `src/assets/`:
  - `boss.jfif` → `src/assets/team-temitope.jpg`
  - `Dan.jfif` → `src/assets/team-daniel.jpg`
  - `dkd.jfif` → `src/assets/team-gideon.jpg` (kept as-is per your instruction)

**4. Rebuild the Leadership section on `/about`**

Replace the current 5-row text list with a 3-card portrait layout:

```text
┌─────────── Leadership ───────────┐
│                                   │
│  [PHOTO]      [PHOTO]    [PHOTO]  │
│  Temitope     Daniel     Gideon   │
│  Akinyemi     Umoru      Dikedi   │
│  MD / CEO     Team Lead  Team Lead│
│                                   │
└───────────────────────────────────┘
```

- Three-column grid on desktop (`md:grid-cols-3`), stacked on mobile.
- Square portrait (aspect-square), rounded-sm, object-cover, subtle forest-tinted border.
- Under each photo: name in display serif, role in terracotta eyebrow style.
- Temitope gets the CEO bio carried over from the current page (banking / NSIA / Yale MBA background). Daniel and Gideon get a short one-line "Team Lead" caption — no bios, since none were provided.
- Remove the other four entries (Victoire White, Emmanuella Akinyemi, Tubonemi Ilamina-Eremie, Ruth Byoma) entirely.

**5. Intro copy on the Leadership section**
- Shorten the left-column intro to reflect a smaller, focused team ("A compact senior team leading origination, structuring and execution across the AIP pipeline.").

### Files touched

- `src/assets/zebcha-logo.png` (new, extracted from PDF)
- `src/assets/team-temitope.jpg`, `team-daniel.jpg`, `team-gideon.jpg` (new)
- `src/components/SiteHeader.tsx` — swap monogram for logo
- `src/components/SiteFooter.tsx` — swap monogram for logo
- `src/routes/about.tsx` — rebuild `team` array + Leadership section JSX

### Out of scope (unchanged)

Home, Programme, Projects, Contact pages, styling tokens, and all other About-page sections (intro, stats, "What we do") stay exactly as they are.

