# Cloudflare Pages Direct Upload

Primary public route: Cloudflare Pages Direct Upload.

Use this route because the first release should not depend on a public GitHub repository.

## Build

```powershell
cd F:\RD\HelioFabricPortfolio
npm install
npm run build
```

The upload folder is:

```text
F:\RD\HelioFabricPortfolio\dist
```

## Publish

1. Open Cloudflare dashboard.
2. Create a Pages project using Direct Upload.
3. Upload the `dist` folder.
4. Use the temporary Cloudflare Pages URL first.
5. Review the live page on desktop and mobile.
6. Connect a personal domain only after copy, screenshots, and disclosure boundaries are approved.

## Do Not Automate Yet

Do not auto-deploy weekly updates in v1. The weekly Codex automation creates Markdown drafts only; publishing remains manual.
