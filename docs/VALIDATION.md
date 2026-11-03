# Release validation — 3 November 2026

## Verified locally

- `npm install` / lockfile installation completed; `npm audit` reports **0 vulnerabilities** after updating the development tooling and pinning a patched minimatch dependency.
- `npm run typecheck` and `npm run lint` pass.
- `npm test`: **6 tests pass**, covering reversible scroll mapping, every stage shortcut, fully assembled final trim, bounded layer progression, all 18 local image derivatives and metadata removal, the correct phone/default rate, and separation of the unbuilt patio concept.
- `npm run build` passes. A post-build validator checks the entrypoint and its local assets, six-photo derivative set, favicon and robots, and excludes original JPG/reference directories from the deployment output.
- `npm run dev` and `npm run preview` serve the application locally.
- Browser checks use the Codex in-app browser at **1440 × 900**, **375 × 812** and **320 × 568**. No horizontal document overflow at the checked phone sizes.
- Verified the real WebGL canvas, staged assembly and final-stage shortcut; mobile navigation to the portfolio; all six lightbox photographs; next/previous and zoom controls; Escape dismissal; Structure / Finish patio controls; static mode removing the canvas while preserving the page and phone actions.
- All six contact anchors resolve to `tel:+61451743037` and visibly contain **0451 743 037**. No telephone call was placed.

## Performance and access

The construction renderer is lazy-loaded separately (approximately **247 kB gzip**). The main application is approximately **75 kB gzip**, with local Latin-only variable fonts. Media is responsive and lazy; the scene uses on-demand rendering with a mobile pixel-ratio limit of 1.25 and no mobile shadow map. Original photographs and their metadata are not deployed.

Reduced-motion preferences, missing WebGL, renderer errors and lost context select the static path. Explicit static-mode behavior was tested in-browser. Hardware WebGL failures and a physical Android/iOS dialler were not simulated. No measured Lighthouse score or physical-device frame-rate claim is made.

The current React Three Fiber dependency emits a non-fatal Three.Clock deprecation notice in development; the renderer and controls operate. No application runtime error was observed during the verified interactions. All assets, fonts and runtime code are local.

## Publication

Publication is in progress to the newly created public source repository `Brindleth/brindle-property-maintenance`, using the owner's existing GitHub credential. This document will be updated after the CI deployment and live HTTPS check.
