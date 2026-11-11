# brindle.

Property Maintenance & Skilled Labour. React, TypeScript and Vite build the existing static [GitHub Pages website](https://brindleth.github.io/brindle-property-maintenance/).

The current 12 November revision uses the original lighter Brindle typography, a shorter homepage, photograph-led service cards and **only the patio comparison**. The 11 November implementation and older cladding/3D briefs are historical where superseded.

## Run on Windows

Use Node.js 22.14 or newer:

~~~powershell
npm.cmd ci
npm.cmd run dev
~~~

Open the printed Local URL, normally http://127.0.0.1:5173/brindle-property-maintenance/.

For the production preview:

~~~powershell
npm.cmd run check
npm.cmd run preview -- --port 4173
~~~

Open http://127.0.0.1:4173/brindle-property-maintenance/. No BASE_PATH setting is needed for the existing GitHub Pages site: dev, build and preview now use the same default. If deliberately targeting another host with BASE_PATH, use the same override for build and preview.

The check command runs TypeScript, ESLint, seven regression tests, production build, static prerender and resource/provenance validation. Serve dist through the preview server or a compatible static host; opening the source index.html directly cannot run the React application.

## Current page

1. Short photographic hero and quote button.
2. Six photograph-led service cards; click a card for examples and scope.
3. The retained patio comparison.
4. Brief owner introduction and original site-photo gallery.
5. Three short steps and telephone enquiry.
6. Compact footer with scope, privacy and image information.

The original Space Grotesk/Manrope families and lighter 500-weight headings are retained. Service pictures show work in progress rather than staged finished rooms. Two service images and the hero/gallery use genuine site photographs. Four AI-created service examples are disclosed in the linked image details and are separate from actual work. Nothing is labelled “conceptual art” or covered by a provenance badge.

All six original views appear once each in the initial page. The native lightbox supports previous/next, Arrow keys, Escape and return focus. The patio is the only comparison slider; the cladding and feature-wall comparisons remain removed. Its caption accurately identifies an unbuilt enclosure.

Telephone enquiries remain **0451 743 037 / tel:+61451743037**. No form, booking system, payment flow, email address or residential address is introduced. Quotes follow an in-person inspection; scope, timing, rates and applicable call-out/travel charges are agreed before acceptance. Service restrictions remain in each expanded card and the footer.

## Editing

- Page structure/contact/legal details: src/App.tsx
- Six scoped services: src/data/services.ts
- Short service titles, captions, image sources: src/data/serviceImages.ts
- Services presentation: src/components/Services.tsx
- Patio interaction: src/components/PatioComparison.tsx and src/lib/patioComparison.ts
- Header, original hero and gallery: src/components/
- Original responsive styles/type: src/maintenance.css
- Business and training: src/config/business.ts
- Navigation: src/data/navigation.ts
- SEO/structured data: index.html
- Default hosting path: vite.config.ts
- Scope review and official sources: docs/SERVICE_SCOPE_REVIEW.md
- Image prompts, provenance and reproduction: docs/WORKING_IMAGES_REVISION.md
- Dated actual checks and remaining limits: docs/VALIDATION.md

With the selected masters present, run npm.cmd run assets:services to regenerate the service WebPs. New clones use committed derivatives; masters are never required to build or publish. All previous illustrative and comparison assets remain local/source historical material where retained, but unused images are excluded from dist.

## Publish to GitHub Pages

The existing .github/workflows/deploy.yml is preserved. Reviewed changes pushed to main run lint, tests, the static build and deployment to the existing Pages site. The workflow supplies the Pages base. No hosting migration, paid integration or new repository is needed.

A local implementation/build is not proof of publication. The current validation record explicitly states whether this revision was pushed or deployed.
