# Weekly Draft Workflow

Weekly updates are drafts until manually reviewed.

The Codex automation named `HelioFabric weekly public draft` runs on Fridays at 16:00 UK time. It reads repository evidence from `F:\RD\HelioFabric` and writes one new Markdown draft to this folder.

Before publishing any draft:

- remove or rewrite anything that implies approved company funding or adoption before that is publicly approved
- remove client names, private project details, coordinates, private economics, credentials, tokens, raw provider artefacts, or private report material
- check that screenshots are sanitised or still marked as placeholders
- move approved public copy into `src/data/updates.ts` manually
- run `npm run build`
