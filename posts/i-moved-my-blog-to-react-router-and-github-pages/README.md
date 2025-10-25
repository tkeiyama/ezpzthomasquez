---
title: I Moved My Blog to React Router and GitHub Pages
description: Migrating to React Router on GitHub Pages from Next.js on Vercel.
date: 2025-10-25
---

Recently, I moved my blog to [GitHub Pages](https://docs.github.com/en/pages) from [Vercel](https://vercel.com/) and changed the core framework to [React Router](https://reactrouter.com/) from [Next.js](https://nextjs.org/).

## Why?

To be honest, there is no strong reason for this decision. React Router just became my favorite React framework now. So I gave it a try.
I was using Vercel because I built my blog with Next.js. But since I built it with React Router, I thought I could deploy my blog to a different platform. There are many hosting services today. The reason I chose GitHub Pages is that keeping everything in one platform seemed convenient.

## Deploying a React Router app to GitHub Pages

Deploying a React Router app with SSR mode is easy, but I needed to do some additional configuration for GitHub Pages.

### Pre-Rendering

> [Commit](https://github.com/tkeiyama/ezpzthomasquez/commit/26ec127049bf3d4d842519bfeca265e2523f052d)

React Router has the [pre-rendering](https://reactrouter.com/how-to/pre-rendering) feature. If you set the `prerender` option to true, pages in the build directory will be pre-rendered. But for dynamic routes, they will not be included automatically. So I needed to set it up manually.
The setup wasn't complicated. I just returned paths for the pages to pre-render.

### Basename for GitHub Pages

GitHub Pages uses the repository name as the basename. So in this blog, the basename is `ezpzthomasquez`. I needed to add some configuration.

#### vite.config.ts

> [Commit](https://github.com/tkeiyama/ezpzthomasquez/commit/cf51d6494b7bb2b55f0499b320a856e93fe509f2#diff-2ea9bf0146865c66033b16a35e404567017efb6dcea62aeb92f55a227db9f8c9R5)

I set base to `/ezpzthomasquez/` in production.

#### react-router.config.ts

> [Commit](https://github.com/tkeiyama/ezpzthomasquez/commit/3de73dc1caf8af9d52e6b4f7f4a6ab87074e2878)

I set basename to `/ezpzthomasquez/` in production.

#### Favicon

> [Commit](https://github.com/tkeiyama/ezpzthomasquez/commit/087266a515ef359512360b416ef0aa8f93791fbf#diff-4133eb55408b25b35b8e07c696a9dfc97b741c555d7407e8c86d0845e5eecc28R10)

I added `/ezpzthomasquez/` to the favicon path in production.
