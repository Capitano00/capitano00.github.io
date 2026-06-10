# Week of 2026-06-10 - PVsyst workflow bridge and ZIP Builder alpha

Status: draft only. Review before publishing.

## Week Summary

HelioFabric development moved deeper into the PVsyst workflow layer. The main theme is supervised automation: capture evidence, validate artefacts, and prepare handoffs without silently changing canonical project facts.

## What Changed

- PVsyst read-only desktop evidence capture now recognises the active project form and records visible navigation/control evidence.
- Guarded read-only navigation can capture key PVsyst panels such as Orientation, System, Detailed losses, Horizon, Near Shadings, Module layout, Detailed results, and Report.
- A parallel PVsyst Project ZIP Builder alpha was added to preview selected variant assumptions, preserve near-shading content, and generate review artefacts for manual PVsyst validation.
- Latest inspected Git evidence shows 324 commits in the active checkout on 2026-06-10.

## Current Focus

The current focus is proving a safe PVsyst workflow bridge: desktop evidence capture, project ZIP handling, artefact validation, and Design Optimisation handoff without promoting exploratory values into canonical project data.

## Next Likely Milestone

Manual validation of generated PVsyst ZIP artefacts in PVsyst 8.1, followed by targeted read-only parser modules for specific PVsyst panels.

## Disclosure Checklist

- [ ] No client names or private project names.
- [ ] No coordinates, file paths, raw ZIP contents, reports, PAN/OND/MET/GIM files, or screenshots with private evidence.
- [ ] No claim that PVsyst automation is production-ready.
- [ ] Keep language to supervised alpha workflow, review artefacts, and manual validation.

## Screenshot Suggestions

- Sanitised Tool Controller view showing the PVsyst subgroup only.
- Cropped ZIP Builder UI showing tabs and non-confidential placeholder assumptions.
- A generic workflow diagram showing read-only evidence capture -> artefact validation -> manual review.
