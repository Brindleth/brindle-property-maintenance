# BRINDLE — COMPLETE WEBSITE REVISION

You are the lead frontend developer, visual interaction engineer and creative director for the existing Brindle website.

Website: https://brindleth.github.io/brindle-property-maintenance/

**This is a modification of the existing website, not a rebuild from scratch.**

Read the repository, existing project instructions, image assets and current components before changing anything.

Work autonomously from implementation through testing and deployment. Do not stop after writing a plan.

## 1. Update the business branding

Change the business's public-facing name throughout the website to:

**BRINDLE**
**PROPERTY MAINTENANCE & SMART HOME SOLUTIONS**

Use "BRINDLE" as the dominant wordmark, with "Property Maintenance & Smart Home Solutions" as the smaller supporting line.

Update the website title, metadata, footer, navigation, mobile header, Open Graph information and relevant accessible labels.

Preserve the premium minimalist white, black and red identity.

The website should represent a versatile business combining practical construction experience, property maintenance, technical problem-solving, custom installations and smart-home solutions.

Do not make it appear to be solely a cladding contractor or solely a smart-home company.

## 2. CRITICAL: Replace the current 3D construction animation

The current 3D view does not achieve the intended result.

**REMOVE THE DETACHED 3D CONSTRUCTION MODEL.**

Do not replace it with another generic 3D wall, exploded architectural diagram or abstract animation.

Instead, build a full-screen, scroll-driven **PHOTOGRAPHIC CONSTRUCTION ASSEMBLY** using the owner's actual exterior-wall photographs.

The experience must look as though the real wall in the photograph is being constructed directly in front of the viewer.

The camera angle, windows, roofline, wall geometry, perspective and surrounding environment must remain visually consistent.

### Reference photographs

The owner has supplied three additional photographs:

* `1000020847.jpg` — Reflective wall wrap with partially installed vertical battens around the large window.
* `1000020954.jpg` — Another exterior elevation showing a more complete vertical batten installation and window details.
* `1000020958.jpg` — The finished wall with horizontal exterior cladding and white window surrounds.

Also inspect all previously supplied construction photographs in the repository.

**Use the first photograph as the preferred base scene**, subject to checking the other images for a better alignment.

The third photograph is the primary reference for the completed cladding and window-surround appearance.

The second photograph demonstrates the correct batten arrangement and spacing.

Do not assume these three photographs share identical viewpoints or show exactly the same wall. They are construction references, not automatically interchangeable animation frames.

### Exact construction sequence

The user must be able to scroll through these five stages:

**STAGE 1 — THERMAL WRAP**

Show the real exterior wall covered in reflective thermal wrap.

The building, roof, windows and surroundings remain visible.

Remove or visually conceal the battens and clips already present in the original photograph to create a plausible starting state.

**STAGE 2 — METAL CLIPS**

As scrolling progresses, show the metal fixing clips appearing in the correct positions.

Animate the clips attaching to the wall, progressively across the surface.

Use accurate visual references from the owner's construction photos.

Clips must follow the perspective of the wall, not float in front of the photograph.

**STAGE 3 — METAL BATTENS**

Show vertical metal battens installing onto the clips.

The battens must follow the actual fixing pattern and spacing demonstrated in the reference photographs.

The first photo shows an unfinished batten installation. The animation must progressively complete the batten arrangement across the wall, including the unfinished areas.

Do not simply reveal the existing incomplete battens and call the stage complete.

The result must look like a plausible fully battened wall.

**STAGE 4 — WINDOW SURROUNDS & CORNERS**

Progressively install the white window surrounds/architraves and appropriate external corner trims.

Use the finished photograph to match the real appearance.

Keep the existing window sizes and positions unchanged.

Show the surrounds fitting around the existing openings.

**STAGE 5 — EXTERIOR CLADDING**

Install the horizontal cladding boards progressively, covering the battened wall.

The boards should align with the perspective, spacing and texture demonstrated by the completed project photograph.

The final result should resemble the actual finished wall, including the white window surrounds, external finishing details and horizontal cladding.

### Required animation behaviour

The entire sequence must be controlled directly by scrolling.

* Use a sticky or pinned full-viewport photographic scene.
* Map scroll position continuously to assembly progress.
* Support forward and reverse scrolling.
* When scrolling backwards, components must disappear in reverse installation order.
* Animate clips, battens, surrounds and cladding individually or in believable groups.
* Avoid abrupt image changes or obvious mismatched crossfades.
* Avoid flickering, misalignment, floating elements or distorted perspective.
* Keep the background and building visually stable.
* Include discreet stage names and a progress indicator.
* Keep navigation and telephone contact accessible.
* Optimise the experience for touch scrolling on mobile.

Do not make the user click through five separate static images. The main interaction must be scroll-driven.

### Photographic asset creation

A technically convincing result may require additional image preparation.

Inspect the supplied photos and identify the required masks, textures and layers.

Create or generate appropriately aligned photographic assets for:

1. Clean thermal-wrap starting scene.
2. Metal clip overlay.
3. Fully installed metal batten overlay.
4. Window-surround and corner-trim overlay.
5. Finished horizontal-cladding overlay.

Where photographic reconstruction is necessary, preserve the original architecture and geometry.

Use image editing or generation tools if available.

Do not assume CSS, Three.js or SVG alone can reconstruct hidden wall surfaces photorealistically.

If an external image-generation tool is unavailable, prepare the scene and mask specifications and clearly identify which assets need to be generated. Do not claim that a rough approximation is the finished result.

### Technical recommendation

Prefer a scroll-controlled, layered photographic composition using GSAP ScrollTrigger, responsive image layers, clipping masks and precisely aligned overlays.

Three.js may be used only where it genuinely improves perspective-correct compositing. It must not produce a detached 3D architectural model.

Prioritise photographic realism over unnecessary technical complexity.

## 3. Keep the patio before-and-after slider

Preserve the existing interactive patio comparison slider.

Use the original Perth patio reference photograph as the before image and the proposed finished transformation as the after image.

The slider must remain draggable and touch-friendly.

Do not create a large separate patio concept gallery.

Keep the presentation visually clean and concise.

Do not describe the proposed patio renovation as completed work.

## 4. Expand the services across the website

The website currently focuses too heavily on the one genuine cladding project.

Broaden the imagery and service presentation to represent Brindle's capabilities.

Include visually distinct categories for:

**Property Maintenance**

* General nonregulated repairs.
* Painting and finishing.
* Minor maintenance and property improvements.
* Door, trim and fitting assistance.

**Construction & Carpentry Support**

* Timber and steel framing assistance.
* Stud walls and partitions.
* Cladding and exterior finishes.
* Plasterboard and fit-out support.
* General site and installation assistance.

**Smart Home Solutions**

* Smart-home planning and device selection.
* Wireless smart-home configuration.
* Smart sensors and automations.
* Smart lighting controls using compliant plug-in or battery-powered devices.
* Voice assistant and connected-device integration.
* Home network and smart-device troubleshooting.

**Custom Electronics & Entertainment**

* Low-voltage electronic design.
* Bespoke LED lighting features.
* Entertainment and AV equipment integration.
* Concealed projector and screen concepts.
* Cable management and custom equipment mounting.
* Custom nonregulated electronic installations.

**Outdoor Living**

* Patio improvements.
* Feature walls and decorative finishes.
* Outdoor entertainment layouts.
* Nonregulated lighting and electronic features.
* General exterior maintenance.

Use premium, realistic photographic imagery representing the different categories.

Do not repeatedly reuse the same construction project across unrelated service sections.

Do not claim that illustrative images are completed Brindle projects.

Smart-home offerings must exclude fixed electrical wiring, switchboard work, hardwired lighting, regulated cabling and any other work requiring licences or registrations that the owner does not hold. Where a proposed installation would require a licensed practitioner, clearly separate Brindle's permitted design/configuration work from the regulated installation.

## 5. Simplify the genuine portfolio

Retain the owner's real construction photographs in a compact dedicated portfolio section.

Avoid multiple galleries covering the same project.

Use a simple, polished progression slider where appropriate.

The full-screen photographic construction animation should be the main visual storytelling feature.

The separate portfolio should establish that the owner personally participated in the construction work.

Do not claim independent engineering, certification or responsibility for the entire fire-rated construction system.

## 6. Preserve the existing premium website experience

Keep:

* Full-screen immersive presentation.
* White, black and red branding.
* Cinematic transitions.
* Premium architectural typography.
* Responsive layouts.
* Simple navigation.
* Strong mobile usability.
* Clear services and qualifications.
* Direct telephone contact.

Avoid:

* Generic tradesperson templates.
* Excessive text.
* Multiple competing image sliders.
* Detached 3D building models.
* Repeated cladding photographs across the site.
* Unnecessary concept-project explanations.
* Large AI badges or concept galleries.
* Fake reviews or invented completed projects.

A small, unobtrusive disclosure may distinguish illustrative imagery from documented completed work.

## 7. Contact details

Retain:

**0451 743 037**

All call buttons must use:

`tel:+61451743037`

Keep the persistent mobile call button.

No contact forms, booking systems, databases or backend services.

## 8. Hosting and technical requirements

Retain the existing GitHub Pages deployment.

The site must remain completely frontend-only.

No paid hosting, API subscriptions or backend infrastructure.

Optimise image loading, animation performance, accessibility and mobile rendering.

Support reduced-motion preferences and provide a polished fallback when advanced animation cannot run.

## 9. End-to-end execution requirements

Perform the following without stopping between stages:

1. Inspect the existing repository and website implementation.
2. Review all original and newly supplied construction photos.
3. Update the branding.
4. Replace the existing 3D construction model with the photographic scroll assembly.
5. Implement the five exact construction stages.
6. Preserve the patio before-and-after comparison.
7. Expand and rebalance service imagery.
8. Add the Smart Home Solutions section.
9. Optimise desktop and mobile layouts.
10. Test forward and reverse scrolling.
11. Test touch interactions and reduced-motion fallback.
12. Verify all telephone links.
13. Run TypeScript checks and the production build.
14. Fix all errors.
15. Commit and push the changes if authorised.
16. Verify the published GitHub Pages deployment where access permits.

Do not stop after planning, scaffolding or implementing only one section.

If any required image-editing capability is unavailable, complete all feasible code changes, report the exact missing photographic assets and provide a reproducible asset-generation specification.

**SUCCESS CRITERION:** A visitor scrolls over a real photograph of the owner's building and watches the actual exterior construction system assemble progressively:

THERMAL WRAP → METAL CLIPS → METAL BATTENS → WINDOW SURROUNDS & CORNERS → CLADDING.

The completed experience must be photorealistic, smooth, reversible and clearly superior to the previous detached 3D model.
