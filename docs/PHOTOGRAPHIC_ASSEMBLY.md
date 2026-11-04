# Photographic assembly and new BRINDLE branding — 4 November 2026

The latest owner brief replaces the detached 3D model. All four original instruction documents remain preserved as historical briefs; the new photographic direction and smart-home branding take precedence.

## Image provenance and delivery

All generated or edited images use the **built-in `image_gen.imagegen` tool**, with no API key, CLI fallback or production generation service. The original six customer-permitted site JPGs remain untouched under `public/portfolio/completed/` and excluded from Git. They are the sole evidence in Actual work. No reconstructed image is called an original completed-project photo.

The starting camera is based on `1000020847.jpg`. The other views are hardware and material references, not interchangeable animation frames: `1000020954.jpg` and `1000020946.jpg` show the small fixing tabs and batten arrangement; `1000020958.jpg` supplies the horizontal cladding and white-surround finish. The generated final state completes areas still exposed in the original reference and is explicitly a photo-based reconstruction.

Saved project masters (absolute directory: `C:/Users/Matth/Downloads/Brindle-Codex-Project/Brindle-Codex-Project/references/assembly-generated/`):

- `thermal-wrap.png`: reconstructed clean wall, fixed camera/background.
- `metal-battens-v2.png`: complete batten plate with reduced flat rectangular tabs.
- `window-trims.png`: photographic architrave/corner material plate.
- `exterior-cladding.png`: photographic finish plate.
- `fixing-tab.png`: isolated photographic tab with real alpha; cropped to its alpha bounds during optimization.

The earlier full-frame clip renders were rejected for oversized or excessive hardware. They are not used by the animation. The final clips use a cutout constrained to **3–8 pixels wide and a 3:1 width-to-height ratio** in the 1152 × 1536 registration space, placed on the wall plane. This responds directly to the owner's scale correction. Batten tab sizes were also reduced.

`references/inspiration-generated/smart-home.png` supplies the new wireless smart-home category. Five service categories use illustrative photography, with one discreet disclosure. The retained patio reference/render pair and its clarification are unchanged.

## Registered composition

`src/data/photoAssembly.ts` defines the registration space, facade polygon, protected glass regions, fixing grid and projective cladding reveal geometry. The base scene stays fixed. SVG uses the photographic raster layers through clipping masks; it does not draw a replacement building or invent material texture. Windows/glass and the environment remain on the fixed background plate.

Clips appear individually at small, perspective-scaled sizes. Eight batten groups grow down the wall; surrounds reveal around the existing openings; 22 perspective-following groups install the photographic cladding. All progress comes deterministically from the sticky section's scroll position, reverses in the same order, and updates through requestAnimationFrame. Stage shortcuts are optional aids, not the primary interaction. No crossfade between mismatched source camera views is used.

Still view, reduced-motion preference and image-error fallback retain readable content and direct contact. The image-error path uses the original supplied finished-detail photograph. This is an illustrative construction reconstruction, not a fixing specification, installation plan or engineering certification.

Build-ready assets: four full photographic plates at 720/1080/1440 widths, one alpha WebP cutout, and the new service image at 480/960/1440. All are metadata-free local files in `public/images/`. The interactive composition uses the 1080 plate size to avoid responsive source swaps during scrolling. PNG masters stay local; a fresh Git clone builds from the committed WebPs.

## Exact built-in prompts

### Clean thermal-wrap plate

```text
Use case: precise-object-edit. Asset type: the fixed starting photographic plate for a scroll-driven construction assembly. Image 1 is the edit target, the owner's actual exterior wall photograph 1000020847.jpg. Keep its exact 3:4 portrait canvas, camera perspective, roofline, wall edges, large window and small window, white window frames, reflections, vegetation, ladder, workbench, tools, ground, lighting and every surrounding object unchanged. Change ONLY the wall construction surface: remove all existing vertical and horizontal metal battens, brackets, clips and loose fixing sections attached to the reflective foil wall, and reconstruct the underlying continuous silver thermal wrap with realistic fine grid, foil wrinkles and seams. Leave the windows themselves and their white factory frames unchanged; do not add broad outer architraves or cladding yet. The full visible wall must be thermal wrap only, plausibly before any clips or battens. Preserve every window pixel and the exact outer silhouette of the building. This is a reconstruction layer based on real work, not a new completed-project claim. No scene redesign, no crop, no camera move, no straightening, no new architecture, no text or watermark. Output a realistic photograph, same 3:4 portrait composition.
```

### metal-battens

```text
Use case: precise-object-edit. Image 1 is the EXACT edit target and registration plate, a clean thermal-wrap reconstruction from the owner's 1000020847.jpg. Preserve its exact 3:4 portrait canvas, EVERY camera/perspective line, roofline, wall silhouette, existing large window and small window positions and sizes, factory white window frames, reflections, ladder, workbench and tools, vegetation, ground, lighting and all background pixels. Change ONLY the wall facade surface. No camera movement, cropping, straightening, rearrangement, redesign, people, labels or text. This is one registered photographic layer of a reversible installation sequence, so pixel alignment to Image 1 is critical. Do not borrow a camera angle or different building elevation from any supporting reference. Install the COMPLETE realistic galvanised vertical metal batten arrangement across ALL visible thermal-wrap wall areas. Image 2 supplies actual batten profile, regular spacing and clips ONLY; do not copy its different camera or elevation. Build the finished batten arrangement for Image 1, including upper wall areas that were incomplete in the original source. Use fixing lines at approximately 34%, 39%, 45%, 53%, 63%, 76%, 92% of canvas width with the correct perspective and spacing compressed in the distance at left. Battens are straight vertical thin metal channels; follow the wall perspective, mounted flush on small clips, terminate neatly at eaves, window openings and wall base, and continue aligned short sections above and below windows. Keep reflective foil visible between them. No cladding, no broad white external surround yet. Absolutely no battens across the glass. Preserve all exact opening geometry.
```

### window-trims

```text
Use case: precise-object-edit. Image 1 is the EXACT edit target and registration plate, a clean thermal-wrap reconstruction from the owner's 1000020847.jpg. Preserve its exact 3:4 portrait canvas, EVERY camera/perspective line, roofline, wall silhouette, existing large window and small window positions and sizes, factory white window frames, reflections, ladder, workbench and tools, vegetation, ground, lighting and all background pixels. Change ONLY the wall facade surface. No camera movement, cropping, straightening, rearrangement, redesign, people, labels or text. This is one registered photographic layer of a reversible installation sequence, so pixel alignment to Image 1 is critical. Do not borrow a camera angle or different building elevation from any supporting reference. Add ONLY white exterior window-surround architraves and a neat white external corner trim down the far left edge of the wall. Image 2 is the owner's finished-photo material/style reference ONLY: match its simple broad flat white architraves, crisp mitred/correct butt joints and realistic shadow. Fit these OUTSIDE the existing factory white frames of both original windows; do not move or resize either opening or change reflections. Keep the continuous reflective thermal wrap everywhere else (no battens and no cladding in this isolated trim plate). No white lines across glass, no new window divisions or added openings. The large window extends outside the right edge of this canvas; preserve this exact crop.
```

### exterior-cladding

```text
Use case: precise-object-edit. Image 1 is the EXACT edit target and registration plate, a clean thermal-wrap reconstruction from the owner's 1000020847.jpg. Preserve its exact 3:4 portrait canvas, EVERY camera/perspective line, roofline, wall silhouette, existing large window and small window positions and sizes, factory white window frames, reflections, ladder, workbench and tools, vegetation, ground, lighting and all background pixels. Change ONLY the wall facade surface. No camera movement, cropping, straightening, rearrangement, redesign, people, labels or text. This is one registered photographic layer of a reversible installation sequence, so pixel alignment to Image 1 is critical. Do not borrow a camera angle or different building elevation from any supporting reference. Complete the visible facade with pale warm-white horizontal woodgrain-textured fibre-cement weatherboard-style exterior cladding and white outer window surrounds, matched to the actual finish and restrained profile in supporting Image 2. Image 2 is a FINISH/TEXTURE reference only, never a replacement camera view. Cover the whole visible foil wall area above, between and below windows in Image 1, including upper areas left exposed in the supporting photo. Boards run horizontally on the actual wall plane, with parallel physical courses converging toward the left vanishing point (in the image they slope upward toward the right, just like Image 1's window head). Realistic narrow joints, restrained fine woodgrain, subtle daylight shadows; no oversized gaps or rustic planks. White flat surrounds fit around the unchanged factory frames and existing openings, plus neat far-left external corner trim. Retain all reflections, scene objects, workbench, trees, sky and eaves exactly. This is a reconstructed finish for an animation, not an additional photograph of completed work.
```

### Small-clip correction reference (retained locally, superseded by cutout)

```text
Use case: precise-object-edit. Image 1 is the locked clean thermal-wrap camera plate. Images 2 and 3 are the OWNER'S ACTUAL PHOTOGRAPHS, hardware-size references only. Preserve Image 1's exact 3:4 canvas and all window, roof, perspective, background, foil wrinkles, reflections, tools and scene object geometry. Add ONLY the small thin FLAT RECTANGULAR galvanised fixing tabs seen on the unfinished wall in Images 2 and 3. The owner corrected an earlier version: the clips were much too big. Match the actual subtle little rectangular tabs: about 30-40 mm wide by 10-15 mm tall in real life, at most about 8-10 pixels wide and 3-4 pixels tall in the nearest part of this full scene, only 3-5 pixels wide farther left. They should be visually discreet, flat against the foil with a tiny screw, not chunky 3D angle brackets. NO L-shaped brackets, projecting feet, blocky squares, big washers or vertical strings. Place them in a plausible modest vertical batten fixing grid, with perspective-scaled spacing and several fixings per line. No tabs over glass or white frames. No battens, no cladding or broad trim. The exact scene must remain registered to Image 1. No text, labels, new objects or watermark.
```

### Batten tab correction

```text
Use case: precise-object-edit. Image 1 is the edit target: the fully battened photographic construction plate. Make ONE precise correction only: all metal fixing tabs/clips attached to the vertical channels must be much smaller thin horizontal rectangular tabs, as shown in the owner's actual unfinished wall reference Image 2. Reduce each existing square/oversized clip to roughly one third its current visible area: small flat galvanised rectangular tabs, about twice as wide as tall, each no wider than its associated narrow batten, sitting flush with a tiny screw head. No L-shaped feet, chunky brackets, large squares, protruding blocks or big washers. Preserve EXACTLY all batten positions, channel widths, regular spacing, EVERY other scene pixel, reflective wrap, windows, frames, reflections, roofline, camera, original 3:4 canvas, trees, sky, workbench, ladders and tools. Do not remove or move any channel. Do not add more clips, text or labels. Output the same photograph with only the clips corrected in scale and rectangular shape.
```

### Photographic fixing-tab cutout

```text
Use case: precise-object-edit. Create one isolated photographic cutout of the SMALL FLAT RECTANGULAR GALVANISED METAL FIXING TAB visible on the reflective wrap in the supplied actual construction photographs. Use the photos for the actual hardware appearance. One thin flat silver rectangular tab only, roughly 35 mm wide by 12 mm tall, horizontal, viewed almost front-on with a tiny central screw head and subtle natural metal texture. It is NOT an L bracket, cube, shelf bracket, stand-off foot, plastic anchor, large square plate or washer. No depth exaggeration. Keep the silhouette a modest thin horizontal rectangle, about 3:1 width-to-height. Transparent background with real alpha, no foil wall, no shadow outside the object, no floor, no supporting scene, no labels. Centre the single little metal tab on a square transparent canvas. This cutout will be scaled to just 4–8 pixels wide in an accurately registered photograph, so a simple realistic silhouette is essential.
```

### Wireless smart-home image

```text
Use case: photorealistic-natural. Asset type: landscape 3:2 editorial service photograph for BRINDLE Property Maintenance & Smart Home Solutions. A calm real-looking contemporary Australian living room corner with a modest oak sideboard, a compact unbranded wireless voice-assistant speaker, a small battery-powered motion sensor placed on a shelf, a simple wireless home network hub with discreet visible low-voltage power leads, and a table lamp producing soft warm light. A hand holding a smartphone with a simple abstract connected-home control interface is acceptable but no readable app names or personal information. Prefer no person, phone resting on sideboard. Show useful everyday wireless smart-home planning and configuration, no hardwired wall controls, no exposed mains wiring, no electrical switchboard or cabling work. Natural daylight balanced with warm lamp glow, subtle real wood grain and small imperfections, soft neutral tones with charcoal accents, high-quality architectural photography with straight verticals, no sci-fi holograms, diagrams, neon networks or CGI sheen. No text, brand logos or watermarks. Fictional illustrative service imagery, never a claimed completed Brindle job.
```

## Reproduction

With the preserved masters available, run `npm.cmd run assets:assembly`, `npm.cmd run assets:inspiration`, `node scripts/prepare-brand-assets.mjs`, and `npm.cmd run check`. Source masks and timing are editable in `src/data/photoAssembly.ts` and `src/lib/construction.ts`. Review camera alignment and fixing scale visually after any generated asset replacement. No image assets are intentionally left as placeholders.
