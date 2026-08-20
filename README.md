# AIDOG Docs

Documentation site for AIDOG, an on-chain private banking system.

Built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build).

## Commands

All commands are run from the root of the project:

| Command          | Action                                                |
| :--------------- | :---------------------------------------------------- |
| `pnpm install`   | Installs dependencies                                 |
| `pnpm dev`       | Starts local dev server at `localhost:4321`           |
| `pnpm build`     | Build the production site to `./dist/`                |
| `pnpm preview`   | Preview the production build locally                  |
| `pnpm astro ...` | Run CLI commands such as `astro add` or `astro check` |
| `pnpm lint`      | Lint the project                                      |
| `pnpm lint:fix`  | Lint and auto-fix                                     |
| `pnpm test`      | Run sidebar validation checks                         |
| `pnpm cms`       | Start Decap local backend (`localhost:8081`)          |

## Project structure

```
.
├── public/
│   ├── admin/
│   └── docs-media/
├── src/
│   ├── content/docs/
│   ├── data/sidebar.yaml
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Markdown files in `src/content/docs/` become pages. Sidebar groups live in `src/data/sidebar.yaml`; page order is `sidebar.order` in each file.

## CMS

Local: run `pnpm cms` and `pnpm dev`, then open `http://localhost:4321/admin/`.

Production: `https://docs.aidog.xyz/admin/` (tag or manual deploy). Preview: `https://aidog-labs.github.io/docs-preview/admin/` (every push to `main`). OAuth callback hosts are `https://aidog.xyz/cms/oauth/callback` (production) and `https://web-dev.aidog.xyz/cms/oauth/callback` (preview).

### Deploy

| Environment | Trigger | URL |
| --- | --- | --- |
| Preview | Push to `main`, or workflow dispatch | `https://aidog-labs.github.io/docs-preview/` |
| Production | Tag `v*.*.*` matching `v[0-9].[0-9]+.[0-9]+`, or workflow dispatch | `https://docs.aidog.xyz` |

Preview publishes to the private `aidog-labs/docs-preview` GitHub Pages site (default `*.github.io` URL; private Pages cannot use a custom domain). Add repo secret `DOCS_PREVIEW_DEPLOY_TOKEN` with Contents write on that repository. Editors who need to open preview links must have access to `docs-preview`.

Production Pages on this repo should use custom domain `docs.aidog.xyz` (CNAME to `aidog-labs.github.io`, then Enforce HTTPS).

The CMS “Deploy to production” button dispatches `deploy-prod.yml` on `main`.
