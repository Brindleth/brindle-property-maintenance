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
