# BRINDLE
## Property Maintenance & Smart Home Solutions

The existing site now opens with a full-screen, automatically looping photographic construction assembly based on the owner's exterior-wall references. The lowercase **brindle.** wordmark restores the owner's preferred typography. React, TypeScript and Vite produce a completely static frontend.

[Public website](https://brindleth.github.io/brindle-property-maintenance/) · [Repository](https://github.com/Brindleth/brindle-property-maintenance)

## Run on Windows

Use PowerShell in this folder (the inner extracted folder containing package.json), with Node.js 22.14 or newer:

~~~powershell
npm.cmd ci
npm.cmd run dev
~~~

Open the Local URL printed by Vite, normally http://127.0.0.1:5173/. The .cmd suffix avoids PowerShell script-wrapper and forwarded-argument issues without changing system settings.

~~~powershell
npm.cmd run check
npm.cmd run preview
~~~

The check command runs TypeScript, ESLint, **18 regression tests**, the production build, static prerender and output validation. Preview normally serves dist at http://127.0.0.1:4173/. To reproduce the exact Pages base:

~~~powershell
$env:BASE_PATH='/brindle-property-maintenance/'
npm.cmd run check
npm.cmd run preview
~~~

## Photographic assembly

Thermal wrap → small metal clips → complete metal battens → white window surrounds/corners → horizontal cladding.

A single-viewport scene automatically builds through all five stages in a 30-second loop, with settled pauses between installations and a gentle fade back to the thermal-wrap starting plate. Normal scrolling goes directly to the services. One Play/Pause control keeps the interface simple. The window glass, camera and environment remain on a fixed plate.

The animation is explicitly a **photo-based reconstruction**, never additional evidence of completed work or an installation specification. The untouched original photographs remain in one compact Actual work viewer with swipe, arrows and a native stage range. Captions acknowledge different viewpoints and the incomplete upper facade in the genuine finish photograph.

Fixing tabs use an alpha-preserving photographic cutout, limited to 3–8 pixels wide with a 3:1 rectangular ratio. Each clip disappears behind its corresponding installing batten. The clean batten plate has no exposed tabs on its channel faces. Perspective-following cladding groups cover the full facade.

Reduced-motion preferences show the finished still view. Image errors fall back to the original cladding-detail photograph. The requestAnimationFrame loop pauses offscreen, when the browser tab is hidden, or when the visitor selects Pause. There is no WebGL or runtime server.

## Services and contact

Five visually distinct categories cover Property Maintenance, Construction & Carpentry Support, Smart Home Solutions, Custom Electronics & Entertainment, and Outdoor Living. Smart-home work is limited to permitted planning, device selection, wireless configuration, plug-in/battery devices and troubleshooting. Fixed wiring, switchboards, hardwired lighting and regulated cabling require the appropriate practitioner.

The patio retains its touch-friendly before-and-after comparison using the original Perth reference and corresponding proposed finish. It remains an unbuilt design visualisation, with no separate gallery.

The dominant visual wordmark is **brindle.**, supported by Property Maintenance & Smart Home Solutions. Title, metadata, social card, footer and accessible labels retain the full business identity. All telephone links use **0451 743 037**, linked to **tel:+61451743037**. The mobile call bar and copy-number control remain.

No backend, database, booking, form, tracking, paid hosting service, external font host or production image API is required.

## Edit content and assets

- Business name, phone, area, training and rate wording: src/config/business.ts.
- Service categories and permitted scope: src/data/services.ts.
- Scene masks, fixing positions and photographic registration: src/data/photoAssembly.ts.
- Automatic loop timing, stage mapping and clip occlusion: src/lib/construction.ts.
- Scene and fallback: src/components/ConstructionExperience.tsx.
- Latest layout and branding: src/photo-story.css.
- Genuine-photo captions: src/data/projectStages.ts.
- Patio sources and disclosure: src/data/patio.ts.

All six supplied construction-photo originals remain untouched locally. Their 18 derivatives, the patio's six derivatives, retained service assets and 13 assembly assets are local metadata-free WebPs. Original JPGs and generated PNG masters stay in Git-ignored folders and are excluded from Pages. Committed optimized assets make a fresh clone buildable without generation tools.

Exact image prompts, built-in tool mode, saved master paths and reproduction details are in **docs/PHOTOGRAPHIC_ASSEMBLY.md**. The owner's current brief is preserved in docs/PHOTOGRAPHIC_REVISION_BRIEF.md. Earlier asset provenance and release records remain for history. No final image assets are missing.

With the preserved masters available:

~~~powershell
npm.cmd run assets:assembly
npm.cmd run assets:inspiration
node scripts/prepare-brand-assets.mjs
npm.cmd run check
~~~

Do not publish a home address, unapproved price, invented licence, certification, testimonial or completed-project claim.

## Publish on the existing free GitHub Pages site

Push reviewed changes to main. The existing .github/workflows/deploy.yml installs locked dependencies, runs the checks, builds with BASE_PATH=/brindle-property-maintenance/ and deploys only dist using GitHub Actions. No secret, subscription or backend is required.

If the workflow is disabled, open repository Settings → Pages and select GitHub Actions, then Actions → Build and publish Brindle → Run workflow. Do not create another repository or change the existing public address.

The optional scripts/github-pages.mjs administrative helper uses the owner's credential manager in memory and is never bundled. No credential is stored in the site.

Actual validation and deployment results are recorded in docs/VALIDATION.md. Phone destinations are checked without placing calls. Browser phone checks use viewport emulation and pointer gestures; physical Android/iOS and OS-level reduced-motion settings are not simulated.
