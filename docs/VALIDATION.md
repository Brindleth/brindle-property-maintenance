# Construction-stage slider refinement — 3 November 2026

The owner's refinement keeps the existing identity and construction renderer while replacing the project grid with a minimal four-stage viewer. The full-screen construction sequence now opens the site, with direct access to the actual project. One retained patio visualisation replaces the previous comparison and reference gallery. Three newly generated architectural images appear only in Design Inspiration & Capabilities, with an explicit AI disclosure and per-image labels.

Photo inspection and mapping:

- `1000020847`: early wrapped exterior, with initial metal fixings already present. A completely bare, pre-fixing stage is not verified.
- `1000020945`: wrap, clips and battens around the wide window.
- `1000020946`: small-window perimeter detail before cladding, not a separately verified finishing phase.
- `1000020958`: installed horizontal cladding and white trim around the large window; exposed upper wrap remains visible. Whole-facade completion is not claimed.
- `1000020943`: optional steel-framing/timber-noggins detail. All original files and derivatives remain preserved; the alternate small-window view does not add another main stage.

Verified locally:

- TypeScript, ESLint, all **11 regression tests**, production build, static prerender and output validator pass. The exact `/brindle-property-maintenance/` deployment base was built and tested.
- Regression tests cover real-photo mapping, next/previous wraparound, deliberate horizontal swipe thresholds, rejection of vertical/short movements, metadata-free assets, AI separation, phone defaults and the original 3D construction progression.
- Desktop 3D canvas, final-stage shortcut, model rotation and direct portfolio navigation work. Static view removes the canvas; Enable 3D restores it. The static fallback is prerendered and server/client media detection now hydrates consistently.
- A direct-link layout issue found during QA was repaired: the opening reserves its scroll height during hydration and restores the requested section anchor after WebGL/fallback selection. Reloading `#work` lands below the fixed header after the canvas loads.
- Browser verification at measured CSS widths **1440**, **768**, **375** and **320** shows no horizontal overflow. Viewport scaling was corrected using the browser's measured device-pixel ratio. On the 320 × 568 layout, the construction viewport now fits the screen and its timeline remains above the call bar.
- Project controls were exercised with arrows, stage shortcuts, keyboard Home/End and arrow navigation. A horizontal pointer swipe on the 320px image changed Stage 1 to Stage 2. Dragging the native range thumb from the first to final position changed the photograph and caption to Stage 4. Page scrolling and phone navigation remain available.
- The single patio image has the requested Concept Visualisation — Not Constructed label. The five reference-photo public derivative sets were removed; raw reference JPGs remain local.
- Three photorealistic inspiration images were generated with the built-in image tool, inspected and saved into the project. Nine responsive WebPs have correct width descriptors, no source EXIF and no production generation dependency. Exact prompts and paths are in `docs/INSPIRATION_ASSETS.md`. No image assets remain missing.

Phone links are checked without placing a call. Mobile testing uses browser emulation and pointer input, not physical Android/iOS hardware. Hardware WebGL failure and reduced-motion OS settings were not simulated; their existing fallback paths remain implemented.

Published at https://brindleth.github.io/brindle-property-maintenance/. Application commit `ebd944c29763085ff43b3e661e119218c43cfce2`; [GitHub Actions run 41635275110](https://github.com/Brindleth/brindle-property-maintenance/actions/runs/41635275110) completed successfully, including lint, 11 tests, production build and deployment. The public HTTPS page returned 200. All **40 checked image, font, script, style and metadata resource URLs returned 200**. Live HTML contains exactly four main photo stages, one patio visualisation and three disclosed inspiration images, with no patio reference gallery. Live browser checks confirmed the loaded 3D canvas, correct `#work` positioning after hydration, Stage 4 selection, all four actual photos loaded, all three inspiration images loaded, six exact telephone destinations and the 375 × 812 range control/call bar. No live runtime warning or error was observed. Final screenshot: `test-results/brindle-refinement-live.jpg` (local, excluded from Git). No missing image assets or publishing steps remain.

Earlier release records follow for history.

---
# Real-photo patio concept revision — 3 November 2026

The owner requested a concept based on the actual patio photographs, similar in appearance to their attached ChatGPT mockup, and reported an error in the previous concept version. The generic Structure / Finish diagram has been replaced completely with a photo-based proposal and a real-reference gallery. The supplied mockup informed appearance only; its completed-project claims were not copied.

Verified for this revision:

- TypeScript, ESLint, all seven regression tests and the production build pass. Build validation confirms six genuine completed-work photos, five separately labelled actual patio reference photos, one labelled unbuilt AI proposal, and no raw JPG/PNG originals in the deployment output.
- The proposal was generated with the built-in image tool using actual patio photo `1000020835.jpg` as the edit target and `1000020834.jpg` as a supporting view. The exact prompt and provenance are saved in `docs/CONCEPT_VISUALISATION.md`. All 18 additional WebP derivatives have the expected dimensions, contain no EXIF metadata and are individually under 500 kB.
- Existing photo / Proposed concept / Compare views function. The native slider was checked at 0%, 100% and with arrow-key increments; the clipping follows the displayed percentage. The original photo is the actual source of the edit.
- The full-image dialog opens the proposal and cycles through all five original reference photos. Zoom, previous/next, keyboard arrow navigation and Escape work. Closing restores focus and the original body scroll state.
- Browser checks at 1440 × 900, 768 × 1024, 375 × 812 and 320 × 568 show no horizontal overflow. Desktop and phone navigation reach the concept; the phone layout places the photo immediately after the heading. The 320px dialog retains usable close and navigation controls.
- The exact `/brindle-property-maintenance/` production subpath was tested locally. Prerendered HTML places the direct `#concept` URL at the correct section before JavaScript hydration. Concept/reference images loaded successfully, and no warning or error was observed from the tested production origin.
- The completed construction portfolio remains separate and retains all six actual project photographs. All contact destinations remain `tel:+61451743037`; no call was placed. No backend, booking service or production image-generation service is introduced.

Published at https://brindleth.github.io/brindle-property-maintenance/#concept. Application commit `386e52db9ed5ce06f7d8a6676c4aa0fb11c4613b`; [GitHub Actions run 41627616885](https://github.com/Brindleth/brindle-property-maintenance/actions/runs/41627616885) completed successfully, including lint, seven tests, build and deployment. The live HTTPS page returned 200, includes all six portfolio figures plus five patio reference buttons in static HTML, and all 43 checked resource URLs returned 200. Live browser verification confirmed the proposal image loaded, the comparison slider reached 100%, and both galleries remain separate. No runtime warning or error was observed after the live navigation. The final screenshot is saved locally as `test-results/brindle-patio-concept-live.jpg` (excluded from Git).

The browser's viewport control initially stalled against an old diagnostic tab. Using the current in-app preview tab resolved the testing connection; the responsive checks above were then completed. Earlier release records follow for history.

---
# Portfolio-first revision — 3 November 2026

This revision responds to the owner's report that the site had errors and did not show the portfolio clearly. The previous layout placed the real photographs after a 580svh construction sequence and a services section. The first version's successful build and asset requests did not establish that the portfolio was sufficiently visible or usable.

Changes:

- Actual supplied cladding photograph on the first screen, including on 375px and 320px phone viewports.
- Full six-photo portfolio immediately after the opening, before services. Clear Portfolio navigation, immediate anchor jumps, a three-column desktop gallery and one/two-column responsive layouts.
- Removed the reveal observer and hidden-content dependency. Every photograph and text section is visible by default.
- Build-time prerendering includes the real images, content and telephone links in the delivered HTML. No runtime server is introduced. JavaScript hydrates the static page to add the lightbox and optional interactions.
- The construction study loads only after an explicit Open interactive 3D study action. Closing it removes the WebGL canvas and restores focus. It retains the reversible stages, fallback and phone access.
- Pinned compatible Three.js 0.182.0 and matching types, removing the Three.Clock warning observed with React Three Fiber and Three.js 0.187.

Verified for this revision:

- TypeScript, ESLint, six regression tests, production build and audit (zero vulnerabilities).
- Static build validation confirms one H1, all six portfolio figures in HTML, portfolio before services, no will-reveal classes, no initial canvas, correct local assets and exclusion of original/reference photos.
- Root-relative local preview and the exact /brindle-property-maintenance/ deployment subpath both return 200 with the six prerendered figures and correct image URLs.
- Browser checks at 1440 x 900, 375 x 812 and 320 x 568. The first actual project photograph is loaded at the top of the phone page; no horizontal document overflow. All six gallery figures are visible by default; all six lightbox photographs were opened, with Escape and focus restoration checked.
- Production hydration and the optional 3D study were exercised in-browser with no warning or error from the tested production origin.

Published and verified at https://brindleth.github.io/brindle-property-maintenance/ (portfolio: `#work`). Application commit `b5c1c597b41ba430d2f2490bbcf4aeb384b85506`; [GitHub Actions run 41623268608](https://github.com/Brindleth/brindle-property-maintenance/actions/runs/41623268608) completed successfully. The live homepage returned 200, contains all six portfolio figures in static HTML, and all 29 checked resource URLs returned 200. A fresh live browser check confirmed all six gallery images loaded with opacity 1, no initial canvas, and no warning or error after reload. Revised screenshots are saved locally in `test-results/brindle-revised-home.jpg` and `test-results/brindle-revised-portfolio.jpg`.

The original in-app browser tab could not be refreshed through its browser controls (a browser focus-command timeout). A fresh diagnostic tab displayed the revised live site successfully and was retained as the user-facing result. The earlier release record follows for history and is superseded by this revision.

---
# Release validation — 3 November 2026

## Verified locally

- `npm install` / lockfile installation completed; `npm audit` reports **0 vulnerabilities** after updating the development tooling and pinning a patched minimatch dependency.
- `npm run typecheck` and `npm run lint` pass.
- `npm test`: **6 tests pass**, covering reversible scroll mapping, every stage shortcut, fully assembled final trim, bounded layer progression, all 18 local image derivatives and metadata removal, the correct phone/default rate, and separation of the unbuilt patio concept.
- `npm run build` passes. A post-build validator checks the entrypoint and its local assets, six-photo derivative set, favicon and robots, and excludes original JPG/reference directories from the deployment output.
- `npm run dev` and `npm run preview` serve the application locally.
- Browser checks use the Codex in-app browser at **1440 × 900**, **375 × 812** and **320 × 568**. No horizontal document overflow at the checked phone sizes.
- Verified the real WebGL canvas, staged assembly and final-stage shortcut; mobile navigation to the portfolio; all six lightbox photographs; next/previous, arrow keys and zoom controls; Escape dismissal and focus restoration to the opening photograph; Structure / Finish patio controls; static mode removing the canvas while preserving the page and phone actions. The copy-number control reports successful copying.
- All six contact anchors resolve to `tel:+61451743037` and visibly contain **0451 743 037**. No telephone call was placed.

## Performance and access

The construction renderer is lazy-loaded separately (approximately **247 kB gzip**). The main application is approximately **75 kB gzip**, with local Latin-only variable fonts. Media is responsive and lazy; the scene uses on-demand rendering with a mobile pixel-ratio limit of 1.25 and no mobile shadow map. Original photographs and their metadata are not deployed.

Reduced-motion preferences, missing WebGL, renderer errors and lost context select the static path. Explicit static-mode behavior was tested in-browser. Hardware WebGL failures and a physical Android/iOS dialler were not simulated. No measured Lighthouse score or physical-device frame-rate claim is made.

The current React Three Fiber dependency emits a non-fatal Three.Clock deprecation notice in development; the renderer and controls operate. No application runtime error was observed during the verified interactions. All assets, fonts and runtime code are local.

## Publication

**Live:** https://brindleth.github.io/brindle-property-maintenance/

**Source:** https://github.com/Brindleth/brindle-property-maintenance

The owner's existing GitHub credential was available. A new public repository was created and GitHub Pages configured for free static hosting. Original JPGs and patio references were excluded from publication; only permitted optimized construction photographs were pushed.

Release application commit: `ca7491f2ac1a4a206df507befcee2b0134c1fabc`. GitHub Actions run [41618707426](https://github.com/Brindleth/brindle-property-maintenance/actions/runs/41618707426) completed **successfully**, including lint, tests, production build and deployment. Later documentation-only commits do not change the released application.

The public HTTPS page returned **200**. All **25 checked asset URLs** returned **200**, including all 18 photograph derivatives, entrypoint scripts/style, favicon, robots and the social image. The live site was opened in-browser and the 3D assembly verified. The final verification screenshot is saved locally at `test-results/brindle-live-desktop.jpg` (excluded from Git). No production application runtime error was observed; earlier development-server HMR connection messages are unrelated to the deployed static site.

No remaining publishing step or paid service is required. Push future changes to `main` to rerun the deployment workflow. Cloudflare Pages remains an optional free alternative; exact steps are in the README.

