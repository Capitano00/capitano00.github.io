# Boyong Wang Personal Innovation Portfolio

A separate public-facing personal portfolio led by the HelioFabric innovation journal. The site is designed as a company-safe development record: it introduces the personal profile layer first, then uses HelioFabric as the flagship project story for responsible AI-assisted delivery practice, current project status, and approved high-level updates without exposing confidential project data.

## Local Commands

```powershell
npm install
npm run dev
npm run build
```

The static build output is generated in `dist/`.

## Publishing

Primary route: Cloudflare Pages Direct Upload.

1. Run `npm run build`.
2. Upload the generated `dist/` folder to Cloudflare Pages.
3. Use the temporary Pages URL first.
4. Connect a personal domain only after content, disclosure boundaries, and screenshots are reviewed.

## Design Review

Figma review file:

```text
https://www.figma.com/design/JGQk4loM5BXsGAiyj74bJI
```

The Figma file is a design-review artefact only. Cloudflare Pages remains the live website route. See `docs/figma-review.md` for the session status and MCP rate-limit note.

## Brand Assets

Public site assets are generated from the uploaded HelioFabric logo board:

- `public/brand/heliofabric-logo-lockup.png`
- `public/brand/heliofabric-icon.png`
- `public/favicon.png`
- `public/og-image.png`

The source board is kept outside the public build at `docs/assets/heliofabric-logo-source-board.png`.

## Disclosure Rules

- Use UK English for public prose.
- Do not publish client names, private project details, coordinates, private economics, credentials, tokens, raw provider artefacts, or employer-confidential material.
- Treat screenshots as sanitised evidence only.
- Keep funding/adoption wording conservative until an approved public statement exists.
- Weekly updates are drafts until manually reviewed and published.
