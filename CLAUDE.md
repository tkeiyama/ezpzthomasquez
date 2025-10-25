# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static blog built with React Router 7, deployed to GitHub Pages. The blog uses a file-based content system where each post is a markdown file with frontmatter metadata stored in the `/posts` directory.

## Development Commands

### Essential Commands

- `pnpm dev` - Start all development servers in parallel (app + CSS type generation)
- `pnpm dev:app` - Start only the React Router dev server
- `pnpm build` - Build the production bundle (uses `vite.build.config.ts`)
- `pnpm serve` - Serve the production build locally
- `pnpm typecheck` - Generate route types and run TypeScript type checking
- `pnpm fix` - Run both linter and formatter with auto-fix

### Code Quality

- `pnpm lint` - Lint with oxlint (configured to auto-fix and deny warnings)
- `pnpm format` - Format with dprint
- `pnpm generate:type-css-modules` - Generate TypeScript definitions for CSS modules
- `pnpm generate:type-css-modules --watch` - Watch mode for CSS module types

### Git Workflow

- Pre-commit hook runs `pnpm lint` and `pnpm format` on staged files via lint-staged
- Husky is configured for Git hooks

## Architecture

### Content System

Posts are stored as directories under `/posts`, where each post directory contains:

- `README.md` - The post content with YAML frontmatter
- Frontmatter fields: `title`, `description`, `date` (format: YYYY-MM.DD)

The content pipeline:

1. **getPosts** (`app/routes/index/getPosts.ts`): Reads all posts from `/posts`, parses frontmatter using unified/remark
2. **formatPosts** (`app/routes/index/formatPosts.ts`): Formats the post list with date formatting
3. **getPost** (`app/routes/post/getPost.ts`): Processes individual posts, converts markdown to HTML with syntax highlighting (rehype-highlight)

### Routing

File-based routing defined in `app/routes.ts`:

- `/` - Index route showing all posts (`app/routes/index/route.tsx`)
- `/posts/:id` - Individual post view (`app/routes/post/route.tsx`)

Route loaders fetch data server-side. Post IDs map directly to directory names in `/posts`.

### Prerendering & Deployment

- SSR enabled with static prerendering of all routes
- Build generates static HTML for all posts by reading `/posts` directory at build time (`react-router.config.ts`)
- Deployed to GitHub Pages with base path `/ezpzthomasquez/`
- Production base path configured in both `vite.build.config.ts` and `react-router.config.ts`

### Styling

- CSS Modules for component styles (`.module.css` files)
- TypeScript definitions auto-generated via `typed-css-modules`
- Global markdown styles in `app/routes/post/markdown.css`
- Syntax highlighting via highlight.js (applied during markdown processing)

### Type Safety

- React Router 7's automatic type generation for routes (`.react-router/types`)
- Route component props typed via `Route.ComponentProps` and `Route.LoaderArgs`
- CSS Modules have `.d.ts` files for type-safe className imports

## Important Patterns

### Adding a New Post

1. Create a directory in `/posts` with a URL-friendly name (e.g., `my-post-title`)
2. Add `README.md` with frontmatter:

```markdown
---
title: Post Title
description: Brief description
date: 2025-10-25
---

Post content here...
```

3. The post will automatically appear on the index page and be prerendered at build time

### CSS Module Usage

- Import styles: `import styles from "./route.module.css"`
- Use className: `<div className={styles.myClass}>`
- Run `pnpm generate:type-css-modules` to generate types after adding new CSS classes

### Running Builds

The production build uses a separate Vite config (`vite.build.config.ts`) that sets the correct base path for GitHub Pages deployment.

## Configuration Files

- `react-router.config.ts` - React Router configuration with prerender paths
- `vite.build.config.ts` - Production build configuration
- `tsconfig.json` - TypeScript configuration (includes `.react-router/types`)
- `.oxlintrc.json` - Oxlint rules (comprehensive linting with warnings → errors)
- `dprint.json` - Code formatting configuration
- `lint-staged.config.js` - Pre-commit formatting/linting
