# Working-environment image revision — 12 November 2026

The owner requested the original typography, a much shorter photo-led page, only the patio comparison, and candid work-in-progress imagery instead of staged/showroom scenes.

## Selected assets

Four new service examples were created with the built-in image generation tool. No CLI, API key, paid runtime dependency or external image service is used by the website. Local masters are saved under `references/service-refresh-2026/` (Git-ignored). The production files are `public/images/services/{name}-{480,960,1440}.webp`, 12 metadata-free WebPs. Run `npm.cmd run assets:services` with the local masters present to regenerate; a clone builds from the committed WebPs.

The generated scenes show unfinished door maintenance, cabinet assembly in a garage, painting preparation, and freestanding shelving assembly. They do not appear in the original-work gallery. Their provenance is disclosed in the linked footer image details; there are no “concept art” labels or badges over photographs.

Genuine supplied photographs are used wherever suitable:
- Hero: 1000020958.
- Labouring service: 1000020943.
- Exterior service: 1000020954.
- Site gallery: 1000020847, 1000020945, 1000020946.
All six originals appear once each in the initial page. The lightbox can show all six. They record one construction-support job, including preparation and unfinished work, not six separate completed projects.

## Patio

The existing patio reference and the existing badge-free enclosure rendering are retained unchanged at 480/800/1080 widths. They occupy exactly the same container and object position, with CSS clipping and a shared vertical divider. It starts at 50%, supports pointer/touch dragging and keyboard input, and is the only comparison/range on the page. The small caption identifies the unbuilt enclosure; no “conceptual art” or “proposed finish” badge covers it.

## Typography and loading

The previous Space Grotesk Variable display and Manrope Variable body fonts are restored under their original family names. Headings use the original 500 weight instead of the heavy 700 treatment; the lowercase wordmark stays 700.

The missing-image preview issue was reproduced: a build containing /brindle-property-maintenance/ asset URLs, previewed with the former default ./ base, returned HTML for image/font/script paths. Vite now defaults to the existing GitHub Pages base for dev, build and preview, so ordinary preview does not depend on a separately set BASE_PATH. The deployment override still works.

## Exact prompts

### property-maintenance-work

Saved master: `references/service-refresh-2026/property-maintenance-work.png`.

~~~text
Use case: photorealistic-natural. One landscape 3:2 documentary photograph for a property-maintenance service card. An ordinary lived-in Australian home during a small interior door-hardware repair. A worn painted timber door stands open; its lever handle has been removed and the latch recess and screw holes are visible. The removed latch and a few used screws lie naturally on a creased protective cloth near the jamb with a used screwdriver, not arranged for display. Scuffed existing paint, normal skirting and floor wear, a little repair dust. Include enough surrounding room to read as a real maintenance job in progress, not a product photo. Candid unposed worksite record, clear realistic detail and ordinary available daylight, deep focus, slightly imperfect handheld framing. Materials and tools should be genuinely in the course of use, safe working space with modest natural disorder. Avoid staged tool arrangements, symmetrical showroom composition, luxury styling, ornamental plants, cinematic light, glowing polished wood, shallow advertising bokeh and pristine promotional scenes. No people or body parts, no brand names, no added text, labels, watermarks or collage, no plastic CGI look. Depict a plausible service example; do not imply this records an actual Brindle job.
~~~

### joinery-assembly-work

Saved master: `references/service-refresh-2026/joinery-assembly-work.png`.

~~~text
Use case: photorealistic-natural. One landscape 3:2 documentary photograph for a property-maintenance service card. An ordinary domestic garage being used for a practical cabinet assembly job. A partly assembled freestanding plywood/MDF storage cabinet sits on a scratched workbench, unfinished edges, one panel clamped square with realistic F clamps, drawer runners partly fitted. Small offcuts, cardboard packaging and an open fastener box are left where they would actually be used; some sawdust and an irregular pile of boards nearby. No beautifully finished oak furniture or styled living room. Show the job and working environment, not a centred cabinet product. Candid unposed worksite record, clear realistic detail and ordinary available daylight, deep focus, slightly imperfect handheld framing. Materials and tools should be genuinely in the course of use, safe working space with modest natural disorder. Avoid staged tool arrangements, symmetrical showroom composition, luxury styling, ornamental plants, cinematic light, glowing polished wood, shallow advertising bokeh and pristine promotional scenes. No people or body parts, no brand names, no added text, labels, watermarks or collage, no plastic CGI look. Depict a plausible service example; do not imply this records an actual Brindle job.
~~~

### interior-improvements-work

Saved master: `references/service-refresh-2026/interior-improvements-work.png`.

~~~text
Use case: photorealistic-natural. One landscape 3:2 documentary photograph for a property-maintenance service card. A modest older Australian room in the middle of painting preparation and touch-up work. Broad visible filler patches and sanding marks on an ordinary wall, an edge partly cut in with fresh white paint, wrinkled used drop cloth protecting the floor, a used roller tray and sanding block left beside the wall, masking tape along skirting and doorway. Background is still a working room with a small pile of materials pushed aside. Work visibly unfinished; no finished interior reveal or styled furniture. Candid unposed worksite record, clear realistic detail and ordinary available daylight, deep focus, slightly imperfect handheld framing. Materials and tools should be genuinely in the course of use, safe working space with modest natural disorder. Avoid staged tool arrangements, symmetrical showroom composition, luxury styling, ornamental plants, cinematic light, glowing polished wood, shallow advertising bokeh and pristine promotional scenes. No people or body parts, no brand names, no added text, labels, watermarks or collage, no plastic CGI look. Depict a plausible service example; do not imply this records an actual Brindle job.
~~~

### custom-installations-work

Saved master: `references/service-refresh-2026/custom-installations-work.png`.

~~~text
Use case: photorealistic-natural. One landscape 3:2 documentary photograph for a property-maintenance service card. A small ordinary garage/utility room during the assembly of practical freestanding storage shelves. One modest shelving unit is partly assembled on the floor with several boards still unattached, ordinary bolts and a manual screwdriver nearby, corrugated packaging pushed to the side, a few existing household storage boxes and everyday scuffed surfaces. Camera catches an incidental three-quarter angle with parts slightly cut by the frame, as someone recording the work in progress. No built-in structural work, wall drilling or electrical work. Candid unposed worksite record, clear realistic detail and ordinary available daylight, deep focus, slightly imperfect handheld framing. Materials and tools should be genuinely in the course of use, safe working space with modest natural disorder. Avoid staged tool arrangements, symmetrical showroom composition, luxury styling, ornamental plants, cinematic light, glowing polished wood, shallow advertising bokeh and pristine promotional scenes. No people or body parts, no brand names, no added text, labels, watermarks or collage, no plastic CGI look. Depict a plausible service example; do not imply this records an actual Brindle job.
~~~
