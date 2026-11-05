# Cladding revision assets — 5 November 2026

All new images use the **built-in image_gen.imagegen tool**, with no API key, CLI fallback or production paid service. Final masters are copied into `C:/Users/Matth/Downloads/Brindle-Codex-Project/Brindle-Codex-Project/references/cladding-revision/`; the default tool outputs remain preserved. Committed, metadata-free WebPs live in `public/images/revision/`. A fresh clone builds from these WebPs without needing generation tools.

## Final saved masters

- `cladding-finished.png`: upper-wall completion based directly on original `public/portfolio/completed/1000020958.jpg`. Earlier `cladding-finished-v1.png` is retained locally; the final edit adds stronger registration constraints. This is a visualisation, never an unmodified completed-project photo.
- `timber-framing.png`: timber-only service illustration.
- `steel-framing.png`: steel-only service illustration.
- `feature-wall-before.png`: plain-wall edit of retained `references/inspiration-generated/feature-wall.png`, which supplies the illustrative finished view. Foreground furniture, floor and room viewpoint are retained.

The patio files `patio-existing` and `patio-proposed-v2` are unchanged and remain an unbuilt transformation preview. No new patio image or separate gallery was generated. The previous assembly and mixed-framing publication assets are removed. The original six genuine construction photographs remain unmodified and locally preserved.

Each new master is optimized at 480/960/1440 pixels by `npm.cmd run assets:revision`. Before/after pairs use matching proportions and identical CSS crop/position; the cladding original's largest descriptor is corrected to its actual 1152-pixel width. The new hero shows the finished photograph as a single raster asset, not CSS-drawn cladding. New service/fit-out examples are illustrative, not claimed Brindle jobs. No image asset is left missing.

## Tool output paths

- Cladding first edit: `C:/Users/Matth/.codex/generated_images/01a1a0d5-1133-7f82-9100-5f509b4c8da9/exec-40d3b907-bc38-4161-bd1b-838abdfc0d44.png`.
- Final cladding edit: `C:/Users/Matth/.codex/generated_images/01a1a0d5-1133-7f82-9100-5f509b4c8da9/exec-f0342048-ee8f-44f0-ae33-964c0671da30.png`.
- Timber: `C:/Users/Matth/.codex/generated_images/01a1a0d5-1133-7f82-9100-5f509b4c8da9/exec-ab3f30b4-ffc5-463f-bb4c-f8f2f2c1b9c6.png`.
- Steel: `C:/Users/Matth/.codex/generated_images/01a1a0d5-1133-7f82-9100-5f509b4c8da9/exec-1629d6cb-e756-41c5-b35c-ea8797ff6cf7.png`.
- Feature before: `C:/Users/Matth/.codex/generated_images/01a1a0d5-1133-7f82-9100-5f509b4c8da9/exec-8463e250-ac5e-4560-bb2e-3bb4755e847a.png`.

## cladding-finished

Input: `C:/Users/Matth/Downloads/Brindle-Codex-Project/Brindle-Codex-Project/public/portfolio/completed/1000020958.jpg`.

```text
Use case: precise-object-edit. Image 1 is the owner's ORIGINAL project photograph and the EXACT edit target, not a style reference. Keep the original portrait 3:4 canvas, camera position, lens perspective and crop completely unchanged. Make ONE change only: extend the EXISTING pale warm-white horizontal textured weatherboard cladding upwards to cover ALL exposed silver thermal wrap in the upper part of this same facade, finishing neatly beneath the existing eaves. Continue the existing exact course spacing, overlaps/profile, restrained embossed woodgrain texture, colour, directional sunlight and perspective. The boards must converge consistently toward the same left vanishing point as the existing installed courses and window head; no bent or broken lines. The already clad LOWER facade must remain identical. Preserve every existing white window surround, glazing, reflections, small far window, corner, roof/eaves, blue sky, trees, sandy ground, sunlight/shadow and building outline. Do not add or remove a window, door, feature, lighting, object or tool. Do not straighten, redesign, beautify, crop or change this building. Remove the exposed upper wrap and its exposed fixing tabs only where the new cladding covers them. High-resolution natural construction-site photography, matching the original material imperfections. No text or watermark. This image is a digitally completed upper-wall visualisation, never new evidence of completed construction.
```

## timber-framing

Generated from the following description; no reference image.

```text
Use case: photorealistic-natural. Create ONE landscape 3:2 candid professional photograph of a believable Australian residential renovation interior with an unfinished TIMBER stud partition. Show ordinary natural pine studs at plausible 450-600mm spacing, continuous top and bottom plates, one staggered row of noggins, realistic end grain, nail/fixing marks and minor scuffs. Modest single-storey room, an existing plastered wall and a window admitting real soft daylight, concrete subfloor with a little sawdust and a small tape measure resting naturally on the floor. Timber ends meet plates, noggins meet studs; straight plausible construction without impossible junctions or floating pieces. Camera around chest height, slightly off centre with a few bays visible, unposed working-site photograph with natural variations rather than perfect symmetry. ONLY timber framing in this image, no steel studs, no split-screen or composite. No exposed electrical wiring, people, text, plans, labels, branding or watermarks. No showroom staging, CGI gloss or overly processed colour. Fictional illustrative service photo, not a Brindle completed-project claim.
```

## steel-framing

Generated from the following description; no reference image.

```text
Use case: photorealistic-natural. Create ONE landscape 3:2 candid construction photograph of a realistic light-gauge GALVANISED STEEL stud partition in a modest unfinished residential interior. Thin formed C-section steel studs at plausible regular spacing, seated inside a continuous floor track on concrete and a correctly aligned head track, modest visible screw fixings at real connection points, neatly cut steel nogging/bridging where needed. Realistic galvanised spangle, small scratches and soft metallic reflections. An ordinary existing plaster wall and window beyond, a few offcut tracks lying naturally on the floor, realistic daylight and shadows, slight asymmetry and everyday job-site imperfections. Camera chest height and slightly oblique, ordinary wide view of several straight wall bays. Steel framing ONLY; no timber studs or timber noggins, no hybrid framing, no split-screen, no stylised architectural render. No floating tracks, impossible intersecting channels, excessive braces, exposed mains wiring, people, text, branding or watermark. Professional but unposed natural photographic realism. Fictional service illustration, never a documented Brindle job.
```

## feature-wall-before

Input: `C:/Users/Matth/Downloads/Brindle-Codex-Project/Brindle-Codex-Project/references/inspiration-generated/feature-wall.png`.

```text
Use case: precise-object-edit. Input Image 1 is the AFTER design photograph; create the corresponding BEFORE image of the EXACT SAME room, same 3:2 landscape canvas, fixed camera/lens, framing, existing ceiling height, all wall corners, oak floor, sunlight and window lighting. Change ONLY the entertainment feature wall into its simple unfinished state: remove the TV, all oak slat cladding, built-in lit shelves and their objects, long floating cabinet, under-cabinet LED strip and wall-side decorative plants. Replace those wall finishes with plain pale plasterboard with a few realistic taped/filler joints, ready for a decorative nonstructural fit-out. Keep the wall plane in the EXACT same place; the left background opening stays exactly unchanged. Keep every foreground sofa, cushion, rug, coffee table, cup and book pixel in the same position. Restore the original oak floor behind removed joinery; natural unlit wall and truthful shadows. No new windows, doors, sockets, exposed electrical wires, studs, structural work or building geometry changes. The before must register with the after as a photographic comparison, not depict a different interior. Natural high-quality photography with subtle material imperfections, no text, label or watermark.
```

## Final cladding alignment pass

Input: the original photograph again. Output: `cladding-finished.png`.

```text
Use case: precise-object-edit. The input is the ORIGINAL photograph; output the exact same photograph with ONLY the silver thermal-wrap patch above the installed cladding filled in with matching cladding. Important registration requirement: absolutely ALL pixels below the existing topmost cladding board must stay identical to the source, including the complete lower wall, its white window architraves and every window edge, screw, reflection, ground, plants and shadow. Do not repaint, clean up, shift, resize or regenerate any of those lower areas. Do not move the camera or crop the image. The edit region is just the exposed upper foil area near the eaves: a tapered triangular patch extending from the upper middle of the image toward the far-left wall corner. Continue the existing pale cream embossed woodgrain horizontal weatherboards through that exposed patch up to the existing eaves. Match the board profile and spacing and the existing vanishing point exactly. All already installed cladding remains unchanged. Every roof and sky pixel stays unchanged. Original 3:4 portrait crop, same house and geometry, no artistic reinterpretation, no new architectural features, no lighting changes, no text. This must work as a registered before/after slider with the source image, so the unchanged window must coincide exactly when moving the divider.
```

