# Brindle — autonomous start-to-finish execution contract for Codex

## Mission
Build the **finished website**, not merely a proposal or starter. The owner will open this folder in Codex on a Windows ROG Ally X and expects Codex to implement the whole frontend autonomously, from project setup through production validation. Use the design brief in `CODEX_MASTER_PROMPT.md` and the assets described in `ASSET_MANIFEST.md`.

## Non-negotiable UX
- Interactive Construction is the default design: an immersive **full-viewport** construction experience, genuine 3D assembly of studs/noggins/battens/cladding, driven by scroll position, with cinematic camera movement and polished readable text overlays. No static hero pretending to be 3D.
- Mobile is equally important: responsive full-screen scene, touch scroll, modest GPU demand, static fallback and reduced-motion mode. The call action must remain accessible.
- Premium editorial visual language across the portfolio and supporting sections, using white/black/red brand styling. Avoid generic trades templates.
- Six actual completed-work photos in `public/portfolio/completed/` are the primary portfolio, with truthful descriptions. Five patio reference photos in `references/patio-concept-only/` must NEVER be presented as completed work. If no generated patio concepts exist, create a clearly labelled *concept* section using tasteful CSS/3D architectural diagrams instead of falsely presenting the reference photos as completed work. Do not fabricate evidence of completed work.
- Telephone only: all CTAs use `tel:+61451743037`, visibly show 0451 743 037; no contact form or backend. Desktop copy-number affordance is acceptable.
- Experience and qualifications must be accurate. Do not imply electrical licensing, independent certification of fire-rated systems, or authority to do regulated work. Advertised $60/hr + GST is provisional: do not present it as an approved fixed price. Prefer editable draft pricing or omit public price until confirmed.
- Do not disclose a residential street address.

## Implement without stopping
1. Inspect assets and repository; ignore `legacy-starter` as a design baseline.
2. Initialise a clean Vite + React + TypeScript application in this folder; configure styling, linting and package scripts.
3. Build a consistent design system: typography, spacing, navigation, accessible controls, section transitions and responsive layouts.
4. Build a performant real Three.js / React Three Fiber scroll-driven construction assembly with meaningful wall geometry and stages. Ensure scroll and camera positions are deterministic, reversible and robust on mobile.
5. Build complete homepage, experience/services, qualifications, genuine photo project gallery, clearly labelled patio concept, labour availability, and click-to-call contact. Do not leave placeholder or broken links.
6. Add semantic SEO metadata, Open Graph basics, favicon, accessible alt text, reduced-motion support, lazy loading, WebGL fallback, error boundaries and appropriate loading behavior.
7. Configure **free static deployment**: Cloudflare Pages build command/output and/or GitHub Pages GitHub Actions workflow with correct base paths. No paid integrations, server, API keys, accounts, database or required Raspberry Pi service.
8. Run install, typecheck, lint, tests where implemented, production build and a local smoke test. If browser tooling exists, check 375px mobile and desktop viewport, navigation, full-screen hero, images and phone links. Fix failures; repeat until clean. Do not claim a test you did not run.
9. Ensure `npm run dev`, `npm run build`, and `npm run preview` work. Document Windows PowerShell setup and preview commands, plus free hosting steps.
10. End with a short, accurate report: what was built, what commands passed, any real limitations, and the precise deployment steps. Only say it is **live** if deployment was actually completed and URL checked.

## Working style
- Do not stop to ask the owner to choose colours, frameworks, section order, animation style or implementation details already covered by the brief.
- Do not respond with only a plan or to-do list. Create/edit the actual files.
- Do not silently replace the 3D requirement with a static illustration. If a library is unavailable, implement with available Three.js primitives or report the concrete blocker.
- Do not require paid services. If credentials are unavailable, finish a locally working, production-built site and give concise instructions for publishing it; never claim you published it.
- Preserve the larger original Brindle feature plan for future upgrades without implementing it in this frontend-only phase.

## Definition of done
The site can be run on the ROG Ally X, looks and behaves like a premium full-screen interactive construction experience, displays all six authentic portfolio photos, accurately separates concept work, works on a phone via a hosted HTTPS URL after deployment, opens the dialler when contacted, and produces a verified static production build with no backend or hosting subscription.
