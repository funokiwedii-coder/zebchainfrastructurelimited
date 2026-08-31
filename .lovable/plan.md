# Extract Project Photos from Slide Screenshot

## Goal
Take the screenshot of the projects slide (to be uploaded), extract each project's photo, and use them on the Projects page and homepage featured cards.

## Steps

1. **Extract photos from the screenshot**
   - Read the uploaded screenshot to locate each photo and its label/title.
   - Crop each project photo out with Python (PIL), one file per project.
   - Enhance/upscale crops if the source resolution makes them soft.
   - Quality note: results depend on the screenshot's resolution — a full-resolution capture works best.

2. **Match photos to projects by label**
   - Match each cropped photo to the correct project using the label text on the slide and the order shown:
     Green Energy City, Tetracore Urea Complex, Tetracore Gas-to-Liquids Facility, 2nd Niger Bridge, Mission 300, COPIP (Clean Oceans), Don Domingo Water, Lagos–Ibadan Expressway, Integrated Shipbuilding Yard.
   - Any project with no photo on the slide keeps its current "Photo placeholder" card.

3. **Upload crops as CDN assets**
   - Upload each extracted photo with `lovable-assets` and reference via `.asset.json` pointers.

4. **Projects page** (`src/routes/projects.tsx`)
   - Add an optional `img` field to the `Project` type.
   - Render the photo in each card's image area when present; keep the placeholder for projects without one.

5. **Homepage featured cards** (`src/routes/index.tsx`)
   - Swap the generic stock images on Green Energy City, 2nd Niger Bridge, and Tetracore Gas-to-Liquids Facility for their extracted photos.

6. **Verify**
   - Check the build and confirm both pages render the new photos correctly in the preview.
