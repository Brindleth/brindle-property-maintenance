# brindle.

Property Maintenance & Smart Home Solutions. Exterior cladding, construction support and property improvements lead the existing website. React, TypeScript and Vite produce a completely static frontend for the existing free [GitHub Pages site](https://brindleth.github.io/brindle-property-maintenance/).

## Run on Windows

Use PowerShell in this folder, with Node.js 22.14 or newer:

~~~powershell
npm.cmd ci
npm.cmd run dev
~~~

Open the URL printed by Vite. The .cmd suffix avoids PowerShell script-wrapper issues without changing system settings.

~~~powershell
$env:BASE_PATH='/brindle-property-maintenance/'
npm.cmd run check
npm.cmd run preview
~~~

The check command runs TypeScript, ESLint, **13 regression tests**, the production build, static prerender and output validation. Preview the Pages path at http://127.0.0.1:4173/brindle-property-maintenance/.

## The three comparisons

1. **Exterior cladding:** original 1000020958 progress photograph versus a digitally completed upper-wall finish. The photograph retains the same building, viewpoint, windows and material language. The original upper wrap is still visible in the unedited Genuine work photograph.
2. **Patio:** the retained original Perth patio reference and corresponding unbuilt proposal, with the original aligned crop and pointer/touch interaction.
3. **Feature wall / entertainment:** one illustrative room before and after decorative finishes, joinery and permitted equipment integration.

All use src/components/ImageComparison.tsx, with independent state, image dragging, touch-friendly vertical scrolling, pointer cancellation and a labelled native range for Arrow/Home/End keyboard control. Captions identify each image's provenance. They are not presented as three completed Brindle jobs.

The photographic hero replaces the former wall assembly entirely. It has one subtle four-second image settle and respects reduced-motion preferences. No artificial clips, battens, staged build controls, 3D renderer or animation timer remain.

## Content and imagery

The page order is cladding, construction/framing, patio, feature fit-out, smart-home/electronics, property maintenance, compact genuine work, experience/training and telephone contact. Timber and steel service illustrations are separate images. The rejected mixed-framing illustration and unused service/assembly assets are removed from publication.

All six supplied construction-photo originals remain untouched locally. Their 18 metadata-free derivatives support the compact original-photo viewer and the original side of the cladding comparison. The six patio derivatives are unchanged. Three retained service photographs and four new image assets have three responsive widths each, for **45 local WebPs** in total. No PNG masters or original JPGs are deployed.

The hero and transformation edits are labelled honestly. One service-imagery disclosure acknowledges AI-generated illustrations. Exact built-in image-generation prompts, local master paths and reproduction details are in docs/CLADDING_REVISION_ASSETS.md; the full owner brief is preserved in docs/CLADDING_REVISION_BRIEF.md. No required image assets are missing.

With the preserved PNG masters available:

~~~powershell
npm.cmd run assets:revision
npm.cmd run assets:inspiration
node scripts/prepare-brand-assets.mjs
~~~

## Editing and future genuine work

- Comparison photos, labels, disclosures and responsive sources: src/data/transformations.ts.
- Services and agreed scope: src/data/services.ts.
- Original project photographs/captions: src/data/projectStages.ts.
- Business, telephone, location, training and rates: src/config/business.ts.
- Current page styling: src/cladding-revision.css and src/identity.css.

To replace an illustration with a real completed job, add permission-cleared original before/after photographs from the same camera position, export metadata-free responsive derivatives, then update that comparison's sources, alt text and disclosure. Describe only the work actually undertaken. Keep the original files and evidence separate from edited assets. A new job can also be added to the genuine-work data without changing the static architecture.

Smart-home services cover permitted planning, wireless configuration, compliant plug-in/battery devices and low-voltage/AV equipment. Fixed wiring, switchboards, hardwired lighting, regulated cabling and regulated building work require appropriately qualified practitioners. The 20+ years claim refers to general practical labouring experience, not 20 years of cladding specialisation.

All contact links use **0451 743 037 / tel:+61451743037**. No backend, database, contact form, booking, tracking, external font host or paid API is needed. Do not publish a home address, unapproved rate, invented licence, testimonial or completed-work claim.

## Publish to the existing free site

Push to main. The existing .github/workflows/deploy.yml installs the locked dependencies, runs checks and builds with the GitHub Pages base, then deploys dist. No new repository or hosting subscription is required.

If the workflow is disabled, choose GitHub Actions in repository Settings → Pages, then run Build and publish Brindle from Actions. The optional scripts/github-pages.mjs status helper uses the owner's credential manager only in memory and is never bundled.

Actual validation and publication results are recorded in docs/VALIDATION.md. Browser phone tests use viewport emulation and pointer gestures; no physical Android/iOS or OS-level preference emulation is claimed.
