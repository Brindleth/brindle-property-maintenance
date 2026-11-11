# Shorter photographic revision — 12 November 2026

The owner's latest correction restores the original type treatment, keeps **only the patio slider**, shortens the page and replaces staged/showroom service pictures with ordinary working environments. Implemented in the existing repository. **Not committed, pushed or deployed.**

## Result

- Space Grotesk Variable and Manrope Variable use their original family names. Display headings are restored to weight 500; the lowercase wordmark retains weight 700. Browser font loading and computed heading weight were verified.
- The page has about **300 visible main-content words** with details closed. Full service descriptions and scope remain available by opening the photograph-led cards. Repetitive Why/featured text sections were removed, and the process is three short steps.
- Six service photographs: four new work-in-progress examples, plus genuine supplied labouring and exterior images. No polished showroom service scenes remain in production.
- All six original site views appear once each in the initial page; the gallery lightbox can browse all six. Original work and service examples remain distinct.
- The original patio reference/rendering pair is retained unchanged. It is the **only** range/comparison control. No cladding or feature-wall slider, project-stage range, prominent concept badge or “conceptual art” label remains.
- Generated-image details are in a discreet linked footer disclosure. The patio caption identifies its unbuilt enclosure.
- Telephone enquiries, in-person quotation, task/legal scope checks and disclosed call-out/travel charges are retained. No booking/form/payment workflow or private address was added.

## Image loading issue reproduced and fixed

Before the fix, the previous build's /brindle-property-maintenance/ image and script requests returned **text/html** when npm.cmd run preview was started without BASE_PATH: the preview default was ./ while the build used the repository path.

Vite now uses /brindle-property-maintenance/ consistently by default for dev, build and preview. With no separate environment setting, root navigation redirects to the correct path and image/script/font URLs return their actual content. The existing GitHub Pages workflow can still supply its base override.

## Checks actually performed

- **npm.cmd run check** passed: TypeScript, ESLint (no warnings), all **7 tests**, production build, static prerender and output validation. Final CSS/navigation adjustments were followed by another successful production build and output validation.
- **47 production files** returned HTTP 200 and matched dist byte-for-byte through the repository path, including **36 WebPs**, both local fonts and the current CSS/JavaScript. Machine-readable proof: test-results/resource-smoke.json.
- Browser layout inspection at approximately **1439 × 900 desktop**, **768 × 1024 tablet**, **393 × 873 phone** and **320 × 568 narrow phone**. No horizontal document or main/footer-element overflow was found. Services use three columns on desktop and two on tablet/phone.
- All twelve initial page images loaded, including all six service cards. Responsive width descriptors and metadata-free derivatives are validated in the build/tests.
- The genuine supplied photo files and the old patio pair remain unchanged. Four new selected masters are preserved under references/service-refresh-2026/; twelve optimized WebPs are in public/images/services/. Exact built-in prompts and paths are in docs/WORKING_IMAGES_REVISION.md.
- Patio starts at 50%. Desktop pointer dragging moved it to 22%; phone-width dragging moved it to 30%, with the page's vertical scroll position unchanged. Home/End reached 0/100%, and ArrowLeft changed 100 to 99. Both images share identical container sizing/object positioning and only the upper image is clipped. The keyboard range's focus position is centred in the image frame.
- Phone menu opens, makes the background inert and locks its scroll. Shift+Tab returns from the first menu link to the close button. Following Patio closes the menu, restores the background and focuses the target section.
- Service details open by keyboard at 320px without overflow. Gallery opens, Escape closes it and focus returns to the original photo link.
- Contact copying returned “Ready to paste.” All twelve telephone destinations point to tel:+61451743037; no call was placed.
- Image-details link opens the actual AI/original-photo disclosure. No application warning/error console logs were observed in the final browser session.
- Temporary viewport overrides were reset. Local proof screenshots: test-results/brindle-simple-desktop.jpg, test-results/brindle-working-services-mobile.jpg and test-results/brindle-patio-mobile.jpg.
- Current bundle: JavaScript approximately **77.29 kB gzip**; CSS **4.90 kB gzip**. No new runtime dependency.

## Changed files for this correction

- Page, hero and original gallery: src/App.tsx; src/components/PhotoHero.tsx; src/components/Portfolio.tsx.
- New visual services and single patio: src/components/Services.tsx; src/components/PatioComparison.tsx; src/data/serviceImages.ts; src/lib/patioComparison.ts.
- Original typography/responsive layout: src/maintenance.css; navigation: src/data/navigation.ts.
- Consistent local/Pages base: vite.config.ts.
- Image optimization: scripts/prepare-service-images.mjs and package.json assets:services command; 12 new public/images/services/ WebPs.
- Validation: scripts/verify-build.mjs and tests/visualServices.test.mjs.
- Documentation: README.md, AGENTS.md, docs/WORKING_IMAGES_REVISION.md, docs/SERVICE_SCOPE_REVIEW.md and this dated record.

Physical Android/Nothing Phone testing, physical touch hardware, OS reduced-motion emulation, screen-reader testing and a full WCAG/Lighthouse audit were not performed. Viewport/pointer/keyboard checks are not claimed as physical-device certification. No live GitHub Pages deployment of this revision was attempted.

---

# Earlier verification records — superseded where noted
# Maintenance & skilled labour redesign — 11 November 2026

Implemented locally in the existing React / TypeScript / Vite repository. **This revision has not been committed, pushed or deployed.** The GitHub Pages workflow and repository base-path support are preserved; historical deployment records below describe older versions only.

## Delivered

- New maintenance/skilled-labour identity, photographic hero and requested headline.
- Six scoped service categories, with general/skilled labouring highlighted. Native disclosures show examples and limits.
- About, original-photo gallery and native lightbox, featured preparation detail, Why Brindle, three-step quotation process and telephone contact.
- Sticky responsive header, keyboard-managed mobile navigation, footer navigation, service terms and privacy content.
- New title, description, Open Graph/social card, service structured data, sitemap and robots reference.
- Zero comparison sliders or project-stage ranges. No prominent concept badges or AI/edited photographs in the published homepage.
- All six genuine site views used once each. They document one residential construction-support project, including work in progress.
- Existing phone, rates-by-discussion, inspection-before-quote and disclosed call-out/travel terms retained. No invented form, booking system, email, address or prices.

## Checks actually performed

- **npm.cmd run check**, with BASE_PATH=/brindle-property-maintenance/: TypeScript, ESLint (no warnings), all **4** asset/content tests, Vite production build, static prerender and output assertions passed.
- Production output checks validate one H1, ordered sections, six services, unique IDs and anchor targets, correct telephone destinations, local resource existence, six unique original photographs, accurate responsive widths, EXIF removal, structured data, no sliders/forms/canvas and no retired branding.
- All **29 production files** served HTTP 200 and matched the actual dist bytes through the repository base path. JavaScript, CSS, fonts, JPEG, WebP, HTML, SVG, robots and sitemap content types were checked. Machine-readable result: test-results/resource-smoke.json.
- Browser layout/overflow inspection at effective CSS viewports approximately **1439 × 900**, **768 × 1024**, **375 × 812**, **320 × 568**, and **393 × 873**. No horizontal document overflow or overflowing main/footer elements were found. Tablet uses two service columns, desktop three and phones one.
- All six service disclosures open using the keyboard and fit at 320px. The labouring card is visibly highlighted.
- Mobile menu opens/closes, inerts the background and locks background scrolling. Shift+Tab and Tab loop through menu controls, Escape closes it, and following a link closes it and focuses the requested section. Scroll locking is restored on close.
- Settled Services and Process anchors were measured at about 100px below the viewport top on mobile, clearing the 80px sticky header.
- Gallery opens on desktop and phone. Next/previous buttons, Arrow keys, Escape, explicit close, body-scroll restoration and return focus to the original gallery link passed. The phone dialog stays within the viewport and its original image loads.
- Phone links all point to tel:+61451743037; no telephone call was placed. Copy-number button reported success. Privacy link expands its actual content.
- All six original page images loaded successfully after navigation. No application warning/error console entries were observed.
- Foreground/background contrast calculations: #626262 on #F5F5F3 **5.59:1**, white on #D62828 **5.01:1**, #C7C7C1 on #171717 **10.56:1**, #A9A9A3 on #171717 **7.59:1**. Contact-section keyboard outlines use white. Native controls, labels, semantic structure, focus handling and reduced-motion CSS were reviewed.
- Current JavaScript bundle: approximately **77.62 kB gzip**; CSS **5.53 kB gzip**, with local fonts. No new runtime dependency was introduced.

## Remaining limits and asset notes

No physical Nothing Phone, Android/iOS device, screen-reader session, Lighthouse run or full WCAG 2.2 AA audit was performed. Browser checks used viewport emulation and pointer/keyboard controls, not physical touch hardware. OS reduced-motion preferences and JavaScript-disabled navigation were inspected in source/prerendered output, not toggled in the browser.

The mismatched cladding pair is **replaced**, not claimed repaired. Zero comparison controls remain, so alignment, slider dragging and slider keyboard tests are not applicable. A future comparison requires a reliably registered same-camera original/finish pair.

Only construction-support photographs were supplied. Genuine maintenance, furniture/joinery, painting and installation project photos would improve category coverage; service icons are used until those exist. Old illustrative images remain in source for historical reproduction, but the production verifier removes them from dist.

Service claims were limited following current Victorian and South Australian official sources. Tasks and lawful working arrangements still require review before acceptance; no licence status is invented. Review docs/SERVICE_SCOPE_REVIEW.md, particularly fixed joinery, mounting, building alterations, independent cladding and SA subcontracting.

## Changed files

| Area | Files |
| --- | --- |
| Page and content | src/App.tsx; src/config/business.ts; src/data/services.ts; new src/data/navigation.ts |
| Components | src/components/Header.tsx; Icons.tsx; PhotoHero.tsx; Portfolio.tsx |
| Styling | new src/maintenance.css; src/main.tsx; eight superseded CSS files removed |
| Search/social | index.html; public/robots.txt; new public/sitemap.xml; new public/images/og-brindle-v5.jpg; scripts/prepare-brand-assets.mjs |
| Validation | scripts/verify-build.mjs; tests/assets.test.mjs; retired comparison/stage tests removed |
| Retired implementation | Capabilities.tsx, FeatureFitout.tsx, ImageComparison.tsx, PatioConcept.tsx; obsolete comparison/stage data and helper modules; unused useMedia hook |
| Documentation | README.md; AGENTS.md; this record; new docs/MAINTENANCE_REDESIGN_BRIEF.md and docs/SERVICE_SCOPE_REVIEW.md; .gitignore adds local .qa scratch output |
| Preserved | package.json, dependency lock, favicon/logo wordmark, genuine photo assets, original data captions, GitHub Pages workflow, Vite configuration |

Local proof images: test-results/brindle-maintenance-desktop.jpg and test-results/brindle-maintenance-mobile.jpg. Test outputs stay ignored. The project can be previewed using the README commands; no live-publication verification is claimed.

---

# Historical validation records — superseded versions

# Cladding-focused revision / three comparisons — 5 November 2026

The latest owner brief and explicit three-comparison limit supersede the historical wall-animation releases below. The site now leads with a photographic completion of original cladding image 1000020958, followed by three shared-component comparisons: exterior cladding, the retained patio pair, and a feature-wall/entertainment fit-out. The wall assembly, loop, controls, source geometry and publication assets are removed entirely.

Verified locally:

- TypeScript, ESLint, **13 regression tests**, production build, prerender and static output validation pass at the exact GitHub Pages base. The final application bundle is approximately **77.6 kB gzip**. One H1, the intended section order, exactly three comparison figures, separate framing images, genuine-photo viewer, scoped services and honest provenance are verified in build output.
- All three comparisons accept Home = 0, End = 100 and ArrowLeft = 99. Native image drags on the 375 × 812 layout moved each divider to 20%. Changing cladding to 0 left patio and feature at 20%, confirming independent controls. Shared pointer capture, cancellation and pan-y touch behavior remain implemented; no physical touchscreen claim is made.
- The original patio reference and proposed rendering remain unchanged, with the previous crop/position retained. The cladding pair uses the actual 1000020958 view and an upper-wall finish visualisation. The feature-wall pair retains the same room, furniture, floor and viewpoint. Original work is never replaced with an edited image in the genuine-photo viewer.
- Layouts at approximately **1440 × 900, 768 × 1024, 375 × 812 and 320 × 568** have no horizontal overflow. The short-phone hero keeps the headline, call CTA and digital-visualisation disclosure readable. Tablet construction imagery shows timber-only and steel-only photographs separately. Mobile navigation closes after following a link.
- The original-photo viewer's End key selects stage 4, Next wraps to stage 1 and a native horizontal swipe advances to stage 2. All **six telephone anchors** use tel:+61451743037; no calls were placed. No contact form, booking system, backend, database or canvas exists.
- The first preview process was restarted with BASE_PATH set explicitly after an incorrect preview base served HTML for asset URLs. The corrected production preview subsequently returned **all 58 public files byte-for-byte identical to dist**, including **45 WebPs**. No loaded broken images or application warning/error logs were observed in the corrected session.
- Only the hero loads eagerly; below-fold images are lazy-loaded. All new assets have metadata-free 480/960/1440 derivatives, and the cladding-original srcset descriptor matches its actual 1152-pixel maximum. The hero's one four-second image settle is disabled by prefers-reduced-motion; the OS preference path was reviewed in source because this browser does not expose OS emulation. No physical Android/iOS or OS-setting test is claimed.
- The six original construction JPGs are preserved locally and excluded from deployment. All image assets are complete. Exact built-in image prompts and saved master/output paths are in docs/CLADDING_REVISION_ASSETS.md. README documents how future genuine job pairs can replace illustrations without changing the frontend architecture.

Published application commit **024db67b51ea7744a31e1fefcb11d2043228b875**. [GitHub Actions run 41974305496](https://github.com/Brindleth/brindle-property-maintenance/actions/runs/41974305496) completed successfully and deployed to the [existing Pages site](https://brindleth.github.io/brindle-property-maintenance/). All **58 public file URLs** returned HTTP 200, including all 45 WebPs; image, font, CSS and JavaScript content types were correct. The live HTML serves the exact final application bundle and three comparisons, with no wall assembly. Live desktop 1440 × 900 and phone 375 × 812 checks found no overflow. All three published comparison ranges reached 100% and returned to 0%; a native live phone-width drag moved the feature-wall divider to 30%. All six telephone links are correct and no application warning/error logs were observed. Saved proof images: test-results/brindle-cladding-live-desktop.jpg, test-results/brindle-cladding-live-mobile.jpg and test-results/brindle-feature-comparison-live-mobile.jpg. Temporary viewport overrides were cleared after verification.

---

# Automatic build loop and restored wordmark — 4 November 2026

The owner's latest correction restores the lowercase **brindle.** visual wordmark and replaces the long scroll sequence with one full-screen automatic photographic build loop. It supersedes the scroll-specific verification in the historical record below.

Verified for this revision:

- TypeScript, ESLint, all **18 regression tests**, the production build, static prerender and output validation pass at the exact GitHub Pages base. The application is approximately 79 kB gzip. The frontend has no WebGL renderer, backend, database, booking system or paid API.
- A natural browser observation captured all five stages without scrolling: clips at 21%, battens at 42%, surrounds at 58%, cladding at 74% and 100%, then thermal wrap at 0% on the next loop. Scroll position remained exactly zero. The loop takes 30 seconds, with settled stage holds and a gentle reset.
- All clip sprites read opacity zero after the complete battens, during trims and at the cladding finish. A separate precise photographic edit removed exposed clip faces from the batten plate. Versioned clean-batten URLs avoid reuse of the previous image. Regression coverage checks occlusion for every fixing, timing holds/restart, perspective cladding geometry and tab scale.
- Play/Pause holds the current frame and resumes. A native phone-width click resumed the loop without moving the page. Normal scrolling goes directly into services; the animation suspends once less than 15% of the opening is visible. Its progress stayed unchanged while navigating the actual-work and patio sections.
- Browser layouts at approximately **1440 × 900, 768 × 1024, 375 × 812 and 320 × 568** have no horizontal overflow. The restored lowercase typography, supporting business line, navigation, stage labels and motion control remain readable. Phone-width navigation closes after selection.
- The actual-work slider's End key selected the fourth original photograph, Next wrapped to the first, and a native horizontal drag advanced from Stage 1 to Stage 2. Patio Home/End reached 0/100%; dragging the image changed it to 24%. The original photos and concise patio proposal clarification are preserved.
- All five telephone destinations are **tel:+61451743037**; no call was placed. No broken loaded images or application warning/error logs were observed in the production preview.
- All **75 local production file URLs**, including **61 metadata-free WebPs**, returned HTTP 200. Original construction photos and generated masters remain untouched locally and excluded from publication. No final image assets are missing; exact edit prompts and saved paths are recorded in docs/PHOTOGRAPHIC_ASSEMBLY.md.
- Reduced-motion visitors receive the finished still view. Browser emulation does not expose the OS preference control, so this preference path was reviewed in source; no physical-device or OS-setting test is claimed.

Published application commit: **df329cc69129bc44b25757e027213ccd9ec0a5f0**. [GitHub Actions build and deployment 41819596782](https://github.com/Brindleth/brindle-property-maintenance/actions/runs/41819596782) completed successfully. The live [existing Pages site](https://brindleth.github.io/brindle-property-maintenance/) serves the exact new application bundle, lowercase wordmark, automatic loop control and clean-batten assets. All **73 public page/resource URLs** checked returned HTTP 200 (the two build-only dotfile markers are not public resources). The published desktop loop reached the complete cladding stage at 100% with zero visible clip sprites and scrollY zero. Live 375 × 812 mobile verification found no overflow, the correct five telephone destinations and no warning/error logs. Desktop and mobile screenshots are saved locally at test-results/brindle-loop-live-desktop.jpg and test-results/brindle-loop-live-mobile.jpg. The loop was resumed and temporary viewport overrides cleared after verification.

---

# Photographic assembly and Smart Home Solutions — 4 November 2026

The owner's complete revision brief supersedes the prior detached 3D experience. Branding is now BRINDLE — Property Maintenance & Smart Home Solutions throughout the wordmark, metadata, social card, footer and relevant accessible labels. Five service categories keep practical construction/property work and permitted smart-home/custom electronics work balanced.

Verified locally for this revision:

- TypeScript, ESLint, all **17 regression tests**, production build, static prerender and output validation pass at the exact `/brindle-property-maintenance/` deployment base. npm dependency audit during removal of the old renderer reported zero vulnerabilities. Three.js, React Three Fiber and their unused components are removed; the production output has no 3D renderer chunk or canvas. The application bundle is approximately 79 kB gzip, plus local CSS/fonts and photographic assets.
- All six original construction JPGs were inspected. `1000020847` is the fixed-camera starting reference; `1000020954`/`1000020946` supply fixing/batten appearance and `1000020958` supplies the cladding/white-surround finish. Reconstructed stages are explicitly identified and never added to the genuine portfolio. The genuine four-stage viewer and optional original framing detail remain compact and truthful, with personal hands-on involvement stated.
- Photographic assembly progresses through thermal wrap, small rectangular metal fixing tabs, complete metal battens, window surrounds/corners and horizontal cladding. Facade/glass masks preserve the fixed camera and surrounding scene. Individual tabs, eight batten groups and 22 perspective-following cladding groups are scroll controlled. No mismatch-camera crossfade or replacement 3D wall is used.
- The owner's clip-size correction is enforced in scene geometry: tabs use a photographic alpha cutout with a 3:1 rectangular ratio and 3–8 pixel width limit in the 1152 × 1536 registration space. The largest placed tab measures approximately 7.36 units. Oversized/excessive full-frame clip variants were rejected and are not published. Batten fixing tabs were also reduced.
- Native scrolling in the production preview advanced from 0% to 39% (partial battens), then 79% (partial cladding), and reversed to the identical 39% scroll position. The batten rectangle heights and cladding polygon points matched exactly on return. Keyboard stage access was checked; first/final shortcuts and complete cladding were visually inspected.
- Browser viewport checks at approximately 1440 × 900, 768 × 1024, 375 × 812 and 320 × 568 show no horizontal document overflow. Mobile navigation, the assembly, persistent call bar and narrow typography remain usable. The still-view control collapses the sequence to one viewport, shows the photographic finish and re-enables scrolling. The OS reduced-motion path shares this same still-view branch and includes pre-hydration CSS; the OS preference itself was not changed or emulated. No physical Android/iOS testing is claimed.
- The actual-work viewer changed from Stage 1 to Stage 2 with a phone-width horizontal pointer swipe. Native range controls/keyboard endpoints remain functional. The patio range reached 0% and 100%; a direct phone-width drag changed it to 24% existing / 76% proposed. The original reference/rendering pair remains separate from completed work, with its concise unbuilt-work clarification.
- All five contact destinations are `tel:+61451743037`. No call was placed. Five service categories and one unobtrusive service-image disclosure are present. Wireless setup/device configuration is explicitly separated from fixed wiring, switchboards, hardwired lighting and regulated cabling. No unsupported licence, certification, review, completed project, backend or booking system was introduced.
- All **69 checked local production resource URLs** returned 200, including **61 WebPs**, fonts, script, stylesheet, social cards, favicon and robots. Assembly alpha was checked at 0–255 with a real transparent background. Originals and PNG masters stay local and Git-ignored. Exact built-in image prompts, saved paths, rejected variants and mask/reproduction details are in `docs/PHOTOGRAPHIC_ASSEMBLY.md`. All required image assets are complete.

The earlier photographic application commit 72fc568 also deployed successfully; the automatic-loop release above supersedes it. Earlier release records follow for history.

---

# Service-led rebalance — 4 November 2026

The latest owner request supersedes earlier concept-heavy page layouts. The full-screen interactive construction opening remains, followed by seven varied service illustrations, one compact real-photo progression, the restored patio comparison, experience/training and direct contact.

Verified for this revision:

- TypeScript, ESLint, all **13 regression tests**, production build, static prerender and build-output validation pass. The exact `/brindle-property-maintenance/` production base was built and opened locally.
- Seven photorealistic service illustrations cover timber/steel framing support, partitions/fit-outs, feature walls, external finishes, painting/maintenance, outdoor spaces and low-voltage lighting/concealed AV. One discreet service-image disclosure replaces prominent AI/concept badges. Exact new prompts, tool mode and saved paths are in `docs/SERVICE_REBALANCE_ASSETS.md`. No final image assets are missing.
- The four genuine-photo stages remain accurate to the supplied photographs. Early fixings are acknowledged, the small-window view is described as preparation, and upper exposed wrap is not called a completed facade. Different viewpoints are stated. Optional framing stays within the same project; no actual project image is repeated in experience or services.
- Desktop project arrows, native range Home/End and a narrow-phone pointer swipe work. The project viewer is compact, with all source photographs fully visible.
- The patio comparison uses original reference `1000020835.jpg` and its corresponding edited proposal. Direct dragging changed the split from 50% to 77%; Home/End reached 0% and 100% clipping, with keyboard increments confirmed on the phone layout. The interface explicitly identifies an unbuilt design visualisation and does not claim the existing patio/lights as Brindle work.
- Browser viewport checks at approximately **1440 × 900**, **768 × 1024**, **375 × 812** and **320 × 568** show no horizontal document overflow. Responsive service images, compact stage controls, patio range, mobile navigation and persistent call bar remain usable. The production subpath restores `#services` at the correct offset after hydration.
- The loaded 3D canvas, sixth stage shortcut, rotate control, static fallback removing the canvas, and re-enabling 3D were exercised. No application warning or error was observed from the checked local origins. The pre-existing missing-WebGL/reduced-motion fallback paths remain implemented; no physical-device or hardware-failure claim is made.
- All five rendered telephone anchors use `tel:+61451743037`. No call was placed. No backend, database, booking service, external image host or production generation API was added.
- All 45 responsive WebPs are local; source metadata is removed. Original photographs and PNG masters stay preserved locally and are excluded from GitHub Pages. Lazy service imagery and on-demand, capped-DPR 3D rendering remain in place.

Published at https://brindleth.github.io/brindle-property-maintenance/. Application commit `0433525e890633075604e27d79a6d2323da3df81`; [GitHub Actions run 41749724092](https://github.com/Brindleth/brindle-property-maintenance/actions/runs/41749724092) completed successfully, including lint, all 13 tests, production build and deployment. The public page returned 200. All **55 checked public resource URLs returned 200**, including all 45 WebPs, fonts, scripts, styles, favicon, robots and social image. Live browser checks confirmed the loaded 3D canvas, seven loaded service illustrations, correct services anchor offset, Stage 4 selection and the patio comparison at 0%. All five telephone destinations are correct. Final published screenshot: `test-results/brindle-services-live.jpg`; resource report: `test-results/service-rebalance-http.json` (both local, excluded from Git).

Responsive and pointer checks above were completed successfully against the local application/production preview. A later attempt to repeat the phone viewport on the public origin was limited by a stalled browser viewport connection to an obsolete diagnostic tab; it was not a website runtime error. Physical phone testing was not performed. Earlier release records are retained below for history.

---

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
