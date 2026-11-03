# Brindle Property Maintenance

A complete static Vite + React + TypeScript website led by the owner's actual construction photographs, with an optional Three.js / React Three Fiber construction study. No backend, database, forms, booking system, tracking, paid service, external font host or API key is required. All contact links use **0451 743 037** (`tel:+61451743037`).

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

`check` runs TypeScript, ESLint, six regression tests and the verified production build. `preview` serves `dist/` at `http://127.0.0.1:4173/` for local verification. `npm ci` reproduces the locked dependencies.

## Included experience

- Actual project photography on the first screen, followed immediately by all six portfolio images. Direct Portfolio navigation, visible captions and a native zoom gallery. No content depends on reveal animations.
- The portfolio and page copy are prerendered at build time into plain HTML. They remain readable before JavaScript starts or if it fails; hydration adds interactive controls. No runtime server is deployed.
- An optional 3D study loads only after **Open interactive 3D study** is selected. It has six reversible scroll stages: ground tracks, steel frame, timber noggins, wrap and battens/clips, external cladding and final window trim. Keyboard-accessible stage buttons, mouse drag, Rotate view and Close study controls.
- Mobile rendering uses fewer meshes, no shadow map, a capped pixel ratio and native vertical touch scrolling. Rendering happens on demand and rests when input stops.
- Static view switches off 3D. Reduced-motion preferences and unavailable WebGL automatically use a local architectural vector fallback, shorten the construction story and retain contact links. A scene error or lost context also uses the fallback.
- About, services, six authentic project photos, native modal gallery with next/previous, arrow keys, zoom and Escape, experience, supplied training records, rates and availability. Persistent mobile phone action, skip link and keyboard focus styles.
- A separate patio diagram labelled **CONCEPT VISUALISATION — NOT CONSTRUCTED**, with Structure / Finish controls. The existing patio and lighting are not presented as Brindle's work.
- Local fonts, responsive metadata-free WebP photographs, lazy media and 3D, favicon, social card, metadata, robots.txt and optional Cloudflare security/cache headers.

## Edit business details

Edit `src/config/business.ts` for the phone, Melbourne service area, services, rate wording, availability and training. Rates deliberately say **Rates discussed by phone**; no unapproved hourly price is published. If changing service area, also update the SEO description in `index.html` and social card in `scripts/prepare-assets.mjs`.

Gallery captions are in `src/data/portfolio.ts`. The photo-led opening is in `src/components/PhotoHome.tsx`; page order is in `src/App.tsx`; the optional study is in `src/components/BuildStudy.tsx`. Construction timing is in `src/lib/construction.ts`; geometry is in `src/components/ConstructionScene.tsx`. Base styles are in `src/styles.css` and `src/refinements.css`; the current portfolio layout and visibility rules are in `src/portfolio-first.css`.

The project role remains construction support using supplied materials and instructions. Do not add a home address, invented projects, testimonials, licences or certification claims.

## Supplied photographs and original documents

All six genuine construction photographs are used. All five patio photographs remain reference-only. Original JPGs, patio references and the legacy starter are preserved **locally**, excluded from Git publication and excluded from the deployment bundle. Only 18 metadata-free responsive WebP derivatives go online. A fresh clone builds with the committed derivatives without source JPGs.

To regenerate after changing local originals:

```powershell
npm.cmd run assets
npm.cmd run check
```

The four original brief documents remain unchanged. The original handoff README is preserved in `docs/ORIGINAL_HANDOFF.md`. `docs/FUTURE_SCOPE.md` records the boundary around future features.

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
