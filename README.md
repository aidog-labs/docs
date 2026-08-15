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

## Project structure

```
.
├── public/
├── src/
│   ├── content/
│   │   └── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Markdown and MDX files in `src/content/docs/` become pages. Sidebar order is configured in `astro.config.mjs`.
