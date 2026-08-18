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

Local: run `pnpm cms` and `pnpm dev`, then open `http://localhost:4321/docs/admin/`.

Production: `https://aidog-labs.github.io/docs/admin/` (GitHub org members with write access). OAuth callback host is `https://aidog.xyz/cms/oauth/callback`.
