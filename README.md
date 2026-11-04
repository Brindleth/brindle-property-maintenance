# Brindle Property Maintenance

The existing Brindle website, refined with a full-screen interactive Three.js / React Three Fiber opening, a varied service showcase, one compact real-photo project viewer and a patio before-and-after comparison. No backend, database, forms, booking system, tracking, paid service, external font host or API key is required. All contact links use **0451 743 037** (`tel:+61451743037`).

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

`check` runs TypeScript, ESLint, thirteen regression tests and the verified production build. `preview` serves `dist/` at `http://127.0.0.1:4173/` for local verification. `npm ci` reproduces the locked dependencies.

## Included experience

- The existing full-screen construction scene opens the site. Six reversible scroll stages, stage shortcuts, model rotation, static mode and persistent phone access retain the white/black/red identity. Direct Services and Actual work links bypass the scroll sequence.
- Services lead the page after the opening: timber/steel framing support, partitions and fit-outs, feature walls, cladding, painting/maintenance, outdoor spaces, and low-voltage lighting/concealed AV. Seven realistic service illustrations share one unobtrusive disclosure. Assistance and agreed-scope wording avoid implying unheld trade authorisations.
- One compact four-stage project viewer keeps the actual photographs together. Native draggable range control, arrows, horizontal pointer swipes, keyboard shortcuts and reduced-motion crossfades. Portrait originals remain fully visible against an ambient backdrop.
- Photo mapping: 1000020847 early wrapped exterior with initial fixings; 1000020945 wrap/clips/battens; 1000020946 small-window perimeter detail before cladding; 1000020958 horizontal cladding around the large window with upper wrap still exposed. Different viewpoints are stated explicitly. The optional steel-framing/noggins photo is under Inside the frame.
- The restored patio comparison pairs the original Perth reference with its corresponding proposed finish. Direct image dragging and an accessible native range control reveal either image fully. **Outdoor Transformation — Design Visualisation** and a short unbuilt-work clarification identify the proposal. No separate gallery or prominent concept badge remains.
- Build-time prerendered copy and photographs remain available before JavaScript. Client hydration starts the lazy WebGL renderer with a static fallback; reduced motion, missing WebGL and context loss retain the readable page. Local fonts, responsive images and on-demand rendering remain in place.
- Shorter services copy, actual training records, rates by phone, copy-number control, responsive navigation and an accessible mobile call bar. Frontend only.

## Edit business details

Edit `src/config/business.ts` for the phone, Melbourne service area, rate wording, availability and training. The current service showcase is in `src/data/capabilities.ts`. Rates deliberately say **Rates discussed by phone**; no unapproved hourly price is published. If changing service area, also update the SEO description in `index.html` and social card in `scripts/prepare-assets.mjs`.

Stage mapping and truthful captions are in `src/data/projectStages.ts`. The viewer is in `src/components/Portfolio.tsx`; the opening is in `src/components/ConstructionExperience.tsx`; page order is in `src/App.tsx`. Construction timing is in `src/lib/construction.ts`; geometry is in `src/components/ConstructionScene.tsx`. The latest layout rules are in `src/service-balance.css` and `src/patio-concept.css`.

The project role remains construction support using supplied materials and instructions. Do not add a home address, invented projects, testimonials, licences or certification claims.

## Supplied photographs and generated assets

All six construction-photo originals and their 18 metadata-free derivatives remain preserved. Four verified views are used in the main stage viewer; the steel-framing view is optional within that same project section. The alternate small-window photograph remains available without adding another main stage. Actual project photographs are not repeated elsewhere on the page.

The five original patio references remain preserved locally. One reference and its corresponding proposed rendering are published as six responsive WebPs. Seven service illustrations have 21 responsive WebP derivatives. Together with the 18 construction assets, the site ships 45 optimized WebPs. Generated PNG masters and original JPGs are Git-ignored and excluded from deployment; committed derivatives make a fresh clone buildable without generation tools.

To regenerate assets when the preserved source files are available:

```powershell
npm.cmd run assets
npm.cmd run assets:concept
npm.cmd run assets:inspiration
npm.cmd run check
```

Latest exact built-in prompts and source/output paths: `docs/SERVICE_REBALANCE_ASSETS.md`. Earlier retained image provenance is in `docs/CONCEPT_VISUALISATION.md` and `docs/INSPIRATION_ASSETS.md`. No image-generation service runs on the published site. No final image assets remain missing.

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
