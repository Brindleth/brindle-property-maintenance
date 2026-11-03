> Current revision: the site now displays only the single proposed patio image, as requested. Existing/Proposed/Compare controls and the five-photo reference gallery were removed. Original reference JPGs remain preserved locally; their public derivatives were removed. The generation prompt and provenance below remain the record of the retained image.

# Photo-based patio concept — 3 November 2026

The owner requested a concept using the real supplied patio photos, with a similar look to their supplied ChatGPT website mockup. The mockup is a visual style reference, not evidence of Brindle's completed work or installed electronics.

## Inputs and output

- Edit target: `references/patio-concept-only/1000020835.jpg`, the actual existing patio viewed along its dining area and open garden-facing side.
- Supporting view: `references/patio-concept-only/1000020834.jpg`, the same real patio from the opposite end.
- Style reference: the owner's attachment `ChatGPT Image Nov 3, 2026, 10_06_37 PM.png`. Only cladding, feature-wall and lighting appearance informed the edit. Its copy, branding and completed-project claims were excluded.
- Tool: built-in `image_gen` editing tool, one output. No API key, paid service, third-party command line or production image-generation dependency.
- Preserved generated master: `references/patio-concept-only/generated/patio-enclosure-concept.png`. Portrait 1086 × 1448. Original built-in output is also retained in the local Codex generated-images directory.
- Published proposal assets: `public/images/concept/patio-proposed-{480,800,1080}.webp`.
- Published actual reference assets: `public/images/concept/patio-existing-{1,2,3,4,5}-{480,800,1080}.webp`, from the five corresponding supplied JPGs `1000020831.jpg` through `1000020835.jpg`.

Raw originals and the generated master stay local and are Git-ignored. The committed WebPs are responsive, metadata-free derivatives. Run `npm.cmd run assets:concept` to regenerate when the local inputs are available; normal builds use the committed assets.

The photo-based edit retains the existing roof, posts, slab and dining setting. The pale wall infill, dark TV feature panel, soundbar and accent lights illustrate an unbuilt proposal. AI imagery is indicative and can alter fine geometry. It is not a construction drawing or a record of completed work. The original five photographs remain viewable alongside it.

## Exact prompt

```text
Use case: precise-object-edit / architectural concept visualisation. Asset type: a single photorealistic proposed patio enclosure image for the existing Brindle website, NOT a website screenshot or collage. Image 1 is the EDIT TARGET: the actual existing Perth patio. Image 2 is a supporting photograph of that same real patio from the opposite end, only to understand its existing roof, cream posts, concrete slab, timber table/chairs and garden. Image 3 is STYLE REFERENCE ONLY: light horizontal weatherboard cladding, charcoal vertical slatted TV feature panel, restrained warm LED accents and outdoor entertainment mood. Ignore ALL website copy, logos, icons, project-completion claims, strip of thumbnails and layout in image 3. Edit image 1, keep its portrait 3:4 composition and same camera viewpoint. Preserve the actual patio identity: the low cream ribbed metal roof and its exact perspective, cream posts in their existing positions, existing overhead festoon lights, concrete slab including its worn realistic surface, house wall at left, barbecue toward the far left/back, and existing timber dining furniture. Introduce the UNBUILT PROPOSAL only: stud-wall enclosure infill along the garden-facing RIGHT side between the existing posts, finished in pale light-grey horizontal traditional cladding with neat white trims. In one substantial middle bay on that right wall, use a charcoal vertical-slat feature wall with a modest wall-mounted flat-screen television and slim soundbar; screen shows a quiet generic mountain landscape, no brand or UI. Add soft warm concealed light around/below the dark panel and two modest warm wall lights as conceptual accents. Keep the dining/walking area practical and the existing furniture; remove only small loose tabletop clutter and loose building debris, not the garden or physical patio structure. Retain a view of some garden at the far end so it remains an outdoor patio; do not invent a luxurious new house, change the roof or relocate the slab. Photorealistic materials, believable proportions, warm existing evening light, detailed but restrained architectural photography. Text: only a small legible dark label at the top left reading exactly 'CONCEPT — NOT CONSTRUCTED'. No other text, logos, watermarks or completed-project claims. This is an AI PHOTO-BASED CONCEPT of a proposal, not evidence of real completed work.
```

## Presentation

`src/data/patio.ts` records the identity, caption and type of every photo. `src/components/PatioConcept.tsx` keeps these assets separate from `src/data/portfolio.ts` and the six completed-work photographs. Existing / Proposed / Compare buttons switch the main view. A native range input supports keyboard and touch comparison; the full-image dialog supports zoom, next/previous, arrow keys and Escape.

The page and proposal dialog explicitly display **CONCEPT VISUALISATION — NOT CONSTRUCTED**. Actual patio photos display **EXISTING PATIO — REFERENCE PHOTO**. The page explains that the existing patio and lighting are not Brindle's completed work and that proposed electronics and lighting would require the appropriate qualified trades.
