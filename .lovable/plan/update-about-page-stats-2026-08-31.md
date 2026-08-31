# Update About Page Stats

## Goal
Replace the current 3-stat strip on the About page with the 6 stats from the provided slide.

## Changes — `src/routes/about.tsx`

Replace the existing stats array with a 6-item grid (3 columns × 2 rows on desktop):

1. **$1.2B+ — PPPs Approved by FEC (2020)**
   In 2020 alone, Zebcha facilitated over $1.2 billion in Public-Private Partnerships approved by Nigeria's Federal Executive Council — the highest decision-making body.
2. **85+ — Infrastructure Projects**
   85+ projects spanning power, transport, water, housing and agro-processing — across 18 of Nigeria's 36 states, plus 6 African and international engagements.
3. **$8B+ — Cumulative Project Value**
   The total deal value across all projects Zebcha has developed, advised on or arranged financing for since 2011 — equivalent to a mid-sized national infrastructure budget.
4. **7,000+ — Jobs Created (2011–2026)**
   Direct and indirect jobs generated through Zebcha's infrastructure projects over 15 years.
5. **$2B+ — Greenfield Deals in Development**
   New, ground-up projects currently in various stages of development — no existing revenue stream yet, higher risk but higher growth potential.
6. **18 of 36 — Nigerian States Reached**
   Project reach across half of Nigeria's states, demonstrating geographic breadth beyond Lagos and Abuja.

## Design
- Match the slide's style: dark forest-green cards with gold (ochre) numbers, bold white stat titles, and italic supporting text.
- Scroll-reveal animations preserved, staggered per card.
- Responsive: 1 column mobile → 2 columns tablet → 3 columns desktop.
