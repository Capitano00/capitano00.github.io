---
status: draft
week_of: 2026-06-01
created_for: manual_review
source_policy: repo_evidence_only
---

# HelioFabric Weekly Draft - 2026-06-01

## Week Summary

This week's repository work continued to mature HelioFabric's Design Optimisation workflow from an import-and-rank prototype into a more reviewable engineering workspace. The main progress was not a new public-facing claim, but better evidence handling: clearer source records, calculation revisions, grid-clipping provenance, ranking eligibility controls, and visual checks for design-variant comparison.

The work remains alpha-stage and should be described conservatively. The public narrative is that HelioFabric is improving the discipline around renewable-project design review: keeping raw evidence separate from reviewed assumptions, making ranking decisions explainable, and preserving audit context before any recommendation is treated as decision-ready.

## What Changed

- BatchResults imports are now treated as source-level evidence, with DC capacity, PVcase, and grid-clipping saves handled as calculation revisions rather than new raw imports.
- The import workflow now separates source review, setup inputs, grid-clipping calculation, and optimisation workspace actions more explicitly.
- Grid-clipping review gained stronger provenance handling, including clearer treatment of retained hourly CSV evidence, export-cap assumptions, and recalculation readiness.
- The ranking workspace gained session-local hard-gate and preferred-band controls for grid and inverter clipping, with variants remaining explainable when evidence is missing or eligibility rules are relaxed.
- Plotting and review views were improved, including source-order trends, threshold scatter, Pareto-style comparison, 3D design maps, clipping trade-off, and evidence-coverage views.
- Parameter governance work continued around neutral canonical keys, compatibility aliases, and audit guardrails for seeded parameter definitions.
- The map deliverable generator remains an artefact-only alpha workflow for sanitised KML/KMZ-based figure preparation, with no canonical project-data writes.

## Current Focus

The current technical focus is Design Optimisation review quality: helping users understand which variants are rankable, why others are excluded, and which assumptions or source files underpin each calculation. The repository evidence shows a strong emphasis on avoiding accidental data promotion, preserving source/revision boundaries, and keeping ranking controls local to the review session unless a separate persistence contract is designed.

The broader platform focus remains consistent with the roadmap: HelioFabric is a governed renewable-project library with tool outputs, evidence packs, and review workflows layered around canonical project data. Stage 8 machine-learning work remains planned, not shipped; current design recommendations should continue to be framed as transparent engineering review logic and historical-similarity support, not a trained production model.

## Next Likely Milestone

The next likely milestone is manual visual acceptance of the Design Optimisation workspace using sanitised or synthetic data, especially the ranking plots and source/revision loading behaviour. Repository notes indicate automated browser QA was blocked by the local browser runtime sandbox, so live visual review remains an important manual checkpoint before public screenshots are selected.

After that, a sensible public milestone would be a sanitised screenshot set showing the evidence-led workflow: source import, calculation review, and ranking comparison without exposing client data, private coordinates, raw provider artefacts, or commercial assumptions.

## Disclosure Checklist

- [ ] No client names, project names, site names, or private geography.
- [ ] No coordinates, land boundaries, commercial assumptions, funding language, or adoption claims.
- [ ] No credentials, tokens, raw provider artefacts, local database contents, or client documents.
- [ ] Screenshots use synthetic, sandbox, cropped, blurred, or reconstructed data only.
- [ ] Design Optimisation is described as alpha-stage review tooling, not an automated final design decision.
- [ ] Stage 8 and ML language remains future-facing unless backed by shipped repository evidence.
- [ ] Artefact-only workflows are clearly separated from canonical project-data promotion.

## Screenshot Suggestions

- A sanitised Design Optimisation import view showing the high-level four-step evidence workflow.
- A cropped source/revision library view showing source-level records and calculation revisions without project identifiers.
- A ranking workspace screenshot showing eligibility status, evidence coverage, and plot tabs using synthetic or redacted values.
- A reconstructed diagram of the evidence boundary: raw source files, reviewed assumptions, calculation revisions, and non-canonical tool outputs.
- A map deliverable generator screenshot only if the KML/KMZ input is synthetic or sanitised and no private geography is visible.
