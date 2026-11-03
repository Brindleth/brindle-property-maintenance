# Brindle Property Maintenance

The existing Brindle website, refined with a full-screen interactive Three.js / React Three Fiber opening, a four-stage real-photo project viewer and clearly separated AI design inspiration. No backend, database, forms, booking system, tracking, paid service, external font host or API key is required. All contact links use **0451 743 037** (`tel:+61451743037`).

Publication URL: [Brindle Property Maintenance](https://brindleth.github.io/brindle-property-maintenance/). Source: [Brindleth/brindle-property-maintenance](https://github.com/Brindleth/brindle-property-maintenance). See the validation record for deployment status.

## Run on Windows

Open PowerShell in **this folder** (containing `package.json`, inside the outer extracted folder). Install Node.js 22.14 or newer; verified with Node 22.14 and npm 10.9.

```powershell
npm.cmd install
npm.cmd run dev
```

Open the Local URL printed by Vite, normally `http://127.0.0.1:5173/`. Plain `npm` also works when PowerShell permits its script wrapper. `.cmd` avoids execution-policy and forwarded-argument issues without changing your system settings.

```powershell
npm.cmd run check
npm.cmd run preview
```

`check` runs TypeScript, ESLint, eleven regression tests and the verified production build. `preview` serves `dist/` at `http://127.0.0.1:4173/` for local verification. `npm ci` reproduces the locked dependencies.

## Included experience

- The existing full-screen construction scene opens the site. Six reversible scroll stages, stage shortcuts, model rotation, static mode and persistent phone access retain the white/black/red identity. The real-work link jumps directly to the photographs.
- One cinematic four-stage project viewer replaces the six-photo grid. Native draggable range control, arrows, horizontal pointer swipes, keyboard shortcuts and reduced-motion crossfades. Portrait originals remain fully visible against an ambient backdrop.
- Photo mapping: 1000020847 early wrapped exterior with initial fixings; 1000020945 wrap/clips/battens; 1000020946 small-window perimeter detail before cladding; 1000020958 horizontal cladding around the large window with upper wrap still exposed. Different viewpoints are stated explicitly. The optional steel-framing/noggins photo is under Inside the frame.
- One photo-based Perth patio visualisation, labelled **Concept Visualisation — Not Constructed**. No comparison or reference-photo gallery. Existing patio and lights are not claimed as Brindle work.
- **Design Inspiration & Capabilities** contains three photorealistic AI examples: feature wall/concealed AV/low-voltage LED ideas, outdoor entertainment, and cladding/architectural finishes. Clear disclosure and per-image labels. No regulated installation service is advertised.
- Build-time prerendered copy and photographs remain available before JavaScript. Client hydration starts the lazy WebGL renderer with a static fallback; reduced motion, missing WebGL and context loss retain the readable page. Local fonts, responsive images and on-demand rendering remain in place.
- Shorter services copy, actual training records, rates by phone, copy-number control, responsive navigation and an accessible mobile call bar. Frontend only.

## Edit business details

Edit `src/config/business.ts` for the phone, Melbourne service area, services, rate wording, availability and training. Rates deliberately say **Rates discussed by phone**; no unapproved hourly price is published. If changing service area, also update the SEO description in `index.html` and social card in `scripts/prepare-assets.mjs`.

Stage mapping and truthful captions are in `src/data/projectStages.ts`. The viewer is in `src/components/Portfolio.tsx`; the opening is in `src/components/ConstructionExperience.tsx`; page order is in `src/App.tsx`. Construction timing is in `src/lib/construction.ts`; geometry is in `src/components/ConstructionScene.tsx`. The latest layout rules are in `src/stage-refinement.css` and `src/patio-concept.css`.

The project role remains construction support using supplied materials and instructions. Do not add a home address, invented projects, testimonials, licences or certification claims.

## Supplied photographs and generated assets

All six construction-photo originals and their 18 metadata-free derivatives remain preserved. Four verified views are used in the main stage viewer; the steel-framing view is optional and also appears with training. The alternate small-window photograph remains available locally without adding another main stage.

The five original patio references remain local, separate from completed work. Only the single generated patio proposal is published at three responsive widths. Three new inspiration images have nine responsive WebP derivatives. Generated PNG masters and original JPGs are Git-ignored and excluded from deployment; committed derivatives make a fresh clone buildable without generation tools.

To regenerate assets when the preserved source files are available:

```powershell
npm.cmd run assets
npm.cmd run assets:concept
npm.cmd run assets:inspiration
npm.cmd run check
```

Exact built-in prompts and source/output paths: `docs/CONCEPT_VISUALISATION.md` (patio) and `docs/INSPIRATION_ASSETS.md` (capabilities). No image-generation service runs on the published site.

The four original brief documents remain unchanged. The original handoff README is preserved in `docs/ORIGINAL_HANDOFF.md`; `docs/FUTURE_SCOPE.md` preserves future plans without adding a backend.

## Publish free: GitHub Pages

`.github/workflows/deploy.yml` installs locked dependencies, lints, tests, builds with the correct repository base and deploys only `dist/`. It runs on pushes to `main` or manual workflow dispatch, using Node 22 and GitHub's built-in short-lived Actions token. No secret is needed.

If not already deployed:

1. Create a public GitHub repository, for example `brindle-property-maintenance`.
2. Push this folder's contents (not the enclosing extraction folder) to `main`. Keep the original-photo exclusions in `.gitignore`.
3. Open repository **Settings > Pages > Build and deployment > Source > GitHub Actions**.
4. Open **Actions > Build and publish Brindle > Run workflow**. Wait for both jobs to pass.
5. Open the returned HTTPS URL and check it on your phone.

The optional `scripts/github-pages.mjs` local administrative helper uses the original owner's credential manager. It is never bundled or required by the website and stores no credential. Future updates need only `git push`.

## Publish free: Cloudflare Pages

Use a free Cloudflare account. For Direct Upload:

1. Run `npm.cmd run build`.
2. Open **Workers & Pages > Create application > Get started > Drag and drop your files**.
3. Choose a project name and upload **the contents of `dist/`**, or drag the `dist` folder. Upload no source files or node_modules.
4. Select **Deploy site** and open the returned pages.dev HTTPS URL.

Dashboard labels can vary; [Cloudflare's Direct Upload guide](https://developers.cloudflare.com/pages/get-started/direct-upload/) is the source of truth. Direct Upload projects cannot later switch to Git integration; create a separate Git-integrated project if needed.

For Git integration: connect the repository; preset **Vite** or none; build command **`npm run build`**; output **`dist`**; root **`/`**; environment **`NODE_VERSION=22`**. No functions or bindings are needed. If files are nested in a repository subfolder, select that as the build root.

Default relative asset paths support domain roots and repository subpaths; the GitHub workflow explicitly sets `BASE_PATH`. Use HTTP(S), not file://, to preview ES modules.

Canonical and social URLs currently target the configured GitHub Pages address. If changing hosts or choosing a custom domain, update canonical, og:url and og:image in `index.html`. Cloudflare's `_headers` applies on Cloudflare; GitHub Pages cannot set these custom response headers.

## Validation and limits

See `docs/VALIDATION.md` for actual checks and the deployment outcome. Phone-link tests verify exact tel: destinations without placing a call; a supported OS dialler is required. Mobile testing uses browser viewport emulation, not physical Android/iOS hardware.
