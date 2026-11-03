# BRINDLE PROPERTY MAINTENANCE — CODEX MASTER BUILD PROMPT

## Mission
Build a finished, genuinely working, premium **full-screen interactive construction website**, frontend-only, from the assets in this repository. The owner will open this folder in Codex on an ASUS ROG Ally X. DO THE IMPLEMENTATION, not just a mockup, plan, or code snippets.

The original agreed design has two complementary modes: (A) premium editorial portfolio pages and (B) **interactive construction** full-screen homepage. **B is the primary experience**. Preserve bold minimalist white / black / red Brindle branding, architectural typography, cinematic motion, refined layouts, and authentic construction imagery. Do NOT make another generic handyman site with standard hero and cards.

## Critical interactive experience
- On desktop: a real full-viewport 3D scene with scroll-controlled progression through construction stages: ground layout, steel/timber studs, noggins, clips/battens, wrap/cladding, trim/finished architectural composition. Use actual 3D geometry, Three.js / React Three Fiber and GSAP ScrollTrigger (or comparable deterministic scroll mapping). Camera transitions and meaningful staged storytelling; high-end visual polish.
- On mobile: preserve the immersive full-screen concept, but simplify geometry, limit render load, and ensure touch scrolling works. Provide attractive fallback for WebGL-disabled/reduced-motion devices. Never block contact or navigation.
- Build responsive premium editorial content around the immersive scene: About, Experience, Completed Project, Concept Design, Qualifications, Rates & Availability, Contact.
- Use actual photographs from `public/portfolio/completed/` prominently, in an immersive portfolio gallery with zoom/lightbox and truthful captions.
- Do not use stock images or fabricated completed work. Patio photos in `references/patio-concept-only/` are reference ONLY for the unbuilt Perth patio wall idea; create concept imagery only if suitable tools are available, otherwise provide a clearly labelled concept section with appropriate placeholders and no false completion claims.

## Business positioning
Independent experienced construction labour and project support. Owner reports over 20 years' practical labouring experience and prior work alongside a carpenter father. Experienced in steel framing support, timber noggins, clips, battens, wrap, fibre-cement and traditional cladding, plasterboard, painting, site preparation, doors/windows, fascia/soffit/downpipe assistance, material handling and general fit-out support. Also electrical/electronic engineering education and interest in nonregulated outdoor AV/LED/electronics concepts. Do not claim independent authority for structural, fire-rated, electrical or other licensed/registered work. Do not invent licences.

Verified training from owner's documents: CPCWHS1001 construction induction; RIIWHS204E working safely at heights; RIIWHS202E / MSMPER205 confined spaces; MSMWHS217 gas testing; MSMPER200 / MSMPER202 permit work. These are training records, not blanket permission for regulated work.

## Genuine project
Title: 'Residential Framing & External Cladding — Construction Support'. Showcase the six completed-work photos as the MAIN portfolio. Describe actual hands-on involvement in fire-rated residential construction using supplied materials and instructions; never claim design, certification or project management responsibility.

## Unbuilt patio concept
'Proposed Perth Patio Enclosure — Concept Only'. Existing reference images are NOT completed work by owner; concept envisioned patio stud walls, traditional cladding, a possible feature wall and optional outdoor entertainment / low-voltage lighting concepts. Label any visualisation 'CONCEPT VISUALISATION — NOT CONSTRUCTED'. Avoid implying existing patio festoon lighting was installed by Brindle.

## Contact and business model
NO backend, database, form, booking system, AI agent, payment processor, customer login or paid API. Every contact CTA must link to `tel:+61451743037` and visibly show **0451 743 037**. Persistent accessible mobile call CTA. Desktop copyable phone number. Do not use an email form or fake button. Contact action should work on supported phones.

Editable configuration for service area (initially Melbourne and surrounding areas; can switch to Sydney), services, availability and indicative independent contractor rate. Proposed placeholder rate is $60/hr + GST but **DO NOT PUBLISH AS FINAL** until owner approves; show 'Rates discussed by phone' by default. Labour-hire employment rates are separate from genuine contracting rates. Avoid sham-contracting implications.

## Architecture and quality
Use Vite, React, TypeScript, React Three Fiber/Three.js, GSAP as appropriate, and modern responsive CSS. Static build deployable on free Cloudflare Pages or GitHub Pages; no runtime server and no required subscription. Keep assets local and optimise images (WebP/AVIF derivatives as needed). Lazy-load media and 3D. Semantic HTML, keyboard support, focus states, contrast, reduced-motion support, WebGL fallback. Test at 320px and typical Android phone widths. Ensure 3D is performant and usable on mobile.

## Deliverables
Implement full source code in root; working scripts `npm install`, `npm run dev`, `npm run build`; actual 3D scroll assembly; mobile-responsive full-screen experience; real project photo gallery; separate unbuilt concept section; working phone CTAs; editable configuration; README with exact local preview and free-host deployment instructions. Run build and fix errors before completion. Do not stop after describing the approach.
